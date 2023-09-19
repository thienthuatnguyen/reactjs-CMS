import React from "react";
import "./HospitalPage.scss";
// import { useNavigate } from "react-router-dom";
import { BannerDepartment } from "../../components/banner-department/BannerDepartment";
import { ProfileExpertDoctor } from "../../components/profile-expert-doctor/ProfileExpertDoctor";
import { BannerHospital } from "../../components/banner-hospital/BannerHospital";
function HospitalPage() {
  // const navigate = useNavigate();


  return (
    <div className="wrapper-hospital-page">
      <BannerHospital></BannerHospital>
      <BannerDepartment></BannerDepartment>
      <ProfileExpertDoctor></ProfileExpertDoctor>
    </div>
  );
}

export default HospitalPage;

