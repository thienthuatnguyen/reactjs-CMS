import React, { useEffect, useState } from "react";
import "./BookingTime.scss";
import { Button } from "@material-ui/core";


export function BookingTime({ reset, timeWorks, callBackTimeData }) {
 
  const [timeSelect, setTimeSelect] = useState(null);

  useEffect(() => {
    setTimeSelect(null);
  }, [reset]);

  function timeCallback(data) {
    setTimeSelect(data.id)
    callBackTimeData(data);
  }

  const getItem = times => times.map((item, index) => (
    <Button key={index} variant="outlined" className={`my-btn  btn-blue btn-outlined btn-time-select ${item.id === timeSelect ? 'active' : ''}`} onClick={()=> timeCallback(item) } >{item.start_time} - {item.end_time}</Button>
  ));
  
  return (
    <div className="wrapper-booking-time">
      <div className="title">Chọn giờ khám</div>
      <div className="row-button">
        {timeWorks.length <= 0 && <p>Bác sĩ không có giờ khám trong ngày này, vui lòng chọn ngày khác!</p>}
        {timeWorks.length > 0 && getItem(timeWorks)}
      </div>
    </div>
  )
}
