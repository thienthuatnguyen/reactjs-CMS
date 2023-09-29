import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import imgError from "../../assets/images/square-warning-validator.svg";
import profileService from "../../services/profileService";
import { useEffect, useState } from "react";
import React from "react";
import ToastMessage from "../toast-message/ToastMessage";


export function RevertCode() {
  const [provinces, setProvinces] = useState([]);
  const [configToast, setToastConfig] = useState({ type: '', isOpen: false, message: '' });
  const [formValues, setFormValues] = React.useState({
    name: '',
    gender: '',
    birthday: '',
    province_id: ''
  });
  const genders = [{name: 'Nam', value: 0}, {name: 'Nữ', value: 1}];
  useEffect(() => {
    getProvince();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => {
    console.log(data)
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

  function handleGenderChange(item) {
    setFormValues(prevState => ({
      ...prevState,
      'gender': item.target.value
    }));
  }
  function handleProvinceChange(item) {
    setFormValues(prevState => ({
      ...prevState,
      'province_id': item.target.value
    }));
  }
  return (
    <React.Fragment>
      <ToastMessage isOpen={configToast.isOpen} closeCallback={closeToast} type={configToast.type} message={configToast.message}></ToastMessage>
      <div className="form-revert-code">
        <div className="title">Tìm lại mã bệnh nhân</div>
        <form className="wrapper-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="items-inline">
            <div className={`form-group item-input required ${errors.name ? 'has-error' : ''}`}>
              <InputLabel htmlFor="name" className="label-config">
                <span>Nhập họ và tên (có dấu)</span></InputLabel>
              <input type="text" className="form-control bg-white" id="name" aria-describedby="name-helper-text"
                defaultValue={formValues.name}
                placeholder="Nhập họ và tên"
                {...register("name", {
                  required: true
                })}
              />
              <div className="form-control-feedback">
                <span className="arrow"></span>
                <img src={imgError} alt="error" />
                {errors.name && <span id="name-helper-text">Họ và tên là bắt buộc.</span>}
              </div>
            </div>
            <div className={`form-group item-input required ${errors.birthday ? 'has-error' : ''}`}>
              <InputLabel htmlFor="date" className="label-config"><span>Ngày tháng năm sinh</span></InputLabel>
              <TextField
                id="date"
                label="Birthday"
                type="date"
                defaultValue=""
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
          </div>
          <div className="items-inline">

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
                  value={formValues.gender}
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

            <div className={`form-group item-input required ${errors.province_id ? 'has-error' : ''}`}>
              <InputLabel className="label-config" id="province-label"><span>Tỉnh </span></InputLabel>
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
                  labelId="province-label"
                  value={formValues.province_id}
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
                {errors.province_id && <span id="province-helper-text">Tỉnh thành là bắt buộc.</span>}
              </div>
            </div>
          </div>
          <div className="button-submit-center">
            <Button variant="contained" color="primary" type="submit" className="my-btn btn-contained btn-blue-dash btn-search">
              Xác nhận
            </Button>
          </div>
        </form>
      </div>
    </React.Fragment>)
}
