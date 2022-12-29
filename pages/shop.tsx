import ProductsListShop from "../components/ProductsListShop";
import { shopifyClient, parseShopifyResponse } from "../lib/shopify";
import HeroSection from "../components/shop/HeroSection";
import BinderShopList from "../components/common/BinderShopList";

export interface ShopProps {
  products?: any
}

const Shop: React.FC<ShopProps> = ({ products }) => {
  return (
    <>
      <HeroSection />
      <ProductsListShop products={products} />
      <section className="">
        <BinderShopList product={null}/>
      </section>
    </>
  );
};

export default Shop;

export const getStaticProps = async () => {
  // Fetch all the products
    const collection = await shopifyClient.collection.fetchWithProducts('gid://shopify/Collection/292795383974',{productsFirst: 100})
  return {
    props: {
      products: parseShopifyResponse(collection.products),
    },
  };
};
