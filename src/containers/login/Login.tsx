import React, { useState } from "react";
import "./Login.scss";
import { useForm } from "react-hook-form";
import imgError from "../../assets/images/square-warning-validator.svg";
import { Button } from "@material-ui/core";
import phoneLogo from "../../assets/images/icon-phone.png";
import { NavLink, useNavigate } from "react-router-dom";
import showPassImage from "../../assets/images/show-pass.png";
import hidePassImage from "../../assets/images/hide-pass.png";
import authService from "../../services/authService";
import ToastMessage from "../../components/toast-message/ToastMessage";

function Login() {
  const [passwordShown, setPasswordShown] = useState(false);
  const [configToast, setToastConfig] = useState({ type: '', isOpen: false, message: '' });
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    let obj = {
      "phone_number": data.phoneNumber,
      "password": data.password
    }
    authService.login(obj).then((res) => {
      let body = res.data;
      if (body && body.error) {
        setToastConfig({ type: 'error', isOpen: true, message: body.message });

      } else {
        localStorage.setItem('o2fine', body.data.token);
        navigate("/");
      }
    });
  };
  const formValues = {
    phoneNumber: '',
    password: ''
  };
  const navigate = useNavigate();
  function closeToast() {
    setToastConfig({ type: '', isOpen: false, message: '' });
  }

  return (
    <React.Fragment>
      <ToastMessage isOpen={configToast.isOpen} closeCallback={closeToast} type={configToast.type} message={configToast.message}></ToastMessage>

      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="phone-input">
          <label htmlFor="phoneNumber">
            Vui lòng đăng nhập bằng số điện thoại
          </label>
          <div className="wrapper-input">
            <img className="icon-phone" src={phoneLogo} alt="icon-phone"></img>
            <div className={`form-group ${errors.phoneNumber ? 'has-error' : ''}`} placeholder="Số điện thoại">
              <input type="tel" className="form-control" id="phoneNumber" aria-describedby="phone-number-helper-text"
                defaultValue={formValues.phoneNumber}
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
          <div className="wrapper-input wrapper-input-password">

            <div className={`form-group ${errors.password ? 'has-error' : ''}`} placeholder="Mật khẩu">
              <button className="btn-show-hide-password" onClick={togglePassword} type="button">
                <img src={passwordShown ? showPassImage : hidePassImage} alt="icon-show-hide-pass"></img>
              </button>
              <input type={passwordShown ? "text" : "password"} className="form-control" id="password" aria-describedby="password-helper-text"
                defaultValue={formValues.password}
                placeholder="Mật khẩu"
                {...register("password", {
                  required: true,
                  minLength: {
                    value: 8,
                    message: 'errorMinlength'
                  }
                })}
              />
              <div className="form-control-feedback">
                <span className="arrow"></span>
                <img src={imgError} alt="error" />
                {errors.password && errors.password.message !== 'errorMinlength' && <span id="password-helper-text">Mật khẩu là bắt buộc.</span>}
                {errors.password && errors.password.message === 'errorMinlength' && <span id="password-helper-text">Mật khẩu phải lớn hơn hoặc bằng 8 kí tự.</span>}
              </div>
            </div>
          </div>
        </div>

        <Button variant="contained" color="primary" type="submit" className="my-btn btn-login">
          Đăng nhập
        </Button>
        <div className="link-signup">
          <span>Bạn chưa có tài khoản?</span>&nbsp;<NavLink className="link" to="/dang-ky">Đăng ký</NavLink><br />
          <span>Bạn đã quên mật khẩu?</span>&nbsp;<NavLink className="link" to="/quen-mat-khau">Lấy lại mật khẩu</NavLink>
        </div>

      </form>
    </React.Fragment>

  );
}

export default Login;