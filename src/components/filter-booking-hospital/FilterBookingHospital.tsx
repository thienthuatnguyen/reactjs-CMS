import React, { useEffect, useState } from "react";
import "../filter-booking/FilterBooking.scss";
import { Button, FormControl, IconButton, InputLabel, MenuItem, Select } from "@material-ui/core";
import profileService from "../../services/profileService";
import ToastMessage from "../toast-message/ToastMessage";
import closeIcon from "../../assets/images/close.svg";
const CloseIcon = () => (<img src={closeIcon} alt="close-icon"></img>);

function FilterBookingHospital({ callBackParams }) {
  const [configToast, setToastConfig] = useState({ type: '', isOpen: false, message: '' });
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [formValues, setFormValues] = React.useState({
    keyword: '',
    province_id: '',
    district_id: '',
    radius: '',
    work_at_home: ''
  });

  const services = [
    {
      value: true,
      name: 'Khám tại nhà'
    },
    {
      value: false,
      name: 'Không khám tại nhà'
    }
  ]



  useEffect(() => {
    getProvince();
  }, []);


  function handleProvinceChange(item) {
    setFormValues(prevState => ({
      ...prevState,
      'province_id': item.target.value
    }));
    getDistrict(item.target.value);
  }
  function handleDistrictChange(item) {
    setFormValues(prevState => ({
      ...prevState,
      'district_id': item.target.value
    }));
  }
  function handleWorkAtHomeChange(item) {
    setFormValues(prevState => ({
      ...prevState,
      'work_at_home': item.target.value
    }));
  }
  function handleInputChange(event) {
    setFormValues(prevState => ({
      ...prevState,
      'keyword': event.target.value
    }));
  }

  function handleRadiusChange(event) {
    setFormValues(prevState => ({
      ...prevState,
      'radius': event.target.value
    }));
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





  function closeToast() {
    setToastConfig({ type: '', isOpen: false, message: '' });
  }


  const onSubmit = (data) => {
    callBackParams(data);
  };



  return (
    <React.Fragment>
      <ToastMessage isOpen={configToast.isOpen} closeCallback={closeToast} type={configToast.type} message={configToast.message}></ToastMessage>
      <div className="search-content-filter-booking">
        <div className="title">
          <span className="text">Tìm bệnh viện</span>
          <span className="line"></span>
        </div>

        <div className="form-search">
          <form className="search-form">
            <div className="wrapper-input">
              <div className={`form-group item-input`}>
                <input type="text" className="form-control bg-white" id="text-search" aria-describedby="text-search-helper-text"
                  value={formValues.keyword}
                  onChange={handleInputChange}
                  placeholder="Nhập từ khóa..." />
              </div>
              <div className={`form-group item-input`}>
                <FormControl className={'my-wrapper-select clear-button'}>
                  <Select
                    MenuProps={{
                      anchorOrigin: {
                        vertical: "bottom",
                        horizontal: "left"
                      },
                      getContentAnchorEl: null
                    }}
                    labelId="province_id-label"
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

                  {formValues.province_id && <IconButton onClick={() => {
                    setFormValues(prevState => ({
                      ...prevState,
                      'province_id': '',
                      'district_id': ''
                    }));
                  }} className="btn-clear" aria-label="delete">
                    <CloseIcon />
                  </IconButton>}
                </FormControl>

              </div>
              <div className={`form-group item-input`}>
                <FormControl className={'my-wrapper-select clear-button'}>
                  <Select
                    MenuProps={{
                      anchorOrigin: {
                        vertical: "bottom",
                        horizontal: "left"
                      },
                      getContentAnchorEl: null
                    }}
                    labelId="district-label"
                    value={formValues.district_id}
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

                  {formValues.district_id && <IconButton onClick={() => {
                    setFormValues(prevState => ({
                      ...prevState,
                      'district_id': ''
                    }));
                  }} className="btn-clear" aria-label="delete">
                    <CloseIcon />
                  </IconButton>}
                </FormControl>

              </div>

              <div className={`form-group item-input`}>
                <FormControl className={'my-wrapper-select clear-button'}>
                  <Select
                    MenuProps={{
                      anchorOrigin: {
                        vertical: "bottom",
                        horizontal: "left"
                      },
                      getContentAnchorEl: null
                    }}
                    labelId="district-label"
                    value={formValues.work_at_home}
                    onChange={handleWorkAtHomeChange}
                    displayEmpty
                    className={'my-select'}
                  >
                    <MenuItem value="" disabled>
                      Chọn dịch vụ khám
                    </MenuItem>
                    {services.map((el: any, index) => (
                      <MenuItem key={index} value={el.value}>{el.name}</MenuItem>
                    ))}
                  </Select>
                  {formValues.work_at_home !== '' && <IconButton onClick={() => {
                    setFormValues(prevState => ({
                      ...prevState,
                      'work_at_home': ''
                    }));
                  }} className="btn-clear" aria-label="delete">
                    <CloseIcon />
                  </IconButton>}
                </FormControl>

              </div>

            </div>
            <Button variant="contained" onClick={() => onSubmit(formValues)} color="primary" type="button" className="my-btn btn-blue btn-contained btn-search">
              Tìm Kiếm
            </Button>
          </form>
          <div className="wrapper-search-around">
            <form className="search-form">
              <div className={`form-group item-input`}>

                <InputLabel htmlFor="text-search-around" className="label-config">
                  <span>Tìm kiếm lân cận</span></InputLabel>
                <input type="text" className="form-control bg-white" id="text-search-around" aria-describedby="text-search-helper-text"
                  value={formValues.radius}
                  onChange={handleRadiusChange}
                  placeholder="Nhập từ khóa..."
                />
              </div>
              <Button onClick={() => onSubmit(formValues)} variant="contained" color="primary" type="button" className="my-btn btn-blue btn-contained btn-search">
                Tìm Kiếm
              </Button>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment >
  );
}

export default FilterBookingHospital;

