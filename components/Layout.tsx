import React, { ReactNode, useEffect } from "react";
import Head from "next/head";
import Nav from "./Nav";
import Footer from "./Footer";
import useSWR from "swr";
import axios from "axios";
import {
  setActiveCartModal,
  setActiveSizeFinderModal,
  setHamBurger,
  setNavToStore,
  setPagesToStore,
  setShopifyToEmpty,
} from "../reducers/shopify";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../stores/store";
import CartModal from "./common/CartModal";
import SizeFinderModal from "./common/SizeFinderModal";
import Fade from "react-reveal/Fade";

export const fetcher = (url) => axios.get(url).then((res) => res.data);

export interface LayoutProps {
  children?: ReactNode;
  title?: string;
}

const Layout: React.FC<any> = ({
  children,
  title = "This is the default title",
}) => {
  const { isCartOpen, isSizeFinderModal, isLoading, hamburger } = useSelector(
    (state: RootState) => state.shopifyReducer
  );
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
  const handleClickForHideCartModal = (e: any) => {
    if (isCartOpen && !document.getElementById("cart").contains(e.target)) {
      dispatch(setActiveCartModal(false));
    }
    if (
      isSizeFinderModal &&
      !document.getElementById("size-finder").contains(e.target)
    ) {
      dispatch(setActiveSizeFinderModal(false));
    }
    if (hamburger) {
      dispatch(setHamBurger(false));
    }
  };
  return (
    <React.Fragment>
      <div
        className="relative"
        onClick={(event) => handleClickForHideCartModal(event)}
      >
        <Head>
          <title>{title}</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <header>
          <Nav />
        </header>
        <main className="app-wrapper">
          {children}
          {isCartOpen && !isLoading && <CartModal />}
        </main>
        <footer>
          <Footer />
        </footer>
        {isSizeFinderModal && (
          <div className={isSizeFinderModal ? "size-finder-modal-active" : ""}>
            <SizeFinderModal />
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default Layout;
