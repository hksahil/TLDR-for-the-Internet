import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function TextCarousal() {
  var settings = {
    dots: true,
    swipe: true,
  };
  return (
    <div>
      <div className="carousal-container">
        <Slider {...settings}>
          <div>
            <p className="carousal-text">
              Give us your 5-10 minutes everyday and you will be updated about
              what's happening on the internet.
            </p>
          </div>
          <div>
            <p className="carousal-text">
              A music lover will know which song to gossip about.
            </p>
          </div>
          <div>
            <p className="carousal-text">
              A motivated student can grab the essentials quickly.
            </p>
          </div>
          <div>
            <p className="carousal-text">
              In short , the TLDR summarizes the Internet for lazy bums
            </p>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default TextCarousal;
