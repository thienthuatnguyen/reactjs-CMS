import "./InvoicePage.scss";
import { useEffect, useState } from "react";
import profileService from "../../services/profileService";
import React from "react";
import ToastMessage from "../../components/toast-message/ToastMessage";
import { setDepartmentId, setDoctorId, setHospitalId, setProfileId } from "../../actions/actions";
import { connect } from "react-redux";
import { Button, Checkbox, FormControl, FormControlLabel, FormLabel, MenuItem, Radio, RadioGroup, RadioProps, Select, makeStyles } from "@material-ui/core";
import clsx from 'clsx';
import hopitalService from "../../services/hospitalService";
import { useNavigate } from "react-router-dom";
import paymentService from "../../services/paymentService";


const useStyles = makeStyles({
  root: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  icon: {
    borderRadius: '50%',
    width: 16,
    height: 16,
    boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: '#f5f8fa',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '$root.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2,
    },
    'input:hover ~ &': {
      backgroundColor: '#ebf1f5',
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
      background: 'rgba(206,217,224,.5)',
    },
  },
  checkedIcon: {
    backgroundColor: '#137cbd',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
      display: 'block',
      width: 16,
      height: 16,
      backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
      content: '""',
    },
    'input:hover ~ &': {
      backgroundColor: '#106ba3',
    },
  },
});
function StyledRadio(props: RadioProps) {
  const classes = useStyles();

  return (
    <Radio
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      {...props}
    />
  );
}

