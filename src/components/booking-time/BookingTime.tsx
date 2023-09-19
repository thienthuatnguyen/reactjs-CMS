import React, { useState } from "react";
import "./BookingTime.scss";
import { Button } from "@material-ui/core";


export function BookingTime({ callBackTimeMorningData, callBackTimeAfternonData }) {
  let morningTimes = ['07:00 - 08: 00','08:00 - 09: 00','09:00 - 10: 00','10:00 - 11: 00'];
  let afternonTimes = ['13:00 - 14: 00','14:00 - 15: 00','15:00 - 16: 00','16:00 - 17: 00'];
  const [morningTime, setMorningTime] = useState('07:00 - 08: 00');
  const [afternonTime, setAfternonTime] = useState('13:00 - 14: 00');

  function morningTimeCallback(value) {
    setMorningTime(value);
    callBackTimeMorningData(morningTime);
  }

  function afternonTimeCallback(value) {
    setAfternonTime(value);
    callBackTimeAfternonData(morningTime);
  }

  const getMorningItem = morningTimes => morningTimes.map((item, index) => (
    <Button key={index} variant="outlined" className={`my-btn  btn-blue btn-outlined btn-time-select ${item === morningTime ? 'active' : ''}`} onClick={()=> morningTimeCallback(item) } >{morningTime}</Button>
  ));
  const getAfternonItem = afternonTimes => afternonTimes.map((item, index) => (
    <Button key={index} className={`my-btn btn-blue btn-outlined btn-time-select ${item === afternonTime ? 'active' : ''}`} onClick={()=> afternonTimeCallback(item) }>{afternonTime}</Button>
  ));
  return (
    <div className="wrapper-booking-time">
      <div className="title">Buổi sáng</div>
      <div className="row-button">
        {getMorningItem(morningTimes)}
      </div>

      <div className="title">Buổi chiều</div>
      <div className="row-button">
        {getAfternonItem(afternonTimes)}
      </div>
    </div>
  )
}
