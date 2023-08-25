import { Button, Grid } from "@material-ui/core";
import "./ProfileExpertDoctor.scss";
import imgDoctor from "../../assets/images/doctor-slider.jpg";
export function ProfileExpertDoctor() {
  const data = [1, 2, 3, 4, 5, 6, 6,6];
  const getItem = data => data.map((item, index) => (
    <Grid key = {index} item xs={12} sm={4} md={3}>
      <div className="wrapper-column">
        <img src={imgDoctor} alt="img"></img>
        <div className="name">GS BS Nguyen Thien Thuat</div>
        <ul className="info-job">
          <li className="department">Sản khoa</li>
          <li className="hospital">Bệnh viện NASA</li>
          <li className="experience">10 năm kinh nghiệm</li>
        </ul>
        <Button variant="contained" className="my-btn btn-green btn-contained">
          Xem chi tiết
        </Button>
      </div>
    </Grid>
  ));
  return (
    <div className="wrapper-profile-expert-doctor">
      <div className="wave-box">
        <h1 className="title">
          HỒ SƠ CHUYÊN GIA Y TẾ
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
