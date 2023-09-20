import React from "react";
import "./HospitalDetailPage.scss";
import { Button, Tab, Tabs } from "@material-ui/core";
// import { useNavigate } from "react-router-dom";
import imgHospital from "../../assets/images/khoa.png";
import imgHospitalDetail from "../../assets/images/bv-detail.png";
import { ListExpertDoctor } from "../../components/list-expert-doctor/ListExpertDoctor";
import { IntroduceInfo } from "../../components/introduce-info/IntroduceInfo";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <div>
          {children}
        </div>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

function HospitalDetailPage() {
  // const navigate = useNavigate();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const GeneralInfo = () => (
    <div className="general-info">
      <div className="image-hospital">
        <img src={imgHospital} alt="khoa" />
      </div>
      <div className="info">
        <div className="top">
          <div className="name">Bệnh viện chợ rẫy</div>
          <div className="address">436/4 Nguyễn Thị Minh Khai, quận 10, thành phố Hồ Chí Minh</div>
        </div>
        <div className="bottom">
          <Button
            variant="contained"
            className="my-btn btn-blue-dash btn-contained">
            Lễ tân bệnh viện
          </Button>
          <Button
            variant="contained"
            className="my-btn btn-blue-dash btn-contained">
            Đặt lịch hẹn
          </Button>
        </div>
      </div>
    </div>
  )

  const DetailInfo = () => (
    <div className="detail-info">
      <img src={imgHospitalDetail} alt="khoa" />
      <div className="text-detail">
        When the modal dialog is displayed on the screen, the keyboard focus moves to the end of the modal dialog content instead of moving at the beginning of the modal dialog content.
        When the modal dialog is displayed on the screen, the keyboard focus moves to the end of the modal dialog content instead of moving at the beginning of the modal dialog content.
        When the modal dialog is displayed on the screen, the keyboard focus moves to the end of the modal dialog content instead of moving at the beginning of the modal dialog content.
        When the modal dialog is displayed on the screen, the keyboard focus moves to the end of the modal dialog content instead of moving at the beginning of the modal dialog content.
        When the modal dialog is displayed on the screen, the keyboard focus moves to the end of the modal dialog content instead of moving at the beginning of the modal dialog content.
        When the modal dialog is displayed on the screen, the keyboard focus moves to the end of the modal dialog content instead of moving at the beginning of the modal dialog content.
        When the modal dialog is displayed on the screen, the keyboard focus moves to the end of the modal dialog content instead of moving at the beginning of the modal dialog content.
      </div>
    </div>
  )

  const TimeWork = () => (
    <div className="time-work">
      <h2 className="title"><span>Thời gian làm việc</span></h2>
      <div className="table-schedule">
        <div className="row-item header">
          <div className="col-item col-date">
            Ngày
          </div>
          <div className="col-item col-time">
            Thời gian
          </div>
          <div className="col-item col-action">

          </div>
        </div>
        <div className="row-item">
          <div className="col-item col-date">
            Thứ 2
          </div>
          <div className="col-item col-time">
            17:00 - 19:00
          </div>
          <div className="col-item col-action">
            <Button
              variant="outlined"
              className="my-btn btn-blue btn-outlined">
              Đặt lịch hẹn
            </Button>
          </div>
        </div>

        <div className="row-item">
          <div className="col-item col-date">
            Thứ 3
          </div>
          <div className="col-item col-time">
            17:00 - 19:00
          </div>
          <div className="col-item col-action">
            <Button
              variant="outlined"
              className="my-btn btn-blue btn-outlined">
              Đặt lịch hẹn
            </Button>
          </div>
        </div>

        <div className="row-item">
          <div className="col-item col-date">
            Thứ 4
          </div>
          <div className="col-item col-time">
            17:00 - 19:00
          </div>
          <div className="col-item col-action">
            <Button
              variant="outlined"
              className="my-btn btn-blue btn-outlined">
              Đặt lịch hẹn
            </Button>
          </div>
        </div>

        <div className="row-item">
          <div className="col-item col-date">
            Thứ 5
          </div>
          <div className="col-item col-time">
            17:00 - 19:00
          </div>
          <div className="col-item col-action">
            <Button
              variant="outlined"
              className="my-btn btn-blue btn-outlined">
              Đặt lịch hẹn
            </Button>
          </div>
        </div>

        <div className="row-item">
          <div className="col-item col-date">
            Thứ 6
          </div>
          <div className="col-item col-time">
            17:00 - 19:00
          </div>
          <div className="col-item col-action">
            <Button
              variant="outlined"
              className="my-btn btn-blue btn-outlined">
              Đặt lịch hẹn
            </Button>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="wrapper-hospital-detail-page">
      <div className="container-app">
        <div className="content-hospital">
          <div className="left-content">
            <Tabs
              className="my-vertical-tab"
              orientation="vertical"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs hospital">
              <Tab label="Giới thiệu bệnh viện" {...a11yProps(0)} />
              <Tab label="Khoa nội thận - tiết niệu" {...a11yProps(1)} />
              <Tab label="Khoa tiêu hóa" {...a11yProps(2)} />
              <Tab label="Khoa cơ xương khớp" {...a11yProps(3)} />
              <Tab label="Khoa chấn thương chỉnh hình" {...a11yProps(4)} />
            </Tabs>
          </div>
          <div className="right-content">
            <TabPanel value={value} index={0}>
              <div className="wrapper-right-content">
                {GeneralInfo()}
                {DetailInfo()}
                {TimeWork()}
              </div>

            </TabPanel>
            <TabPanel value={value} index={1}>
              <div className="wrapper-right-content">
                {GeneralInfo()}
                <IntroduceInfo></IntroduceInfo>
                <ListExpertDoctor></ListExpertDoctor>
                {TimeWork()}
              </div>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <div className="wrapper-right-content">
                {GeneralInfo()}
                <IntroduceInfo></IntroduceInfo>
                <ListExpertDoctor></ListExpertDoctor>
                {TimeWork()}
              </div>
            </TabPanel>
            <TabPanel value={value} index={3}>
              <div className="wrapper-right-content">
                {GeneralInfo()}
                <IntroduceInfo></IntroduceInfo>
                <ListExpertDoctor></ListExpertDoctor>
                {TimeWork()}
              </div>
            </TabPanel>
            <TabPanel value={value} index={4}>
              <div className="wrapper-right-content">
                {GeneralInfo()}
                <IntroduceInfo></IntroduceInfo>
                <ListExpertDoctor></ListExpertDoctor>
                {TimeWork()}
              </div>
            </TabPanel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HospitalDetailPage;

