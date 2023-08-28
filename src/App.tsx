
import { Routes, Route } from 'react-router-dom';
import AddMore from './containers/AddMore';
import NotFoundPage from './containers/NotFoundPage';
import PublicRoute from './containers/public-router/PublicRoute';
import PrivateRoute from './containers/private-router/PrivateRoute';
import Login from './containers/login/Login';
import SignUp from './containers/signup/SignUp';
import UserPage from './containers/user/User';
import UserDetailPage from './containers/user/UserDetail';
import UseState from './containers/UseState';
import LoginAuthention from './containers/login-authention/LoginAuthention';
import HomePage from './containers/home-page/HomePage';
import ProfilePatientPage from './containers/profile-patient/ProfilePatient';
function App() {
  return (
    <div className="wrapper-app">
      <Routes>
        <Route path="/user">
          <Route path=":userId" element={<UserDetailPage />} />
          <Route path="/user" element={
            <PrivateRoute>
              <UserPage />
            </PrivateRoute>} />
        </Route>
        <Route path="/" element={
          <PrivateRoute >
            <HomePage></HomePage>
          </PrivateRoute>} >
        </Route>
        <Route path="/login" element={
          <PublicRoute >
            <Login></Login>
          </PublicRoute>} >
        </Route>
        <Route path="/sign-up" element={
          <PublicRoute >
            <SignUp></SignUp>
          </PublicRoute>} >
        </Route>
        <Route path="/login-authention" element={
          <PublicRoute >
            <LoginAuthention></LoginAuthention>
          </PublicRoute>} >
        </Route>
        <Route path="/demo-hook-use-state" element={
          <PublicRoute >
            <UseState></UseState>
          </PublicRoute>} >
        </Route>
        <Route path="/add" element={
          <PrivateRoute >
            <AddMore></AddMore>
          </PrivateRoute>} >
        </Route>

        <Route path="/ho-so-benh-nhan" element={
          <PrivateRoute >
            <ProfilePatientPage></ProfilePatientPage>
          </PrivateRoute>} >
        </Route>

        <Route path="*" element={<NotFoundPage />}>

        </Route>
        <Route path="/404" element={<NotFoundPage />}>

        </Route>

      </Routes>
    </div>
  );
}

export default App;
