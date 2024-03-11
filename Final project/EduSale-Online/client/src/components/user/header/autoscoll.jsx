import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AutoImageSlider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;

    const autoSlide = setInterval(() => {
      slider.slickNext(); // Chuyển đến hình ảnh tiếp theo
    }, 3000); // Thời gian chuyển đổi giữa các hình ảnh (3 giây)

    return () => {
      clearInterval(autoSlide); // Xóa bỏ interval khi component bị hủy
    };
  }, []);

  const settings = {
    dots: true, // Hiển thị các chấm chỉ số
    infinite: true, // Vòng lặp vô hạn
    speed: 500, // Tốc độ chuyển đổi (0.5 giây)
    slidesToShow: 1, // Hiển thị 1 hình ảnh trên mỗi slide
    slidesToScroll: 1, // Cuộn 1 hình ảnh mỗi lần chuyển đổi
  };

  return (
    <Slider ref={sliderRef} {...settings} className="h-auto w-[100%]">
      <div>
        <img className="h-[300px] w-[100%]" src="https://i.imgur.com/2AHABZm.png" alt="Image 1" />
      </div>
      <div>
        <img className="h-[300px] w-[100%]" src="https://i.imgur.com/CiSdzBL.jpeg" alt="Image 2" />
      </div>
      <div>
        <img className="h-[300px] w-[100%]" src="https://i.imgur.com/84oFAQs.jpg" alt="Image 3" />
      </div>
      {/* Thêm các hình ảnh khác ở đây */}
    </Slider>
  );
};

export default AutoImageSlider;