import "./BookingSchedule.scss";
import DatePicker from "react-datepicker";
import { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import vi from 'date-fns/locale/vi';
import { useState } from "react";
import { BookingTime } from "../../components/booking-time/BookingTime";
import { Button } from "@material-ui/core";
registerLocale('vi', vi)
function BookingSchedulePage() {
  const [startDate, setStartDate] = useState(new Date());

  function handleDateChange(date) {
    setStartDate(date)
  }
  function getTimeMorningData(val) {
    console.log(val)
  }
  function getTimeAfternonData(val) {
    console.log(val)

  }
  const filterWeekends = (date) => {
    return date.getDay() !== 0 && date.getDay() !== 6; // Disable Sundays (0) and Saturdays (6)
  };
  return (
    <div className="wrapper-booking-schedule-page">
      <div className="container-app">
        <h1 className="title">Đặt lịch khám</h1>
        <div className="wrapper-content">
          <div className="left-content">
            <div className="box-info box-info-first">
              <div className="box-title">Thông tin bệnh nhân</div>
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
                    <div className="col-content-info phone">Số điện thoại:</div>
                    <div className="col-content-info">0938225141</div>
                  </div>
                  <div className="row-content-info">
                    <div className="col-content-info address">Địa chỉ:</div>
                    <div className="col-content-info">Ấp cây cam 1, xã vườn cam, huyện Mang Thít, Vĩnh Long</div>
                  </div>
                  <div className="row-content-info">
                    <div className="col-content-info sex">Giới tính:</div>
                    <div className="col-content-info">Nam</div>
                  </div>
                </div>
              </div>
            </div>
            <BookingTime callBackTimeMorningData={getTimeMorningData} callBackTimeAfternonData={getTimeAfternonData}></BookingTime>
            <div className="booking-confirm">
              <Button
                variant="contained"
                className="my-btn btn-blue-dash btn-contained large-size btn-booking-confirm">
                Xác nhận
              </Button>
            </div>

          </div>
          <div className="right-content">
            <div className="box-info no-padding">
              <div className="box-title">Vui lòng chọn ngày khám</div>
              <div className="wrapper-my-datepicker">
                <DatePicker locale="vi" selected={startDate} inline onChange={handleDateChange} filterDate={filterWeekends} />
              </div>
            </div>
            <div className="box-info">
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
            </div>
          </div>
        </div>
        <div className="booking-confirm display-mobile">
          <Button
            variant="contained"
            className="my-btn btn-blue-dash btn-contained large-size btn-booking-confirm">
            Xác nhận
          </Button>
        </div>
      </div>
    </div>
  );
}

export default BookingSchedulePage;

