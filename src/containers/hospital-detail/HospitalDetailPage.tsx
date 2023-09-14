import React from "react";
import "./HospitalDetailPage.scss";
import { Tab, Tabs } from "@material-ui/core";
// import { useNavigate } from "react-router-dom";
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

  return (
    <div className="wrapper-hospital-detail-page">
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
          Giới thiệu bệnh viện
        </TabPanel>
        <TabPanel value={value} index={1}>
          Khoa nội thận - tiết niệu
        </TabPanel>
        <TabPanel value={value} index={2}>
          Khoa tiêu hóa
        </TabPanel>
        <TabPanel value={value} index={3}>
          Khoa cơ xương khớp
        </TabPanel>
        <TabPanel value={value} index={4}>
          Khoa chấn thương chỉnh hình
        </TabPanel>
      </div>
    </div>
  );
}

export default HospitalDetailPage;

