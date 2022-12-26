import type { NextPage } from "next";
import * as React from "react";
import HeroSection from "../components/home/HeroSection";
import GiftSection from "../components/home/GiftSection";
import StorySection from "../components/home/StorySection";
import TestimonialSection from "../components/home/TestimonialSection";
import { TESTIMONIALS } from "../utils/data";
import OurProductsSection from "../components/home/OurProductsSection";
import ApplySection from "../components/home/ApplySection";
import FollowUsSection from "../components/home/FollowUsSection";
import BinderShopSection from "../components/home/BinderShopSection";
import BinderCallToActionSection from "../components/home/BinderCallToActionSection";

const Home: NextPage = () => {
  return (
    <>
      <HeroSection />
      <GiftSection />
      <TestimonialSection data={TESTIMONIALS} />
      <StorySection />
      <OurProductsSection />
      <ApplySection />
      <FollowUsSection />
      <BinderShopSection />
      <BinderCallToActionSection />
    </>
  );
};

export default Home;