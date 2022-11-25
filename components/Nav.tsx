import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import MainLogo from "../assets/images/FT-LOGO-BLACK-p-500.svg"
import useRouterToCheckPath from "../hooks/useRouterToCheckPath";
import { NavItemProps } from "../interfaces";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import useWindowSize from "../hooks/useWindowSize";
import {GiHamburgerMenu} from "react-icons/gi"
import { useState } from "react";

export default function Nav() {
  const windowSizeValue = useWindowSize();
  const [hamburger, setHamBurger] = useState<boolean>(false);
  const navigation: Array<NavItemProps> = [
    {
      title: "Home",
      slug: "home",
      url: "/"
    },
    {
      title: "Shop Now",
      slug: "shop-now",
      url: "/shop"
    },
    {
      title: "Size Finder",
      slug: "size-finder",
      url: "/size-finder"
    },
    {
      title: "Our Story",
      slug: "our-story",
      url: "/our-story"
    },
    {
      title: "Editorial",
      slug: "editorial",
      url: "/editorial"
    },
    {
      title: "The Community",
      slug: "community",
      url: "/community"
    }
  ];
  return (
    <>
      <div className="fixed bg-white text-black px-5 top-0 left-0 right-0 flex justify-between items-center border-b-2 border-black z-[999]">
        <div className="flex gap-4">
          <Link href="/">
            <Image src={MainLogo} alt="main logo" className="main-logo" />
          </Link>
          {windowSizeValue.width > 767 && (
            <ul className="list-none unstyled flex gap-1">
              {navigation.length > 0 && navigation.map((item, index) => {
                return <li key={index} className={`nav-list-item hover:cursor-pointer${useRouterToCheckPath(item.url) ? ' active' : ''}`}><Link href={item.url} color="inherit" legacyBehavior><a className="anchor-nav">{item.title}</a></Link></li>
              })}
            </ul>
          )}
        </div>
        <div className="flex gap-4">
          <div className="shoppingBag relative">
            <HiOutlineShoppingBag />
            <span className="badge-count">0</span>
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
      <ul className={`mobile-nav fixed left-0 right-0 list-none unstyled flex flex-col gap-1 p-4 border-b border-black bg-primary2${hamburger ? ' show' : ''}`}>
        {navigation.length > 0 && navigation.map((item, index) => {
          return <li key={index} className={`anchor hover:cursor-pointer${useRouterToCheckPath(item.url) ? ' active' : ''}`}><Link href={item.url} color="inherit" legacyBehavior><a className="anchor-nav">{item.title}</a></Link></li>
        })}
      </ul>
    </>
  )
};


