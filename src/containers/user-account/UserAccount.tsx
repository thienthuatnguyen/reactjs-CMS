import { Backdrop, Button, Fade, IconButton, InputLabel, Modal, Theme, createStyles, makeStyles } from "@material-ui/core";
import "./UserAccount.scss";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import editIcon from "../../assets/images/edit-black.svg";
import closeIcon from "../../assets/images/close.svg";
import { useForm } from "react-hook-form";
import imgError from "../../assets/images/square-warning-validator.svg";
import showPassImage from "../../assets/images/show-pass.png";
import hidePassImage from "../../assets/images/hide-pass.png";
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
function UserAccountPage() {
  const navigate = useNavigate();
  const [openModalAccount, setOpenModalAccount] = useState(false);
  const [openModalPass, setOpenModalPass] = useState(false);

  const [oldPasswordShown, setOldPasswordShown] = useState(false);
  const [newPasswordShown, setNewPasswordShown] = useState(false);
  const [confirmNewPasswordShown, setConfirmNewPasswordShown] = useState(false);

  const toggleOldPassword = () => {
    setOldPasswordShown(!oldPasswordShown);
  };

  const toggleNewPassword = () => {
    setNewPasswordShown(!newPasswordShown);
  };

  const toggleNewPasswordConfirm = () => {
    setConfirmNewPasswordShown(!confirmNewPasswordShown);
  };

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmitEditAccount = (data) => {
  };

  const onSubmitEditPassword = (data) => {
  };

  const formAccount = {
    name: '',
    email: '',
    phoneNumber: '',
    code: ''
  };
  const formPassword = {
    oldPassword: '',
    newPassword: '',
    confirmNewPassword: ''
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
  const classes = useStyles();
  return (
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
              <div className="col-info">Nguyễn Thiện Thuật</div>
            </div>
            <div className="row-info">
              <div className="col-info">Số điện thoại:</div>
              <div className="col-info">0938225141</div>
            </div>
            <div className="row-info">
              <div className="col-info">Email:</div>
              <div className="col-info">thienthuat.it.90@gmail.com</div>
            </div>
            <div className="row-info">
              <div className="col-info">Mã giới thiệu:</div>
              <div className="col-info">ABSJDS67234234</div>
            </div>

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
          <div className="wrapper-my-modal">
            <div className="head-modal">
              <h1 className="title">Sửa thông tin cá nhân</h1>
              <IconButton onClick={handleCloseModalAccount} aria-label="close">
                <CloseIcon />
              </IconButton>
            </div>
            <form className="wrapper-form" onSubmit={handleSubmit(onSubmitEditAccount)}>
              <div className="items-inline">
                <div className={`form-group item-input required ${errors.name ? 'has-error' : ''}`}>
                  <InputLabel htmlFor="name" className="label-config">
                    <span>Họ và tên</span></InputLabel>
                  <input type="text" className="form-control bg-white" id="name" aria-describedby="name-helper-text"
                    defaultValue={formAccount.name}
                    placeholder="Họ và tên"
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

                <div className={`form-group item-input required ${errors.phoneNumber ? 'has-error' : ''}`}>
                  <InputLabel htmlFor="phoneNumber" className="label-config">
                    <span>Số điện thoại</span></InputLabel>
                  <input type="tel" className="form-control bg-white" id="phoneNumber" aria-describedby="phone-number-helper-text"
                    defaultValue={formAccount.phoneNumber}
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
                </div>
              </div>
              <div className="items-inline">
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
                <div className={`form-group item-input ${errors.code ? 'has-error' : ''}`}>
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
                </div>
              </div>

              <div className="button-submit-right">
                <Button onClick={()=> handleCloseModalAccount} variant="outlined" color="primary" type="submit" className="my-btn btn-outlined btn-black">
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
          <div className="wrapper-my-modal">
            <div className="head-modal">
              <h1 className="title">Đổi mật khẩu</h1>
              <IconButton onClick={handleCloseModalPass} aria-label="close">
                <CloseIcon />
              </IconButton>
            </div>
            <form className="wrapper-form" onSubmit={handleSubmit(onSubmitEditPassword)}>
              <div className={`form-group ${errors.oldPassword ? 'has-error' : ''}`}>
                <InputLabel htmlFor="oldPassword" className="label-config">
                  <span>Mật khẩu củ</span></InputLabel>
                <input type={oldPasswordShown ? "text" : "password"} className="form-control bg-gray" id="oldPassword" aria-describedby="old-password-helper-text"
                  defaultValue={formPassword.oldPassword}
                  placeholder="Nhập mật khẩu củ"
                  {...register("oldPassword", {
                    required: true
                  })}
                />
                <button className="btn-show-hide-password" onClick={toggleOldPassword} type="button">
                  <img src={oldPasswordShown ? showPassImage : hidePassImage} alt="icon-show-hide-pass"></img>
                </button>

                <div className="form-control-feedback">
                  <span className="arrow"></span>
                  <img src={imgError} alt="error" />
                  {errors.oldPassword && <span id="old-password-helper-text">Mật khẩu củ là bắt buộc.</span>}
                </div>
              </div>

              <div className={`form-group ${errors.newPassword ? 'has-error' : ''}`}>
                <InputLabel htmlFor="newPassword" className="label-config">
                  <span>Mật khẩu mới</span></InputLabel>
                <input type={newPasswordShown ? "text" : "password"} className="form-control bg-gray" id="newPassword" aria-describedby="new-password-helper-text"
                  defaultValue={formPassword.newPassword}
                  placeholder="Nhập mật khẩu mới"
                  {...register("newPassword", {
                    required: true
                  })}
                />
                <button className="btn-show-hide-password" onClick={toggleNewPassword} type="button">
                  <img src={newPasswordShown ? showPassImage : hidePassImage} alt="icon-show-hide-pass"></img>
                </button>
                <div className="form-control-feedback">
                  <span className="arrow"></span>
                  <img src={imgError} alt="error" />
                  {errors.newPassword && <span id="new-password-helper-text">Mật khẩu mới là bắt buộc.</span>}
                </div>
              </div>

              <div className={`form-group ${errors.newConfirmPassword ? 'has-error' : ''}`}>
                <InputLabel htmlFor="confirmNewPassword" className="label-config">
                  <span>Nhập lại mật khẩu mới</span></InputLabel>
                <input type={confirmNewPasswordShown ? "text" : "password"} className="form-control bg-gray" id="confirmNewPassword" aria-describedby="confirm-new-password-helper-text"
                  defaultValue={formPassword.confirmNewPassword}
                  placeholder="Nhập lại mật khẩu mới"
                  {...register("confirmNewPassword", {
                    required: true,
                    validate: {
                      inCorrect: (value, formValues) => {
                        return value !== formValues.newPassword;
                      },
                    }
                  })}
                />
                <button className="btn-show-hide-password" onClick={toggleNewPasswordConfirm} type="button">
                  <img src={confirmNewPasswordShown ? showPassImage : hidePassImage} alt="icon-show-hide-pass"></img>
                </button>
                <div className="form-control-feedback">
                  <span className="arrow"></span>
                  <img src={imgError} alt="error" />
                  {errors.confirmNewPassword && errors.confirmNewPassword.type !== 'inCorrect' && <span id="confirm-new-password-helper-text">Mật khẩu xác nhận là bắt buộc.</span>}
                  {errors.confirmNewPassword && errors.confirmNewPassword.type === 'inCorrect' && <span id="confirm-new-password-helper-text">Mật khẩu xác nhận chưa đúng.</span>}
                </div>
              </div>
              <div className="button-submit-right">
                <Button onClick={()=> handleCloseModalPass} variant="outlined" color="primary" type="button" className="my-btn btn-outlined btn-black">
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
    </div>
  );
}

export default UserAccountPage;

