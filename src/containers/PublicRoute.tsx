import { Navigate } from "react-router-dom";

function PublicRoute({ children }) {
  // const auth = useAuth();
  const auth = true;
  return auth ? <div className="public-page">{children}</div> : <Navigate to="/login" />;
}
export default PublicRoute;
