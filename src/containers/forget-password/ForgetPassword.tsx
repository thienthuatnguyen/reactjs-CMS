import { useState } from "react";
import "../signup/SignUp.scss";
import { useForm } from "react-hook-form";
import imgError from "../../assets/images/square-warning-validator.svg";
import { Button } from "@material-ui/core";


function ForgetPasswordPage() {
  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const togglePasswordConfirm = () => {
    setConfirmPasswordShown(!confirmPasswordShown);
  };

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => {


  };
  const formValues = {
    userName: "",
    codeIntroduce: '',
    passWord: "",
    confirmPassword: "",
    phoneNumber: '',
    email: ''
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="signup-form forget-password">
      <div className="title-form">Quên mật khẩu?</div>
      
      <div className={`form-group ${errors.email ? 'has-error' : ''}`}>
        <input type="email" className="form-control bg-gray" id="email" aria-describedby="email-helper-text"
          defaultValue={formValues.email}
          placeholder="Nhập email"
          {...register("email", {
            required: true
          })}
        />
        <div className="form-control-feedback">
          <span className="arrow"></span>
          <img src={imgError} alt="error"/>
          {errors.email && <span id="email-name-helper-text">Email là bắt buộc.</span>}
        </div>
      </div>



      
      <div className="text-confirm text-confirm-forget-pass">
        <span>Nhập email của bạn và chúng tôi sẽ gửi email kèm theo hướng dẫn để đặt lại mật khẩu của bạn.</span>
      </div>

      <Button variant="contained" color="primary" type="submit" className="my-btn btn-login">
        Send email
      </Button>
    </form>
  );
}

export default ForgetPasswordPage;