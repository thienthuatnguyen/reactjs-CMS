import { Navigate } from "react-router-dom";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import "./PrivateRoute.scss";
import { Banner } from "../../components/banner/Banner";
import { useRef, useState } from "react";

function PrivateRoute({ children }) {
  // const auth = useAuth();
  
  const [isVisible, setIsVisible] = useState(false);

  const auth = true;
  let myRef: any  = useRef<HTMLLinkElement>(null);

  const scrollToTop = ()=> {
    if(myRef.current) {
      myRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }
  const handleScroll = event => {
    if(event.currentTarget.scrollTop > 600) {
      setIsVisible(true)
    } else {
      setIsVisible(false);
    }
  };

  return auth ?
    <div className="main-page private-page">
      <Header></Header>
      <div  onScroll={handleScroll} className="page-content">
        <div ref={myRef}></div>
        <Banner></Banner>
        {children}
        <Footer></Footer>
        {isVisible && <button className="btn-scroll-page" onClick={()=> {scrollToTop()}}></button>}
      </div>
    </div> : <Navigate to="/login" />;
}
export default PrivateRoute;
