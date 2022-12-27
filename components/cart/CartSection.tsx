import React, { useEffect } from "react";
import { client } from "../../lib/shopify";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../stores/store";
import CartBody from "../common/CartBody";
import { setCheckout } from "../../reducers/shopify";
import Image from "next/image";
import { FaMinus, FaPlus } from "react-icons/fa";
import Link from "next/link";

const CartSection = () => {
  const { checkout } = useSelector((state: RootState) => state.shopifyReducer);
  const dispatch = useDispatch();
  const handleUpdateLineItems = (id: string, type: string) => {
    if (checkout) {
      let lineItemFound = checkout.lineItems.find((o) => o.id === id);
      if (lineItemFound) {
        let updatedItem = {};
        if (type === "minus" && lineItemFound.quantity > 1) {
          updatedItem = {
            id,
            quantity: lineItemFound.quantity - 1,
          };
        }
        if (type === "plus" && lineItemFound.quantity >= 1) {
          updatedItem = {
            id,
            quantity: lineItemFound.quantity + 1,
          };
        }
        client.checkout
          .updateLineItems(checkout.id, [updatedItem])
          .then((data) => {
            dispatch(setCheckout(data));
          });
      }
    }
  };
  const handleCheckout = () => {
    if (checkout) {
      window.open(checkout.webUrl, "_blank");
    }
  };
  const handleRemoveCartItem = (id) => {
    const lineItemIdsToRemove = [id];
    // Remove an item from the checkout
    client.checkout
      .removeLineItems(checkout.id, lineItemIdsToRemove)
      .then((data) => {
        // Do something with the updated checkout
        dispatch(setCheckout(data));
      });
  };
  return (
    <>
      <div className="border p-6">
        <div className="container mx-auto section-padding">
          <div className="pb-[30px]">
            {checkout &&
              checkout.lineItems.length > 0 ?
              checkout.lineItems.map((item: any, index: number) => {
                return (
                  <div key={index} className="mb-4 flex gap-4">
                    <div>
                      <Image
                        src={item.variant.image.src}
                        alt="featured image"
                        width={200}
                        height={200}
                      />
                    </div>
                    <div className="content flex flex-col items-start justify-center gap-6">
                      <div>
                        <h1 className="text-large">{item.title}</h1>
                        <p className="text-large">
                          ${item.variant.price.amount * item.quantity}
                        </p>
                      </div>
                      <div className="flex gap-2 items-center justify-center">
                        <span
                          className="border w-12 h-8 flex items-center justify-center cursor-pointer"
                          onClick={() =>
                            handleUpdateLineItems(item.id, "minus")
                          }
                        >
                          <FaMinus />
                        </span>
                        <span className="border w-12 h-8 flex items-center justify-center cursor-pointer">
                          {item.quantity}
                        </span>
                        <span
                          className="border w-12 h-8 flex items-center justify-center cursor-pointer"
                          onClick={() => handleUpdateLineItems(item.id, "plus")}
                        >
                          <FaPlus />
                        </span>
                        <p
                          className="lightFont text-[14px] cursor-pointer"
                          onClick={() => handleRemoveCartItem(item.id)}
                        >
                          remove
                        </p>
                      </div>
                    </div>
                  </div>
                );
              }) : <div className="text-large">Your cart is empty!</div>}
          </div>
          {checkout && checkout.lineItems.length > 0 && (
            <ul className="mb-4">
              <li className="cart-section cart-info-text">
                <span>Subtotal Price:</span>
                <span>${checkout.subtotalPrice.amount}</span>
              </li>
              <li className="cart-section cart-info-text">
                <span>Total Taxes:</span>
                <span>(Calculated at next step)</span>
              </li>
              <hr />
              <li className="cart-section cart-info-text">
                <span>Total Price:</span>
                <span>${checkout.totalPrice.amount}</span>
              </li>
            </ul>
          )}
          <div className="cart-btns flex gap-2">
            <Link href="/shop">
              <button className="binder-btn-outline">Continue Shopping</button>
            </Link>
            <button className="binder-btn" onClick={handleCheckout}>
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartSection;
