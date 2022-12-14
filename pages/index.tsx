import Link from "next/link";
import Layout from "../components/Layout";
import Nav from "../components/Nav";
import ProductsList from "../components/ProductsList";
import { shopifyClient, parseShopifyResponse } from "../lib/shopify";
import { NextPage } from "next";
import HeroSection from "../components/home/HeroSection";
import GiftSection from "../components/home/GiftSection";
import StorySection from "../components/home/StorySection";
import RangeSection from "../components/home/RangeSection";
import CheckItOut from "../components/home/CheckItOut";
import Wellness from "../components/home/Wellness";
import TestimonialSection from "../components/home/TestimonialSection";
import { TESTIMONIALS } from "../utils/data";

const IndexPage: NextPage = ({ products }: any) => {
  console.log(products, "Products");
  return (
    <>
      <Layout title="Home | For Them">
        <HeroSection />
        <GiftSection />
        <TestimonialSection data={TESTIMONIALS} />
        <StorySection />
        <RangeSection />
        <CheckItOut />
        <Wellness />
        {/* <ProductsList products={products} /> */}
      </Layout>
    </>
  );
};

export default IndexPage;

export const getServerSideProps = async () => {
  // Fetch all the products
  const products = await shopifyClient.product.fetchAll();

  return {
    props: {
      products: parseShopifyResponse(products),
    },
  };
};
