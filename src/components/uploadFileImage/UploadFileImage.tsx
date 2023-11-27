import React, { useState } from "react";
import "./UploadFileImage.scss";


export function UploadFileImage({ id, callBackData, medicalResult }) {
  const [file, setFile] = useState<any | null>(null);
  function handleChange(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
    callBackData(e.target.files[0]);
  }
  return (
    <React.Fragment>
      <div className="image-updated">
        {medicalResult.map((el: any, index: any) => {
          if (el.file) return <div key={index} className="image-item">
            <img src={el.file} alt="result"></img>
          </div>
        })}
      </div>
      {file && <div className="result-img">
        <img src={file} alt="result"></img>
        <span>Kết quả khám bằng hình ảnh</span>
      </div>}
      <div className="upload-image">
        <div className="btn-upload-img">
          <label htmlFor={id}>Tải hình kết quả khám</label>
          <input type="file" id={id} name="img" accept="image/*" onChange={handleChange}></input>
        </div>
        <span>Chụp hình kết quả khám của bạn</span>
      </div>
    </React.Fragment>
  )
}
