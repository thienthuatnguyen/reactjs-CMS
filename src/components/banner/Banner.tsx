import { useEffect, useState } from "react";
import "./Banner.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import authService from "../../services/authService";

export function Banner() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  function getData() {
    authService.getBanners().then((res) => {
      let body = res.data;
      setImages(body.data.slides);
    });
  }

  return (
    <div className="wrapper-banner">
      {images && (images.length > 0) && <Carousel autoPlay = {true} infiniteLoop = {true} showThumbs = {false} showArrows = {false} showStatus = {false}>
        {images.map((item: any, index) => 
          (
            <div key={index} className="item-banner">
              <img src={item.image} alt={item.title} />
            </div>
          )
        )}
      </Carousel>}
    </div>
  )
}
