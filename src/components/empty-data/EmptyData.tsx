import "./EmptyData.scss";
import emptyData from "../../assets/images/empty_data.png";

export function EmptyData() {
  return (
    <div className="empty-data">
        <img src= {emptyData} alt="no-data"></img>
        <span>Chưa có dữ liệu</span>
    </div>
  )
}
