import Image from "next/image";
import React, { useEffect } from "react";
import Link from "next/link";
import MainLogo from "../assets/images/FT-LOGO-BLACK-p-500.svg";
import useRouterToCheckPath from "../hooks/useRouterToCheckPath";
import { NavItemProps } from "../interfaces";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import useWindowSize from "../hooks/useWindowSize";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../stores/store";
import { setActiveCartModal, setActiveSizeFinderModal, setShopifyToEmpty } from "../reducers/shopify";

export default function Nav() {
  const windowSizeValue = useWindowSize();
  const dispatch = useDispatch();
  const [hamburger, setHamBurger] = useState<boolean>(false);
  const navigation: Array<NavItemProps> = [
    {
      title: "Home",
      slug: "home",
      url: "/",
    },
    {
      title: "Shop",
      slug: "shop",
      url: "/shop",
    },
    {
      title: "Size Finder",
      slug: "size-finder",
      url: "/pages/size-finder",
    }
  ];
  const { headerNav, checkout } = useSelector((state: RootState) => state.shopifyReducer);
  const [nav, setNav] = useState<Array<NavItemProps>>([]);
  useEffect(() => {
    let copiedNavs = [];
    if (headerNav) {
      let navFound = headerNav?.menu?.items?.map((o: any, index: number) => {
        return {
          title: o.title,
          slug: o.title.split(" ").join("-"),
          url: o.type === "PAGE" ? "/pages"+o.url.split("pages")[o.url.split("pages").length - 1] : o.url
        }
      })
      copiedNavs = [...navigation,...navFound];
      setNav(copiedNavs);
    }
  }, [headerNav, dispatch])
  const handleClickSizeFinder = (e: any) => {
    dispatch(setActiveSizeFinderModal(true));
  }
  return (
    <>
      <div className="fixed bg-white text-black px-5 top-0 left-0 right-0 flex justify-between items-center border-b-2 border-black z-[999]">
        <div className="flex gap-4">
          <Link href="/">
            <Image src={MainLogo} alt="main logo" className="main-logo" />
          </Link>
          {windowSizeValue.width > 767 && (
            <ul className="list-none unstyled flex gap-1">
              {nav.length > 0 &&
                nav.map((item, index) => {
                  return (
                    <>
                      {item.slug === "size-finder" ? (
                        <li
                          key={index}
                          className={`nav-list-item hover:cursor-pointer`}
                        >
                          <a type="button" className="anchor-nav" onClick={(e) => handleClickSizeFinder(e)}>Size Finder</a>
                        </li>
                      ) : item.slug === "editorial" ? (
                        <li
                          key={index}
                          className={`nav-list-item hover:cursor-pointer`}
                        >
                          <a type="button" className="anchor-nav" onClick={(e) => handleClickSizeFinder(e)}>Editorial</a>
                        </li>
                      ) : (
                        <li
                          key={index}
                          className={`nav-list-item hover:cursor-pointer${
                            useRouterToCheckPath(item.url) ? " active" : ""
                          }`}
                        >
                          <Link href={item.url} color="inherit" legacyBehavior>
                            <a className="anchor-nav">{item.title}</a>
                          </Link>
                        </li>
                      )}
                    </>
                  );
                })}
            </ul>
          )}
        </div>
        <div className="flex gap-4">
          <div className="shoppingBag relative">
            <HiOutlineShoppingBag className="cursor-pointer" onClick={() => dispatch(setActiveCartModal(true))} />
            <span className="badge-count">{checkout && checkout.lineItems.length}</span>
          </div>
          {windowSizeValue.width < 767 && (
            <>
              <button type="button" onClick={() => setHamBurger(!hamburger)}>
                <GiHamburgerMenu className="w-5 h-5" />
              </button>
            </>
          )}
        </div>
      </div>
      {windowSizeValue.width < 767 && (
        <ul
          className={`mobile-nav fixed left-0 z-[500] right-0 list-none unstyled flex flex-col gap-1 p-4 border-b border-black bg-primary2${
            hamburger ? " show" : ""
          }`}
        >
          {nav.length > 0 &&
                nav.map((item, index) => {
                  return (
                    <>
                      {item.slug === "size-finder" ? (
                        <li
                          key={index}
                          className={`nav-list-item hover:cursor-pointer`}
                        >
                          <a type="button" className="anchor-nav" onClick={(e) => handleClickSizeFinder(e)}>Size Finder</a>
                        </li>
                      ) : item.slug === "editorial" ? (
                        <li
                          key={index}
                          className={`nav-list-item hover:cursor-pointer`}
                        >
                          <a type="button" className="anchor-nav" onClick={(e) => handleClickSizeFinder(e)}>Editorial</a>
                        </li>
                      ) : (
                        <li
                          key={index}
                          className={`nav-list-item hover:cursor-pointer${
                            useRouterToCheckPath(item.url) ? " active" : ""
                          }`}
                        >
                          <Link href={item.url} color="inherit" legacyBehavior>
                            <a className="anchor-nav">{item.title}</a>
                          </Link>
                        </li>
                      )}
                    </>
                  );
                })}
        </ul>
      )}
    </>
  );
}
