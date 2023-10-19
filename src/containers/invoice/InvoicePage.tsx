import "./InvoicePage.scss";
import { useEffect, useState } from "react";
import profileService from "../../services/profileService";
import React from "react";
import ToastMessage from "../../components/toast-message/ToastMessage";
import { setHospitalId, setProfileId } from "../../actions/actions";
import { connect } from "react-redux";
import { Button, Checkbox, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, RadioProps, makeStyles } from "@material-ui/core";
import clsx from 'clsx';

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

function InvoicePage(props: any) {
  const [profileInfo, setProfileInfo] = React.useState({
    full_name: '',
    birthday: '',
    code: '',
    phone_number: '',
    address: '',
    id: '',
    gender: ''

  });
  const [configToast, setToastConfig] = useState({ type: '', isOpen: false, message: '' });

  useEffect(() => {
    getProfile();
  }, []);



  function getProfile() {
    // profileService.findMedicalProfile(props.profileId).then(
    //   (res) => {
    //     let body = res.data;
    //     if (body && body.error) {
    //       setToastConfig({ type: 'error', isOpen: true, message: body.message });
    //     } else {
    //       setProfileInfo(body.data.profile);
    //     }
    //   }
    // )

    profileService.findMedicalProfile(1).then(
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
                      <div className="col-content-info">{profileInfo.gender ? 'Nữ' : 'Nam'}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="info-invoice">
                <h2 className="title">Thông tin thanh toán</h2>
                <div className="department-info">
                  <div className="row-info">
                    <div className="col-item">Chuyên khoa</div>
                    <div className="col-item upercase">NỘI CƠ XƯƠNG KHỚP</div>
                  </div>
                  <div className="row-info">
                    <div className="col-item">Dịch vụ</div>
                    <div className="col-item upercase">KHÁM DỊCH VỤ</div>
                  </div>
                  <div className="row-info">
                    <div className="col-item">Tiền khám</div>
                    <div className="col-item bold">150.000 VNĐ</div>
                  </div>
                </div>
                <div className="fee-plus">
                  <div className="row-info">
                    <div className="col-item">Tổng tiền khám:</div>
                    <div className="col-item bold blue">150.000 VNĐ</div>
                  </div>
                  <div className="row-info">
                    <div className="col-item">Phí tiện ích:</div>
                    <div className="col-item bold blue">12.250 VNĐ</div>
                  </div>
                  <div className="row-info">
                    <div className="col-item bold">Tổng cộng:</div>
                    <div className="col-item bold blue">162.250 VNĐ</div>
                  </div>
                </div>
                <div className="check-confirm hide-mobile">
                  <FormControlLabel className="my-checkbox" control={<Checkbox />} label="Tôi đồng ý việc thanh toán phí tiện ích và phí xử lý giao dịch nếu có sử dụng dịch vụ đăng ký khám bệnh trực tuyến tại bệnh viện Đại Học Y Dược" />
                </div>
                <div className="btn-pay hide-mobile">
                  <Button variant="contained" className="my-btn btn-blue-dash btn-contained">
                    Thanh toán
                  </Button>
                </div>
              </div>

            </div>
            <div className="right-content">
              <div className="box-info">
                <div className="box-title">Chọn phương thức thanh toán</div>
                <div className="radio-group">
                  <FormControl component="fieldset">
                    <RadioGroup defaultValue="method4" aria-label="gender" name="customized-radios">
                      <FormControlLabel value="method1" control={<StyledRadio />} label="Thanh toán bằng thẻ khám bệnh" />
                      <FormControlLabel value="method2" control={<StyledRadio />} label="Thanh toán bằng vì momo" />
                      <FormControlLabel value="method3" control={<StyledRadio />} label="Thanh toán bằng thẻ quốc tế Visa, Master, JCB" />
                      <FormControlLabel value="method4" control={<StyledRadio />} label="Thanh toán bằng thẻ ATM nội địa/Internet Banking" />

                    </RadioGroup>
                  </FormControl>
                </div>
              </div>

              <div className="check-confirm display-mobile">
                  <FormControlLabel className="my-checkbox" control={<Checkbox />} label="Tôi đồng ý việc thanh toán phí tiện ích và phí xử lý giao dịch nếu có sử dụng dịch vụ đăng ký khám bệnh trực tuyến tại bệnh viện Đại Học Y Dược" />
                </div>
                <div className="btn-pay display-mobile">
                  <Button variant="contained" className="my-btn btn-blue-dash btn-contained">
                    Thanh toán
                  </Button>
                </div>
            </div>
          </div>
          
        </div>
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = (state: any) => ({
  profileId: state.profileId,
  hospitalId: state.hospitalId
})

const mapDispatchToProps = (dispatch: any) => ({
  setProfileId: (data: any) => dispatch(setProfileId(data)),
  setHospitalId: (data: any) => dispatch(setHospitalId(data)),
})
export default connect(mapStateToProps, mapDispatchToProps)(InvoicePage);

