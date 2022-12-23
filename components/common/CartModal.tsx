import * as React from "react";
import { FaMinus, FaPlus, FaTimes } from "react-icons/fa";
import {
  minusProductQuantity,
  plusProductQuantity,
  setActiveCartModal,
  setCheckout,
} from "../../reducers/shopify";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { RootState } from "../../stores/store";
import { client } from "../../lib/shopify";
import Image from "next/image";
import CartBody from "./CartBody";

const CartModal: React.FC<any> = () => {
  const dispatch = useDispatch();
  const { checkout } = useSelector(
    (state: RootState) => state.shopifyReducer
  );
  const handleCheckout = () => {
    if (checkout) {
      window.open(checkout.webUrl, "_blank");
    }
    // let lineItemsToAdd = cartItems.map((item: any) => {
    //   let findProductVariant = item.product.variants.find((o: any) => {
    //     return o.selectedOptions.find(
    //       (option) => option.value === item.selectedSize
    //     );
    //   });
    //   if (findProductVariant) {
    //     return {
    //       variantId: findProductVariant.id,
    //       quantity: item.quantity,
    //     };
    //   }
    // });
    // if (lineItemsToAdd.length > 0) {
    //   client.checkout.create().then((checkout: any) => {
    //     client.checkout
    //       .addLineItems(checkout.id, lineItemsToAdd)
    //       .then((data: any) => {
    //         dispatch(setCheckout(data));
    //         window.open(data.webUrl, "_blank");
    //       });
    //   });
    // }
  };
  return (
    <>
      <div
        className="cart-modal fixed right-0 bottom-0 top-0 p-4 flex justify-between flex-col"
        id="cart"
      >
        <div>
          <div className="cart-header border-b text-left flex justify-between items-center pb-4">
            <h1 className="text-medium">Cart</h1>
            <span
              className="cursor-pointer"
              onClick={() => dispatch(setActiveCartModal(false))}
            >
              <FaTimes className="w-6 h-6" />
            </span>
          </div>
          <div className="cart-body pt-4">
            <CartBody />
          </div>
        </div>
        <div className="cart-footer flex flex-col gap-2 items-start justify-start">
          <Link href="/cart" className="w-full">
            <button className="binder-btn-outline !w-full">View Cart</button>
          </Link>
          <Link href="/shop" className="w-full">
            <button className="binder-btn-outline !w-full">
              Continue Shopping
            </button>
          </Link>
          <button className="binder-btn !w-full" onClick={handleCheckout}>
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default CartModal;
