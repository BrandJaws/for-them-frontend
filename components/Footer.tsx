import Image from "next/image";
import Link from "next/link";
import FooterLogo from "../assets/images/footer-logo.svg";
import useRouterToCheckPath from "../hooks/useRouterToCheckPath";
import { NavItemProps } from "../interfaces";

export default function Footer() {
  const shopNav: Array<NavItemProps> = [
    {
      title: "Shop All",
      slug: "shop-all",
      url: "/shop",
    },
    {
      title: "The Binder",
      slug: "the-binder",
      url: "/products/the-binder",
    },
    {
      title: "Find Your Fit",
      slug: "find-your-fit",
      url: "/find-your-fit",
    },
    {
      title: "The Community",
      slug: "the-community",
      url: "/the-community",
    },
    {
      title: "Returns + Exchanges",
      slug: "returns-and-exchanges",
      url: "/returns-and-exchanges",
    },
  ];
  const connectNav: Array<NavItemProps> = [
    {
      title: "Tiktok",
      slug: "tiktok",
      url: "#",
    },
    {
      title: "Instagram",
      slug: "instagram",
      url: "#",
    },
    {
      title: "Facebook",
      slug: "facebook",
      url: "#",
    },
    {
      title: "Press",
      slug: "press",
      url: "#",
    },
  ];
  const discoverNav: Array<NavItemProps> = [
    {
      title: "Home",
      slug: "home",
      url: "/",
    },
    {
      title: "Our Story",
      slug: "our-story",
      url: "#",
    },
    {
      title: "Editorial",
      slug: "editorial",
      url: "#",
    },
    {
      title: "FAQS",
      slug: "faqs",
      url: "#",
    },
    {
      title: "Contact Us",
      slug: "contact-us",
      url: "#",
    },
    {
      title: "Privacy Policy",
      slug: "privacy-policy",
      url: "/privacy-policy",
    },
  ];
  return (
    <div className="bg-primary section-padding font-monumentExtended">
      <div className="container mx-auto bg-primary md:px-[15px] sm:px-[15px] xs:px-[15px]">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4">
          <div className="mb-4">
            <Link href="/">
              <Image src={FooterLogo} alt="main logo" />
            </Link>
          </div>
          <div className="shop-widget flex lg:justify-center items-start mb-4">
            <ul className="list-none unstyled flex flex-col gap-4">
              <li className="font-[600]">Shop</li>
              {shopNav.length > 0 &&
                shopNav.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className={`anchor hover:cursor-pointer${
                        useRouterToCheckPath(item.url) ? " active" : ""
                      }`}
                    >
                      <Link href={item.url} color="inherit" legacyBehavior>
                        <a className="anchor-nav">{item.title}</a>
                      </Link>
                    </li>
                  );
                })}
            </ul>
          </div>
          <div className="connect-widget flex lg:justify-center items-start mb-4">
            <ul className="list-none unstyled flex flex-col gap-4">
              <li className="font-[600]">Connect</li>
              {connectNav.length > 0 &&
                connectNav.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className={`anchor hover:cursor-pointer${
                        useRouterToCheckPath(item.url) ? " active" : ""
                      }`}
                    >
                      <Link href={item.url} color="inherit" legacyBehavior>
                        <a className="anchor-nav">{item.title}</a>
                      </Link>
                    </li>
                  );
                })}
            </ul>
          </div>
          <div className="discover-widget flex lg:justify-center items-start mb-4">
            <ul className="list-none unstyled flex flex-col gap-4">
              <li className="font-[600]">Discover</li>
              {discoverNav.length > 0 &&
                discoverNav.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className={`anchor hover:cursor-pointer${
                        useRouterToCheckPath(item.url) ? " active" : ""
                      }`}
                    >
                      <Link href={item.url} color="inherit" legacyBehavior>
                        <a className="anchor-nav">{item.title}</a>
                      </Link>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 mt-6">
          <p>© 20XX-2022, for them, Inc. or its affiliates</p>
        </div>
      </div>
    </div>
  );
}
