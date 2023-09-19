import { Backdrop, Button, Fade, IconButton, InputLabel, Modal, Theme, createStyles, makeStyles } from "@material-ui/core";
import "./UserAccount.scss";
import { useState } from "react";
import editIcon from "../../assets/images/edit-black.svg";
import closeIcon from "../../assets/images/close.svg";
import { useForm } from "react-hook-form";
import imgError from "../../assets/images/square-warning-validator.svg";
import { connect } from "react-redux";
import { IUser, User } from "../../models/user.model";
import React from "react";
import ToastMessage from "../../components/toast-message/ToastMessage";
import authService from "../../services/authService";
import PasswordUpsert from "../../components/password-upsert/PasswordUpsert";
const EditIcon = () => (<img src={editIcon} alt="edit-icon"></img>);
const CloseIcon = () => (<img src={closeIcon} alt="close-icon"></img>);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }),

);
function UserAccountPage(props: any) {
  const [openModalAccount, setOpenModalAccount] = useState(false);
  const [openModalPass, setOpenModalPass] = useState(false);
  const [configToast, setToastConfig] = useState({ type: '', isOpen: false, message: '' });

  function closeToast() {
    setToastConfig({ type: '', isOpen: false, message: '' });
  }
  let formAccount: IUser = new User();

  if (props.user && props.user.data && props.user.data.profile) {
    formAccount = {
      full_name: props.user.data.profile.full_name,
      email: props.user.data.profile.email,
      phone_number: props.user.data.profile.phone_number,
      ref_code: props.user.data.profile.ref_code
    };
  }
 

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmitEditAccount = (data) => {
    let obj = {
      "email": data.email,
      "full_name": data.full_name
    }
    authService.updateUser(obj).then((res: any) => {
      let body = res.data;
      if (body && body.error) {
        setToastConfig({ type: 'error', isOpen: true, message: body.message });

      } else {
        setToastConfig({ type: 'success', isOpen: true, message: body.data.message });
        handleCloseModalAccount();
      }
    })

  };

  const handleCloseModalAccount = () => {
    setOpenModalAccount(false);
  };
  function handleEditInfo() {
    setOpenModalAccount(true);
  }
  function handleEditPass() {
    setOpenModalPass(true);
  }
  const handleCloseModalPass = () => {
    setOpenModalPass(false);
  };
  function savePasswordStatus(val) {
    if(val.type === 'success') {
      setToastConfig({ type: 'success', isOpen: true, message: val.message });
      handleCloseModalPass();
    } else {
      setToastConfig({ type: 'error', isOpen: true, message: val.message });
    }    
  }
  const classes = useStyles();
  return (
    <React.Fragment>
      <ToastMessage isOpen={configToast.isOpen} closeCallback={closeToast} type={configToast.type} message={configToast.message}></ToastMessage>
      <div className="wrapper-account-page">
        <div className="container-app">
          <h1 className="title">Tài khoản của bạn</h1>
          <div className="content-account">
            <div className="content-item">
              <div className="top-head">
                <h2 className="title">Thông tin cá nhân</h2>
                <IconButton onClick={handleEditInfo} aria-label="edit" className="btn-edit">
                  <EditIcon />
                </IconButton>
              </div>
              <div className="row-info">
                <div className="col-info">Họ và tên:</div>
                <div className="col-info">{formAccount.full_name}</div>
              </div>
              <div className="row-info">
                <div className="col-info">Số điện thoại:</div>
                <div className="col-info">{formAccount.phone_number}</div>
              </div>
              <div className="row-info">
                <div className="col-info">Email:</div>
                <div className="col-info">{formAccount.email}</div>
              </div>
              {formAccount.ref_code && <div className="row-info">
                <div className="col-info">Mã giới thiệu:</div>
                <div className="col-info">ABSJDS67234234</div>
              </div>
              }
            </div>
            <div className="content-item content-item-password">
              <div className="top-head">
                <h2 className="title">Mật khẩu</h2>
                <IconButton onClick={handleEditPass} aria-label="edit" className="btn-edit">
                  <EditIcon />
                </IconButton>
              </div>
              <div className="row-info">
                <div className="col-info">Mật khẩu đăng nhập:</div>
                <div className="col-info">&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;</div>
              </div>
            </div>
          </div>
        </div>

        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={openModalAccount}
          onClose={handleCloseModalAccount}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={openModalAccount}>
            <div className="wrapper-my-modal small-size">
              <div className="head-modal">
                <h1 className="title">Sửa thông tin cá nhân</h1>
                <IconButton onClick={handleCloseModalAccount} aria-label="close">
                  <CloseIcon />
                </IconButton>
              </div>
              <form className="wrapper-form" onSubmit={handleSubmit(onSubmitEditAccount)}>
                <div className={`form-group item-input required ${errors.full_name ? 'has-error' : ''}`}>
                  <InputLabel htmlFor="name" className="label-config">
                    <span>Họ và tên</span></InputLabel>
                  <input type="text" className="form-control bg-white" id="name" aria-describedby="name-helper-text"
                    defaultValue={formAccount.full_name}
                    placeholder="Họ và tên"
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

                {/* <div className={`form-group item-input required ${errors.phoneNumber ? 'has-error' : ''}`}>
                <InputLabel htmlFor="phoneNumber" className="label-config">
                  <span>Số điện thoại</span></InputLabel>
                <input type="tel" className="form-control bg-white" id="phoneNumber" aria-describedby="phone-number-helper-text"
                  defaultValue={formAccount.phone_number}
                  placeholder="Số điện thoại"
                  {...register("phoneNumber", {
                    required: true
                  })}
                />
                <div className="form-control-feedback">
                  <span className="arrow"></span>
                  <img src={imgError} alt="error" />
                  {errors.phoneNumber && <span id="phone-number-helper-text">Số điện thoại là bắt buộc.</span>}
                </div>
              </div> */}
                <div className={`form-group item-input ${errors.email ? 'has-error' : ''}`}>
                  <InputLabel htmlFor="email" className="label-config">
                    <span>Email</span></InputLabel>
                  <input type="text" className="form-control bg-white" id="email" aria-describedby="email-helper-text"
                    defaultValue={formAccount.email}
                    placeholder="Email"
                    {...register("email", {
                      required: false
                    })}
                  />
                  <div className="form-control-feedback">
                    <span className="arrow"></span>
                    <img src={imgError} alt="error" />
                    {errors.email && <span id="email-helper-text">Email là bắt buộc.</span>}
                  </div>
                </div>
                {/* <div className={`form-group item-input ${errors.code ? 'has-error' : ''}`}>
                  <InputLabel htmlFor="code" className="label-config">
                    <span>Mã giới thiệu</span></InputLabel>
                  <input type="text" className="form-control bg-white" id="code" aria-describedby="code-helper-text"
                    defaultValue={formAccount.code}
                    placeholder="Mã giới thiệu"
                    {...register("code", {
                      required: false
                    })}
                  />
                  <div className="form-control-feedback">
                    <span className="arrow"></span>
                    <img src={imgError} alt="error" />
                    {errors.code && <span id="code-helper-text">Mã giới thiệu là bắt buộc.</span>}
                  </div>
                </div> */}

                <div className="button-submit-right">
                  <Button onClick={() => handleCloseModalAccount()} variant="outlined" color="primary" type="button" className="my-btn btn-outlined btn-black">
                    Hủy
                  </Button>
                  <Button variant="contained" color="primary" type="submit" className="my-btn btn-contained btn-blue-dash">
                    Lưu
                  </Button>
                </div>
              </form>
            </div>
          </Fade>
        </Modal>


        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={openModalPass}
          onClose={handleCloseModalPass}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={openModalPass}>
            <div className="wrapper-my-modal small-size">
              <div className="head-modal">
                <h1 className="title">Đổi mật khẩu</h1>
                <IconButton onClick={handleCloseModalPass} aria-label="close">
                  <CloseIcon />
                </IconButton>
              </div>
              <PasswordUpsert closeModal = {handleCloseModalPass} saveStatus = {savePasswordStatus}></PasswordUpsert>
            </div>
          </Fade>
        </Modal>
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = (state: any) => ({
  user: state.user
})

export default connect(mapStateToProps)(UserAccountPage);

