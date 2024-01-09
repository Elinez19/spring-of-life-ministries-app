"use client";
import Slider from "react-slick";
import Slide from "../Slide/Slide";

const Banner = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
    initialSlide: 0,
    speed: 500,
    arrows: false,
    adaptiveHeight: true,
  };

  const slideData = [
    {
      id: 0,
      img: "/banner-1.png",
      title: "Welcome to",
      mainTitle: "Spring of Life Ministries",
      price: "",
    },
    {
      id: 1,
      img: "/banner-2.png",
      title: "Our Mission Programmes",
      mainTitle: "Develop a disciple-making Culture Among Students In Campuses",
      price: "",
    },
    {
      id: 2,
      img: "/banner-3.png",
      title: "Our Mission",
      mainTitle: "Develop a disciple-making Culture Among Students In Campuses",
      price: "",
    },
  ];

  return (
    <div>
      <div className="mt-60 h-full w-full pt-6 lg:pt-0">
        <Slider {...settings}>
          {slideData.map((item) => (
            <Slide
              key={item.id}
              img={item.img}
              title={item.title}
              mainTitle={item.mainTitle}
              price={item.price}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
