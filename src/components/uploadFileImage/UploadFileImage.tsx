import React, { useState } from "react";
import "./UploadFileImage.scss";


export function UploadFileImage({ id, callBackData }) {
  const [file, setFile] = useState<any | null>(null);
  function handleChange(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
    callBackData(e.target.files[0]);
  }
  return (
    <React.Fragment>

      {file && <div className="result-img">
        <img src={file} alt="result"></img>
        <span>Kết quả khám bằng hình ảnh</span>
      </div>}
      <div className="upload-image">
        <div className="btn-upload-img">
          <label htmlFor={id}>Tải lên kết quả khám</label>
          <input type="file" id={id} name="img" accept="image/*" onChange={handleChange}></input>
        </div>
        <span>Chụp hình kết quả khám của bạn</span>
      </div>
    </React.Fragment>
  )
}
