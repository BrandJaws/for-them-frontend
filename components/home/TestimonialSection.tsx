import Link from "next/link";
import * as React from "react";
import Slider from "react-slick";
import { AiFillStar } from "react-icons/ai";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import NextArrow from "../common/NextArrow";
import PrevArrow from "../common/PrevArrow";


const TestimonialSection = ({ data }) => {
  var settings = {
    dots: false,
    infinite: true,
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
        text={<FiArrowRight color="black" className="w-[35px] h-[30px]" />}
      />
    ),
    prevArrow: (
      <PrevArrow
        className="slider-previous-btn"
        text={<FiArrowLeft color="black" className="w-[35px] h-[30px]" />}
      />
    ),
  };
  return (
    <>
      <section className="section-padding">
        <div className="container mx-auto md:px-[15px] sm:px-[15px] xs:px-[15px]">
          <div className="grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 gap-4">
            <div>
              <Slider {...settings}>
                <div className="text-center">
                  <div className="text-large p-8">
                    “Thank you guys so much for being the most hardworking and
                    up-front company out there. It’s obvious that you re all
                    fantastic, sweet, dedicated people.”
                  </div>
                  <div className="rating-stars flex gap-2 justify-center items-center mb-4">
                    <AiFillStar color="primary" className="w-6 h-6" />
                    <AiFillStar color="primary" className="w-6 h-6" />
                    <AiFillStar color="primary" className="w-6 h-6" />
                    <AiFillStar color="primary" className="w-6 h-6" />
                    <AiFillStar color="primary" className="w-6 h-6" />
                  </div>
                  <div className="text-medium text-center">Ember</div>
                </div>
                <div className="text-center">
                  <div className="text-large p-8">
                    “Thank you guys so much for being the most hardworking and
                    up-front company out there. It’s obvious that you re all
                    fantastic, sweet, dedicated people.”
                  </div>
                  <div className="rating-stars flex gap-2 justify-center items-center mb-4">
                    <AiFillStar color="primary" className="w-6 h-6" />
                    <AiFillStar color="primary" className="w-6 h-6" />
                    <AiFillStar color="primary" className="w-6 h-6" />
                    <AiFillStar color="primary" className="w-6 h-6" />
                    <AiFillStar color="primary" className="w-6 h-6" />
                  </div>
                  <div className="text-medium text-center">Ember</div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialSection;
