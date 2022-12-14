import Image from "next/image";
// import { useEffect } from "react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// import { useDispatch, useSelector } from "react-redux";
import FooterLogo from "../assets/images/footer-logo-12.svg";
import useRouterToCheckPath from "../hooks/useRouterToCheckPath";
import { NavItemProps, PageEdgesProps, PageSingleEdgeProps } from "../interfaces";
import { client, parseShopifyResponse } from "../lib/shopify";
import { setPagesToStore } from "../reducers/shopify";
import { RootState } from "../stores/store";

export default function Footer() {
  const { pages, footerNavs } = useSelector((state: RootState) => state.shopifyReducer);
  const [shopNav, setShopNav] = useState<Array<NavItemProps>>([]);
  const [connectNav, setConnectNav] = useState<Array<NavItemProps>>([]);
  const [discoverNav, setDiscoverNav] = useState<Array<NavItemProps>>([]);
  useEffect(() => {
    if (footerNavs.shop) {
      let shopNavFound = footerNavs.shop?.menu?.items?.map((o: any, index: number) => {
        return {
          title: o.title,
          slug: o.title.split(" ").join("-"),
          url: o.type === "PAGE" ? "/pages"+o.url.split("pages")[o.url.split("pages").length - 1] : o.url
        }
      })
      setShopNav(shopNavFound);
    }
    if (footerNavs.connect) {
      let connectNavFound = footerNavs.connect?.menu?.items?.map((o: any, index: number) => {
        return {
          title: o.title,
          slug: o.title.split(" ").join("-"),
          url: "/"
        }
      })
      setConnectNav(connectNavFound);
    }
    if (footerNavs.discover) {
      let discoverNavFound = footerNavs.discover?.menu?.items?.map((o: any, index: number) => {
        return {
          title: o.title,
          slug: o.title.split(" ").join("-"),
          url: o.type === "PAGE" ? "/pages"+o.url.split("pages")[o.url.split("pages").length - 1] : o.url
        }
      })
      setDiscoverNav(discoverNavFound);
    }
  }, [footerNavs])
  // const { edges }: any = pages;
  // const shopNav: Array<NavItemProps> = [
  //   {
  //     title: "Shop All",
  //     slug: "shop-all",
  //     url: "/shop",
  //   },
  //   {
  //     title: "The Binder",
  //     slug: "the-binder",
  //     url: "/products/the-binder",
  //   },
  //   {
  //     title: "Find Your Fit",
  //     slug: "find-your-fit",
  //     url: "/find-your-fit",
  //   },
  //   {
  //     title: "The Community",
  //     slug: "the-community",
  //     url: "/the-community",
  //   },
  //   {
  //     title: "Returns + Exchanges",
  //     slug: "returns-and-exchanges",
  //     url: "/returns-and-exchanges",
  //   },
  // ];
  // const connectNav: Array<NavItemProps> = [
  //   {
  //     title: "Tiktok",
  //     slug: "tiktok",
  //     url: "#",
  //   },
  //   {
  //     title: "Instagram",
  //     slug: "instagram",
  //     url: "#",
  //   },
  //   {
  //     title: "Facebook",
  //     slug: "facebook",
  //     url: "#",
  //   },
  //   {
  //     title: "Press",
  //     slug: "press",
  //     url: "#",
  //   },
  // ];
  // const discoverNav: Array<NavItemProps> = [
  //   {
  //     title: "Home",
  //     slug: "home",
  //     url: "/",
  //   },
  //   {
  //     title: "Our Story",
  //     slug: "our-story",
  //     url: "#",
  //   },
  //   {
  //     title: "Editorial",
  //     slug: "editorial",
  //     url: "#",
  //   },
  //   {
  //     title: "FAQS",
  //     slug: "faqs",
  //     url: "#",
  //   },
  //   {
  //     title: "Contact Us",
  //     slug: "contact-us",
  //     url: "#",
  //   },
  //   {
  //     title: "Privacy Policy",
  //     slug: "privacy-policy",
  //     url: "/privacy-policy",
  //   },
  // ];
  // const shopNavLinks = edges?.length > 0 ? edges?.map((o: PageSingleEdgeProps) => {
  //   return {
  //     title: o.node.title,
  //     slug: o.node.handle,
  //     url: '/pages/'+o.node.handle
  //   }
  // }) : [];
  return (
    <div className="bg-primary1 section-padding font-monumentExtended">
      <div className="container mx-auto bg-primary1 md:px-[15px] sm:px-[15px] xs:px-[15px]">
        <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4">
          <div className="mb-4">
            <Link href="/">
              <Image src={FooterLogo} alt="main logo" />
            </Link>
          </div>
          <div className="shop-widget flex xl:justify-center lg:justify-center items-start mb-4">
            <ul className="list-none unstyled flex flex-col gap-4">
              <li className="anchor text-primary font-[600]">Shop</li>
              {shopNav.length > 0 &&
                shopNav.map((item: NavItemProps, index: number) => {
                  return (
                    <li
                      key={index}
                      className={`anchor text-primary hover:cursor-pointer${
                        useRouterToCheckPath(item.url) ? " active" : ""
                      }`}
                    >
                      <Link href={item.url} color="inherit" legacyBehavior>
                        <a className="anchor-nav text-primary">{item.title}</a>
                      </Link>
                    </li>
                  );
                })}
            </ul>
          </div>
          <div className="connect-widget flex xl:justify-center lg:justify-center items-start mb-4">
            <ul className="list-none unstyled flex flex-col gap-4">
              <li className="anchor text-primary font-[600]">Connect</li>
              {connectNav.length > 0 &&
                connectNav.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className={`anchor text-primary hover:cursor-pointer${
                        useRouterToCheckPath(item.url) ? " active" : ""
                      }`}
                    >
                      <Link href={item.url} color="inherit" legacyBehavior>
                        <a className="anchor-nav text-primary">{item.title}</a>
                      </Link>
                    </li>
                  );
                })}
            </ul>
          </div>
          <div className="discover-widget flex xl:justify-center lg:justify-center items-start mb-4">
            <ul className="list-none unstyled flex flex-col gap-4">
              <li className="anchor text-primary font-[600]">Discover</li>
              {discoverNav.length > 0 &&
                discoverNav.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className={`anchor text-primary hover:cursor-pointer${
                        useRouterToCheckPath(item.url) ? " active" : ""
                      }`}
                    >
                      <Link href={item.url} color="inherit" legacyBehavior>
                        <a className="anchor-nav text-primary">{item.title}</a>
                      </Link>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}