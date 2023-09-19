import "./BannerHospital.scss";
import imgHospital from "../../assets/images/khoa.png";
import { Button } from "@material-ui/core";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
export function BannerHospital() {
  const images = [1, 2, 3];
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    className: 'my-hospital-slider',
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
  const navigate = useNavigate();

  const getBanner = images => images.map((item, index) => (
    <div key={index} className="wrapper-item-slider">

      <div className="general-info">
        <div className="image-hospital">
          <img src={imgHospital} alt="khoa" />
        </div>
        <div className="info">
          <div className="top">
            <div className="name">Bệnh viện chợ rẫy</div>
            <div className="address">436/4 Nguyễn Thị Minh Khai, quận 10, thành phố Hồ Chí Minh</div>
            <div className="description">
              Tiến sĩ – Bác sĩ Lê Thị Minh Châu là bác sĩ chuyên khám và điều trị các bệnh phụ khoa, vô sinh - hiếm muộn ở TP HCM. Với hàng chục năm kinh nghiệm trong lĩnh vực, bác sĩ được không ít bệnh nhân tin tưởng lựa chọn khi gặp phải các vấn đề về sức khỏe sinh sản. Tính đến thời điểm hiện tại, bác sĩ đã giúp đỡ không ít cặp vợ chồng có cơ hội sinh con, làm cha, làm mẹ.
            </div>
          </div>
          <div className="bottom">
            <Button
              variant="contained"
              className="my-btn btn-green btn-contained">
              Đặt lịch hẹn
            </Button>
            <Button
              variant="contained" onClick={()=> {navigate('/benh-vien/1')}}
              className="my-btn btn-blue-dash btn-contained">
              Xem chi tiết
            </Button>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="wrapper-banner-hospital">
      <div className="container-app">
        <Slider {...settings}>
          {getBanner(images)}
        </Slider>
      </div>
    </div>
  )
}
