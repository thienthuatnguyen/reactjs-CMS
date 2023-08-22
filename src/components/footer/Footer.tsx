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
    comment: ''
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
                <input type="text" className="form-control bg-gray" id="userName" aria-describedby="user-name-helper-text"
                  defaultValue={formValues.userName}
                  placeholder="Nhập họ và tên"
                  {...register("userName", {
                    required: true
                  })}
                />
                <div className="form-control-feedback">
                  <span className="arrow"></span>
                  <img src={imgError} />
                  {errors.userName && <span id="user-name-helper-text">Họ và tên là bắt buộc.</span>}
                </div>
              </div>
              <div className={`form-group  ${errors.phoneNumber ? 'has-error' : ''}`}>
                <input type="tel" className="form-control bg-gray" id="phoneNumber" aria-describedby="phone-number-helper-text"
                  defaultValue={formValues.phoneNumber}
                  placeholder="Số điện thoại"
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
              
              <div className={`form-group  ${errors.phoneNumber ? 'has-error' : ''}`}>
                <input type="tel" className="form-control bg-gray" id="phoneNumber" aria-describedby="phone-number-helper-text"
                  defaultValue={formValues.phoneNumber}
                  placeholder="Số điện thoại"
                  {...register("phoneNumber", {
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
