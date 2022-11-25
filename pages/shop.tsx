import Link from "next/link";
import Layout from "../components/Layout";
import Nav from "../components/Nav";
import ProductsList from "../components/ProductsList";
import { shopifyClient, parseShopifyResponse } from "../lib/shopify";
import { NextPage } from "next";
import HeroSection from "../components/shop/HeroSection";
import SizeFinderSection from "../components/shop/SizeFinderSection";

const Shop: NextPage = ({ products }: any) => {
  console.log(products, "Products");
  return (
    <>
      <Layout title="Home | For Them">
        <HeroSection />
        <ProductsList products={products} />
        <SizeFinderSection />
      </Layout>
    </>
  );
};

export default Shop;

export const getServerSideProps = async () => {
  // Fetch all the products
  const products = await shopifyClient.product.fetchAll();

  return {
    props: {
      products: parseShopifyResponse(products),
    },
  };
};
