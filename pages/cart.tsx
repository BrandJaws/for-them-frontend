import * as React from "react";
import BinderShopList from "../components/common/BinderShopList";
import CartSection from "../components/cart/CartSection";

const Cart: React.FC<any> = () => {
  return (
    <>
      <section>
        <CartSection />
      </section>
      <section>
        <BinderShopList product={null}/>
      </section>
    </>
  );
};

export default Cart;
