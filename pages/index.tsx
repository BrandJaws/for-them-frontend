import Layout from "../components/Layout";
import { shopifyClient, parseShopifyResponse } from "../lib/shopify";
import type { NextPage } from 'next';
import * as React from "react";
import HeroSection from "../components/home/HeroSection";
import GiftSection from "../components/home/GiftSection";
import StorySection from "../components/home/StorySection";
import RangeSection from "../components/home/RangeSection";
import CheckItOut from "../components/home/CheckItOut";
import Wellness from "../components/home/Wellness";
import TestimonialSection from "../components/home/TestimonialSection";
import { TESTIMONIALS } from "../utils/data";
import OurProductsSection from "../components/home/OurProductsSection";
import ApplySection from "../components/home/ApplySection";
import FollowUsSection from "../components/home/FollowUsSection";
import BinderShopSection from "../components/home/BinderShopSection";
import BinderCallToActionSection from "../components/home/BinderCallToActionSection";

const Home: React.FC<NextPage> = () => {
  return (
    <Layout title="Home - For Them">
      <HeroSection />
      <GiftSection />
      <TestimonialSection data={TESTIMONIALS} />
      <StorySection />
      {/* <RangeSection /> */}
      <OurProductsSection />
      <ApplySection />
      <FollowUsSection />
      <BinderShopSection />
      <BinderCallToActionSection />
      {/* <Wellness /> */}
    </Layout>
  );
};

export default Home;