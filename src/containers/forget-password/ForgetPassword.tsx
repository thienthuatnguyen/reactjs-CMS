import "../signup/SignUp.scss";
import { useForm } from "react-hook-form";
import imgError from "../../assets/images/square-warning-validator.svg";
import { Button } from "@material-ui/core";
import authService from "../../services/authService";
import { useState } from "react";
import React from "react";
import ToastMessage from "../../components/toast-message/ToastMessage";
import { useNavigate } from "react-router-dom";

function ForgetPasswordPage() {
  const [configToast, setToastConfig] = useState({ type: '', isOpen: false, message: '' });
  const navigate = useNavigate();

  function closeToast() {
    setToastConfig({ type: '', isOpen: false, message: '' });
  }
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => {
    let obj = { phone_number: data.phone_number }
    authService.forgetPassword(obj).then((res) => {
      let body = res.data;
      if (body && body.error) {
        setToastConfig({ type: 'error', isOpen: true, message: body.message });

      } else {
        setToastConfig({ type: 'success', isOpen: true, message: body.data.message });
        setTimeout(() => {
          navigate("/xac-thuc-mat-khau");
        }, 1000)
      }
    })
  };
  const formValues = {
    phone_number: ''
  };

  return (
    <React.Fragment>
      <ToastMessage isOpen={configToast.isOpen} closeCallback={closeToast} type={configToast.type} message={configToast.message}></ToastMessage>
      <form onSubmit={handleSubmit(onSubmit)} className="signup-form forget-password">
        <div className="title-form">Quên mật khẩu?</div>

        <div className={`form-group ${errors.phone_number ? 'has-error' : ''}`}>
          <input type="tel" className="form-control bg-gray" id="phone" aria-describedby="phone-helper-text"
            defaultValue={formValues.phone_number}
            placeholder="Nhập số điện thoại"
            {...register("phone_number", {
              required: true
            })}
          />
          <div className="form-control-feedback">
            <span className="arrow"></span>
            <img src={imgError} alt="error" />
            {errors.phone_number && <span id="phone-name-helper-text">Số điện thoại là bắt buộc.</span>}
          </div>
        </div>

        <div className="text-confirm text-confirm-forget-pass">
          <span>Nhập số điện thoại đăng nhập của bạn và chúng tôi sẽ gửi mã code về email của bạn kèm theo hướng dẫn để đặt lại mật khẩu của bạn.</span>
        </div>

        <Button variant="contained" color="primary" type="submit" className="my-btn btn-login">
          Gửi
        </Button>
      </form>
    </React.Fragment>
  );
}

export default ForgetPasswordPage;