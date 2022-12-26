import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import { fetcher } from "../Layout";
import useSWR from "swr";

export const BinderShopComponent = ({ item }) => {
  return (
    <>
      <Fade bottom>
        <div className="flex flex-col mb-8 items-center justify-center gap-4">
          <Image src={item.images[0].src} alt="wellness image" width={300} height={300} />
          <h3 className="text">{item.title}</h3>
          <Link href={`/products/${item.handle}`} legacyBehavior>
            <a className="underline">buy now</a>
          </Link>
        </div>
      </Fade>
    </>
  );
};

const BinderShopList: React.FC<any> = ({ product }) => {
  const { data } = useSWR("/api/products", (url) => fetcher(url));
  const [listData, setListData] = useState([]);
  useEffect(() => {
    if (product) {
      if (data) {
        let formattedProducts = data.length > 0 && data.filter((o) => {
          return o.id !== product.id;
        })
        setListData(formattedProducts);
      }
    } else {
      if (data) {
        setListData(data);
      }
    }
  }, [data, product]);

  return (
      <div
        className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1
        xl:py-[120px] lg:py-[120px] md:py-[90px] sm:py-[80px] xs:py-[70px]"
      >
        {listData.length > 0 &&
          listData.map((item, index) => {
            return <BinderShopComponent item={item} key={index} />;
          })}
      </div>
  );
};

export default BinderShopList;