import "../signup/SignUp.scss";
import { useForm } from "react-hook-form";
import imgError from "../../assets/images/square-warning-validator.svg";
import { Button } from "@material-ui/core";
import authService from "../../services/authService";
import { useState } from "react";
import React from "react";
import ToastMessage from "../../components/toast-message/ToastMessage";
import showPassImage from "../../assets/images/show-pass.png";
import hidePassImage from "../../assets/images/hide-pass.png";
import { useNavigate } from "react-router-dom";
function VerifyForgotPasswordPage() {
  const [configToast, setToastConfig] = useState({ type: '', isOpen: false, message: '' });
  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  const navigate = useNavigate();

  const togglePasswordConfirm = () => {
    setConfirmPasswordShown(!confirmPasswordShown);
  };
  function closeToast() {
    setToastConfig({ type: '', isOpen: false, message: '' });
  }
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => {
    let obj = { 
      code: data.code,
      password: data.password,
      password_confirmation: data.password_confirmation
    }
    authService.verrifyForgetPassword(obj).then((res) => {
      let body = res.data;
      if (body && body.error) {
        setToastConfig({ type: 'error', isOpen: true, message: body.message });

      } else {
        setToastConfig({ type: 'success', isOpen: true, message: body.data.message });
        setTimeout(() => {
          navigate("/dang-nhap");
        }, 1000)
      }
    })
  };
  const formValues = {
    code: '',
    password: '',
    password_confirmation: ''
  };

  return (
    <React.Fragment>
      <ToastMessage isOpen={configToast.isOpen} closeCallback={closeToast} type={configToast.type} message={configToast.message}></ToastMessage>
      <form onSubmit={handleSubmit(onSubmit)} className="signup-form forget-password">
        <div className="title-form">Khôi phục mật khẩu</div>

        <div className={`form-group ${errors.code ? 'has-error' : ''}`}>
          <input type="text" className="form-control bg-gray" id="code" aria-describedby="code-helper-text"
            defaultValue={formValues.code}
            placeholder="Nhập mã code"
            {...register("code", {
              required: true
            })}
          />
          <div className="form-control-feedback">
            <span className="arrow"></span>
            <img src={imgError} alt="error" />
            {errors.code && <span id="code-helper-text">Mã code là bắt buộc.</span>}
          </div>
        </div>
        <div className={`form-group ${errors.password ? 'has-error' : ''}`}>
          <input type={passwordShown ? "text" : "password"} className="form-control bg-gray" id="password" aria-describedby="password-helper-text"
            defaultValue={formValues.password}
            placeholder="Nhập mật khẩu"
            {...register("password", {
              required: true,
              minLength: {
                value: 8,
                message: 'errorMinlength'
              }
            })}
          />
          <button className="btn-show-hide-password" onClick={togglePassword} type="button">
            <img src={passwordShown ? showPassImage : hidePassImage} alt="icon-show-hide-pass"></img>
          </button>

          <div className="form-control-feedback">
            <span className="arrow"></span>
            <img src={imgError} alt="error" />
            {errors.password && errors.password.message !== 'errorMinlength' && <span id="password-helper-text">Mật khẩu là bắt buộc.</span>}
            {errors.password && errors.password.message === 'errorMinlength' && <span id="password-helper-text">Mật khẩu phải lớn hơn hoặc bằng 8 kí tự.</span>}

          </div>
        </div>

        <div className={`form-group ${errors.password_confirmation ? 'has-error' : ''}`}>
          <input type={confirmPasswordShown ? "text" : "password"} className="form-control bg-gray" id="confirmPassword" aria-describedby="confirm-password-helper-text"
            defaultValue={formValues.password_confirmation}
            placeholder="Nhập lại mật khẩu"
            {...register("password_confirmation", {
              required: true,
              validate: {
                inCorrect: (value, formValues) => {
                  return value === formValues.password;
                }
              }
            })}
          />
          <button className="btn-show-hide-password" onClick={togglePasswordConfirm} type="button">
            <img src={confirmPasswordShown ? showPassImage : hidePassImage} alt="icon-show-hide-pass"></img>
          </button>
          <div className="form-control-feedback">
            <span className="arrow"></span>
            <img src={imgError} alt="error" />
            {errors.password_confirmation && errors.password_confirmation.type !== 'inCorrect' && <span id="confirm-password-helper-text">Mật khẩu xác nhận là bắt buộc.</span>}
            {errors.password_confirmation && errors.password_confirmation.type === 'inCorrect' && <span id="confirm-password-helper-text">Mật khẩu xác nhận chưa đúng.</span>}

          </div>
        </div>

        <div className="text-confirm text-confirm-forget-pass">
          <span>Nhập mã code chúng tôi đã gửi về email của bạn và mật khẩu mới của bạn, chúng tôi sẽ thay đổi mật khẩu mới cho bạn.</span>
        </div>

        <Button variant="contained" color="primary" type="submit" className="my-btn btn-login">
          Xác nhận
        </Button>
      </form>
    </React.Fragment>
  );
}

export default VerifyForgotPasswordPage;