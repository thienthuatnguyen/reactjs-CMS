import image from "../assets/images/404.svg";
const NotFound = () => {
  return (
    <div className="page-404">
      <img src={image} alt="404"></img>
      <h1>
        Không tìm thấy trang
      </h1>
      <p>Trang bạn đang tìm kiếm không tồn tại hoặc không có sẵn.</p>
    </div>
  );
};

export default NotFound;
