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
import { setNavToStore, setPagesToStore } from "../reducers/shopify";

const Home: NextPage = () => {
  return (
    <>
    {/* <Layout title="Home - For Them"> */}
      <HeroSection />
      <GiftSection />
      <TestimonialSection data={TESTIMONIALS} />
      <StorySection />
      <OurProductsSection />
      <ApplySection />
      <FollowUsSection />
      <BinderShopSection />
      <BinderCallToActionSection />
    {/* </Layout> */}
    </>
  );
};

export default Home;
