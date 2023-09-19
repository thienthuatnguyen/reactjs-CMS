import { Button, InputLabel } from "@material-ui/core";
import { useForm } from "react-hook-form";
import imgError from "../../assets/images/square-warning-validator.svg";
import React, { useState } from "react";
import authService from "../../services/authService";
import showPassImage from "../../assets/images/show-pass.png";
import hidePassImage from "../../assets/images/hide-pass.png";

function PasswordUpsert({ closeModal, saveStatus }) {
  const [passwordShown, setPasswordShown] = useState(false);
  const formPassword = {
    password: ''
  };
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmitEditPassword = (data) => {
    let obj = {
      "password": data.password
    }
    authService.updateUser(obj).then((res: any) => {
      let body = res.data;
      if (body && body.error) {
        saveStatus({ type: 'error', message: body.message });

      } else {
        saveStatus({ type: 'success', message: body.data.message });
      }
    })



  };
  function handleCloseModal() {
    closeModal();
  }
  return (
    <form className="wrapper-form" onSubmit={handleSubmit(onSubmitEditPassword)}>
      <div className={`form-group ${errors.password ? 'has-error' : ''}`}>
        <InputLabel htmlFor="Password" className="label-config">
          <span>Mật khẩu</span></InputLabel>
        <input type={passwordShown ? "text" : "password"} className="form-control" id="Password" aria-describedby="password-helper-text"
          defaultValue={formPassword.password}
          placeholder="Nhập mật khẩu"
          {...register("password", {
            required: true
          })}
        />
        <button className="btn-show-hide-password" onClick={togglePassword} type="button">
          <img src={passwordShown ? showPassImage : hidePassImage} alt="icon-show-hide-pass"></img>
        </button>

        <div className="form-control-feedback">
          <span className="arrow"></span>
          <img src={imgError} alt="error" />
          {errors.password && <span id="password-helper-text">Mật khẩu là bắt buộc.</span>}
        </div>
      </div>


      <div className="button-submit-right">
        <Button onClick={() => handleCloseModal()} variant="outlined" color="primary" type="button" className="my-btn btn-outlined btn-black">
          Hủy
        </Button>
        <Button variant="contained" color="primary" type="submit" className="my-btn btn-contained btn-blue-dash">
          Lưu
        </Button>
      </div>
    </form>
  );
}

export default PasswordUpsert;

