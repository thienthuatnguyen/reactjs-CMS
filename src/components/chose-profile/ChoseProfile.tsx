import { Button, FormControl, InputLabel, MenuItem, Select, TextField, createStyles, makeStyles } from "@material-ui/core";
import imgError from "../../assets/images/square-warning-validator.svg";
import profileService from "../../services/profileService";
import { useEffect, useState } from "react";
import React from "react";
import ToastMessage from "../toast-message/ToastMessage";
import { connect } from "react-redux";
import { setHospitalId, setProfileId } from "../../actions/actions";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles(() =>
  createStyles({
    boxInfoBookingConfirm: {
      backgroundColor: '#c7e5f5',
      padding: '20px',
      marginBottom: '15px'
  }
  }),

);

function ChoseProfile({ profileId, hospitalId, callBackCloseModal, callBackCorfimModal }) {
  const [profiles, setProfiles] = useState([]);
  const [configToast, setToastConfig] = useState({ type: '', isOpen: false, message: '' });
  const [error, setError] = useState(false);
  const [errorHospital, setErrorHospital] = useState(false);
  const classes = useStyles();
  const [formValues, setFormValues] = React.useState({
    profile_id: '',
    hospital_id: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (profileId) {
      setFormValues(prevState => ({
        ...prevState,
        'profile_id': profileId
      }));
    }
    if (hospitalId) {
      setFormValues(prevState => ({
        ...prevState,
        'hospital_id': hospitalId
      }));
    }
    getProfiles();
  }, []);


  const onSubmit = (data) => {
    if (!data.profile_id) {
      setError(true);
    }
    if (!data.hospital_id) {
      setErrorHospital(true);
    }
    if (data.profile_id && data.hospital_id) {
      setProfileId(data.profile_id);
      setHospitalId(data.hospital_id);
      callBackCorfimModal(data);
    }

  };

  function closeToast() {
    setToastConfig({ type: '', isOpen: false, message: '' });
  }
  function getProfiles() {
    profileService.getListMedicalProfile({}).then(
      (res) => {
        let body = res.data;
        if ((body.error === false) && body.data) {
          setProfiles(body.data.profiles);
        }
      }
    )
  }


  function handleProfileChange(item) {
    setError(false);
    setFormValues(prevState => ({
      ...prevState,
      'profile_id': item.target.value
    }));
  }

  function handleHospitalChange(item) {
    setError(false);
    setFormValues(prevState => ({
      ...prevState,
      'hospital_id': item.target.value
    }));
  }
  function handleCloseModal() {
    callBackCloseModal();
  }

  function getProfileName() {
    if(formValues.profile_id && profiles.length) {
      let array: any = profiles.filter((el: any) => {return el.id == formValues.profile_id});
      return array[0].full_name + ' (mã hồ sơ: ' + array[0].code + ')';
    } else {
      return null;
    }
   
  }

  return (
    <React.Fragment>
      <ToastMessage isOpen={configToast.isOpen} closeCallback={closeToast} type={configToast.type} message={configToast.message}></ToastMessage>

      <form className="wrapper-form">
        {profiles.length < 0 &&
          <React.Fragment>
            <p>Bạn chưa có hồ sơ nào, vui lòng tạo hồ sơ để đặt khám !</p>
            <div className="button-submit-right">
              <Button onClick={() => handleCloseModal()} variant="outlined" color="primary" type="button" className="my-btn btn-outlined btn-black">
                Hủy
              </Button>
              <Button onClick={() => navigate('/tao-ho-so')} variant="contained" color="primary" type="button" className="my-btn btn-contained btn-blue-dash">
                Tạo hồ sơ
              </Button>
            </div>
          </React.Fragment>}
        {profiles.length >= 0 && <React.Fragment>
          {formValues.profile_id && !formValues.hospital_id && <div className={classes.boxInfoBookingConfirm}>Bạn đã chọn hồ sơ {getProfileName()}. Vui lòng chọn bệnh viện có bác sĩ này đang làm việc.</div>}
          {!formValues.profile_id && formValues.hospital_id && <div className={classes.boxInfoBookingConfirm}>Bạn đã chọn bệnh viện 115. Vui lòng chọn hồ sơ đặt khám.</div>}
          {formValues.profile_id && formValues.hospital_id && <div className={classes.boxInfoBookingConfirm}>Bạn đã chọn hồ sơ {getProfileName()} và bệnh viện 115. Nếu bạn muốn thay đổi hồ sơ hoặc bệnh viện, bạn có thể chọn lại hồ sơ hoặc bệnh viện có bác sĩ này đang làm việc.</div>}

          <div className={`form-group item-input ${error ? 'has-error' : ''}`}>
            <InputLabel id="profile-label" className="label-config"><span>Chọn hồ sơ đặt khám</span></InputLabel>
            <FormControl className={'my-wrapper-select'}>
              <Select
                MenuProps={{
                  anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "left"
                  },
                  getContentAnchorEl: null
                }}

                labelId="profile-label"
                value={formValues.profile_id}
                onChange={handleProfileChange}
                displayEmpty
                className={'my-select'}

              >
                <MenuItem value="" disabled>
                  Chọn hồ sơ...
                </MenuItem>
                {profiles.map((el: any, index) => (
                  <MenuItem key={index} value={el.id}>{el.full_name} - {el.code}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <div className="form-control-feedback">
              <span className="arrow"></span>
              <img src={imgError} alt="error" />
              {error && <span id="profile-helper-text">Hồ sơ là bắt buộc.</span>}
            </div>
          </div>
          <div className={`form-group item-input ${errorHospital ? 'has-error' : ''}`}>
            <InputLabel id="profile-label" className="label-config"><span>Chọn bệnh viện đặt khám</span></InputLabel>
            <FormControl className={'my-wrapper-select'}>
              <Select
                MenuProps={{
                  anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "left"
                  },
                  getContentAnchorEl: null
                }}

                labelId="profile-label"
                value={formValues.hospital_id}
                onChange={handleHospitalChange}
                displayEmpty
                className={'my-select'}

              >
                <MenuItem value="" disabled>
                  Chọn bệnh viện...
                </MenuItem>
                {profiles.map((el: any, index) => (
                  <MenuItem key={index} value={el.id}>{el.full_name} - {el.code}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <div className="form-control-feedback">
              <span className="arrow"></span>
              <img src={imgError} alt="error" />
              {errorHospital && <span id="profile-helper-text">Bệnh viện là bắt buộc.</span>}
            </div>
          </div>
          <div className="button-submit-right">
            <Button onClick={() => handleCloseModal()} variant="outlined" color="primary" type="button" className="my-btn btn-outlined btn-black">
              Hủy
            </Button>
            <Button onClick={() => onSubmit(formValues)} variant="contained" color="primary" type="button" className="my-btn btn-contained btn-blue-dash">
              Xác nhận
            </Button>
          </div>
        </React.Fragment>}
      </form>
    </React.Fragment>)
}

const mapStateToProps = (state: any) => ({
  profileId: state.profileId,
  hospitalId: state.hospitalId
})

const mapDispatchToProps = (dispatch: any) => ({
  setProfileId: (data: any) => dispatch(setProfileId(data)),
  setHospitalId: (data: any) => dispatch(setHospitalId(data)),
})


export default connect(mapStateToProps, mapDispatchToProps)(ChoseProfile);
