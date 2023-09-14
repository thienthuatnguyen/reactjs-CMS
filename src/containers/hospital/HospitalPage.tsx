import React from "react";
import "./HospitalPage.scss";
// import { useNavigate } from "react-router-dom";
import { BannerDoctor } from "../../components/banner-doctor/BannerDoctor";
import { BannerDepartment } from "../../components/banner-department/BannerDepartment";
import { ProfileExpertDoctor } from "../../components/profile-expert-doctor/ProfileExpertDoctor";
function HospitalPage() {
  // const navigate = useNavigate();


  return (
    <div className="wrapper-hospital-page">
      <BannerDoctor></BannerDoctor>
      <BannerDepartment></BannerDepartment>
      <ProfileExpertDoctor></ProfileExpertDoctor>
    </div>
  );
}

export default HospitalPage;

