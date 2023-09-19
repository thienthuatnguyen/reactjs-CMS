import React from "react";
import "./HospitalPage.scss";
// import { useNavigate } from "react-router-dom";
import { BannerDepartment } from "../../components/banner-department/BannerDepartment";
import { BannerHospital } from "../../components/banner-hospital/BannerHospital";
import { ProfileHospital } from "../../components/profile-hospital/ProfileHospital";
function HospitalPage() {
  // const navigate = useNavigate();


  return (
    <div className="wrapper-hospital-page">
      <BannerHospital></BannerHospital>
      <BannerDepartment></BannerDepartment>
      <ProfileHospital></ProfileHospital>
    </div>
  );
}

export default HospitalPage;

