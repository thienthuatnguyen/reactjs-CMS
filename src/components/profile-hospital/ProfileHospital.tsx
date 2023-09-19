import { Button, Grid } from "@material-ui/core";
import "./ProfileHospital.scss";
import imgDoctor from "../../assets/images/doctor-slider.jpg";
export function ProfileHospital() {
  const data = [1, 2, 3, 4, 5, 6, 6, 6];
  const getItem = data => data.map((item, index) => (
    <Grid key={index} item xs={12} sm={4} md={3}>
      <div className="wrapper-column">
        <img src={imgDoctor} alt="img"></img>
        <div className="name">GS BS Nguyen Thien Thuat</div>
        <div className="address">
          436/4 Nguyễn Thị Minh Khai, quận 10, thành phố Hồ Chí Minh
        </div>
        <div className="btn-detail">
          <Button variant="contained" className="my-btn btn-blue-dash btn-contained btn-detail">
            Xem chi tiết
          </Button>
        </div>
      </div>
    </Grid>
  ));
  return (
    <div className="wrapper-profile-hospital">
      <div className="wave-box">
        <h1 className="title">
          HỒ SƠ BỆNH VIỆN
        </h1>
      </div>
      <div className="container-app list-data">
        <Grid container spacing={2}>
          {getItem(data)}

        </Grid>
      </div>
    </div>
  )
}
