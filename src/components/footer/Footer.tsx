import { useForm } from "react-hook-form";
import logo from "../../assets/images/footer-logo.png"
import "./Footer.scss";
import { Button } from "@material-ui/core";
import imgError from "../../assets/images/square-warning-validator.svg";
import React, { useState } from "react";
import ToastMessage from "../toast-message/ToastMessage";
import profileService from "../../services/profileService";

export function Footer() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const [configToast, setToastConfig] = useState({ type: '', isOpen: false, message: '' });

  const formValues = {
    full_name: "",
    phone_number: '',
    content: ''
  };
  function closeToast() {
    setToastConfig({ type: '', isOpen: false, message: '' });
  }
  const onSubmit = (data) => {
    if (!data.full_name || !data.phone_number || !data.content) {
      return;
    } else {
      profileService.feedBack(data).then((res: any) => {
        let body = res.data;
        if (body && body.error) {
          setToastConfig({ type: 'error', isOpen: true, message: body.message });
        } else {
          setToastConfig({ type: 'success', isOpen: true, message: 'Bạn đã gửi phản hồi thành công!' });
        }
      })

    }

  };
  return (
    <React.Fragment>
      <ToastMessage isOpen={configToast.isOpen} closeCallback={closeToast} type={configToast.type} message={configToast.message}></ToastMessage>
      <footer className="footer-app">
        <div className="container-app">
          <div className="logo-footer">
            <a href="/ho-so-benh-nhan">
              <img src={logo} alt="logo"></img>
            </a>
          </div>
          <div className="content-footer">
            <div className="info">
              <h2 className="title">
                Thông tin liên hệ
              </h2>
              <ul>
                <li className="email">
                  o2fine.bacsi@gmail.com<br></br>
                  service@o2fine.com
                </li>
                <li className="phone">
                  +84 431 55 8754<br></br>
                  +84 431 56 87 21
                </li>
                <li className="address">
                  60 Paya Lebar Road, #09-12, Paya Lebar Square,<br></br> Singapore 409051
                </li>
              </ul>
            </div>
            <div className="service">
              <h2 className="title">
                Dịch vụ của chúng tôi
              </h2>
              <p>Cung cấp thông tin về bác sĩ</p>
              <p>Dịch vụ tư vấn sức khỏe từ xa</p>
              <p>Kết nối với bác sĩ ở Singapore</p>
            </div>
            <div className="feedback">
              <h2 className="title">
                Phản hồi
              </h2>
              <form onSubmit={handleSubmit(onSubmit)} className="feedback-form">
                <div className={`form-group ${errors.full_name ? 'has-error' : ''}`}>
                  <label className="label-config" htmlFor="fullName">
                    Tên:
                  </label>
                  <input type="text" className="form-control" id="fullName" aria-describedby="user-name-helper-text"
                    defaultValue={formValues.full_name}
                    placeholder=""
                    {...register("full_name", {
                      required: true
                    })}
                  />
                  <div className="form-control-feedback">
                    <span className="arrow"></span>
                    <img src={imgError} alt="error" />
                    {errors.full_name && <span id="user-name-helper-text">Tên là bắt buộc.</span>}
                  </div>
                </div>
                <div className={`form-group  ${errors.phone_number ? 'has-error' : ''}`}>
                  <label className="label-config" htmlFor="phone_number">
                    Số điện thoại:
                  </label>
                  <input type="tel" className="form-control" id="phone_number" aria-describedby="phone-number-helper-text"
                    defaultValue={formValues.phone_number}
                    placeholder=""
                    {...register("phone_number", {
                      required: true
                    })}
                  />
                  <div className="form-control-feedback">
                    <span className="arrow"></span>
                    <img src={imgError} alt="error" />
                    {errors.phone_number && <span id="phone-number-helper-text">Số điện thoại là bắt buộc.</span>}
                  </div>
                </div>

                <div className={`form-group  ${errors.content ? 'has-error' : ''}`}>
                  <label className="label-config" htmlFor="content">
                    Lời nhắn:
                  </label>
                  <textarea className="form-control" id="content" aria-describedby="content-helper-text"
                    defaultValue={formValues.content}
                    placeholder=""
                    {...register("content", {
                      required: true
                    })}
                  />
                  <div className="form-control-feedback">
                    <span className="arrow"></span>
                    <img src={imgError} alt="error" />
                    {errors.content && <span id="content-helper-text">Nội dung là bắt buộc.</span>}
                  </div>
                </div>
                <Button variant="contained" color="primary" type="submit" className="my-btn btn-send-feedback">
                  Gửi đi
                </Button>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  )
}
