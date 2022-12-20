import React, { ReactNode, useEffect } from "react";
import Head from "next/head";
import Nav from "./Nav";
import Footer from "./Footer";
import useSWR from "swr";
import axios from "axios";
import { setNavToStore, setPagesToStore } from "../reducers/shopify";
import { useDispatch } from "react-redux";

const fetcher = (url) => axios.get(url).then((res) => res.data);

export interface LayoutProps {
  children?: ReactNode;
  title?: string;
}

const Layout: React.FC<any> = ({
  children,
  title = "This is the default title",
}) => {
  const { data } = useSWR("/api/pages", (url) => fetcher(url));
  const { data: discoverMenu } = useSWR("/api/footerDiscover", (url) =>
    fetcher(url)
  );
  const { data: shopMenu } = useSWR("/api/footerShop", (url) => fetcher(url));
  const { data: connectMenu } = useSWR("/api/footerConnect", (url) =>
    fetcher(url)
  );
  const { data: headerMenu } = useSWR("/api/headerNav", (url) => fetcher(url));
  const dispatch = useDispatch();
  useEffect(() => {
    // Fetching Pages
    if (data) {
      dispatch(setPagesToStore(data.pages));
    }
    // Fetching Footer Nav Discover
    if (discoverMenu) {
      dispatch(
        setNavToStore({
          navType: process.env.FOOTER_DISCOVER_MENU,
          data: discoverMenu,
        })
      );
    }
    // Fetching Footer Nav Shop
    if (shopMenu) {
      dispatch(
        setNavToStore({
          navType: process.env.FOOTER_SHOP_MENU,
          data: shopMenu,
        })
      );
    }
    // Fetching Footer Nav Connect
    if (connectMenu) {
      dispatch(
        setNavToStore({
          navType: process.env.FOOTER_CONNECT_MENU,
          data: connectMenu,
        })
      );
    }
    // Fetching Header Nav
    if (headerMenu) {
      dispatch(
        setNavToStore({
          navType: process.env.HEADER_MENU,
          data: headerMenu,
        })
      );
    }
  }, [data, discoverMenu, shopMenu, connectMenu, headerMenu, dispatch]);

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Nav />
      </header>
      <main className="app-wrapper">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
