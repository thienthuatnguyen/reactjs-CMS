import { useForm } from "react-hook-form";
import logo from "../../assets/images/footer-logo.png"
import "./Footer.scss";
import { Button } from "@material-ui/core";
import imgError from "../../assets/images/square-warning-validator.svg";

export function Footer() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => {


  };
  const formValues = {
    userName: "",
    phoneNumber: '',
    message: ''
  };
  return (
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
              <div className={`form-group ${errors.userName ? 'has-error' : ''}`}>
                <label className="label-config" htmlFor="userName">
                  Tên:
                </label>
                <input type="text" className="form-control" id="userName" aria-describedby="user-name-helper-text"
                  defaultValue={formValues.userName}
                  placeholder=""
                  {...register("userName", {
                    required: true
                  })}
                />
                <div className="form-control-feedback">
                  <span className="arrow"></span>
                  <img src={imgError} alt="error" />
                  {errors.userName && <span id="user-name-helper-text">Tên là bắt buộc.</span>}
                </div>
              </div>
              <div className={`form-group  ${errors.phoneNumber ? 'has-error' : ''}`}>
                <label className="label-config" htmlFor="phoneNumber">
                  Số điện thoại:
                </label>
                <input type="tel" className="form-control" id="phoneNumber" aria-describedby="phone-number-helper-text"
                  defaultValue={formValues.phoneNumber}
                  placeholder=""
                  {...register("phoneNumber", {
                    required: true
                  })}
                />
                <div className="form-control-feedback">
                  <span className="arrow"></span>
                  <img src={imgError} alt="error"/>
                  {errors.phoneNumber && <span id="phone-number-helper-text">Số điện thoại là bắt buộc.</span>}
                </div>
              </div>

              <div className={`form-group`}>
                <label className="label-config" htmlFor="message">
                  Lời nhắn:
                </label>
                <textarea className="form-control" id="message" aria-describedby="message-helper-text"
                  defaultValue={formValues.message}
                  placeholder=""
                  {...register("message", {
                    required: false
                  })}
                />
              </div>
              <Button variant="contained" color="primary" type="submit" className="my-btn btn-send-feedback">
                Gửi đi
              </Button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  )
}