function InvoicePage(props: { profileIdProp, hospitalIdProp, doctorIdProp, departmentIdProp, dateBookedProp, timeBookedProp, doctorNameProp, setProfileIdProp, setHospitalIdProp, setDoctorIdProp, setDepartmentIdProp }) {
  const [profileInfo, setProfileInfo] = React.useState({
    full_name: '',
    birthday: '',
    code: '',
    phone_number: '',
    address: '',
    id: '',
    gender: '',
    reason: '',
    medical_history: '',
    allergy: ''

  });
  const [configToast, setToastConfig] = useState({ type: '', isOpen: false, message: '' });
  const [medicalServices, setMedicalServices] = useState([]);
  const [medicalService, setMedicalService] = useState(1);
  const [methods, setMethods] = useState<any>();
  const [methodType, setMethodType] = React.useState<any>(null);
  const [confirm, setConfirm] = useState(false);

  const [fee, setFee] = useState<any>({ systemFee: 0, fee: 0, total: 0 });
  const [hospitals, setHospitals] = useState([]);
  const [departments, setDepartments] = useState([]);

  const navigate = useNavigate();


  useEffect(() => {
    if (!props.departmentIdProp && !props.hospitalIdProp) {
      navigate('/');
    }
    if (!props.doctorIdProp && !props.hospitalIdProp) {
      navigate('/');
    }
    getProfile();
    getFee();
    getMedicalService();
    getPaymentMethods();
    getHospitals();
    getDepartments();
  }, []);

  useEffect(() => {
    getFee();
  }, [medicalService]);


  function getFee() {
    let params: any;
    if (props.departmentIdProp) {
      params = { department_id: props.departmentIdProp, hospital_id: props.hospitalIdProp, service_id: medicalService }
    } else {
      params = { doctor_id: props.doctorIdProp, hospital_id: props.hospitalIdProp, service_id: medicalService }
    }
    hopitalService.callServiceFee(params).then(
      (res) => {
        let body = res.data;
        if (body && body.error) {
          setToastConfig({ type: 'error', isOpen: true, message: body.message });
        } else {
          setFee(body.data);
        }
      }
    )
  }

  function getPaymentMethods() {

    paymentService.getPayment().then(
      (res) => {
        let body = res.data;
        if (body && body.error) {
          setToastConfig({ type: 'error', isOpen: true, message: body.message });
        } else {
          setMethods(body.data.paymentMethods)
        }
      }
    )
  }

  function getMedicalService() {
    hopitalService.getMedicalService().then(
      (res) => {
        let body = res.data;
        if (body && body.error) {
          setToastConfig({ type: 'error', isOpen: true, message: body.message });
        } else {
          setMedicalServices(body.data.medicalServices);
          setMedicalService(body.data.medicalServices[0].id)
        }
      }
    )
  }

  function formatNumber(num) {
    if (num) {
      return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    } else {
      return '0';
    }
  }

  function getProfile() {
    profileService.findMedicalProfile(props.profileIdProp).then(
      (res) => {
        let body = res.data;
        if (body && body.error) {
          setToastConfig({ type: 'error', isOpen: true, message: body.message });
        } else {
          setProfileInfo(body.data.profile);
        }
      }
    )
  }

  function closeToast() {
    setToastConfig({ type: '', isOpen: false, message: '' });
  }

  function handleServiceChange(item) {
    setMedicalService(item.target.value);
  }


  const handleChangeRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMethodType(Number((event.target as HTMLInputElement).value));
  };

  function handleChangeCheckbox() {
    setConfirm(!confirm);
  }

  function confirmBooking() {
    let params: any;
    if (props.departmentIdProp && props.hospitalIdProp) {
      params = {
        "hospital_id": props.hospitalIdProp,
        "profile_id": props.profileIdProp,
        "department_id": props.departmentIdProp,
        "date_book": props.dateBookedProp,
        "time_book": props.timeBookedProp,
        "service_id": medicalService,
        "payment_method_id": methodType
      }
    } else {
      params = {
        "hospital_id": props.hospitalIdProp,
        "doctor_id": props.doctorIdProp,
        "profile_id": props.profileIdProp,
        "date_book": props.dateBookedProp,
        "time_book": props.timeBookedProp,
        "service_id": medicalService,
        "payment_method_id": methodType
      }
    }
    hopitalService.booking(params).then(
      (res) => {
        let body = res.data;
        if (body && body.error) {
          setToastConfig({ type: 'error', isOpen: true, message: body.message });
        } else {
          setToastConfig({ type: 'success', isOpen: true, message: 'Bạn đã đặt khám thành công!' });
          console.log(body.data)
        }
      }
    )
  }

  function getHospitals() {
    hopitalService.getHospitals({ doctor_id: props.doctorIdProp }).then(
      (res) => {
        let body = res.data;
        if ((body.error === false) && body.data) {
          setHospitals(body.data.hospitals);
        }
      }
    )
  }

  function getHospitalName() {
    if (props.hospitalIdProp) {
      let array: any = hospitals.filter((el: any) => { return el.id == props.hospitalIdProp });
      return array[0]?.title;
    } else {
      return null;
    }

  }

  function getDepartmentName() {
    if (props.departmentIdProp) {
      let array: any = departments.filter((el: any) => { return el.id === props.departmentIdProp });
      return array[0].title;
    } else {
      return null;
    }

  }
  function getDepartments() {
    hopitalService.getDepartments({ hospital_id: props.hospitalIdProp }).then((res) => {
      let body = res.data;
      if (body && body.error) {
        setToastConfig({ type: 'error', isOpen: true, message: body.message });
      } else {
        setDepartments(body.data.departments);
      }
    });
  }

  return (
    <React.Fragment>
      <ToastMessage isOpen={configToast.isOpen} closeCallback={closeToast} type={configToast.type} message={configToast.message}></ToastMessage>

      <div className="wrapper-invoice-page">
        <div className="container-app">
          <h1 className="title">Thanh toán</h1>
          <div className="wrapper-content">
            <div className="left-content">
              <div className="box-info">
                <div className="box-title">Thông tin bệnh nhân</div>
                <div className="box-profile">
                  <div className="top-info">
                    <div className="name">{profileInfo.full_name}</div>
                  </div>
                  <div className="content-info">
                    <div className="row-content-info">
                      <div className="col-content-info birthday">Ngày sinh:</div>
                      <div className="col-content-info">{profileInfo.birthday}</div>
                    </div>
                    <div className="row-content-info">
                      <div className="col-content-info phone">Số điện thoại:</div>
                      <div className="col-content-info">{profileInfo.phone_number}</div>
                    </div>
                    <div className="row-content-info">
                      <div className="col-content-info address">Địa chỉ:</div>
                      <div className="col-content-info">{profileInfo.address}</div>
                    </div>
                    <div className="row-content-info">
                      <div className="col-content-info sex">Giới tính:</div>
                      <div className="col-content-info">{(profileInfo.gender == '0') ? 'Nam' : 'Nữ'}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="info-invoice">
                <h2 className="title">Thông tin thanh toán</h2>
                <div className="department-info">
                  {/* <div className="row-info">
                    <div className="col-item">Chuyên khoa</div>
                    <div className="col-item upercase">NỘI CƠ XƯƠNG KHỚP</div>
                  </div> */}
                  <div className="row-info">
                    <div className="col-item">Dịch vụ</div>
                    <div className="col-item upercase">
                      <FormControl className={'my-wrapper-select'}>
                        <Select
                          MenuProps={{
                            anchorOrigin: {
                              vertical: "bottom",
                              horizontal: "left"
                            },
                            getContentAnchorEl: null
                          }}

                          labelId="gender-label"
                          value={medicalService}
                          onChange={handleServiceChange}
                          displayEmpty
                          className={'my-select'}
                        >
                          {medicalServices.map((el: any, index) => (
                            <MenuItem key={index} value={el.id}>{el.title}</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                  <div className="row-info">
                    <div className="col-item">Tiền khám</div>
                    <div className="col-item bold">{formatNumber(fee.systemFee)} VNĐ</div>
                  </div>
                </div>
                <div className="fee-plus">
                  <div className="row-info">
                    <div className="col-item">Tổng tiền khám:</div>
                    <div className="col-item bold blue">{formatNumber(fee.systemFee)} VNĐ</div>
                  </div>
                  <div className="row-info">
                    <div className="col-item">Phí tiện ích:</div>
                    <div className="col-item bold blue">{formatNumber(fee.fee)} VNĐ</div>
                  </div>
                  <div className="row-info">
                    <div className="col-item bold">Tổng cộng:</div>
                    <div className="col-item bold blue">{formatNumber(fee.total)} VNĐ</div>
                  </div>
                </div>
                <div className="check-confirm hide-mobile">
                  <FormControlLabel className="my-checkbox" control={<Checkbox onChange={handleChangeCheckbox} checked={confirm} />} label="Tôi đồng ý việc thanh toán phí tiện ích và phí xử lý giao dịch nếu có sử dụng dịch vụ đăng ký khám bệnh trực tuyến tại bệnh viện Đại Học Y Dược" />
                </div>
              </div>

            </div>
            <div className="right-content">
              <div className="box-info">
                <div className="box-title">Chọn phương thức thanh toán</div>
                <div className="radio-group">
                  <FormControl component="fieldset">
                    <RadioGroup value={methodType} onChange={handleChangeRadio} aria-label="method" name="paymentMethod">
                      {methods && methods.map((el: any, index) => (
                        <div key={index} className="wrapper-method">
                          <div className="left-method">
                            <FormControlLabel value={el.id} control={<StyledRadio />} label={el.title} />
                            <div className="description">
                              {el.description}
                            </div>
                          </div>
                          <img src={el.logo} alt={el.title}></img>

                        </div>
                      ))}
                    </RadioGroup>
                  </FormControl>
                </div>
              </div>

              <div className="check-confirm display-mobile">
                <FormControlLabel className="my-checkbox" control={<Checkbox onChange={handleChangeCheckbox} checked={confirm} />} label="Tôi đồng ý việc thanh toán phí tiện ích và phí xử lý giao dịch nếu có sử dụng dịch vụ đăng ký khám bệnh trực tuyến tại bệnh viện Đại Học Y Dược" />
              </div>

              <div className="info-invoice info-booking">
                <h2 className="title">Thông tin đặt khám</h2>
                <div className="content-info-booked">

                  <div className="row-content">
                    <div className="col-content">Bệnh viện:</div>
                    <div className="col-content">{getHospitalName() ? getHospitalName() : 'N/A'}</div>
                  </div>
                  {getDepartmentName() && <div className="row-content">
                    <div className="col-content">Khoa:</div>
                    <div className="col-content">{getDepartmentName()}</div>
                  </div>}
                  {props.doctorNameProp && <div className="row-content">
                    <div className="col-content">Bác sĩ:</div>
                    <div className="col-content">{props.doctorNameProp}</div>
                  </div>
                  }
                  <div className="row-content">
                    <div className="col-content">Lý do khám và triệu chứng:</div>
                    <div className="col-content">{profileInfo.reason ? profileInfo.reason : 'Chưa xác định'}</div>
                  </div>

                  <div className="row-content">
                    <div className="col-content">Tiểu sử bệnh lý nền:</div>
                    <div className="col-content">{profileInfo.medical_history ? profileInfo.medical_history : 'Chưa xác định'}</div>
                  </div>

                  <div className="row-content">
                    <div className="col-content">Dị ứng:</div>
                    <div className="col-content">{profileInfo.allergy ? profileInfo.allergy : 'Chưa xác định'}</div>
                  </div>

                  <div className="row-content">
                    <div className="col-content">Ngày khám:</div>
                    <div className="col-content">{props.dateBookedProp}</div>
                  </div>
                  <div className="row-content">
                    <div className="col-content">Giờ khám:</div>
                    <div className="col-content">{props.timeBookedProp}</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className="btn-pay">
            <Button onClick={confirmBooking} disabled={!confirm || !methodType} variant="contained" className="my-btn btn-blue-dash btn-contained large-size">
              Thanh toán
            </Button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = (state: any) => ({
  profileIdProp: state.profileId,
  hospitalIdProp: state.hospitalId,
  doctorIdProp: state.doctorId,
  departmentIdProp: state.departmentId,
  timeBookedProp: state.timeBooked,
  dateBookedProp: state.dateBooked,
  doctorNameProp: state.doctorName

})

const mapDispatchToProps = (dispatch: any) => ({
  setProfileIdProp: (data: any) => dispatch(setProfileId(data)),
  setHospitalIdProp: (data: any) => dispatch(setHospitalId(data)),
  setDoctorIdProp: (data: any) => dispatch(setDoctorId(data)),
  setDepartmentIdProp: (data: any) => dispatch(setDepartmentId(data))

})
export default connect(mapStateToProps, mapDispatchToProps)(InvoicePage);



