import { Button, FormControl, InputLabel, MenuItem, Select, Tab, Tabs, TextField } from "@material-ui/core";
import "./CreateProfile.scss";
import React from "react";
import { useForm } from "react-hook-form";
import imgError from "../../assets/images/square-warning-validator.svg";
import ProfileUpsert from "../../components/profile-upsert/ProfileUpsert";
import { useNavigate } from "react-router-dom";

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`create-profile-tabpanel-${index}`}
      aria-labelledby={`create-profile-tab-${index}`}
      {...other}
    >
      {value === index && (
        <div className="content-tab">{children}</div>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `create-profile-tab-${index}`,
    'aria-controls': `create-profile-tabpanel-${index}`,
  };
}
function CreateProfilePage() {
  const [value, setValue] = React.useState(0);
  const [displayRevertCode, setDisplayRevertCode] = React.useState(false);
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => {
    navigate(`/ho-so-benh-nhan/search?id=${data.code}`)
  };
  const formValues = {
    code: ''
  };


  const onSubmitRevert = (data) => {
  };

  const onSubmitCreateProfile = (data) => {
  };
  const formValuesRevert = {
    name: '',
    sex: '',
    dateOfBirth: '',
    location: ''
  };

  const formValuesProfile = {
    codeProfile: 'ADSFFSFD4234324',
    codeInsurance: '',
    name: '',
    dateOfBirth: '',
    phoneNumber: '',
    sex: '',
    job: '',
    province: '',
    district: '',
    ward: '',
    address: '',
    family: '',
    ression: '',
    height: '',
    weight: '',
    history: '',
    external: ''
  };

  const states = ["An Giang", "Bac Giang", "Bac Kan", "Bac Lieu", "Bac Ninh", "Ba Ria-Vung Tau", "Ben Tre", "Binh Dinh", "Binh Duong", "Binh Phuoc", "Binh Thuan", "Ca Mau", "Cao Bang", "Dac Lak", "Dac Nong", "Dien Bien", "Dong Nai", "Dong Thap", "Gia Lai", "Ha Giang", "Hai Duong", "Ha Nam", "Ha Tay", "Ha Tinh", "Hau Giang", "Hoa Binh", "Hung Yen", "Khanh Hoa", "Kien Giang", "Kon Tum", "Lai Chau", "Lam Dong", "Lang Son", "Lao Cai", "Long An", "Nam Dinh", "Nghe An", "Ninh Binh", "Ninh Thuan", "Phu Tho", "Phu Yen", "Quang Binh", "Quang Nam", "Quang Ngai", "Quang Ninh", "Quang Tri", "Soc Trang", "Son La", "Tay Ninh", "Thai Binh", "Thai Nguyen", "Thanh Hoa", "Thua Thien-Hue", "Tien Giang", "Tra Vinh", "Tuyen Quang", "Vinh Long", "Vinh Phuc", "Yen Bai", "Can Tho", "Da Nang", "Hai Phong", "Hanoi", "Ho Chi Minh"];

  function revertCode() {
    setDisplayRevertCode(true)
  }
  function handleSexChange() {

  }
  return (
    <div className="wrapper-create-profile-page">
      <div className="container-app">
        <h1 className="title">Tạo mới hồ sơ</h1>
        <div className="wrapper-tab-create-profile">
          <Tabs className="my-tab" value={value} onChange={handleChange} aria-label="tabs create profile" centered>
            <Tab label="Đã từng khám" {...a11yProps(0)} />
            <Tab label="Chưa từng khám" {...a11yProps(1)} />
          </Tabs>
          <TabPanel value={value} index={0}>
            <div className="form-search-profile">
              <div className="title">Nhập mã số bệnh nhân/mã số BHYT</div>
              <div className="content-align">
                <form className="wrapper-form" onSubmit={handleSubmit(onSubmit)}>

                  <div className="wrapper-input">
                    <div className={`form-group  ${errors.code ? 'has-error' : ''}`}>
                      <input type="tel" className="form-control bg-white" id="code" aria-describedby="code-helper-text"
                        defaultValue={formValues.code}
                        placeholder="Mã số bệnh nhân/BHYT"
                        {...register("code", {
                          required: true
                        })}
                      />
                      <div className="form-control-feedback">
                        <span className="arrow"></span>
                        <img src={imgError} alt="error" />
                        {errors.code && <span id="code-helper-text">Mã số là bắt buộc.</span>}
                      </div>
                    </div>
                  </div>

                  <Button variant="contained" color="primary" type="submit" className="my-btn btn-contained btn-blue-dash btn-search">
                    Tìm kiếm
                  </Button>

                </form>
                <button type="button" className="btn-revert-code" onClick={() => { revertCode() }}>Tôi mất mã số bệnh nhân của mình</button>
              </div>
            </div>
            {displayRevertCode && <div className="form-revert-code">
              <div className="title">Tìm lại mã bệnh nhân</div>
              <form className="wrapper-form" onSubmit={handleSubmit(onSubmitRevert)}>
                <div className="items-inline">
                  <div className={`form-group item-input required ${errors.name ? 'has-error' : ''}`}>
                    <InputLabel htmlFor="name" className="label-config">
                      <span>Nhập họ và tên (có dấu)</span></InputLabel>
                    <input type="text" className="form-control bg-white" id="name" aria-describedby="name-helper-text"
                      defaultValue={formValuesRevert.name}
                      placeholder="Nhập họ và tên"
                      {...register("name", {
                        required: true
                      })}
                    />
                    <div className="form-control-feedback">
                      <span className="arrow"></span>
                      <img src={imgError} alt="error" />
                      {errors.name && <span id="name-helper-text">Họ và tên là bắt buộc.</span>}
                    </div>
                  </div>
                  <div className={`form-group item-input required ${errors.dateOfBirth ? 'has-error' : ''}`}>
                    <InputLabel htmlFor="date" className="label-config"><span>Ngày tháng năm sinh</span></InputLabel>
                    <TextField
                      id="date"
                      label="Birthday"
                      type="date"
                      defaultValue="2017-05-24"
                      className="my-datetime-picker"
                      InputLabelProps={{
                        shrink: false,
                      }}
                    />
                    <div className="form-control-feedback">
                      <span className="arrow"></span>
                      <img src={imgError} alt="error" />
                      {errors.dateOfBirth && <span id="date-helper-text">Ngày tháng năm sinh là bắt buộc.</span>}
                    </div>
                  </div>
                </div>
                <div className="items-inline">

                  <div className={`form-group item-input required ${errors.sex ? 'has-error' : ''}`}>
                    <InputLabel id="sex-label" className="label-config"><span>Giới tính</span></InputLabel>
                    <FormControl className={'my-wrapper-select'}>
                      <Select
                        MenuProps={{
                          anchorOrigin: {
                            vertical: "bottom",
                            horizontal: "left"
                          },
                          getContentAnchorEl: null
                        }}
                        labelId="sex-label"
                        value={""}
                        onChange={handleSexChange}
                        displayEmpty
                        className={'my-select'}
                      >
                        <MenuItem value="" disabled>
                          Chọn giới tính...
                        </MenuItem>
                        <MenuItem value={'male'}>Name</MenuItem>
                        <MenuItem value={'female'}>Nữ</MenuItem>
                      </Select>
                    </FormControl>
                    <div className="form-control-feedback">
                      <span className="arrow"></span>
                      <img src={imgError} alt="error" />
                      {errors.sex && <span id="sex-helper-text">Giới tính là bắt buộc.</span>}
                    </div>
                  </div>

                  <div className={`form-group item-input required ${errors.location ? 'has-error' : ''}`}>
                    <InputLabel className="label-config" id="location-label"><span>Tỉnh </span></InputLabel>
                    <FormControl className={'my-wrapper-select'}>
                      <Select
                        MenuProps={{
                          anchorOrigin: {
                            vertical: "bottom",
                            horizontal: "left"
                          },
                          getContentAnchorEl: null
                        }}
                        labelId="location-label"
                        value={""}
                        onChange={handleSexChange}
                        displayEmpty
                        className={'my-select'}
                      >
                        <MenuItem value="" disabled>
                          Chọn giới tính...
                        </MenuItem>
                        {states.map((name) => (
                          <MenuItem key={name} value={name}>
                            {name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    <div className="form-control-feedback">
                      <span className="arrow"></span>
                      <img src={imgError} alt="error" />
                      {errors.location && <span id="location-helper-text">Tỉnh thành là bắt buộc.</span>}
                    </div>
                  </div>
                </div>
                <div className="button-submit-center">
                  <Button variant="contained" color="primary" type="submit" className="my-btn btn-contained btn-blue-dash btn-search">
                    Xác nhận
                  </Button>
                </div>
              </form>
            </div>}
          </TabPanel>
          <TabPanel value={value} index={1}>
              <ProfileUpsert isEdit = {false}></ProfileUpsert>
          </TabPanel>
        </div>
      </div>
    </div>
  );
}
interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}
export default CreateProfilePage;

