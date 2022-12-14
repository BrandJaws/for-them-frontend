import Layout from "../components/Layout";
import { parseShopifyResponse, client } from "../lib/shopify";
import type { NextPage } from "next";
import * as React from "react";
import { useEffect } from "react";
import HeroSection from "../components/home/HeroSection";
import GiftSection from "../components/home/GiftSection";
import StorySection from "../components/home/StorySection";
import TestimonialSection from "../components/home/TestimonialSection";
import { FOOTER_CONNECT_MENU, FOOTER_DISCOVER_MENU, FOOTER_SHOP_MENU, TESTIMONIALS } from "../utils/data";
import OurProductsSection from "../components/home/OurProductsSection";
import ApplySection from "../components/home/ApplySection";
import FollowUsSection from "../components/home/FollowUsSection";
import BinderShopSection from "../components/home/BinderShopSection";
import BinderCallToActionSection from "../components/home/BinderCallToActionSection";
import { useDispatch } from "react-redux";
import { setFooterNavToStore, setPagesToStore } from "../reducers/shopify";

const Home: NextPage = ({ data, discoverMenu, shopMenu, connectMenu }: any) => {
  const dispatch = useDispatch();
  useEffect(() => {
    // Fetching Pages
    if (data) {
      dispatch(setPagesToStore(data.pages));
    }
    // Fetching Footer Nav Discover
    if (discoverMenu) {
      dispatch(setFooterNavToStore({
        footerType: process.env.FOOTER_DISCOVER_MENU,
        data: discoverMenu
      }));
    }
    // Fetching Footer Nav Shop
    if (shopMenu) {
      dispatch(setFooterNavToStore({
        footerType: process.env.FOOTER_SHOP_MENU,
        data: shopMenu
      }));
    }
    // Fetching Footer Nav Connect
    if (connectMenu) {
      dispatch(setFooterNavToStore({
        footerType: process.env.FOOTER_CONNECT_MENU,
        data: connectMenu
      }));
    }
  }, [data, discoverMenu, shopMenu, connectMenu, dispatch]);
  return (
    <Layout title="Home - For Them">
      <HeroSection />
      <GiftSection />
      <TestimonialSection data={TESTIMONIALS} />
      <StorySection />
      <OurProductsSection />
      <ApplySection />
      <FollowUsSection />
      <BinderShopSection />
      <BinderCallToActionSection />
    </Layout>
  );
};

export default Home;

export const getServerSideProps = async () => {
  // Fetching Pages
  const pagesQuery = client.graphQLClient.query((root: any) => {
    root.addConnection("pages", { args: { first: 200 } }, (page: any) => {
      page.add("id");
      page.add("title");
      page.add("body");
      page.add("bodySummary");
      page.add("handle");
    });
  });
  let pages = await client.graphQLClient
    .send(pagesQuery)
    .then(({ data }) => data);
  // Fetching Footer Discover Nav
  const footerDiscoverMenuQuery = client.graphQLClient.query((root: any) => {
    root.add(
      "menu",
      { args: { handle: process.env.FOOTER_DISCOVER_MENU } },
      (shop: any) => {
        shop.add("id");
        shop.add("handle");
        shop.add("items", (item: any) => {
          item.add("id"),
            item.add("items"),
            item.add("resourceId"),
            item.add("tags"),
            item.add("title"),
            item.add("type"),
            item.add("url");
        });
        shop.add("itemsCount");
        shop.add("title");
      }
    );
  });
  let footerDiscoverMenuData = await client.graphQLClient
    .send(footerDiscoverMenuQuery)
    .then(({ data }) => data);
  // Fetching Footer Shop Nav
  const footerShopMenuQuery = client.graphQLClient.query((root: any) => {
    root.add(
      "menu",
      { args: { handle: process.env.FOOTER_SHOP_MENU } },
      (shop: any) => {
        shop.add("id");
        shop.add("handle");
        shop.add("items", (item: any) => {
          item.add("id"),
            item.add("items"),
            item.add("resourceId"),
            item.add("tags"),
            item.add("title"),
            item.add("type"),
            item.add("url");
        });
        shop.add("itemsCount");
        shop.add("title");
      }
    );
  });
  let footerShopMenuData = await client.graphQLClient
    .send(footerShopMenuQuery)
    .then(({ data }) => data);
  // Fetching Footer Connect Nav
  const footerConnectMenuQuery = client.graphQLClient.query((root: any) => {
    root.add(
      "menu",
      { args: { handle: process.env.FOOTER_CONNECT_MENU } },
      (shop: any) => {
        shop.add("id");
        shop.add("handle");
        shop.add("items", (item: any) => {
          item.add("id"),
          item.add("items"),
          item.add("resourceId"),
          item.add("tags"),
          item.add("title"),
          item.add("type")
        });
        shop.add("itemsCount");
        shop.add("title");
      }
    );
  });
  let footerConnectMenuData = await client.graphQLClient
    .send(footerConnectMenuQuery)
    .then(({ data }) => data);
  return {
    props: {
      data: parseShopifyResponse(pages),
      discoverMenu: footerDiscoverMenuData ? parseShopifyResponse(footerDiscoverMenuData) : null,
      shopMenu: footerShopMenuData ? parseShopifyResponse(footerShopMenuData) : null,
      connectMenu: footerConnectMenuData ? parseShopifyResponse(footerConnectMenuData) : null,
    },
  };
};
