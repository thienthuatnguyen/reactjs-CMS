import "./BookingSchedule.scss";
import DatePicker from "react-datepicker";
import { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import vi from 'date-fns/locale/vi';
import { useEffect, useState } from "react";
import { BookingTime } from "../../components/booking-time/BookingTime";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import { setDateBooked, setDepartmentId, setDoctorId, setHospitalId, setProfileId, setTimeBooked } from "../../actions/actions";
import { useNavigate } from "react-router-dom";
import profileService from "../../services/profileService";
import React from "react";
import ToastMessage from "../../components/toast-message/ToastMessage";
import hopitalService from "../../services/hospitalService";
import { ProfileInfoSchedule } from "../../components/profile-info-schedule/ProfileInfoSchedule";
registerLocale('vi', vi)
function BookingSchedulePage(props: { profileIdProp, hospitalIdProp, doctorIdProp, departmentIdProp, setProfileIdProp, setHospitalIdProp, setDoctorIdProp, setDepartmentIdProp, setDateBookedProp, setTimeBookedProp }) {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState('');
  const [resetTime, setResetTime] = useState(1);

  const navigate = useNavigate();
  const [profileInfo, setProfileInfo] = React.useState({
    full_name: '',
    birthday: '',
    code: '',
    phone_number: '',
    address: '',
    id: '',
    gender: ''

  });
  const [timeWorks, setTimeWorks] = React.useState([]);
  const [configToast, setToastConfig] = useState({ type: '', isOpen: false, message: '' });
  useEffect(() => {
    if ((props.profileIdProp && props.doctorIdProp && props.hospitalIdProp) || (props.profileIdProp && props.departmentIdProp && props.hospitalIdProp)) {
      getProfile();
      getTimeWork((new Date()).getDay());
    } else {
      navigate('/')
    }
  }, []);

  useEffect(() => {
    if (time)
      props.setTimeBookedProp(time);
  }, [time]);

  useEffect(() => {
    if (date) {
      let currentYear = date.getFullYear();
      let currentMonth = date.getMonth() + 1; 
      let currentDay = date.getDate();
      props.setDateBookedProp(currentYear + '-' + currentMonth + '-' + currentDay)
    }
   
  }, [date]);

  function handleDateChange(date) {
    setDate(date);
    getTimeWork(date.getDay());
    setTime('');
    setResetTime(Math.random());
  }
  function getProfile() {
    profileService.findMedicalProfile(props.profileIdProp).then(
      (res) => {
        let body = res.data;
        if (body && body.error) {
          setToastConfig({ type: 'error', isOpen: true, message: body.message });
        } else {
          setProfileInfo(body.data.profile);
        }
      }
    )
  }
  function getTimeWork(dayWeek) {
    let params: any = {};
    if (props.departmentIdProp && props.hospitalIdProp) {
      params = {
        department_id: props.departmentIdProp,
        hospital_id: props.hospitalIdProp
      }
    }
    if (props.doctorIdProp && props.hospitalIdProp) {
      params = {
        doctor_id: props.doctorIdProp,
        hospital_id: props.hospitalIdProp
      }
    }
    hopitalService.getTimeWorkDoctor(params).then(
      (res) => {
        let body = res.data;
        if (body && body.error) {
          setToastConfig({ type: 'error', isOpen: true, message: body.message });
        } else {
          let array: any = body.data.filter(el => { return el.weekday == dayWeek })
          setTimeWorks(array);
        }
      }
    )
  }


  function closeToast() {
    setToastConfig({ type: '', isOpen: false, message: '' });
  }
  function getTimeData(val) {
    setTime(val.start_time);
  }

  const filterWeekends = (date) => {
    return date.getDay() !== 0 && date.getDay() !== 6; // Disable Sundays (0) and Saturdays (6)
  };

  function confirmBooked() {
    navigate('/thanh-toan');
  }
  return (
    <React.Fragment>
      <ToastMessage isOpen={configToast.isOpen} closeCallback={closeToast} type={configToast.type} message={configToast.message}></ToastMessage>
      <div className="wrapper-booking-schedule-page">
        <div className="container-app">
          <h1 className="title">Đặt lịch khám</h1>
          <div className="wrapper-content">
            <div className="left-content">
              <ProfileInfoSchedule profileInfo={profileInfo}></ProfileInfoSchedule>
              <BookingTime reset={resetTime} timeWorks={timeWorks} callBackTimeData={getTimeData}></BookingTime>
            </div>
            <div className="right-content">
              <div className="box-info no-padding">
                <div className="box-title">Vui lòng chọn ngày khám</div>
                <div className="wrapper-my-datepicker">
                  <DatePicker locale="vi" selected={date} inline onChange={handleDateChange} filterDate={filterWeekends} />
                </div>
              </div>
              {/* <div className="box-info">
                <div className="box-title">Phiếu khám</div>
                <div className="detail-paper">
                  <div className="title-paper">Bệnh viện chợ rẫy</div>
                  <div className="row-paper">
                    <div className="col-paper">
                      Số thứ tự:
                    </div>
                    <div className="col-paper">
                      12
                    </div>
                  </div>
                  <div className="row-paper">
                    <div className="col-paper">
                      Phòng:
                    </div>
                    <div className="col-paper">
                      12
                    </div>
                  </div>

                  <div className="row-paper">
                    <div className="col-paper">
                      Giờ khám:
                    </div>
                    <div className="col-paper">
                      08: 00
                    </div>
                  </div>

                  <div className="row-paper">
                    <div className="col-paper">
                      Mã hồ sơ BN:
                    </div>
                    <div className="col-paper">
                      12sdsadsae234234
                    </div>
                  </div>

                  <div className="row-paper">
                    <div className="col-paper">
                      Chuyên khoa:
                    </div>
                    <div className="col-paper">
                      Nội thận
                    </div>
                  </div>

                  <div className="row-paper">
                    <div className="col-paper">
                      Bác sĩ:
                    </div>
                    <div className="col-paper">
                      Nguyễn Huỳnh Khang
                    </div>
                  </div>

                  <div className="row-paper">
                    <div className="col-paper">
                      Dịch vụ khám:
                    </div>
                    <div className="col-paper">
                      Khám BHYT
                    </div>
                  </div>

                  <div className="row-paper">
                    <div className="col-paper">
                      Lý do khám và triệu trứng:
                    </div>
                    <div className="col-paper">
                      Thấy khó tiểu tiện
                    </div>
                  </div>

                  <div className="row-paper">
                    <div className="col-paper">
                      Tiền sử bệnh lý:
                    </div>
                    <div className="col-paper">
                      Suy thận
                    </div>
                  </div>

                  <div className="row-paper">
                    <div className="col-paper">
                      Dị ứng:
                    </div>
                    <div className="col-paper">
                      Đồ ăn mặn
                    </div>
                  </div>

                  <div className="row-paper">
                    <div className="col-paper">
                      Phí khám:
                    </div>
                    <div className="col-paper">
                      150.000 đ
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          <div className="booking-confirm">
            <Button disabled={!time} onClick={() => confirmBooked()}
              variant="contained"
              className="my-btn btn-blue-dash btn-contained large-size btn-booking-confirm">
              Xác nhận
            </Button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = (state: any) => ({
  profileIdProp: state.profileId,
  hospitalIdProp: state.hospitalId,
  doctorIdProp: state.doctorId,
  departmentIdProp: state.departmentId
})

const mapDispatchToProps = (dispatch: any) => ({
  setProfileIdProp: (data: any) => dispatch(setProfileId(data)),
  setHospitalIdProp: (data: any) => dispatch(setHospitalId(data)),
  setDoctorIdProp: (data: any) => dispatch(setDoctorId(data)),
  setDepartmentIdProp: (data: any) => dispatch(setDepartmentId(data)),
  setDateBookedProp: (data: any) => dispatch(setDateBooked(data)),
  setTimeBookedProp: (data: any) => dispatch(setTimeBooked(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(BookingSchedulePage);

