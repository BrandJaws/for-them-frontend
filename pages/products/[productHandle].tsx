import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import weightLessFeel from "../../assets/images/product/weightless-feel.png";
import antiitchFabric from "../../assets/images/product/anti-itch-fabric.png";
import customMade from "../../assets/images/product/custom-made.png";
import rotatableNeckline from "../../assets/images/product/rotatable-neckline.png";
import { client, parseShopifyResponse, shopifyClient } from "../../lib/shopify";
import Link from "next/link";
import _ from "lodash";
import { TfiAngleDown } from "react-icons/tfi";
import NextArrow from "../../components/common/NextArrow";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import PrevArrow from "../../components/common/PrevArrow";
import Fade from "react-reveal/Fade";
import BinderShopList from "../../components/common/BinderShopList";
import { apexChest, apexSizeChart } from "../../utils/data";
import { withCookies, Cookies, useCookies } from "react-cookie";
import { SizeChartProps } from "../../interfaces";
import useSWR from "swr";
import { fetcher } from "../../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import CartModal from "../../components/common/CartModal";
import {
  addProductToCart,
  setActiveCartModal,
  setCheckout,
} from "../../reducers/shopify";
import { RootState } from "../../stores/store";
// import { handleBuyNowCheckout } from "../../utils/helper";

export const SizeBinderForm = ({
  setStep,
  step,
  apexChestNumber,
  handleApexChest,
  handleBuyNow,
  sizeErrorMessage,
  chestSizeChartObj,
}) => {
  const nextStep = () => {
    setStep(step + 1);
  };
  const prevStep = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };
  switch (step) {
    case 1:
      return (
        <div>
          <Fade right>
            <div className="flex gap-4 flex-col flex-wrap justify-center items-start">
              <div className="text-large xs:text-center">
                Where you are on your binding journey?
              </div>
              <div className="lg:section-padding xl:section-padding w-full flex xl:gap-[50px] lg:gap-[50px] md:gap-[40px] sm:gap-[30px] xs:gap-[30px]">
                <div className="text-box px-[20px] py-[30px] border-4 rounded-md border-black text-center w-full flex items-center justify-center">
                  <Fade>
                    <p className="text-[18px] leading-[22px]">
                      I&apos;m new to binding + not sure where to start
                    </p>
                  </Fade>
                </div>
                <div className="text-box px-[20px] py-[30px] border-4 rounded-md border-black text-center w-full flex items-center justify-center">
                  <Fade>
                    <p className="text-[18px] leading-[22px]">
                      None of the binders out there are doing it for me
                    </p>
                  </Fade>
                </div>
                <div className="text-box px-[20px] py-[30px] border-4 rounded-md border-black text-center w-full flex items-center justify-center">
                  <Fade>
                    <p className="text-[18px] leading-[22px]">
                      I wear a binder daily + I&apos;m looking to get a new one
                    </p>
                  </Fade>
                </div>
              </div>
              <div className="flex gap-4 items-center justify-center">
                <div className="prev-btn">
                  <Fade>
                    <button
                      type="button"
                      className="binder-btn min-w-[200px]"
                      onClick={prevStep}
                    >
                      prev
                    </button>
                  </Fade>
                </div>
                <div className="next-btn">
                  <Fade>
                    <button
                      type="button"
                      className="binder-btn min-w-[200px]"
                      onClick={nextStep}
                    >
                      next
                    </button>
                  </Fade>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      );
    case 2:
      return (
        <div>
          <Fade right>
            <div className="flex gap-4 flex-col flex-wrap justify-center items-start">
              <div className="text-large xs:text-center">
                Measure your apex chest
              </div>
              <div className="font-monumentExtended font-[300] paragraph">
                Need help? Watch this <span className="underline">video</span>
              </div>
              <div className="lg:section-padding xl:section-padding w-full flex flex-wrap gap-2">
                {apexChest.map((item, index) => {
                  return (
                    <div key={index} className="block">
                      <label
                        className={`checkbox-chest inline-flex items-center cursor-pointer relative ${
                          apexChestNumber === item && "active"
                        }`}
                      >
                        <input
                          type="radio"
                          className="w-6 h-6 rounded-full opacity-0"
                          name="chest"
                          value={item}
                          onChange={(event) => handleApexChest(event)}
                        />
                        <span className="absolute top-0 right-0 left-0 bottom-0 inline-flex items-center justify-center">
                          {item}
                        </span>
                      </label>
                    </div>
                  );
                })}
              </div>
              <div className="flex gap-4 items-center justify-center">
                <div className="prev-btn">
                  <Fade>
                    <button
                      type="button"
                      className="binder-btn min-w-[200px]"
                      onClick={prevStep}
                    >
                      prev
                    </button>
                  </Fade>
                </div>
                <div className="next-btn">
                  <Fade>
                    <button
                      type="button"
                      className="binder-btn min-w-[200px]"
                      onClick={nextStep}
                    >
                      next
                    </button>
                  </Fade>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      );
    case 3:
      return (
        <div>
          <Fade right>
            <div className="pt-16 pb-16">
              <div className="text-large xs:text-center">
                Your Binder size is
              </div>
              {chestSizeChartObj && (
                <div className="product-title uppercase">
                  {chestSizeChartObj.code}
                </div>
              )}
            </div>
          </Fade>
          <div className="flex flex-col gap-2 items-start justify-start">
            <Fade right>
              <button
                type="button"
                className="binder-btn max-w-max"
                onClick={handleBuyNow}
              >
                Buy now
              </button>
            </Fade>
            {sizeErrorMessage && (
              <p className="text text-red-500 font-[600]">{sizeErrorMessage}</p>
            )}
          </div>
        </div>
      );
    default:
      return (
        <div>
          <Fade left>
            <div className="xs:py-[8] py-16 ">
              <div className="subtitle-bold">Find your size</div>
              <div className="product-title uppercase">Size Finder</div>
            </div>
          </Fade>
          <Fade bottom>
            <button
              type="button"
              className="binder-btn max-w-max"
              onClick={nextStep}
            >
              Get Started
            </button>
          </Fade>
        </div>
      );
  }
};

