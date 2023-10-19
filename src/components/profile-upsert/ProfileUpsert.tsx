import { Button, FormControl, IconButton, InputLabel, MenuItem, Select, Snackbar, TextField } from "@material-ui/core";
import "./ProfileUpsert.scss";
import { useForm } from "react-hook-form";
import imgError from "../../assets/images/square-warning-validator.svg";
import Stack from '@mui/material/Stack';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import React, { useEffect, useState } from "react";
import closeIcon from "../../assets/images/close.svg";
import profileService from "../../services/profileService";
import ToastMessage from "../toast-message/ToastMessage";
import { useNavigate } from "react-router-dom";

const CloseIcon = () => (<img src={closeIcon} alt="close-icon"></img>);

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
function ProfileUpsert({ isEdit, callBackCloseModal, profileInfo }) {
  const [open, setOpen] = React.useState(false);
  const [formValuesProfile, setFormValuesProfile] = React.useState({
    code_insurance: '',
    full_name: '',
    birthday: '',
    phone_number: '',
    gender: '',
    profession_id: '',
    province_id: '',
    district_id: '',
    ward_id: '',
    address: '',
    info_relative: '',
    reason: '',
    height: '',
    weight: '',
    medical_history: '',
    allergy: ''
  });
  const [configToast, setToastConfig] = useState({ type: '', isOpen: false, message: '' });
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [professions, setProfessions] = useState([]);

  const [wards, setWards] = useState([]);
  const genders = [{ name: 'Nam', value: 0 }, { name: 'Nữ', value: 1 }];
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  useEffect(() => {
    getProvince();
    getProfessions();
    if (isEdit) {
      setFormValuesProfile({
        code_insurance: profileInfo.code_insurance,
        full_name: profileInfo.full_name,
        birthday: profileInfo.birthday,
        phone_number: profileInfo.phone_number,
        gender: profileInfo.gender,
        profession_id: profileInfo.profession_id,
        province_id: profileInfo.province_id,
        district_id: profileInfo.district_id,
        ward_id: profileInfo.ward_id,
        address: profileInfo.address,
        info_relative: profileInfo.info_relative,
        reason: profileInfo.reason,
        height: profileInfo.height,
        weight: profileInfo.weight,
        medical_history: profileInfo.medical_history,
        allergy: profileInfo.allergy
      });
      getDistrict(profileInfo.province_id);
      getWard(profileInfo.district_id);
    }
  }, []);
  useEffect(() => {
    if (isEdit) {
      reset(formValuesProfile);
    }
  }, [formValuesProfile]);
  const onSubmitCreateProfile = (data) => {
    if (isEdit) {
      profileService.updateMedicalProfile(profileInfo.id, data).then((res) => {
        let body = res.data;
        if (body && body.error) {
          setToastConfig({ type: 'error', isOpen: true, message: body.message });
        } else {
          setToastConfig({ type: 'success', isOpen: true, message: 'Bạn đã cập nhật hồ sơ thành công!' });
          setOpen(false);
          handleCloseModal();
        }
      })
    } else {
      profileService.createMedicalProfile(data).then((res) => {
        let body = res.data;
        if (body && body.error) {
          setToastConfig({ type: 'error', isOpen: true, message: body.message });
        } else {
          setToastConfig({ type: 'success', isOpen: true, message: 'Bạn đã tạo hồ sơ thành công!' });
          setOpen(false);
          navigate('/');
        }
      })
    }

  };

  function handleGenderChange(item) {
    setFormValuesProfile(prevState => ({
      ...prevState,
      'gender': item.target.value
    }));
  }

  function handleProvinceChange(item) {
    setFormValuesProfile(prevState => ({
      ...prevState,
      'province_id': item.target.value
    }));
    getDistrict(item.target.value);
  }

  function handleDistrictChange(item) {
    setFormValuesProfile(prevState => ({
      ...prevState,
      'district_id': item.target.value
    }));
    getWard(item.target.value);
  }

  function handleProfessionChange(item) {
    setFormValuesProfile(prevState => ({
      ...prevState,
      'profession_id': item.target.value
    }));
  }

  function handleWardChange(item) {
    setFormValuesProfile(prevState => ({
      ...prevState,
      'ward_id': item.target.value
    }));
  }

  function handleCloseModal() {
    callBackCloseModal();
  }

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  function closeToast() {
    setToastConfig({ type: '', isOpen: false, message: '' });
  }
  function getProvince() {
    profileService.getProvince().then((res) => {
      let body = res.data;
      if (body && body.error) {
        setToastConfig({ type: 'error', isOpen: true, message: body.message });
      } else {
        setProvinces(body.data.provinces);
      }
    });
  }
  function getProfessions() {
    profileService.getProfessions().then((res) => {
      let body = res.data;
      if (body && body.error) {
        setToastConfig({ type: 'error', isOpen: true, message: body.message });
      } else {
        setProfessions(body.data.professions);
      }
    });
  }
  function getDistrict(id) {
    profileService.getDistrict(id).then((res) => {
      let body = res.data;
      if (body && body.error) {
        setToastConfig({ type: 'error', isOpen: true, message: body.message });
      } else {
        setDistricts(body.data.districts);
      }
    });
  }
  function getWard(id) {
    profileService.getWard(id).then((res) => {
      let body = res.data;
      if (body && body.error) {
        setToastConfig({ type: 'error', isOpen: true, message: body.message });
      } else {
        setWards(body.data.wards);
      }
    });
  }
  return (
    <React.Fragment>
      <ToastMessage isOpen={configToast.isOpen} closeCallback={closeToast} type={configToast.type} message={configToast.message}></ToastMessage>
      <div className="form-create-profile">
        {!isEdit && <div className="title">Nhập thông tin bệnh nhân</div>}
        {isEdit && <div className="head-modal">
          <h1 className="title">Sửa thông tin bệnh nhân</h1>
          <IconButton onClick={handleCloseModal} aria-label="close">
            <CloseIcon />
          </IconButton>
        </div>
        }

        {!isEdit && <div className="text-description">
          Vui lòng cung cấp thông tin chính xác để được phục vụ tốt nhất. Trong trường hợp cung cấp sai thông tin bệnh nhân và số điện thoại việc xác nhận cuộc hẹn sẽ không thành công trước khi đặt lịch khám.
        </div>}
        <form className="wrapper-form" onSubmit={handleSubmit(onSubmitCreateProfile)}>
          <div className="items-inline">


            <div className={`form-group item-input`}>
              <InputLabel htmlFor="code_insurance" className="label-config">
                <span>Mã bảo hiểm y tế</span></InputLabel>
              <input type="text" className="form-control bg-white" id="code_insurance" aria-describedby="code-insurance-helper-text"
                defaultValue={formValuesProfile.code_insurance}
                placeholder="Nhập mã bảo hiểm y tế"
                {...register("code_insurance", {
                  required: false
                })}
              />
            </div>
            <div className={`form-group item-input required ${errors.full_name ? 'has-error' : ''}`}>
              <InputLabel htmlFor="name" className="label-config">
                <span>Họ và tên (có dấu)</span></InputLabel>
              <input type="text" className="form-control bg-white" id="name" aria-describedby="name-helper-text"
                defaultValue={formValuesProfile.full_name}
                placeholder="Nhập họ và tên"
                {...register("full_name", {
                  required: true
                })}
              />
              <div className="form-control-feedback">
                <span className="arrow"></span>
                <img src={imgError} alt="error" />
                {errors.full_name && <span id="name-helper-text">Họ và tên là bắt buộc.</span>}
              </div>
            </div>

          </div>
          <div className="items-inline">

            <div className={`form-group item-input required ${errors.birthday ? 'has-error' : ''}`}>
              <InputLabel htmlFor="date" className="label-config"><span>Ngày sinh (ngày/tháng/năm)</span></InputLabel>
              <TextField
                id="date"
                label="Birthday"
                type="date"
                defaultValue={formValuesProfile.birthday}
                className="my-datetime-picker"
                InputLabelProps={{
                  shrink: false,
                }}
                {...register("birthday", {
                  required: true
                })}
              />
              <div className="form-control-feedback">
                <span className="arrow"></span>
                <img src={imgError} alt="error" />
                {errors.birthday && <span id="date-helper-text">Ngày tháng năm sinh là bắt buộc.</span>}
              </div>
            </div>
            <div className={`form-group item-input required ${errors.profession_id ? 'has-error' : ''}`}>

              <InputLabel id="profession-label" className="label-config">
                <span>Nghề nghiệp</span></InputLabel>
              <FormControl className={'my-wrapper-select'}>
                <Select
                  MenuProps={{
                    anchorOrigin: {
                      vertical: "bottom",
                      horizontal: "left"
                    },
                    getContentAnchorEl: null
                  }}
                  inputProps={register("profession_id", {
                    required: true
                  })}
                  labelId="profession-label"
                  value={formValuesProfile.profession_id}
                  onChange={handleProfessionChange}
                  displayEmpty
                  className={'my-select'}
                >
                  <MenuItem value="" disabled>
                    Chọn nghề nghiệp...
                  </MenuItem>
                  {professions.map((el: any, index) => (
                    <MenuItem key={index} value={el.id}>{el.title}</MenuItem>
                  ))}
                </Select>
              </FormControl>


              <div className="form-control-feedback">
                <span className="arrow"></span>
                <img src={imgError} alt="error" />
                {errors.profession_id && <span id="profession_id-helper-text">Nghề nghiệp là bắt buộc.</span>}
              </div>
            </div>

          </div>
          <div className="items-inline">
            <div className="items-inline-child">
              <div className={`form-group item-input required ${errors.phone_number ? 'has-error' : ''}`}>
                <InputLabel htmlFor="phone_number" className="label-config">
                  <span>Số điện thoại</span></InputLabel>
                <input type="tel" className="form-control bg-white" id="phone_number" aria-describedby="phone-number-helper-text"
                  defaultValue={formValuesProfile.phone_number}
                  placeholder="Phone number"
                  {...register("phone_number", {
                    required: true
                  })}
                />
                <div className="form-control-feedback">
                  <span className="arrow"></span>
                  <img src={imgError} alt="error" />
                  {errors.phone_number && <span id="phone-number-helper-text">Số điện thoại là bắt buộc.</span>}
                </div>
              </div>
              <div className={`form-group item-input required ${errors.gender ? 'has-error' : ''}`}>
                <InputLabel id="gender-label" className="label-config"><span>Giới tính</span></InputLabel>
                <FormControl className={'my-wrapper-select'}>
                  <Select
                    MenuProps={{
                      anchorOrigin: {
                        vertical: "bottom",
                        horizontal: "left"
                      },
                      getContentAnchorEl: null
                    }}
                    inputProps={register("gender", {
                      required: true
                    })}
                    labelId="gender-label"
                    value={formValuesProfile.gender}
                    onChange={handleGenderChange}
                    displayEmpty
                    className={'my-select'}
                  >
                    <MenuItem value="" disabled>
                      Chọn giới tính...
                    </MenuItem>
                    {genders.map((el: any, index) => (
                      <MenuItem key={index} value={el.value}>{el.name}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <div className="form-control-feedback">
                  <span className="arrow"></span>
                  <img src={imgError} alt="error" />
                  {errors.gender && <span id="gender-helper-text">Giới tính là bắt buộc.</span>}
                </div>
              </div>
            </div>
            <div className="items-inline-child">

              <div className={`form-group item-input item-unit`}>
                <InputLabel htmlFor="height" className="label-config">
                  <span>Chiều cao</span></InputLabel>
                <span className="unit">cm</span>
                <input type="number" className="form-control bg-white" id="height" aria-describedby="height-helper-text"
                  defaultValue={formValuesProfile.height}
                  placeholder="Nhập chiều cao"
                  {...register("height", {
                    required: false,
                    valueAsNumber: true
                  })}
                />

              </div>
              <div className={`form-group item-input item-unit`}>
                <InputLabel htmlFor="weight" className="label-config">
                  <span>Cân nặng</span></InputLabel>
                <span className="unit">cm</span>
                <input type="number" className="form-control bg-white" id="weight" aria-describedby="weight-helper-text"
                  defaultValue={formValuesProfile.weight}
                  placeholder="Nhập cân nặng"
                  {...register("weight", {
                    required: false,
                    valueAsNumber: true
                  })}
                />

              </div>
            </div>


          </div>

          <div className="items-inline">
            <div className="items-inline-child">
              <div className={`form-group item-input required ${errors.province_id ? 'has-error' : ''}`}>
                <InputLabel id="province_id-label" className="label-config"><span>Tỉnh/thành</span></InputLabel>
                <FormControl className={'my-wrapper-select'}>
                  <Select
                    MenuProps={{
                      anchorOrigin: {
                        vertical: "bottom",
                        horizontal: "left"
                      },
                      getContentAnchorEl: null
                    }}
                    inputProps={register("province_id", {
                      required: true
                    })}
                    labelId="province_id-label"
                    value={formValuesProfile.province_id}
                    onChange={handleProvinceChange}
                    displayEmpty
                    className={'my-select'}
                  >
                    <MenuItem value="" disabled>
                      Chọn tỉnh thành...
                    </MenuItem>
                    {provinces.map((el: any, index) => (
                      <MenuItem key={index} value={el.id}>{el.name}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <div className="form-control-feedback">
                  <span className="arrow"></span>
                  <img src={imgError} alt="error" />
                  {errors.province_id && <span id="province_id-helper-text">Tỉnh/thành là bắt buộc.</span>}
                </div>
              </div>

              <div className={`form-group item-input required ${errors.district_id ? 'has-error' : ''}`}>
                <InputLabel className="label-config" id="district-label"><span>Quận/huyện </span></InputLabel>
                <FormControl className={'my-wrapper-select'}>
                  <Select
                    MenuProps={{
                      anchorOrigin: {
                        vertical: "bottom",
                        horizontal: "left"
                      },
                      getContentAnchorEl: null
                    }}
                    inputProps={register("district_id", {
                      required: true
                    })}
                    labelId="district-label"
                    value={formValuesProfile.district_id}
                    onChange={handleDistrictChange}
                    displayEmpty
                    className={'my-select'}
                  >
                    <MenuItem value="" disabled>
                      Chọn quận/huyện...
                    </MenuItem>
                    {districts.map((el: any, index) => (
                      <MenuItem key={index} value={el.id}>{el.name}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <div className="form-control-feedback">
                  <span className="arrow"></span>
                  <img src={imgError} alt="error" />
                  {errors.district_id && <span id="district-helper-text">Quận/huyện là bắt buộc.</span>}
                </div>
              </div>
            </div>
            <div className="items-inline-child">
              <div className={`form-group item-input required ${errors.ward_id ? 'has-error' : ''}`}>
                <InputLabel id="ward-label" className="label-config"><span>Phường/xã</span></InputLabel>
                <FormControl className={'my-wrapper-select'}>
                  <Select
                    MenuProps={{
                      anchorOrigin: {
                        vertical: "bottom",
                        horizontal: "left"
                      },
                      getContentAnchorEl: null
                    }}
                    inputProps={register("ward_id", {
                      required: true
                    })}
                    labelId="ward-label"
                    value={formValuesProfile.ward_id}
                    onChange={handleWardChange}
                    displayEmpty
                    className={'my-select'}
                  >
                    <MenuItem value="" disabled>
                      Chọn phường/xã...
                    </MenuItem>
                    {wards.map((el: any, index) => (
                      <MenuItem key={index} value={el.id}>{el.name}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <div className="form-control-feedback">
                  <span className="arrow"></span>
                  <img src={imgError} alt="error" />
                  {errors.ward_id && <span id="ward-helper-text">Phường/xã là bắt buộc.</span>}
                </div>
              </div>

              <div className={`form-group item-input required ${errors.address ? 'has-error' : ''}`}>
                <InputLabel htmlFor="address" className="label-config">
                  <span>Địa chỉ</span></InputLabel>
                <input type="text" className="form-control bg-white" id="address" aria-describedby="address-helper-text"
                  defaultValue={formValuesProfile.address}
                  placeholder="Nhập địa chỉ"
                  {...register("address", {
                    required: true
                  })}
                />
                <div className="form-control-feedback">
                  <span className="arrow"></span>
                  <img src={imgError} alt="error" />
                  {errors.address && <span id="address-helper-text">Địa chỉ là bắt buộc.</span>}
                </div>
              </div>
            </div>
          </div>

          <div className="items-inline">

            <div className={`form-group item-input required ${errors.info_relative ? 'has-error' : ''}`}>
              <InputLabel htmlFor="info_relative" className="label-config">
                <span>Người thân(Họ tên, số điện thoại, địa chỉ...)</span></InputLabel>
              <textarea rows={3} className="form-control bg-white" id="info_relative" aria-describedby="info_relative-helper-text"
                defaultValue={formValuesProfile.info_relative}
                placeholder="Nhập thông tin người thân"
                {...register("info_relative", {
                  required: true
                })}
              />
              <div className="form-control-feedback">
                <span className="arrow"></span>
                <img src={imgError} alt="error" />
                {errors.info_relative && <span id="info_relative-helper-text">Thông tin người thân là bắt buộc.</span>}
              </div>
            </div>

            <div className={`form-group item-input`}>
              <InputLabel htmlFor="reason" className="label-config">
                <span>Lý do khám và triệu trứng</span></InputLabel>
              <textarea rows={3} className="form-control bg-white" id="reason" aria-describedby="reason-helper-text"
                defaultValue={formValuesProfile.reason}
                placeholder="Nhập lý do khám, triệu trứng..."
                {...register("reason", {
                  required: false
                })}
              />

            </div>
          </div>
          <div className="items-inline">



            <div className={`form-group item-input`}>
              <InputLabel htmlFor="history" className="label-config">
                <span>Tiểu sử bệnh lý nền</span></InputLabel>
              <textarea rows={3} className="form-control bg-white" id="history" aria-describedby="history-helper-text"
                defaultValue={formValuesProfile.medical_history}
                placeholder="Nhập tiểu sử bệnh lý..."
                {...register("medical_history", {
                  required: false
                })}
              />

            </div>
            <div className={`form-group item-input`}>
              <InputLabel htmlFor="allergy" className="label-config">
                <span>Dị ứng</span></InputLabel>
              <textarea rows={3} className="form-control bg-white" id="allergy" aria-describedby="allergy-helper-text"
                defaultValue={formValuesProfile.allergy}
                placeholder="Nhập các dị ứng..."
                {...register("allergy", {
                  required: false
                })}
              />

            </div>
          </div>



          {!isEdit && <div className="button-submit-center">
            <Button variant="contained" color="primary" type="submit" className="my-btn btn-contained btn-blue-dash btn-search">
              Xác nhận
            </Button>
          </div>}

          {isEdit && <div className="button-submit-right">
            <Button onClick={() => handleCloseModal()} variant="outlined" color="primary" type="button" className="my-btn btn-outlined btn-black">
              Hủy
            </Button>
            <Button variant="contained" color="primary" type="submit" className="my-btn btn-contained btn-blue-dash">
              Lưu
            </Button>
          </div>
          }
        </form>

        <Stack spacing={2} sx={{ width: '100%' }}>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
              Hồ sơ của bạn đã được tạo thành công !
            </Alert>
          </Snackbar>
        </Stack>
      </div>
    </React.Fragment>
  );
}

export default ProfileUpsert;

