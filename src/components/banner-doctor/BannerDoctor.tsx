import "./BannerDoctor.scss";

import bannerDoctor from "../../assets/images/doctor-slider.jpg";
import { Button } from "@material-ui/core";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
export function BannerDoctor() {
  const images = [1, 2, 3];
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    className: 'my-doctor-slider',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 678,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  };
  function viewDetail() {
      
  }
  const getBanner = images => images.map((item, index) => (
    <div key={index} className="wrapper-item-slider">
      <div  className="item-banner">
        <div className="left-content">
          <img src={bannerDoctor} alt="banner" />
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
            <Button onClick={()=> viewDetail} variant="outlined" className="my-btn btn-blue btn-outlined">
              Xem chi tiết
            </Button>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="wrapper-banner-doctor">
      <div className="container-app">
        <Slider {...settings}>
          {getBanner(images)}
        </Slider>
      </div>
    </div>
  )
}
