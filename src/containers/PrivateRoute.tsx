import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  // const auth = useAuth();
  const auth = true;
  return auth ? <div className="private-page">{children}</div> : <Navigate to="/login" />;
}
export default PrivateRoute;
