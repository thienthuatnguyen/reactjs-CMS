import { Avatar, Button, Grid } from "@material-ui/core";
import "./ProfilePatient.scss";
import addIcon from "../../assets/images/icon-user-create.png";

function ProfilePatientPage() {
  const profiles = [1, 2, 3, 4];
  const getProfile = profiles => profiles.map((item, index) => (
    <Grid key={index} item xs={12} sm={6} md={6}>
      <div className="box-profile">
        <div className="top-info">
          <div className="name">Huỳnh Khang</div>
          <Button variant="contained"
            className="my-btn btn-blue-dash btn-contained">Chọn hồ sơ</Button>
        </div>
        <div className="content-info">
          <div className="row-content-info">
            <div className="col-content-info birthday">Ngày sinh:</div>
            <div className="col-content-info">10/09/1990</div>
          </div>
          <div className="row-content-info">
            <div className="col-content-info code">Mã hồ sơ bệnh nhân:</div>
            <div className="col-content-info">HCAMD1930</div>
          </div>
          <div className="row-content-info">
            <div className="col-content-info phone">Số điện thoại:</div>
            <div className="col-content-info">0938225141</div>
          </div>
          <div className="row-content-info">
            <div className="col-content-info address">Địa chỉ:</div>
            <div className="col-content-info">Ấp cây cam 1, xã vườn cam, huyện Mang Thít, Vĩnh Long</div>
          </div>
        </div>
      </div>
    </Grid>
  ));
  return (
    <div className="wrapper-profile-patient-page">
      <div className="container-app">
        <h1 className="title">Hồ sơ bệnh nhân</h1>
        <div className="top-title-page">
          <h2>Danh sách hồ sơ của bạn</h2>
          <Button
            variant="contained"
            className="my-btn btn-blue-dash btn-contained large-size btn-create-profile"
            startIcon={<Avatar
              src={
                addIcon
              }
            />}
          >
            Tạo hồ sơ của bạn
          </Button>
        </div>
        <div className="list-profile">
          <Grid container spacing={2}>
            {getProfile(profiles)}
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default ProfilePatientPage;