export default function ProductPage({ product, allBinder, allColors }) {
  console.log(JSON.stringify(allColors))
  const { id, title, images, variants, handle, description, options } = product;
  const { src: productImage } = images[0];
  const { price } = variants[0];
  const sizeFound = options.find((o) => o.name === "Size");
  const colorFound = allColors.values.length > 1 ? allColors : options.find((o) => o.name === "Color")
  console.log(options)
  console.log(options?.find((o) => o.name === "Color"))
  console.log(options?.find((o) => o.name === "Color")?.length)
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);
  const [accordionOpen, setAccordionOpen] = useState<boolean>(false);
  const [isAccordionOpen, setIsAccordionOpen] = useState<number>(null);
  const [selectedColor, setSelectedColor] = useState<string>(
    colorFound && colorFound.values.length > 0 ? colorFound.values[0].value : ""
  );
  const [selectedSize, setSelectedSize] = useState<string>(
    sizeFound && sizeFound.values.length > 0 ? sizeFound.values[0].value : ""
  );
  const [sizesDropdown, setSizesDropdown] = useState<any>([]);
  const [step, setStep] = useState<number>(0);
  const [apexChestNumber, setApexChestNumber] = useState<string>("");
  const [sizeErrorMessage, setSizeErrorMessage] = useState<string>("");
  const [chestSizeChartObj, setChestSizeChartObj] = useState<any | null>(null);
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
          infinite: false,
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
          infinite: false,
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
  useEffect(() => {
    if (sizeFound && sizeFound.values.length > 0) {
      setSizesDropdown(sizeFound.values);
    }
  }, [sizeFound]);
  const handleColorChange = (val, data) => {
    if (data.otherProduct) {
      router.push(`/products/${data.handle}`)
    } else {setSelectedColor(val);}
  };
  const handleAccordionClick = (index: number) => {
    if (accordionOpen) {
      setAccordionOpen(false);
    }
    if (
      index !== isAccordionOpen ||
      (index === isAccordionOpen && !accordionOpen)
    ) {
      setAccordionOpen(true);
    } else {
      setAccordionOpen(false);
    }
    setIsAccordionOpen(index);
  };
  const handleSize = (e: any) => {
    setSelectedSize(e.target.value);
  };
  const handleApexChest = (e: any) => {
    setApexChestNumber(e.target.value);
  };
  const [cookies, setCookie, getCookie] = useCookies(["size"]);
  const handleBuyNow = () => {
    if (apexChestNumber !== "") {
      setSelectedSize(apexChestNumber);
      let isExistsChestNumber = apexSizeChart.find(
        (o: SizeChartProps, index: number) => {
          let isCheckNumberExists = o.measurements.find(
            (num: string) => num === apexChestNumber
          );
          return isCheckNumberExists;
        }
      );
      if (isExistsChestNumber) {
        setChestSizeChartObj(isExistsChestNumber);
        setCookie("size", isExistsChestNumber.code, { path: "/" });
        if (typeof window !== "undefined") {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }
        setStep(3);
        setApexChestNumber("");
        setSizeErrorMessage("");
      } else {
        setChestSizeChartObj(null);
        setSizeErrorMessage("Size does not exists.");
      }
    } else {
      if (typeof window !== "undefined") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    }
  };
  useEffect(() => {
    if (cookies.hasOwnProperty("size")) {
      setSelectedSize(cookies.size);
      setStep(3);
      let isExistsChestNumber = apexSizeChart.find(
        (o: SizeChartProps) => o.code === cookies.size
      );
      if (isExistsChestNumber) {
        setChestSizeChartObj(isExistsChestNumber);
        setSizeErrorMessage("");
      } else {
        setChestSizeChartObj(null);
        setSizeErrorMessage("Size does not exists.");
      }
    }
  }, [cookies]);
  useEffect(() => {
    if (apexChestNumber) {
      let isExistsChestNumber = apexSizeChart.find((o: SizeChartProps) => {
        let isCheckNumberExists = o.measurements.find(
          (num: string) => num === apexChestNumber
        );
        return isCheckNumberExists;
      });
      if (isExistsChestNumber) {
        setChestSizeChartObj(isExistsChestNumber);
        setSizeErrorMessage("");
      } else {
        setChestSizeChartObj(null);
        setSizeErrorMessage("Size does not exists.");
      }
    }
  }, [apexChestNumber]);
  const { cartItems, checkout } = useSelector(
    (state: RootState) => state.shopifyReducer
  );
  const router = useRouter();
  const [isAddToBasket, setIsAddToBasket] = useState<boolean>(false);
  const [lineItems, setLineItems] = useState<Array<any>>([]);
  const dispatch = useDispatch();
  const handleBuyNowCheckout = async () => {
    let findProductVariant = variants.find((o: any) => {
      return o.selectedOptions.find((option) => option.value === selectedSize);
    });
    if (findProductVariant) {
      const lineItemsToAdd = [
        {
          // variantId: 'gid://shopify/ProductVariant/29106064584',
          variantId: findProductVariant.id,
          quantity: 1,
          // customAttributes: [{key: "MyKey", value: "MyValue"}]
        },
      ];
      client.checkout.create().then((checkout: any) => {
        client.checkout
          .addLineItems(checkout.id, lineItemsToAdd)
          .then((data: any) => {
            dispatch(setCheckout(data));
            window.open(data.webUrl, "_blank");
          });
      });
    }
  };
  const handleAddToBasket = () => {
    let findProductVariant = variants.find((o: any) => {
      return o.selectedOptions.find((option) => option.value === selectedSize);
    });
    if (findProductVariant) {
      const lineItemsToAdd = [
        {
          variantId: findProductVariant.id,
          quantity: 1,
          // customAttributes: [{key: "MyKey", value: "MyValue"}]
        },
      ];
      if (checkout) {
        client.checkout
          .addLineItems(checkout.id, lineItemsToAdd)
          .then((data: any) => {
            dispatch(setCheckout(data));
          });
      } else {
        client.checkout.create().then((checkout: any) => {
          client.checkout
            .addLineItems(checkout.id, lineItemsToAdd)
            .then((data: any) => {
              dispatch(setCheckout(data));
            });
        });
      }
    }
    // dispatch(addProductToCart({
    //   selectedSize,
    //   product,
    //   quantity: 1
    // }));
    dispatch(setActiveCartModal(true));
    setTimeout(() => {
      dispatch(setActiveCartModal(false));
    }, 3000);
  };


  return (
    <>
      {product && (
        <>
          <section className="container mx-auto xl:px-[15px] lg:px-[15px] md:px-[15px] sm:px-[15px] xs:px-[15px] section-padding">
            <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 gap-6">
              <div className="product-thumbnail flex flex-col gap-2">
                <div className="main-slider-box">
                  <div className="main-slider xs:order-1 sm:order-1 md:order-1 lg:order-1 xl:order-1">
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
                              className="xl:h-[400px] xl:w-[400px] lg:h-[400px] lg:w-[400px] image-box flex items-center justify-center"
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
                  <div className="product-specs py-8 xs:order-3 sm:order-3 md:order-3 xl:order-2 lg:order-2">
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
                            <div className="max-w-[150px]">{o.title}</div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="thumbs xs:order-2 sm:order-2 md:order-2 lg:order-3 xl:order-3">
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
              </div>
              <div className="product-detail xl:px-16 lg:px-16 md:px-10 sm:px-8 xs:px-6">
                <Fade top cascade>
                  <div className="subtitle-bold subtitle-top text-left ">{title}</div>
                </Fade>
                <div className="flex flex-col flex-wrap gap-4 items-start ">
                  <div className="title-large capitalize">Orange</div>
                  <Fade bottom cascade>
                    <div className="subtitle-bold text-center capitalize">
                      ${price.amount} USD
                    </div>
                  </Fade>
                  <div className="text-small mt-5 mb-10 text-left">{description}</div>
                  {sizesDropdown.length > 0 && (
                    <div className="size-field w-full font-monumentExtended relative">
                      <label
                        htmlFor="size"
                        className="absolute left-0 xl:px-[30px] lg:px-[30px] md:px-[20px] sm:px-[15px] xs:px-[10px] top-[50%] translate-y-[-50%] text-lg"
                      >
                        {sizeFound.name}
                      </label>
                      <select
                        name="size"
                        className="select-field xl:text-[24px] xl:px-[120px] lg:px-[120px] md:px-[110px] sm:px-[100px] xs:px-[80px]"
                        onChange={handleSize}
                        value={selectedSize}
                      >
                        {sizesDropdown.map((o: any, index: number) => {
                          return (
                            <option
                              key={index}
                              value={o.value}
                              // selected={selectedSize === o.value}
                            >
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
                  {colorFound && colorFound.values.length > 0 && (
                    <div className="color-field xs:mt-[15px] xs:mb-[15px] mt-10 mb-10 w-full font-monumentExtended relative">

                      <div className="flex flex-wrap gap-4 pt-0 pb-5">
                        {colorFound.values.map((o, index) => {
                          console.log(o)
                          return (
                            <div key={index} className="color-switch">
                              <input
                                type="radio"
                                onChange={() => handleColorChange(o.value, o)}
                                className={`w-8 h-8 ${_.lowerCase(o.value)
                                  .split(" ")
                                  .join("-")}`}
                                name="color"
                                style={{
                                  backgroundImage: `url(${o.image.src.replace(".png", "_250x40_crop_center.png").replace(".jpg", "_250x40_crop_center.jpg")})`,  // coming from public folder
                                  backgroundSize: "cover",
                                  backgroundPosition: "center"
                                }}
                              />
                            </div>
                          );
                        })}
                      </div>
                      <div className="text-small text-left">
                        Color:{" "}
                        <span className="font-[800]">{selectedColor}</span>
                      </div>
                    </div>
                  )}
                  <br />
                  <div className="cta-btns product-cta-btns flex flex-col flex-wrap  w-full gap-4 justify-center xl:items-center lg:items-center sm:items-start">
                    <Fade bottom>
                      <button
                        type="button"
                        className="btn-primary-outline xl:min-w-[400px] lg:min-w-[400px] w-full"
                        onClick={handleAddToBasket}
                      >
                        Add to basket
                      </button>
                    </Fade>
                    <Fade bottom>
                      <button
                        type="button"
                        className="btn-primary4 xl:min-w-[400px] lg:min-w-[400px] w-full"
                        onClick={handleBuyNowCheckout}
                      >
                        Buy now
                      </button>
                    </Fade>
                    <Link href="/">
                      <p className="font-monumentExtended hidden font-[700] underline xs:text-sm">
                        Gift the binder?
                      </p>
                    </Link>
                  </div>
                  <br />
                  <div className="product-info">
                    <div className="text-small text-left mb-5">More Info</div>
                    <div className="accordion">
                      <div className="accordion-item bg-white">
                        <h2 className="z-[999]">
                          <button
                            onClick={() => handleAccordionClick(0)}
                            className="relative flex justify-between items-center w-full border-b py-2 xl:text-lg lg:text-lg md:text-lg sm:text-md xs:text-sm font-[800] text-left border-0 rounded-none focus:outline-none"
                          >
                            <span>How it works</span>
                            <TfiAngleDown className="lg:text-[24px] md:text-[20px] sm:text-[18px] xs:text-[16px] font-[800]" />
                          </button>
                        </h2>
                        <div
                          className={`accordion-content z-[444]${
                            isAccordionOpen === 0 && accordionOpen
                              ? " show"
                              : ""
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
                        <h2 className="z-[999]">
                          <button
                            onClick={() => handleAccordionClick(1)}
                            className="relative flex justify-between items-center w-full border-b py-2 xl:text-lg lg:text-lg md:text-lg sm:text-md xs:text-sm font-[800] text-left border-0 rounded-none focus:outline-none"
                          >
                            <span>Patented Design</span>
                            <TfiAngleDown className="xl:text-[24px] lg:text-[24px] md:text-[20px] sm:text-[18px] xs:text-[16px] font-[800]" />
                          </button>
                        </h2>
                        <div
                          className={`accordion-content z-[444]${
                            isAccordionOpen === 1 && accordionOpen
                              ? " show"
                              : ""
                          }`}
                        >
                          <div className="accordion-body py-2">
                            <strong>
                              This is the second item's accordion body.
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
            <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1">
              <div className=""></div>
              <div className="right-side section-padding bg-primary5 xl:px-[50px] lg:px-[50px] md:px-[35px] sm:px-[25px] xs:px-[20px] flex flex-col flex-wrap justify-center">
                <SizeBinderForm
                  setStep={setStep}
                  step={step}
                  apexChestNumber={apexChestNumber}
                  handleApexChest={handleApexChest}
                  handleBuyNow={handleBuyNow}
                  sizeErrorMessage={sizeErrorMessage}
                  chestSizeChartObj={chestSizeChartObj}
                />
              </div>
            </div>
          </section>
          <section>
            <BinderShopList product={product.handle}/>
          </section>

        </>
      )}
    </>
  );
}

function sortByKey(array, key) {
  return array.sort(function(a, b) {
    var x = a[key]; var y = b[key];
    return ((x < y) ? -1 : ((x > y) ? 1 : 0));
  });
}

export const getServerSideProps = async ({ params }) => {
  const { productHandle } = params;
  // Fetch one product
  const product = await shopifyClient.product.fetchByHandle(productHandle);
  const allBinders = await client.collection.fetchWithProducts('gid://shopify/Collection/292491067558',{productsFirst: 100});
  let binders = []
  let colorsArray = {
    name: "Color",
    values: [],
    type: {"name":"ProductOption","kind":"OBJECT","fieldBaseTypes":{"id":"ID","name":"String","values":"String"},"implementsNode":true}
  }
  allBinders.products.forEach(function (item, index) {
    binders.push({
      handle: item.handle,
      color: item.options.find(x => x.name === "Color"),
      image: item.images[0],
      title: item.title,
      publishedAt: item.publishedAt
    })
    let colorPush = item.options.find(x => x.name === "Color").values[0]
        colorPush.otherProduct = true
        colorPush.handle = item.handle
        colorPush.image = item.images[1]
        colorPush.title = item.title
        colorPush.publishedAt = item.publishedAt
    colorsArray.values.push(colorPush)
  });

  colorsArray.values = sortByKey(colorsArray.values,"published_at")
  return {
    props: {
      product: parseShopifyResponse(product),
      allColors: parseShopifyResponse(colorsArray)
    },
  };
};
