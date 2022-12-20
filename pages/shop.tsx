import Layout from "../components/Layout";
import ProductsList from "../components/ProductsList";
import { shopifyClient, parseShopifyResponse } from "../lib/shopify";
import type { NextPage } from "next";
import HeroSection from "../components/shop/HeroSection";
import BinderShopList from "../components/common/BinderShopList";

export interface ShopProps {
  products?: any
}

const Shop: React.FC<ShopProps> = ({ products }) => {
  return (
    <>
    {/* // <Layout title="Shop - For Them"> */}
      <HeroSection />
      <ProductsList products={products} />
      <section className="">
        <BinderShopList />
      </section>
    {/* // </Layout> */}
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
