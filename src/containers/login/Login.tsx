import React from "react";
import "./Login.scss";
import { useForm } from "react-hook-form";
import imgError from "../../assets/images/square-warning-validator.svg";
import { Button } from "@material-ui/core";
import phoneLogo from "../../assets/images/icon-phone.png";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
  const formValues = {
    phoneNumber: ''
  };

  return (
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
              placeholder="Phone number"
              {...register("phoneNumber", {
                required: true
              })}
            />
            <div className="form-control-feedback">
              <span className="arrow"></span>
              <img src={imgError} />
              {errors.phoneNumber && <span id="phone-number-helper-text">Số điện thoại là bắt buộc.</span>}
            </div>
          </div>
        </div>
      </div>

      <Button variant="contained" color="primary" type="submit" className="my-btn btn-login">
        Đăng nhập
      </Button>
      <div className="link-signup">
        <span>Bạn chưa có tài khoản?</span>&nbsp;<a href="sign-up">Đăng ký</a>
      </div>
    </form>
  );
}

export default Login;