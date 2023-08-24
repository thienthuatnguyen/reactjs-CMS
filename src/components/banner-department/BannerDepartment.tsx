import "./BannerDepartment.scss";
import icon from "../../assets/images/icon-khoasan.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export function BannerDepartment() {
  const images = [1, 2, 3, 4, 5, 6, 7, 7, 8, 8];
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false
  };
  const getBanner = images => images.map((item, index) => (
    <div key={index} className="item-banner">
      <div className="top-content">
        <img src={icon} alt="image-banner" />
      </div>
      <div className="bottom-content">
        <div className="title">Khoa chấn thương chỉnh hình</div>
        <div className="number-doctor">
          1 Bác sĩ
        </div>
      </div>
    </div>
  ));


  return (
    <div className="wrapper-banner-department">
      <div className="container-app">
        <h2 className="title">Chuyên khoa y tế</h2>
        <Slider {...settings}>
          {getBanner(images)}
        </Slider>
      </div>
    </div>
  )
}
