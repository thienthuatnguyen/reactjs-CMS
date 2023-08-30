import { Button, FormControl, InputLabel, MenuItem, Select, Tab, Tabs, TextField } from "@material-ui/core";
import "./CreateProfile.scss";
import React from "react";
import { useForm } from "react-hook-form";
import imgError from "../../assets/images/square-warning-validator.svg";

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

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => {
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
            <div className="form-create-profile">
              <div className="title">Nhập thông tin bệnh nhân</div>
              <div className="text-description">
                Vui lòng cung cấp thông tin chính xác để được phục vụ tốt nhất. Trong trường hợp cung cấp sai thông tin bệnh nhân và số điện thoại việc xác nhận cuộc hẹn sẽ không thành công trước khi đặt lịch khám.
              </div>
              <form className="wrapper-form" onSubmit={handleSubmit(onSubmitCreateProfile)}>
                <div className="items-inline">
                  <div className={`form-group item-input`}>
                    <InputLabel htmlFor="codeProfile" className="label-config">
                      <span>Mã hồ sơ bệnh nhân</span></InputLabel>
                    <input type="text" disabled className="form-control bg-white" id="codeProfile" aria-describedby="code-profile-helper-text"
                      defaultValue={formValuesProfile.codeProfile}
                      placeholder=""
                      {...register("codeProfile", {
                        required: false
                      })}
                    />
                  </div>

                  <div className={`form-group item-input`}>
                    <InputLabel htmlFor="codeInsurance" className="label-config">
                      <span>Mã bảo hiểm y tế</span></InputLabel>
                    <input type="text" className="form-control bg-white" id="codeInsurance" aria-describedby="code-insurance-helper-text"
                      defaultValue={formValuesProfile.codeInsurance}
                      placeholder="Nhập mã bảo hiểm y tế"
                      {...register("codeInsurance", {
                        required: false
                      })}
                    />
                  </div>

                </div>
                <div className="items-inline">
                  <div className={`form-group item-input required ${errors.name ? 'has-error' : ''}`}>
                    <InputLabel htmlFor="name" className="label-config">
                      <span>Họ và tên (có dấu)</span></InputLabel>
                    <input type="text" className="form-control bg-white" id="name" aria-describedby="name-helper-text"
                      defaultValue={formValuesProfile.name}
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
                    <InputLabel htmlFor="date" className="label-config"><span>Ngày sinh (ngày/tháng/năm)</span></InputLabel>
                    <TextField
                      id="date"
                      label="Birthday"
                      type="date"
                      defaultValue=""
                      className="my-datetime-picker"
                      InputLabelProps={{
                        shrink: false,
                      }}
                      {...register("dateOfBirth", {
                        required: true
                      })}
                    />
                    <div className="form-control-feedback">
                      <span className="arrow"></span>
                      <img src={imgError} alt="error" />
                      {errors.dateOfBirth && <span id="date-helper-text">Ngày tháng năm sinh là bắt buộc.</span>}
                    </div>
                  </div>

                </div>
                <div className="items-inline">
                  <div className="items-inline-child">
                    <div className={`form-group item-input required ${errors.phoneNumber ? 'has-error' : ''}`}>
                      <InputLabel htmlFor="phoneNumber" className="label-config">
                        <span>Số điện thoại</span></InputLabel>
                      <input type="tel" className="form-control bg-white" id="phoneNumber" aria-describedby="phone-number-helper-text"
                        defaultValue={formValuesProfile.phoneNumber}
                        placeholder="Phone number"
                        {...register("phoneNumber", {
                          required: true
                        })}
                      />
                      <div className="form-control-feedback">
                        <span className="arrow"></span>
                        <img src={imgError} alt="error" />
                        {errors.phoneNumber && <span id="phone-number-helper-text">Số điện thoại là bắt buộc.</span>}
                      </div>
                    </div>
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
                  </div>

                  <div className={`form-group item-input required ${errors.job ? 'has-error' : ''}`}>
                    <InputLabel htmlFor="job" className="label-config">
                      <span>Nghề nghiệp</span></InputLabel>
                    <input type="text" className="form-control bg-white" id="job" aria-describedby="job-helper-text"
                      defaultValue={formValuesProfile.job}
                      placeholder="Nhập nghề nghiệp"
                      {...register("job", {
                        required: true
                      })}
                    />
                    <div className="form-control-feedback">
                      <span className="arrow"></span>
                      <img src={imgError} alt="error" />
                      {errors.job && <span id="job-helper-text">Nghề nghiệp là bắt buộc.</span>}
                    </div>
                  </div>
                </div>

                <div className="items-inline">
                  <div className="items-inline-child">
                    <div className={`form-group item-input required ${errors.province ? 'has-error' : ''}`}>
                      <InputLabel id="province-label" className="label-config"><span>Tỉnh/thành</span></InputLabel>
                      <FormControl className={'my-wrapper-select'}>
                        <Select
                          MenuProps={{
                            anchorOrigin: {
                              vertical: "bottom",
                              horizontal: "left"
                            },
                            getContentAnchorEl: null
                          }}
                          labelId="province-label"
                          value={""}
                          onChange={handleSexChange}
                          displayEmpty
                          className={'my-select'}
                        >
                          <MenuItem value="" disabled>
                            Chọn tỉnh thành...
                          </MenuItem>
                          <MenuItem value={'male'}>Name</MenuItem>
                          <MenuItem value={'female'}>Nữ</MenuItem>
                        </Select>
                      </FormControl>
                      <div className="form-control-feedback">
                        <span className="arrow"></span>
                        <img src={imgError} alt="error" />
                        {errors.province && <span id="province-helper-text">Tỉnh/thành là bắt buộc.</span>}
                      </div>
                    </div>

                    <div className={`form-group item-input required ${errors.district ? 'has-error' : ''}`}>
                      <InputLabel className="label-config" id="district-label"><span>Quận/huyện </span></InputLabel>
                      <FormControl className={'my-wrapper-select'}>
                        <Select
                          MenuProps={{
                            anchorOrigin: {
                              vertical: "bottom",
                              horizontal: "left"
                            },
                            getContentAnchorEl: null
                          }}
                          labelId="district-label"
                          value={""}
                          onChange={handleSexChange}
                          displayEmpty
                          className={'my-select'}
                        >
                          <MenuItem value="" disabled>
                            Chọn quận/huyện...
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
                        {errors.district && <span id="district-helper-text">Quận/huyện là bắt buộc.</span>}
                      </div>
                    </div>
                  </div>
                  <div className="items-inline-child">
                    <div className={`form-group item-input required ${errors.ward ? 'has-error' : ''}`}>
                      <InputLabel id="ward-label" className="label-config"><span>Phường/xã</span></InputLabel>
                      <FormControl className={'my-wrapper-select'}>
                        <Select
                          MenuProps={{
                            anchorOrigin: {
                              vertical: "bottom",
                              horizontal: "left"
                            },
                            getContentAnchorEl: null
                          }}
                          labelId="ward-label"
                          value={""}
                          onChange={handleSexChange}
                          displayEmpty
                          className={'my-select'}
                        >
                          <MenuItem value="" disabled>
                            Chọn phường/xã...
                          </MenuItem>
                          <MenuItem value={'male'}>Name</MenuItem>
                          <MenuItem value={'female'}>Nữ</MenuItem>
                        </Select>
                      </FormControl>
                      <div className="form-control-feedback">
                        <span className="arrow"></span>
                        <img src={imgError} alt="error" />
                        {errors.ward && <span id="sex-helper-text">Phường/xã là bắt buộc.</span>}
                      </div>
                    </div>

                    <div className={`form-group item-input required ${errors.address ? 'has-error' : ''}`}>
                      <InputLabel htmlFor="address" className="label-config">
                        <span>Địa chỉ</span></InputLabel>
                      <input type="text" className="form-control bg-white" id="address" aria-describedby="address-helper-text"
                        defaultValue={formValuesProfile.address}
                        placeholder="Nhập địa chỉ"
                        {...register("address", {
                          required: true
                        })}
                      />
                      <div className="form-control-feedback">
                        <span className="arrow"></span>
                        <img src={imgError} alt="error" />
                        {errors.address && <span id="address-helper-text">Địa chỉ là bắt buộc.</span>}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="items-inline">

                  <div className={`form-group item-input required ${errors.family ? 'has-error' : ''}`}>
                    <InputLabel htmlFor="family" className="label-config">
                      <span>Người thân(Họ tên, số điện thoại, địa chỉ...)</span></InputLabel>
                    <textarea rows={3} className="form-control bg-white" id="family" aria-describedby="family-helper-text"
                      defaultValue={formValuesProfile.family}
                      placeholder="Nhập thông tin người thân"
                      {...register("family", {
                        required: true
                      })}
                    />
                    <div className="form-control-feedback">
                      <span className="arrow"></span>
                      <img src={imgError} alt="error" />
                      {errors.family && <span id="family-helper-text">Thông tin người thân là bắt buộc.</span>}
                    </div>
                  </div>

                  <div className={`form-group item-input`}>
                    <InputLabel htmlFor="ression" className="label-config">
                      <span>Lý do khám và triệu trứng</span></InputLabel>
                    <textarea rows={3} className="form-control bg-white" id="ression" aria-describedby="ression-helper-text"
                      defaultValue={formValuesProfile.ression}
                      placeholder="Nhập lý do khám, triệu trứng..."
                      {...register("ression", {
                        required: false
                      })}
                    />

                  </div>
                </div>
                <div className="items-inline">

                  <div className="items-inline-child">

                    <div className={`form-group item-input`}>
                      <InputLabel htmlFor="height" className="label-config">
                        <span>Chiều cao</span></InputLabel>
                      <input type="text" className="form-control bg-white" id="height" aria-describedby="height-helper-text"
                        defaultValue={formValuesProfile.height}
                        placeholder="Nhập chiều cao"
                        {...register("height", {
                          required: false
                        })}
                      />

                    </div>
                    <div className={`form-group item-input`}>
                      <InputLabel htmlFor="weight" className="label-config">
                        <span>Cân nặng</span></InputLabel>
                      <input type="text" className="form-control bg-white" id="weight" aria-describedby="weight-helper-text"
                        defaultValue={formValuesProfile.weight}
                        placeholder="Nhập cân nặng"
                        {...register("weight", {
                          required: false
                        })}
                      />

                    </div>
                  </div>

                  <div className={`form-group item-input`}>
                    <InputLabel htmlFor="history" className="label-config">
                      <span>Tiểu sử bệnh lý nền</span></InputLabel>
                    <textarea rows={3} className="form-control bg-white" id="history" aria-describedby="history-helper-text"
                      defaultValue={formValuesProfile.history}
                      placeholder="Nhập tiểu sử bệnh lý..."
                      {...register("history", {
                        required: false
                      })}
                    />

                  </div>
                </div>

                <div className="items-inline">
                  <div className={`form-group item-input`}>
                    <InputLabel htmlFor="external" className="label-config">
                      <span>Dị ứng</span></InputLabel>
                    <textarea rows={3} className="form-control bg-white" id="external" aria-describedby="external-helper-text"
                      defaultValue={formValuesProfile.external}
                      placeholder="Nhập các dị ứng..."
                      {...register("external", {
                        required: false
                      })}
                    />

                  </div>
                  <div className={`form-group item-input`}></div>

                </div>

                <div className="button-submit-center">
                  <Button variant="contained" color="primary" type="submit" className="my-btn btn-contained btn-blue-dash btn-search">
                    Xác nhận
                  </Button>
                </div>
              </form>
            </div>
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

