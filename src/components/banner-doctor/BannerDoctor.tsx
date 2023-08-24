import "./BannerDoctor.scss";

import bannerDoctor from "../../assets/images/doctor-slider.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Button } from "@material-ui/core";

export function BannerDoctor() {
  const images = [1, 2, 3]
  const getBanner = images => images.map((item, index) => (
    <div key={index} className="item-banner">
      <div className="left-content">
        <img src={bannerDoctor} alt="image-banner" />
      </div>
      <div className="right-content">
        <h1 className="title">GS.TS Nguyễn Thiện Thuật</h1>
        <p className="job-title certificate">Đại học y dược tphcm</p>
        <p className="job-title location-work">Bệnh viện từ dũ</p>
        <p className="description">
          Tiến sĩ – Bác sĩ Lê Thị Minh Châu là bác sĩ chuyên khám và điều trị các bệnh phụ khoa, vô sinh - hiếm muộn ở TP HCM. Với hàng chục năm kinh nghiệm trong lĩnh vực, bác sĩ được không ít bệnh nhân tin tưởng lựa chọn khi gặp phải các vấn đề về sức khỏe sinh sản. Tính đến thời điểm hiện tại, bác sĩ đã giúp đỡ không ít cặp vợ chồng có cơ hội sinh con, làm cha, làm mẹ.
        </p>
        <div className="group-btn">
          <Button variant="contained" className="my-btn btn-green btn-contained">
            Đặt lịch hẹn
          </Button>
          <Button variant="outlined" className="my-btn btn-blue btn-outlined">
            Xem chi tiết
          </Button>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="wrapper-banner-doctor">
      <div className="container-app">
        <Carousel autoPlay={false} infiniteLoop={true} showThumbs={false} showArrows={true} showStatus={false}>
          {getBanner(images)}
        </Carousel>
      </div>
    </div>
  )
}
