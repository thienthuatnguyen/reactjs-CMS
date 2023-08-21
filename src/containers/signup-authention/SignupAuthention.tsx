import React, { useState } from "react";
import "./SignupAuthention.scss";
import { useForm } from "react-hook-form";
import imgError from "../../assets/images/square-warning-validator.svg";
import { Button } from "@material-ui/core";
import vnGlag from "../../assets/images/vietnam-flag.png";
import AuthCode from "react-auth-code-input";
import { useNavigate } from "react-router-dom";

function SignupAuthention() {
  const navigate = useNavigate();
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

  const [result, setResult] = useState();
  const handleOnChange = (res: string) => {
    // setResult(res);
  };

  return (
    <form className="signup-auth-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="phone-input">
        <label htmlFor="phoneNumber">
          Nhập mã OTP đã gửi về số điện thoại
        </label>
        <div className={`form-group phone-input-glag ${errors.phoneNumber ? 'has-error' : ''}`}>
          <input type="tel" className="form-control bg-gray" id="phoneNumber" aria-describedby="phone-number-helper-text"
            defaultValue={formValues.phoneNumber}
            placeholder="Số điện thoại"
            {...register("phoneNumber", {
              required: true
            })}
          />
          <img className="glag" src={vnGlag}></img>
          <div className="form-control-feedback">
            <span className="arrow"></span>
            <img src={imgError} />
            {errors.phoneNumber && <span id="phone-number-helper-text">Số điện thoại là bắt buộc.</span>}
          </div>
        </div>
      </div>
      <div className="wrapper-input-code">
        <AuthCode allowedCharacters='alphanumeric' onChange={handleOnChange} inputClassName="auth-input" />
      </div>
      <Button variant="contained" color="primary" type="submit" className="my-btn btn-login">
        Xác thực
      </Button>
      <div className="text-otp">&gt; Bạn không nhận được mã OTP ?</div>
      <div className="link-signup">
        <span>Nếu bạn đã có tài khoản,</span>&nbsp;vui lòng đăng nhập&nbsp;<a href="javascript:void(0)" onClick={() => navigate("/login")}>tại đây</a>
      </div>
    </form>
  );
}

export default SignupAuthention;