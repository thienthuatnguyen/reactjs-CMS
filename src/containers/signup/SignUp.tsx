import React from "react";
import "./SignUp.scss";
import { useForm } from "react-hook-form";
import imgError from "../../assets/images/square-warning-validator.svg";
import { Button } from "@material-ui/core";

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
  const formValues = {
    userName: "",
    email: '',
    passWord: "",
    confirmPassword: "",
    phoneNumber: ''
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={`form-group ${errors.userName ? 'has-error' : ''}`}>
        <label className="label-config" htmlFor="userName">User Name</label>
        <input type="text" className="form-control" id="userName" aria-describedby="user-name-helper-text"
          defaultValue={formValues.userName}
          placeholder="User Name"
          {...register("userName", {
            required: true
          })}
        />
        <div className="form-control-feedback">
          <span className="arrow"></span>
          <img src={imgError} />
          {errors.userName && <span id="user-name-helper-text">User name is required.</span>}
        </div>
      </div>

      <div className={`form-group ${errors.email ? 'has-error' : ''}`}>
        <label className="label-config" htmlFor="email">Email</label>
        <input type="text" className="form-control" id="email" aria-describedby="email-helper-text"
          defaultValue={formValues.email}
          placeholder="Email"
          {...register("email", {
            required: true,
            validate: {
              inCorrect: (value) => {
                const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(value)
              },
            }
          })}
        />
        <div className="form-control-feedback">
          <span className="arrow"></span>
          <img src={imgError} />
          {errors.email && errors.email.type !== "inCorrect" && <span id="email-helper-text">Email is required.</span>}
          {errors.email && errors.email.type === "inCorrect" && <span id="email-helper-text">Email is incorrect.</span>}
        </div>
      </div>

      <div className={`form-group ${errors.password ? 'has-error' : ''}`}>
        <label className="label-config" htmlFor="password">Password</label>
        <input type="password" className="form-control" id="password" aria-describedby="password-helper-text"
          defaultValue={formValues.passWord}
          placeholder="Password"
          {...register("password", {
            required: true
          })}
        />
        <div className="form-control-feedback">
          <span className="arrow"></span>
          <img src={imgError} />
          {errors.password && <span id="password-helper-text">Password is required.</span>}
        </div>
      </div>

      <div className={`form-group ${errors.confirmPassword ? 'has-error' : ''}`}>
        <label className="label-config" htmlFor="confirmPassword">Confirm Password</label>
        <input type="password" className="form-control" id="confirmPassword" aria-describedby="confirm-password-helper-text"
          defaultValue={formValues.confirmPassword}
          placeholder="Confirm Password"
          {...register("confirmPassword", {
            required: true,
            validate: {
              inCorrect: (value, formValues) => {
                return value !== formValues.passWord;
              },
            }
          })}
        />
        <div className="form-control-feedback">
          <span className="arrow"></span>
          <img src={imgError} />
          {errors.confirmPassword && errors.confirmPassword.type !== 'inCorrect' && <span id="confirm-password-helper-text">Confirm password is required.</span>}
          {errors.confirmPassword && errors.confirmPassword.type === 'inCorrect' && <span id="confirm-password-helper-text">Confirm password not matched.</span>}
        </div>
      </div>


      <div className={`form-group ${errors.phoneNumber ? 'has-error' : ''}`}>
        <label className="label-config" htmlFor="phoneNumber">Phone number</label>
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
          {errors.phoneNumber && <span id="phone-number-helper-text">Phone number is required.</span>}
        </div>
      </div>


      <Button variant="contained" color="primary" type="submit">
        Sign up
      </Button>
    </form>
  );
}

export default SignUp;