import "./Banner.scss";
import banner1 from "../../assets/images/banner-1.jpg";
import banner2 from "../../assets/images/banner-2.jpg";
import banner3 from "../../assets/images/banner-3.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export function Banner() {
  const images = [banner1, banner2, banner3]
  const getBanner = images => images.map((item, index) => (
    <div key={index} className="item-banner">
      <img src={item} alt="image-banner" />
    </div>
  ));

  return (
    <div className="wrapper-banner">
      <Carousel autoPlay = {true} infiniteLoop = {true} showThumbs = {false} showArrows = {false} showStatus = {false}>
        {getBanner(images)}
      </Carousel>
    </div>
  )
}
