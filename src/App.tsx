
import { Routes, Route, Navigate } from 'react-router-dom';
import NotFoundPage from './containers/NotFoundPage';
import PublicRoute from './containers/public-router/PublicRoute';
import PrivateRoute from './containers/private-router/PrivateRoute';
import Login from './containers/login/Login';
import SignUp from './containers/signup/SignUp';
import ProfilePatientPage from './containers/profile-patient/ProfilePatient';
import CreateProfilePage from './containers/create-profile/CreateProfile';
import ProfilePatientDetailPage from './containers/profile-patient-detail/ProfilePatientDetail';
import ForgetPasswordPage from './containers/forget-password/ForgetPassword';
import UserAccountPage from './containers/user-account/UserAccount';
import VerifyForgotPasswordPage from './containers/verify-forgot-password/VerifyForgotPassword';
import BookingWithDoctorPage from './containers/booking-with-doctor/BookingWithDoctorPage';
import BookingWithHospitalPage from './containers/booking-with-hospital/BookingWithHospitalPage';
import BookingAtHomePage from './containers/booking-at-home/BookingAtHomePage';
import BookingSchedulePage from './containers/booking-schedule/BookingSchedule';
import BookingHospitalSchedulePage from './containers/booking-hospital-schedule/BookingHospitalSchedule';

import InvoicePage from './containers/invoice/InvoicePage';
function App() {
  return (
    <div className="wrapper-app">
      <Routes>
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
        <Route path="/xac-thuc-mat-khau" element={
          <PublicRoute >
            <VerifyForgotPasswordPage></VerifyForgotPasswordPage>
          </PublicRoute>} >
        </Route>

        <Route path="/" element={<PrivateRoute />}>
          <Route path="" element={<ProfilePatientPage />} />

          <Route path="ho-so-benh-nhan">
            <Route path="" element={<ProfilePatientPage></ProfilePatientPage>} >
            </Route>
            <Route path=":patentId" element={<ProfilePatientDetailPage></ProfilePatientDetailPage>} >
            </Route>
            <Route path="search" element={<ProfilePatientPage></ProfilePatientPage>} >
            </Route>
          </Route>

          <Route path="quan-ly-tai-khoan" element={<UserAccountPage></UserAccountPage>} >
          </Route>

          <Route path="tao-ho-so" element={<CreateProfilePage></CreateProfilePage>} >
          </Route>

          <Route path="dat-lich-kham-voi-bac-si" element={<BookingSchedulePage></BookingSchedulePage>} >
          </Route>

          <Route path="dat-lich-kham-voi-benh-vien" element={<BookingHospitalSchedulePage></BookingHospitalSchedulePage>} >
          </Route>

          <Route path="dat-kham-theo-bac-si" element={<BookingWithDoctorPage></BookingWithDoctorPage>}></Route>
          <Route path="dat-kham-theo-benh-vien">
            <Route path="" element={<BookingWithHospitalPage></BookingWithHospitalPage>}>
            </Route>
            <Route path="search" element={<BookingWithDoctorPage></BookingWithDoctorPage>}>
            </Route>
          </Route>
          <Route path="dat-cham-soc-tai-nha">
            <Route path="" element={<BookingAtHomePage></BookingAtHomePage>} >
            </Route>
            <Route path="search" element={<BookingWithDoctorPage></BookingWithDoctorPage>}>
            </Route>
          </Route>

          <Route path="thanh-toan" element={<InvoicePage></InvoicePage>} >
          </Route>
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
