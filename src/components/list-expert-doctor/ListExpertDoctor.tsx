import { Button, Grid } from "@material-ui/core";
import "./ListExpertDoctor.scss";
import imgDoctor from "../../assets/images/doctor-slider.jpg";
export function ListExpertDoctor() {
  const data = [1, 2, 3, 4, 5, 6, 6, 6];
  const getItem = data => data.map((item, index) => (
    <Grid key={index} item xs={12} sm={4} md={4}>
      <div className="wrapper-column">
        <img src={imgDoctor} alt="img"></img>
        <div className="name">GS BS Nguyen Thien Thuat</div>
        <ul className="info-job">
          <li className="department">Sản khoa</li>
          <li className="hospital">Bệnh viện NASA</li>
          <li className="experience">10 năm kinh nghiệm</li>
        </ul>
        <Button variant="contained" className="my-btn btn-blue-dash btn-contained btn-detail">
          Xem chi tiết
        </Button>
      </div>
    </Grid>
  ));
  return (
    <div className="wrapper-list-expert-doctor">
      <h2 className="title">
        <span className="text">Danh sách bác sĩ chuyên khoa</span>
        <span className="line"></span>
      </h2>
      <div className="list-data">
        <Grid container spacing={2}>
          {getItem(data)}

        </Grid>
      </div>
    </div>
  )
}
