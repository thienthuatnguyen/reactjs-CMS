import { Avatar, Breadcrumbs, Button, Link } from "@material-ui/core";
import "../profile-patient/ProfilePatient.scss";
import addIcon from "../../assets/images/icon-user-create.png";
// import { useNavigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";



function SearchProfilePage() {
  const navigate = useNavigate();
  return (
    <div className="wrapper-profile-patient-page search-profile-page">
      <div className="container-app">
        <h1 className="title">Hồ sơ bệnh nhân</h1>
        <div className="top-title-page">

          <Breadcrumbs aria-label="breadcrumb" className="my-breadcrumb">
            <Link onClick={() => { navigate("/ho-so-benh-nhan") }}>
              Hồ sơ bệnh nhân
            </Link>
            <h2>Kết quả tìm kiếm</h2>

          </Breadcrumbs>
          <Button onClick={() => { navigate("/tao-ho-so") }}
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
        <div className="result-profile">
          <h3 className="result-text">Kết quả khám ngày: 22/06/2023:</h3>
          <div className="wrapper-result">
            <div className="title">Bệnh viện chợ rẫy</div>
            <div className="name">Nguyễn Huỳnh Khang</div>
            <div className="content-wrapper">
              <div className="content-item">
                <div className="row-result">
                  <div className="col-item">
                    Ngày sinh:
                  </div>
                  <div className="col-item">10/09/1990</div>
                </div>
                <div className="row-result">
                  <div className="col-item">
                    Số điện thoại:
                  </div>
                  <div className="col-item">0938225141</div>
                </div>
                <div className="row-result">
                  <div className="col-item">
                    Giới tính:
                  </div>
                  <div className="col-item">Nam</div>
                </div>
                <div className="row-result">
                  <div className="col-item">
                    Địa chỉ:
                  </div>
                  <div className="col-item">Phường 10 HCM</div>
                </div>
                <div className="row-result">
                  <div className="col-item">
                    Đối tượng:
                  </div>
                  <div className="col-item">BHYT</div>
                </div>
              </div>
              <div className="content-item">
                <div className="row-result">
                  <div className="col-item">
                    Mã số BHYT:
                  </div>
                  <div className="col-item">2321ĐSDD</div>
                </div>
                <div className="row-result">
                  <div className="col-item">
                    Nơi chỉ định:
                  </div>
                  <div className="col-item">2321ĐSDD</div>
                </div>
                <div className="row-result">
                  <div className="col-item">
                    Kết quả:
                  </div>
                  <div className="col-item">2321ĐSDD</div>
                </div>
                <div className="row-result">
                  <div className="col-item">
                    Bác sĩ:
                  </div>
                  <div className="col-item">Nguyễn Thiện Thuật</div>
                </div>
                <div className="row-result">
                  <div className="col-item">
                    Mã số PIN:
                  </div>
                  <div className="col-item">2321ĐSDD</div>
                </div>
              </div>
            </div>
          
            <div className="btn-pre-book">
              <Button onClick={() => { navigate("/dat-lich-kham") }}
                variant="contained"
                className="my-btn btn-blue-dash btn-contained">
                Đặt lịch tái khám
              </Button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default SearchProfilePage;

