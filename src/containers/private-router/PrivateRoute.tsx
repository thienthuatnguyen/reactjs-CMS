import { Navigate } from "react-router-dom";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import "./PrivateRoute.scss";
import { Banner } from "../../components/banner/Banner";

function PrivateRoute({ children }) {
  // const auth = useAuth();
  const auth = true;
  return auth ?
    <div className="main-page private-page">
      <Header></Header>
      <div className="page-content">
        <Banner></Banner>
        {children}
        <Footer></Footer>
      </div>
    </div> : <Navigate to="/login" />;
}
export default PrivateRoute;
