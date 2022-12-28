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
        <div className="flex flex-col mb-8 items-center justify-center gap-4 mb-4">
          <Image
              src={item.image.src}
              alt={item.title}
              width={250}
              height={250}
          />
          <h3 className="text">{item.title}</h3>
          <Link href={`/products/${item.handle}`} legacyBehavior>
            <a className="underline">buy now</a>
          </Link>
        </div>
      </Fade>
    </>
  );
};

const BinderShopList = ({product}) => {
  const allColors = {"name":"Color","values":[{"value":"Beige","type":{"name":"String","kind":"SCALAR"},"otherProduct":true,"handle":"the-binder-beige","image":{"id":"gid://shopify/ProductImage/35668369539238","src":"https://cdn.shopify.com/s/files/1/0575/1154/2950/products/A17-Binder-Beige-1.png?v=1670426706","altText":null,"width":2074,"height":1703,"type":{"name":"Image","kind":"OBJECT","fieldBaseTypes":{"altText":"String","height":"Int","id":"ID","originalSrc":"URL","src":"URL","transformedSrc":"URL","url":"URL","width":"Int"},"implementsNode":false},"hasNextPage":{"value":true},"hasPreviousPage":{"value":true},"variableValues":{"id":"gid://shopify/Collection/292491067558","productsFirst":100}},"title":"The Binder Beige","publishedAt":"2022-12-22T18:23:06Z"},{"value":"Garnet","type":{"name":"String","kind":"SCALAR"},"otherProduct":true,"handle":"the-binder-garnet","image":{"id":"gid://shopify/ProductImage/35668373242022","src":"https://cdn.shopify.com/s/files/1/0575/1154/2950/products/A17-Binder-Red-1.png?v=1670426732","altText":null,"width":2097,"height":1699,"type":{"name":"Image","kind":"OBJECT","fieldBaseTypes":{"altText":"String","height":"Int","id":"ID","originalSrc":"URL","src":"URL","transformedSrc":"URL","url":"URL","width":"Int"},"implementsNode":false},"hasNextPage":{"value":true},"hasPreviousPage":{"value":true},"variableValues":{"id":"gid://shopify/Collection/292491067558","productsFirst":100}},"title":"The Binder Garnet","publishedAt":"2022-12-27T12:15:58Z"},{"value":"Chalk","type":{"name":"String","kind":"SCALAR"},"otherProduct":true,"handle":"the-binder-chalk","image":{"id":"gid://shopify/ProductImage/35668376879270","src":"https://cdn.shopify.com/s/files/1/0575/1154/2950/products/A17-Binder-White-1_1_cc109fd0-92f6-4830-892f-65a94267afa7.png?v=1670426720","altText":null,"width":2099,"height":1700,"type":{"name":"Image","kind":"OBJECT","fieldBaseTypes":{"altText":"String","height":"Int","id":"ID","originalSrc":"URL","src":"URL","transformedSrc":"URL","url":"URL","width":"Int"},"implementsNode":false},"hasNextPage":{"value":true},"hasPreviousPage":{"value":true},"variableValues":{"id":"gid://shopify/Collection/292491067558","productsFirst":100}},"title":"The Binder Chalk","publishedAt":"2022-12-22T18:44:42Z"},{"value":"Starlight","type":{"name":"String","kind":"SCALAR"},"otherProduct":true,"handle":"the-binder-starlight","image":{"id":"gid://shopify/ProductImage/35668290470054","src":"https://cdn.shopify.com/s/files/1/0575/1154/2950/products/A17-Binder-Grey-1_1_46541b47-adf1-4f22-bd7f-660df6290c84.png?v=1670426745","altText":null,"width":2078,"height":1706,"type":{"name":"Image","kind":"OBJECT","fieldBaseTypes":{"altText":"String","height":"Int","id":"ID","originalSrc":"URL","src":"URL","transformedSrc":"URL","url":"URL","width":"Int"},"implementsNode":false},"hasNextPage":{"value":true},"hasPreviousPage":{"value":true},"variableValues":{"id":"gid://shopify/Collection/292491067558","productsFirst":100}},"title":"The Binder Starlight","publishedAt":"2022-12-27T12:15:57Z"},{"value":"Charcoal","type":{"name":"String","kind":"SCALAR"},"otherProduct":true,"handle":"the-binder-charcoal","image":{"id":"gid://shopify/ProductImage/35668381958310","src":"https://cdn.shopify.com/s/files/1/0575/1154/2950/products/A17-Binder-Charcoal-1_f1e6ef59-d210-4416-8fbb-1adef82428f5.png?v=1670426724","altText":null,"width":2107,"height":1702,"type":{"name":"Image","kind":"OBJECT","fieldBaseTypes":{"altText":"String","height":"Int","id":"ID","originalSrc":"URL","src":"URL","transformedSrc":"URL","url":"URL","width":"Int"},"implementsNode":false},"hasNextPage":{"value":true},"hasPreviousPage":{"value":true},"variableValues":{"id":"gid://shopify/Collection/292491067558","productsFirst":100}},"title":"The Binder Charcoal","publishedAt":"2022-12-27T12:15:56Z"},{"value":"Cobalt","type":{"name":"String","kind":"SCALAR"},"otherProduct":true,"handle":"the-binder-cobalt","image":{"id":"gid://shopify/ProductImage/35668239777958","src":"https://cdn.shopify.com/s/files/1/0575/1154/2950/products/A17-Binder-Blue-1_89bbee13-91b3-4372-b57c-db8dd9942b8e.png?v=1670426727","altText":null,"width":2052,"height":1699,"type":{"name":"Image","kind":"OBJECT","fieldBaseTypes":{"altText":"String","height":"Int","id":"ID","originalSrc":"URL","src":"URL","transformedSrc":"URL","url":"URL","width":"Int"},"implementsNode":false},"hasNextPage":{"value":true},"hasPreviousPage":{"value":true},"variableValues":{"id":"gid://shopify/Collection/292491067558","productsFirst":100}},"title":"The Binder Cobalt","publishedAt":"2022-12-27T12:15:55Z"},{"value":"Forest","type":{"name":"String","kind":"SCALAR"},"otherProduct":true,"handle":"the-binder-forest","image":{"id":"gid://shopify/ProductImage/35668222771366","src":"https://cdn.shopify.com/s/files/1/0575/1154/2950/products/A17-Binder-Green-1_1dc2c5f7-d1dc-4b28-809a-44b1a06a8503.png?v=1670426729","altText":null,"width":2097,"height":1696,"type":{"name":"Image","kind":"OBJECT","fieldBaseTypes":{"altText":"String","height":"Int","id":"ID","originalSrc":"URL","src":"URL","transformedSrc":"URL","url":"URL","width":"Int"},"implementsNode":false},"hasNextPage":{"value":true},"hasPreviousPage":{"value":true},"variableValues":{"id":"gid://shopify/Collection/292491067558","productsFirst":100}},"title":"The Binder Forest","publishedAt":"2022-12-27T12:15:54Z"},{"value":"Midnight","type":{"name":"String","kind":"SCALAR"},"otherProduct":true,"handle":"the-binder-midnight","image":{"id":"gid://shopify/ProductImage/35668220805286","src":"https://cdn.shopify.com/s/files/1/0575/1154/2950/products/A17-Binder-Black-1_f3c393dc-8c32-4a1a-88b4-4ddfdcfe6e45.png?v=1670426735","altText":null,"width":2123,"height":1705,"type":{"name":"Image","kind":"OBJECT","fieldBaseTypes":{"altText":"String","height":"Int","id":"ID","originalSrc":"URL","src":"URL","transformedSrc":"URL","url":"URL","width":"Int"},"implementsNode":false},"hasNextPage":{"value":true},"hasPreviousPage":{"value":true},"variableValues":{"id":"gid://shopify/Collection/292491067558","productsFirst":100}},"title":"The Binder Midnight","publishedAt":"2022-12-27T12:15:53Z"},{"value":"Orange","type":{"name":"String","kind":"SCALAR"},"otherProduct":true,"handle":"the-binder-orange","image":{"id":"gid://shopify/ProductImage/35668215693478","src":"https://cdn.shopify.com/s/files/1/0575/1154/2950/products/A17-Binder-Coral-1_37604b3b-9917-458e-b2a9-a6b030a5204b.png?v=1670426741","altText":null,"width":2081,"height":1702,"type":{"name":"Image","kind":"OBJECT","fieldBaseTypes":{"altText":"String","height":"Int","id":"ID","originalSrc":"URL","src":"URL","transformedSrc":"URL","url":"URL","width":"Int"},"implementsNode":false},"hasNextPage":{"value":true},"hasPreviousPage":{"value":true},"variableValues":{"id":"gid://shopify/Collection/292491067558","productsFirst":100}},"title":"The Binder Orange","publishedAt":"2022-12-27T12:15:52Z"},{"value":"Navy","type":{"name":"String","kind":"SCALAR"},"otherProduct":true,"handle":"the-binder-navy","image":{"id":"gid://shopify/ProductImage/35668211663014","src":"https://cdn.shopify.com/s/files/1/0575/1154/2950/products/A17-Binder-Navy-1_cdb9d946-df77-42bf-8644-855765e8611a.png?v=1670426738","altText":null,"width":2107,"height":1702,"type":{"name":"Image","kind":"OBJECT","fieldBaseTypes":{"altText":"String","height":"Int","id":"ID","originalSrc":"URL","src":"URL","transformedSrc":"URL","url":"URL","width":"Int"},"implementsNode":false},"hasNextPage":{"value":true},"hasPreviousPage":{"value":true},"variableValues":{"id":"gid://shopify/Collection/292491067558","productsFirst":100}},"title":"The Binder Navy","publishedAt":"2022-12-27T12:15:51Z"}],"type":{"name":"ProductOption","kind":"OBJECT","fieldBaseTypes":{"id":"ID","name":"String","values":"String"},"implementsNode":true}}
    let colors = allColors
    if (typeof product !== null) {
      colors.values = allColors.values.filter(x => x.handle !== product)
    }
    colors.values = colors.values.slice(0,9)
    return (
      <div
        className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1
        xl:py-[120px] lg:py-[120px] md:py-[90px] sm:py-[80px] xs:py-[30px] "
      >
        {colors.values.length > 0 &&
            colors.values.map((item, index) => {
            return <BinderShopComponent item={item} key={index} />;
          })}
      </div>
  );
};

export default BinderShopList;