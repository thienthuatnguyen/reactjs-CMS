
import { Routes, Route } from 'react-router-dom';
import NotFoundPage from './containers/NotFoundPage';
import PublicRoute from './containers/public-router/PublicRoute';
import PrivateRoute from './containers/private-router/PrivateRoute';
import Login from './containers/login/Login';
import SignUp from './containers/signup/SignUp';
import LoginAuthention from './containers/login-authention/LoginAuthention';
import ProfilePatientPage from './containers/profile-patient/ProfilePatient';
import CreateProfilePage from './containers/create-profile/CreateProfile';
import ProfilePatientDetailPage from './containers/profile-patient-detail/ProfilePatientDetail';
import BookingSchedulePage from './containers/booking-schedule/BookingSchedule';
import SearchProfilePage from './containers/search-profile/SearchProfile';
import HospitalPage from './containers/hospital/HospitalPage';
import HospitalDetailPage from './containers/hospital-detail/HospitalDetailPage';
import ForgetPasswordPage from './containers/forget-password/ForgetPassword';
import UserAccountPage from './containers/user-account/UserAccount';
function App() {
  return (
    <div className="wrapper-app">
      <Routes>
        <Route path="/" element={
          <PrivateRoute >
            <ProfilePatientPage></ProfilePatientPage>
          </PrivateRoute>} >
        </Route>
        <Route path="/dang-nhap" element={
          <PublicRoute >
            <Login></Login>
          </PublicRoute>} >
        </Route>
        <Route path="/dang-ky" element={
          <PublicRoute >
            <SignUp></SignUp>
          </PublicRoute>} >
        </Route>
        <Route path="/quen-mat-khau" element={
          <PublicRoute >
            <ForgetPasswordPage></ForgetPasswordPage>
          </PublicRoute>} >
        </Route>
        <Route path="/login-authention" element={
          <PublicRoute >
            <LoginAuthention></LoginAuthention>
          </PublicRoute>} >
        </Route>

        <Route path="/ho-so-benh-nhan">
          <Route path="/ho-so-benh-nhan" element={
            <PrivateRoute >
              <ProfilePatientPage></ProfilePatientPage>
            </PrivateRoute>} >
          </Route>
          <Route path=":patentId" element={
            <PrivateRoute >
              <ProfilePatientDetailPage></ProfilePatientDetailPage>
            </PrivateRoute>} >
          </Route>
          <Route path="search" element={
            <PrivateRoute >
              <SearchProfilePage></SearchProfilePage>
            </PrivateRoute>} >
          </Route>
        </Route>

        <Route path="/quan-ly-tai-khoan" element={
          <PrivateRoute >
            <UserAccountPage></UserAccountPage>
          </PrivateRoute>} >
        </Route>

        <Route path="/tao-ho-so" element={
          <PrivateRoute >
            <CreateProfilePage></CreateProfilePage>
          </PrivateRoute>} >
        </Route>

        <Route path="/dat-lich-kham" element={
          <PrivateRoute >
            <BookingSchedulePage></BookingSchedulePage>
          </PrivateRoute>} >
        </Route>

        <Route path="/benh-vien">
          <Route path="/benh-vien" element={
            <PrivateRoute>
              <HospitalPage></HospitalPage>
            </PrivateRoute>} />
          <Route path=":id" element={
            <PrivateRoute>
              <HospitalDetailPage></HospitalDetailPage>
            </PrivateRoute>} />
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
