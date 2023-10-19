import React, { useState } from "react";
import "./SignUp.scss";
import { useForm } from "react-hook-form";
import imgError from "../../assets/images/square-warning-validator.svg";
import { Button } from "@material-ui/core";
import showPassImage from "../../assets/images/show-pass.png";
import hidePassImage from "../../assets/images/hide-pass.png";
import vnGlag from "../../assets/images/vietnam-flag.png";
import authService from "../../services/authService";
import ToastMessage from "../../components/toast-message/ToastMessage";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);
  const [configToast, setToastConfig] = useState({ type: '', isOpen: false, message: '' });
  const navigate = useNavigate();

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

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
      "phone_number": data.phoneNumber,
      "email": data.email,
      "full_name": data.userName,
      "password": data.password,
      "password_confirmation": data.confirmPassword,
      "ref_code": data.codeIntroduce
    }
    authService.signUp(obj).then((res: any) => {
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
    userName: "",
    codeIntroduce: '',
    password: "",
    confirmPassword: "",
    phoneNumber: '',
    email: ''
  };

  return (
    <React.Fragment>
      <ToastMessage isOpen={configToast.isOpen} closeCallback={closeToast} type={configToast.type} message={configToast.message}></ToastMessage>
      <form onSubmit={handleSubmit(onSubmit)} className="signup-form">
        <div className="title-form">Vui lòng nhập đầy đủ thông tin</div>
        <div className={`form-group phone-input-glag ${errors.phoneNumber ? 'has-error' : ''}`}>
          <input type="tel" className="form-control bg-gray" id="phoneNumber" aria-describedby="phone-number-helper-text"
            defaultValue={formValues.phoneNumber}
            placeholder="Số điện thoại"
            {...register("phoneNumber", {
              required: true
            })}
          />
          <img className="glag" src={vnGlag} alt="icon-glag"></img>
          <div className="form-control-feedback">
            <span className="arrow"></span>
            <img src={imgError} alt="error" />
            {errors.phoneNumber && <span id="phone-number-helper-text">Số điện thoại là bắt buộc.</span>}
          </div>
        </div>


        <div className={`form-group ${errors.userName ? 'has-error' : ''}`}>
          <input type="text" className="form-control bg-gray" id="userName" aria-describedby="user-name-helper-text"
            defaultValue={formValues.userName}
            placeholder="Nhập họ và tên"
            {...register("userName", {
              required: true
            })}
          />
          <div className="form-control-feedback">
            <span className="arrow"></span>
            <img src={imgError} alt="error" />
            {errors.userName && <span id="user-name-helper-text">Họ và tên là bắt buộc.</span>}
          </div>
        </div>

        <div className={`form-group ${errors.email ? 'has-error' : ''}`}>
          <input type="email" className="form-control bg-gray" id="email" aria-describedby="email-helper-text"
            defaultValue={formValues.email}
            placeholder="Email (khôi phục mật khẩu khi quên)"
            {...register("email", {
              required: false
            })}
          />
          <div className="form-control-feedback">
            <span className="arrow"></span>
            <img src={imgError} alt="error" />
            {errors.email && <span id="email-name-helper-text">Email là bắt buộc.</span>}
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

        <div className={`form-group ${errors.confirmPassword ? 'has-error' : ''}`}>
          <input type={confirmPasswordShown ? "text" : "password"} className="form-control bg-gray" id="confirmPassword" aria-describedby="confirm-password-helper-text"
            defaultValue={formValues.confirmPassword}
            placeholder="Nhập lại mật khẩu"
            {...register("confirmPassword", {
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
            {errors.confirmPassword && errors.confirmPassword.type !== 'inCorrect' && <span id="confirm-password-helper-text">Mật khẩu xác nhận là bắt buộc.</span>}
            {errors.confirmPassword && errors.confirmPassword.type === 'inCorrect' && <span id="confirm-password-helper-text">Mật khẩu xác nhận chưa đúng.</span>}

          </div>
        </div>


        <div className="form-group">
          <input type="text" className="form-control bg-gray" id="codeIntroduce" aria-describedby="code-introduce-helper-text"
            defaultValue={formValues.codeIntroduce}
            placeholder="Mã giới thiệu (nếu có)"
            {...register("codeIntroduce", {
              required: false
            })}
          />
        </div>


        <div className="text-confirm">
          <span>Bằng việc đăng ký, bạn đã đồng ý với chúng tôi về</span>&nbsp;<a target="_blank" href="/">Quy định sử dụng</a>&nbsp;và&nbsp;<a target="_blank" href="/">chính sách bảo mật</a>
        </div>

        <Button variant="contained" color="primary" type="submit" className="my-btn btn-login">
          Hoàn tất đăng ký
        </Button>
      </form>
    </React.Fragment>
  );
}

export default SignUp;