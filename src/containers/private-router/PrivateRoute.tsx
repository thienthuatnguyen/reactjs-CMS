import { Navigate } from "react-router-dom";
import { Footer } from "../../components/footer/Footer";
import "./PrivateRoute.scss";
import { Banner } from "../../components/banner/Banner";
import { useEffect, useRef, useState } from "react";
import authService from "../../services/authService";
import { connect } from "react-redux";
import { setUser } from "../../actions/actions";
import Header from "../../components/header/Header";

function PrivateRoute({ dispatch, children }) {

  const [isVisible, setIsVisible] = useState(false);
  const [auth, setAuth] = useState(true);

  let myRef: any = useRef<HTMLLinkElement>(null);
  useEffect(() => {
    authService.getUser().then(
      (res) => {
        let body = res.data;
        if ((body.error == false) && body.data) {
          setAuth(true);
        } else {
          setAuth(false);

        }
        dispatch(setUser(body));
      }
    ).finally(() => { })
  });

  const scrollToTop = () => {
    if (myRef.current) {
      myRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }
  const handleScroll = event => {
    if (event.currentTarget.scrollTop > 600) {
      setIsVisible(true)
    } else {
      setIsVisible(false);
    }
  };

  return auth ?
    <div className="main-page private-page">
      <Header></Header>
      <div onScroll={handleScroll} className="page-content">
        <div ref={myRef}></div>
        <Banner></Banner>
        {children}
        <Footer></Footer>
        {isVisible && <button className="btn-scroll-page" onClick={() => { scrollToTop() }}></button>}
      </div>
    </div> : <Navigate to="/dang-nhap" />;
}
export default connect()(PrivateRoute);
