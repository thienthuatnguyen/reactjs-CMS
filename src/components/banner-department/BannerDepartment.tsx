import "./BannerDepartment.scss";
import icon from "../../assets/images/icon-khoasan.svg";
import doctorIcon from "../../assets/images/icon-doctor.png";

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
    arrows: false,
    className: 'my-department-slider',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 678,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const getBanner = images => images.map((item, index) => (
    <div key={index} className="wrapper-item-slider">
      <div  className="item-banner">
        <div className="top-content">
          <img src={icon} alt="banner" />
        </div>
        <div className="bottom-content">
          <div className="title">Khoa chấn thương</div>
          <div className="number-doctor">
            <img src= {doctorIcon} alt="icon"></img>
            <span>1 Bác sĩ</span>
          </div>
        </div>
      </div>
    </div>
  ));


  return (
    <div className="wrapper-banner-department">
      <div className="container-app">
        <h1 className="title">Chuyên khoa y tế</h1>
        <Slider {...settings}>
          {getBanner(images)}
        </Slider>
      </div>
    </div>
  )
}
