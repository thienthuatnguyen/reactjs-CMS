import { NavLink, Navigate } from "react-router-dom";
import bgSignUp from "../../assets/images/bg-signup.png";
import bgSignUpMobile from "../../assets/images/bg-signup-mobile.png";
import logo from "../../assets/images/logo.png";
import "./PublicRoute.scss";
function PublicRoute({ children }) {
  // const auth = useAuth();
  const auth = true;
  return auth ?
    <div className="main-page public-page">
      <div className="box-wrapper">
        <div className="left-content">
          <h1 className="title">Welcome to</h1>
          <div className="logo">
            <NavLink to="/dang-nhap">
              <img src={logo} alt="logo"></img>
            </NavLink>
          </div>
          {children}
        </div>
        <div className="right-content">
          <img className="display-pc" src={bgSignUp} alt="baner-signup"></img>
          <img className="display-mobile" src={bgSignUpMobile} alt="baner-signup"></img>
        </div>
      </div>
    </div> : <Navigate to="/dang-nhap" />;
}
export default PublicRoute;
