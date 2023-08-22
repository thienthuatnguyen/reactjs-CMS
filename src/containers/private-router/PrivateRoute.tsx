import { Navigate } from "react-router-dom";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import "./PrivateRoute.scss";

function PrivateRoute({ children }) {
  // const auth = useAuth();
  const auth = true;
  return auth ?
    <div className="main-page private-page">
      <Header></Header>
      <div className="page-content">
        {children}
      </div>
      <Footer></Footer>
    </div> : <Navigate to="/login" />;
}
export default PrivateRoute;
