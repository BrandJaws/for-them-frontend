import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import Layout from "../../components/Layout";
import Slider from "react-slick";
import weightLessFeel from "../../assets/images/product/weightless-feel.png";
import antiitchFabric from "../../assets/images/product/anti-itch-fabric.png";
import customMade from "../../assets/images/product/custom-made.png";
import rotatableNeckline from "../../assets/images/product/rotatable-neckline.png";
import { parseShopifyResponse, shopifyClient } from "../../lib/shopify";
import Link from "next/link";
import _ from "lodash";
import { TfiAngleDown } from "react-icons/tfi";
import NextArrow from "../../components/common/NextArrow";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import PrevArrow from "../../components/common/PrevArrow";

export default function ProductPage({ product }) {
  const { id, title, images, variants, handle, description, options } = product;
  const { src: productImage } = images[0];
  const { price } = variants[0];
  const sizeFound = options.find((o) => o.name === "Size");
  const colorFound = options.find((o) => o.name === "Color");
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);
  const [isAccordionOpen, setIsAccordionOpen] = useState<number>(null);
  const [selectedColor, setSelectedColor] = useState<string>(
    colorFound && colorFound.values.length > 0 ? colorFound.values[0].value : ""
  );
  const settingsMainSlider = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    focusOnSelect: false,
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
  };
  const settingsThumbsSlider = {
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    focusOnSelect: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
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
  const productSpecs = [
    {
      image: weightLessFeel,
      title: "Weightless feel",
    },
    {
      image: antiitchFabric,
      title: "Anti-itch fabric",
    },
    {
      image: customMade,
      title: "Custom made",
    },
    {
      image: rotatableNeckline,
      title: "Rotatable neckline",
    },
  ];
  const handleColorChange = (val) => {
    setSelectedColor(val);
  };
  const handleAccordionClick = (index: number) => {
    setIsAccordionOpen(index);
  };
  return (
    <Layout title={title}>
      {product && (
        <>
          <section className="container mx-auto lg:px-[15px] md:px-[15px] sm:px-[15px] xs:px-[15px] section-padding">
            <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 gap-6">
              <div className="product-thumbnail flex flex-col gap-2">
                <div className="main-slider xs:order-1 sm:order-1 md:order-1 lg:order-1">
                  {images.length > 0 && (
                    <Slider
                      asNavFor={slider2}
                      ref={(slider) => setSlider1(slider)}
                      {...settingsMainSlider}
                    >
                      {images.map((img: StaticImageData, index: number) => {
                        return (
                          <div
                            key={index}
                            className="lg:h-[400px] lg:w-[400px] image-box flex items-center justify-center"
                          >
                            <Image
                              src={img.src}
                              alt={`Picture of ${title}`}
                              width={400}
                              height={400}
                              loading="lazy"
                              className="object-cover"
                            />
                          </div>
                        );
                      })}
                    </Slider>
                  )}
                </div>
                <div className="product-specs py-8 xs:order-3 sm:order-3 md:order-3 lg:order-2">
                  <ul className="list-none unstyled flex flex-wrap gap-4 items-center justify-center">
                    {productSpecs.map((o, index) => {
                      return (
                        <li
                          key={index}
                          className="flex flex-col items-center justify-center text-center gap-4"
                        >
                          <div className="spec-box">
                            <Image
                              src={o.image}
                              alt="icon"
                              width={30}
                              height={30}
                            />
                          </div>
                          {o.title}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="thumbs xs:order-2 sm:order-2 md:order-2 lg:order-3">
                  {images.length > 0 && (
                    <Slider
                      asNavFor={slider1}
                      className="image-carousel-secondary"
                      ref={(slider) => setSlider2(slider)}
                      {...settingsThumbsSlider}
                    >
                      {images.map((img: StaticImageData, index: number) => {
                        return (
                          <div
                            key={index}
                            className="lg:h-[150px] lg:w-[150px] image-box flex items-center justify-center"
                          >
                            <Image
                              src={img.src}
                              alt={`Picture of ${title}`}
                              width={150}
                              height={150}
                              loading="lazy"
                              className="object-cover"
                            />
                          </div>
                        );
                      })}
                    </Slider>
                  )}
                </div>
              </div>
              <div className="product-detail lg:px-16 md:px-10 sm:px-8 xs:px-6">
                <div className="subtitle-bold">{title}</div>
                <div className="flex flex-col flex-wrap gap-4 items-start ">
                  <div className="title-large capitalize">Orange</div>
                  <div className="text-large capitalize">
                    ${price.amount} USD
                  </div>
                  <div className="text-small">{description}</div>
                  {sizeFound && sizeFound.values.length > 0 && (
                    <div className="size-field w-full font-monumentExtended relative">
                      <label
                        htmlFor="size"
                        className="absolute left-0 lg:px-[30px] md:px-[20px] sm:px-[15px] xs:px-[10px] top-[50%] translate-y-[-50%] text-lg"
                      >
                        {sizeFound.name}
                      </label>
                      <select
                        name="size"
                        className="select-field lg:px-[120px] md:px-[110px] sm:px-[100px] xs:px-[80px]"
                      >
                        {sizeFound.values.map((o: any, index: number) => {
                          return (
                            <option key={index} value={o.value}>
                              {o.value}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  )}
                  <Link href="/shop">
                    <p className="font-monumentExtended font-[300] underline">
                      find your size
                    </p>
                  </Link>
                  <br />
                  <br />
                  <br />
                  {colorFound && colorFound.values.length > 0 && (
                    <div className="color-field w-full font-monumentExtended relative">
                      <div className="text-small">
                        Color:{" "}
                        <span className="font-[800]">{selectedColor}</span>
                      </div>
                      <div className="flex flex-wrap gap-4 py-6">
                        {colorFound.values.map((o, index) => {
                          return (
                            <div key={index} className="color-switch">
                              <input
                                type="radio"
                                onChange={() => handleColorChange(o.value)}
                                className={`w-8 h-8 ${_.lowerCase(o.value)
                                  .split(" ")
                                  .join("-")}${
                                  selectedColor === o.value ? " checked" : ""
                                }`}
                                name="color"
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                  <br />
                  <div className="cta-btns flex flex-col flex-wrap gap-4 justify-center lg:items-center sm:items-start">
                    <Link href="/">
                      <button type="button" className="btn-primary-outline lg:min-w-[400px]">
                        Add to basket
                      </button>
                    </Link>
                    <Link href="/">
                      <button
                        type="button"
                        className="btn-primary4 lg:min-w-[400px]"
                      >
                        Buy now
                      </button>
                    </Link>
                    <Link href="/">
                      <p className="font-monumentExtended font-[700] underline">
                        Gift the binder?
                      </p>
                    </Link>
                  </div>
                  <br />
                  <div className="product-info">
                    <div className="text-small">More Info</div>
                    <div className="accordion">
                      <div className="accordion-item bg-white">
                        <h2 className="">
                          <button
                            onClick={() => handleAccordionClick(0)}
                            className="relative flex justify-between items-center w-full border-b py-2 text-xl font-[800] text-left border-0 rounded-none transition focus:outline-none"
                          >
                            <span>How it works</span>
                            <TfiAngleDown className="text-[24px] font-[800]" />
                          </button>
                        </h2>
                        <div
                          className={`accordion-content${
                            isAccordionOpen === 0 ? " show" : ""
                          }`}
                        >
                          <div className="accordion-body py-2">
                            <strong>
                              This is the first item's accordion body.
                            </strong>{" "}
                            It is shown by default, until the collapse plugin
                            adds the appropriate classes that we use to style
                            each element. These classes control the overall
                            appearance, as well as the showing and hiding via
                            CSS transitions.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item bg-white">
                        <h2 className="">
                          <button
                            onClick={() => handleAccordionClick(1)}
                            className="relative flex justify-between items-center w-full border-b py-2 text-xl font-[800] text-left border-0 rounded-none transition focus:outline-none"
                          >
                            <span>Patented Design</span>
                            <TfiAngleDown className="text-[24px] font-[800]" />
                          </button>
                        </h2>
                        <div
                          className={`accordion-content${
                            isAccordionOpen === 1 ? " show" : ""
                          }`}
                        >
                          <div className="accordion-body py-2">
                            <strong>
                              This is the first item's accordion body.
                            </strong>{" "}
                            It is shown by default, until the collapse plugin
                            adds the appropriate classes that we use to style
                            each element. These classes control the overall
                            appearance, as well as the showing and hiding via
                            CSS transitions.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section-padding">
            <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1">
              <div className=""></div>
              <div className="right-side section-padding bg-primary5 lg:px-[50px] flex flex-col flex-wrap gap-6 ">
                <div className="text-large">Find your size</div>
                <div className="text-small">
                  Before we begin, what would
                  <br className="lg:block sm:hidden xs:hidden" />
                  you like us to call you?
                </div>
                <form action="#">
                  <div className="form-group mb-4">
                    <input type="text" name="name" id="name" placeholder="Enter your chosen name" className="input-field" required />
                  </div>
                  <button type="submit" className="btn-primary4 min-w-[200px]">Next</button>
                </form>
              </div>
            </div>
          </section>
        </>
      )}
    </Layout>
  );
}

export const getServerSideProps = async ({ params }) => {
  const { productHandle } = params;
  // Fetch one product
  const product = await shopifyClient.product.fetchByHandle(productHandle);

  return {
    props: {
      product: parseShopifyResponse(product),
    },
  };
};
