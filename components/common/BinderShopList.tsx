import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import orange from "../../assets/images/shop/orange.png";
import darkBlue from "../../assets/images/shop/dark-blue.png";
import lightGrey from "../../assets/images/shop/light-grey.png";
import white from "../../assets/images/shop/white.png";
import seagreen from "../../assets/images/shop/seagreen.png";
import darkPink from "../../assets/images/shop/dark-pink.png";
import blue from "../../assets/images/shop/blue.png";
import darkGrey from "../../assets/images/shop/dark-grey.png";
import black from "../../assets/images/shop/black.png";
import { BinderShopProps } from "../../interfaces";
import Fade from "react-reveal/Fade";

export const BinderShopComponent = ({ item }) => {
  return (
    <>
      <Fade bottom>
        <div className="flex flex-col mb-8 items-center justify-center gap-4">
          <Image src={item.url} alt="wellness image" />
          <h3 className="text">{item.title}</h3>
          <Link href="/shop" legacyBehavior>
            <a className="underline">buy now</a>
          </Link>
        </div>
      </Fade>
    </>
  );
};

const BinderShopList = () => {
  const shopData: Array<BinderShopProps> = [
    {
      title: "Color",
      url: orange,
    },
    {
      title: "Color",
      url: darkBlue,
    },
    {
      title: "Color",
      url: lightGrey,
    },
    {
      title: "Color",
      url: white,
    },
    {
      title: "Color",
      url: seagreen,
    },
    {
      title: "Color",
      url: darkPink,
    },
    {
      title: "Color",
      url: blue,
    },
    {
      title: "Color",
      url: darkGrey,
    },
    {
      title: "Color",
      url: black,
    },
  ];

  return (
      <div
        className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1
        xl:py-[120px] lg:py-[120px] md:py-[90px] sm:py-[80px] xs:py-[70px]"
      >
        {shopData.length > 0 &&
          shopData.map((item, index) => {
            return <BinderShopComponent item={item} key={index} />;
          })}
      </div>
  );
};

export default BinderShopList;
