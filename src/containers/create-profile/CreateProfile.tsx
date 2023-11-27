import { Button, Tab, Tabs } from "@material-ui/core";
import "./CreateProfile.scss";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import imgError from "../../assets/images/square-warning-validator.svg";
import ProfileUpsert from "../../components/profile-upsert/ProfileUpsert";
import { useNavigate } from "react-router-dom";
import { RevertCode } from "../../components/revert-code/RevertCode";
import profileService from "../../services/profileService";
import ToastMessage from "../../components/toast-message/ToastMessage";

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
  const [configToast, setToastConfig] = useState({ type: '', isOpen: false, message: '' });
 


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
    if (!data.profileId) {
      return;
    } else {
      let params = {
        page: 1,
        per_page: 100,
        search: data.profileId
      }
      profileService.getListMedicalProfile(params).then((res: any) => {
        let body = res.data;
        if (body && body.error) {
          setToastConfig({ type: 'error', isOpen: true, message: body.message });
        } else if (body && !body.error && body.data && body.data.profiles.length) {
          navigate(`/ho-so-benh-nhan/search?value=${data.profileId}`);
        } else {
          setToastConfig({ type: 'error', isOpen: true, message: 'Không tìm thấy mã bệnh nhân' });
        }
      })

    }
  };
  const formValues = {
    profileId: ''
  };

  function revertCode() {
    setDisplayRevertCode(true)
  }
  function closeToast() {
    setToastConfig({ type: '', isOpen: false, message: '' });
  }



  return (
    <React.Fragment>
      <ToastMessage isOpen={configToast.isOpen} closeCallback={closeToast} type={configToast.type} message={configToast.message}></ToastMessage>
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
                      <div className={`form-group  ${errors.profileId ? 'has-error' : ''}`}>
                        <input type="tel" className="form-control bg-white" id="code" aria-describedby="code-helper-text"
                          defaultValue={formValues.profileId}
                          placeholder="Mã số bệnh nhân/BHYT"
                          {...register("profileId", {
                            required: false
                          })}
                        />
                        <div className="form-control-feedback">
                          <span className="arrow"></span>
                          <img src={imgError} alt="error" />
                          {errors.profileId && <span id="code-helper-text">Mã số là bắt buộc.</span>}
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
              {displayRevertCode && <RevertCode></RevertCode>}
            </TabPanel>
            <TabPanel value={value} index={1}>
              <ProfileUpsert profileInfo  isEdit={false} callBackCloseModal></ProfileUpsert>
            </TabPanel>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}
export default CreateProfilePage;

