import ProductsList from "../components/ProductsList";
import { shopifyClient, parseShopifyResponse } from "../lib/shopify";
import HeroSection from "../components/shop/HeroSection";
import BinderShopList from "../components/common/BinderShopList";
import CartSection from "../components/cart/CartSection";

export interface ShopProps {
  products?: any;
}

const Cart: React.FC<any> = () => {
  return (
    <>
      <section>
        <CartSection />
      </section>
      <section className="">
        <BinderShopList />
      </section>
    </>
  );
};

export default Cart;

export const getServerSideProps = async () => {
  // Fetch all the products
  const products = await shopifyClient.product.fetchAll();

  return {
    props: {
      products: parseShopifyResponse(products),
    },
  };
};
