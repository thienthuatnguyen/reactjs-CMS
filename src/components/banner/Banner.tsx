import "./Banner.scss";
import banner1 from "../../assets/images/banner-1.jpg";
import banner2 from "../../assets/images/banner-2.jpg";
import banner3 from "../../assets/images/banner-3.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export function Banner() {
  const images = [banner1, banner2, banner3]
  const getBanner = images => images.map((item, index) => (
    <div key={index} className="item-banner">
      <img src={item} alt="image-banner" />
    </div>
  ));

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    fade: true,
    className : 'my-top-slider'
  };

  return (
    <div className="wrapper-banner">
      <Slider {...settings}>
        {getBanner(images)}
        </Slider>
    </div>
  )
}
