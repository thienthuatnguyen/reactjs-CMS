import { Accordion, AccordionDetails, AccordionSummary, Avatar, Button, Grid } from "@material-ui/core";
import "../profile-patient/ProfilePatient.scss";
import deleteIcon from "../../assets/images/delete.svg";
import editIcon from "../../assets/images/edit.svg";

import { useNavigate } from "react-router-dom";
import ExpandMoreIcon from '../../assets/images/arrow-accordion.svg';
import { UploadFileImage } from "../../components/uploadFileImage/UploadFileImage";
function ProfilePatientDetailPage() {
  const navigate = useNavigate();
  function getData(val) {
    console.log(val)
  }
  return (
    <div className="wrapper-profile-patient-page">
      <div className="container-app">
        <h1 className="title">Hồ sơ bệnh nhân</h1>
        <div className="top-title-page">
          <h2>Chi tiết hồ sơ của bạn</h2>
          <div className="group-action">
            <Button 
              variant="contained"
              className="my-btn btn-red btn-contained large-size btn-delete-profile"
              startIcon={<Avatar
                src={
                  deleteIcon
                }
              />}
            >
              Xóa hồ sơ
            </Button>
            <Button 
              variant="contained"
              className="my-btn btn-blue btn-contained large-size btn-edit-profile"
              startIcon={<Avatar
                src={
                  editIcon
                }
              />}
            >
              Sửa hồ sơ
            </Button>
          </div>

        </div>
        <div className="list-profile">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6}>

              <div className="box-profile">
                <div className="top-info">
                  <div className="name">Huỳnh Khang</div>
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
              <div className="box-profile box-profile-schedule">
                <div className="top-info">
                  <div className="title">Lịch tái khám</div>
                </div>
                <div className="content-info">
                  <div className="row-schedule">
                    <div className="col-item">Ngày tái khám</div>
                    <div className="col-item">Trạng thái</div>
                  </div>
                  <div className="row-schedule">
                    <div className="col-item">15/07/2023</div>
                    <div className="col-item col-status">Sắp đến ngày</div>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <div className="box-profile box-profile-result">
                <div className="top-info">
                  <div className="title">Kết quả khám</div>
                </div>
                <div className="content-info">
                  <Accordion className="my-accordion">
                    <AccordionSummary
                      expandIcon={<Avatar
                        src={
                          ExpandMoreIcon
                        }
                      />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <div className="header-content">
                        <div className="date-text">22/10/2023</div>
                        <div className="date-text">Khám nội thận - bệnh viện chỡ rẫy</div>
                      </div>
                    </AccordionSummary>
                    <AccordionDetails>
                      <div className="detail-content">
                        <UploadFileImage id={'id1'} callBackData={getData}></UploadFileImage>
                      </div>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion className="my-accordion">
                    <AccordionSummary
                      expandIcon={<Avatar
                        src={
                          ExpandMoreIcon
                        }
                      />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <div className="header-content">
                        <div className="date-text">22/10/2023</div>
                        <div className="date-text">Khám nội thận - bệnh viện chỡ rẫy</div>
                      </div>
                    </AccordionSummary>
                    <AccordionDetails>
                      <div className="detail-content">
                        <UploadFileImage id={'id2'} callBackData={getData}></UploadFileImage>
                      </div>
                    </AccordionDetails>
                  </Accordion>

                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default ProfilePatientDetailPage;

