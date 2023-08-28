import React from "react";
import "./HomePage.scss";
import iconDoctor from "../../assets/images/icon-bacsi.png";
import iconYta from "../../assets/images/icon-yta.png";
import iconPartner from "../../assets/images/icon-contact.png";
import addIcon from "../../assets/images/icon-user-create.png";
import { Button, FormControl, MenuItem, Select } from "@material-ui/core";
// import { useNavigate } from "react-router-dom";
import { BannerDoctor } from "../../components/banner-doctor/BannerDoctor";
import { BannerDepartment } from "../../components/banner-department/BannerDepartment";
import { ProfileExpertDoctor } from "../../components/profile-expert-doctor/ProfileExpertDoctor";
import Avatar from "@material-ui/core/Avatar";
function HomePage() {
  // const navigate = useNavigate();
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    console.log('change')
  }
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <div className="wrapper-home-page">
      <div className="wrapper-create-profile">
        <div className="container-app">
          <Button
            variant="contained"
            className="my-btn btn-yellow btn-contained large-size btn-create-profile"
            startIcon={<Avatar
              src={
                addIcon
              }
            />}
          >
            Tạo hồ sơ của bạn
          </Button>
        </div>
      </div>
      <div className="wrapper-search-box">
        <div className="wrapper-item info-total">
          <div className="row-info-total">
            <div className="col-item">
              <div className="image-icon">
                <img src={iconDoctor} alt="icon"></img>
              </div>
              <div className="number">112</div>
              <div className="name">Bác sĩ</div>
            </div>
            <div className="col-item">
              <div className="image-icon">
                <img src={iconYta} alt="icon"></img>
              </div>
              <div className="number">112</div>
              <div className="name">Y tá</div>
            </div>
            <div className="col-item">
              <div className="image-icon">
                <img src={iconPartner} alt="icon"></img>
              </div>
              <div className="number">112</div>
              <div className="name">Lần thăm khám</div>
            </div>
          </div>
        </div>
        <div className="wrapper-item">
          <div className="search-box">
            <form className="search-form" onSubmit={onSubmit}>
              <FormControl className={'my-wrapper-select'}>
                <Select
                  MenuProps={{
                    anchorOrigin: {
                      vertical: "bottom",
                      horizontal: "left"
                    },
                    getContentAnchorEl: null
                  }}
                  value={""}
                  onChange={handleChange}
                  displayEmpty
                  className={'my-select'}
                >
                  <MenuItem value="" disabled>
                    Chọn khoa...
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <input type="text" className="search-input" id="search-input"
                placeholder="Nhập tên Bác sĩ, Y tá..." />

              <Button variant="contained" color="primary" type="submit" className="my-btn btn-green btn-contained btn-search">
                Tìm Kiếm
              </Button>
            </form>
          </div>
        </div>
      </div>
      <BannerDoctor></BannerDoctor>
      <BannerDepartment></BannerDepartment>
      <ProfileExpertDoctor></ProfileExpertDoctor>
    </div>
  );
}

export default HomePage;

