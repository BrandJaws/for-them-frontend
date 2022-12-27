import Link from "next/link";
import * as React from "react";
import Slider from "react-slick";
import { AiFillStar } from "react-icons/ai";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import NextIcon from "../../assets/images/next-icon.svg"
import BackIcon from "../../assets/images/back-icon.svg"
import NextArrow from "../common/NextArrow";
import PrevArrow from "../common/PrevArrow";
import { TestimonialProps } from "../../interfaces";
import Image from "next/image";


const TestimonialSection = ({ data }) => {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: (
      <NextArrow
        className="slider-next-btn"
        text={<Image src={NextIcon} alt="next icon" className="w-[35px] h-[30px]" />}
      />
    ),
    prevArrow: (
      <PrevArrow
        className="slider-previous-btn"
        text={<Image src={BackIcon} alt="back icon" className="w-[35px] h-[30px]" />}
      />
    ),
  };
  return (
    <>
      <section className="section-padding xs:pt-[0px]">
        <div className="container mx-auto md:px-[15px] sm:px-[15px] xs:px-[15px]">
          <div className="grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 gap-4">
            <div>
              <Slider {...settings}>
                {data.length > 0 && data.map((item: TestimonialProps, index: number) => {
                  return (
                    <div key={index} className="text-center">
                      <div className="text-large py-8 xl:px-[180px] lg:px-[140px] md:px-[100px] sm:px-[75px] xs:px-[40px]">
                        {item.description}
                      </div>
                      <div className="rating-stars flex gap-2 justify-center items-center mb-4">
                        <AiFillStar color="primary" className="w-6 h-6" />
                        <AiFillStar color="primary" className="w-6 h-6" />
                        <AiFillStar color="primary" className="w-6 h-6" />
                        <AiFillStar color="primary" className="w-6 h-6" />
                        <AiFillStar color="primary" className="w-6 h-6" />
                      </div>
                      <div className="text-medium text-center">{item.name}</div>
                    </div>
                  )
                })}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialSection;
