import "./LoginAuthention.scss";
import { useForm } from "react-hook-form";
import { Button } from "@material-ui/core";
import vnGlag from "../../assets/images/vietnam-flag.png";
import AuthCode from "react-auth-code-input";
import { NavLink, useNavigate } from "react-router-dom";

function LoginAuthention() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit
  } = useForm();
  const onSubmit = (data) => {
    // alert(JSON.stringify(data));
    handleContinue();
  };
  const formValues = {
    phoneNumber: '0938225141'
  };
  const handleContinue = () => navigate(`/`);

  // const [result, setResult] = useState();
  const handleOnChange = (res: string) => {
    // setResult(res);
  };

  return (
    <form className="login-auth-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="phone-input">
        <label htmlFor="phoneNumber">
          Nhập mã OTP đã gửi về số điện thoại
        </label>
        <div className={`form-group phone-input-glag`}>
          <input disabled type="tel" className="form-control bg-gray" id="phoneNumber" 
            defaultValue={formValues.phoneNumber}
            placeholder="Số điện thoại"
            {...register("phoneNumber", {
              required: false
            })}
          />
          <img className="glag" src={vnGlag} alt="icon-glag"></img>
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
        <span>Nếu bạn đã có tài khoản,</span>&nbsp;vui lòng đăng nhập&nbsp;<NavLink className= "link" to="/dang-nhap">tại đây</NavLink>        
      </div>
    </form>
  );
}

export default LoginAuthention;