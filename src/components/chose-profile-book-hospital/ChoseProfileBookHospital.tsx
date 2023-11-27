import { Button, FormControl, InputLabel, MenuItem, Select, TextField, createStyles, makeStyles } from "@material-ui/core";
import imgError from "../../assets/images/square-warning-validator.svg";
import profileService from "../../services/profileService";
import { useEffect, useState } from "react";
import React from "react";
import ToastMessage from "../toast-message/ToastMessage";
import { connect } from "react-redux";
import { setDepartmentId, setDoctorId, setDoctorName, setHospitalId, setProfileId } from "../../actions/actions";
import { useNavigate } from "react-router-dom";
import hopitalService from "../../services/hospitalService";

const useStyles = makeStyles(() =>
  createStyles({
    boxInfoBookingConfirm: {
      backgroundColor: '#c7e5f5',
      padding: '20px',
      marginBottom: '15px'
  }
  }),

);

function ChoseProfileBookHospital(props: { hospitalName, profileIdProp, hospitalIdProp, doctorIdProp, callBackCloseModal, callBackCorfimModal, setProfileIdProp, setHospitalIdProp, setDoctorIdProp, setDepartmentIdProp, setDoctorNameProp }) {
  const [profiles, setProfiles] = useState([]);
  const [departments, setDepartments] = useState([]);

  const [configToast, setToastConfig] = useState({ type: '', isOpen: false, message: '' });
  const [error, setError] = useState(false);
  const [errorDepartment, setErrorDepartment] = useState(false);

  const classes = useStyles();
  const [formValues, setFormValues] = React.useState({
    profile_id: '',
    department_id: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (props.profileIdProp) {
      setFormValues(prevState => ({
        ...prevState,
        'profile_id': props.profileIdProp
      }));
    }
    
    getProfiles();
    getDepartments();
  }, []);

  


  const onSubmit = (data) => {
    if (!data.profile_id) {
      setError(true);
    }
    if (!data.department_id) {
      setErrorDepartment(true);
    }
   
    if (data.profile_id && data.department_id) {
      props.setProfileIdProp(data.profile_id);
      props.setDepartmentIdProp(data.department_id);
      props.setDoctorIdProp(null);
      props.setDoctorNameProp('');
      props.callBackCorfimModal(data);
    }

  };

  function closeToast() {
    setToastConfig({ type: '', isOpen: false, message: '' });
  }

  function getDepartments() {
    hopitalService.getDepartments({hospital_id: props.hospitalIdProp}).then((res) => {
      let body = res.data;
      if (body && body.error) {
        setToastConfig({ type: 'error', isOpen: true, message: body.message });
      } else {
        setDepartments(body.data.departments);
      }
    });
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

  function handleDepartmentChange(item) {
    setErrorDepartment(false);
    setFormValues(prevState => ({
      ...prevState,
      'department_id': item.target.value
    }));
  }


  function handleCloseModal() {
    props.callBackCloseModal();
  }

  function getProfileName() {
    if(formValues.profile_id && profiles.length) {
      let array: any = profiles.filter((el: any) => {return el.id === formValues.profile_id});
      return array[0].full_name + ' (mã hồ sơ: ' + array[0].code + ')';
    } else {
      return null;
    }
   
  }

  function getDepartmentName() {
    if(formValues.department_id && departments.length) {
      let array: any = departments.filter((el: any) => {return el.id === formValues.department_id});
      return array[0].title;
    } else {
      return null;
    }
   
  }

  

  return (
    <React.Fragment>
      <ToastMessage isOpen={configToast.isOpen} closeCallback={closeToast} type={configToast.type} message={configToast.message}></ToastMessage>

      <form className="wrapper-form">
        {profiles.length <= 0 &&
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
        {profiles.length > 0 && <React.Fragment>
          {formValues.profile_id && !formValues.department_id  && <div className={classes.boxInfoBookingConfirm}>Bạn đã chọn đặt khám tại {props.hospitalName} và hồ sơ {getProfileName()}. Vui lòng chọn khoa khám.</div>}
          {!formValues.profile_id && formValues.department_id  && <div className={classes.boxInfoBookingConfirm}>Bạn đã chọn đặt khám tại {props.hospitalName}, khoa {getDepartmentName()}. Vui lòng chọn hồ sơ khám.</div>}

          {formValues.profile_id  && formValues.department_id && <div className={classes.boxInfoBookingConfirm}>Bạn đã chọn đặt khám tại {props.hospitalName}, khoa {getDepartmentName()} và hồ sơ {getProfileName()}.</div>}

          {!formValues.profile_id && !formValues.department_id && <div className={classes.boxInfoBookingConfirm}>Bạn đã chọn đặt khám tại {props.hospitalName}. Vui lòng chọn hồ sơ đặt khám và khoa khám.</div>}

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

          <div className={`form-group item-input ${errorDepartment ? 'has-error' : ''}`}>
            <InputLabel id="profile-label" className="label-config"><span>Chọn khoa</span></InputLabel>
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
                value={formValues.department_id}
                onChange={handleDepartmentChange}
                displayEmpty
                className={'my-select'}

              >
                <MenuItem value="" disabled>
                  Chọn khoa...
                </MenuItem>
                {departments.map((el: any, index) => (
                  <MenuItem key={index} value={el.id}>{el.title}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <div className="form-control-feedback">
              <span className="arrow"></span>
              <img src={imgError} alt="error" />
              {errorDepartment && <span id="profile-helper-text">Khoa là bắt buộc.</span>}
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
  profileIdProp: state.profileId,
  hospitalIdProp: state.hospitalId,
  doctorIdProp: state.doctorId
})

const mapDispatchToProps = (dispatch: any) => ({
  setProfileIdProp: (data: any) => dispatch(setProfileId(data)),
  setHospitalIdProp: (data: any) => dispatch(setHospitalId(data)),
  setDoctorIdProp: (data: any) => dispatch(setDoctorId(data)),
  setDepartmentIdProp: (data: any) => dispatch(setDepartmentId(data)),
  setDoctorNameProp: (data: any) => dispatch(setDoctorName(data)),
})


export default connect(mapStateToProps, mapDispatchToProps)(ChoseProfileBookHospital);
