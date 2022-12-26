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

const CartBody: React.FC<any> = () => {
  const dispatch = useDispatch();
  const { checkout } = useSelector((state: RootState) => state.shopifyReducer);
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
      {checkout && checkout.lineItems.length > 0 ? (
        checkout.lineItems.map((item: any, index: number) => {
          return (
            <div key={index} className="mb-4 flex gap-2">
              <div>
                <Image
                  src={item.variant.image.src}
                  alt="featured image"
                  width={100}
                  height={100}
                />
              </div>
              <div className="content flex flex-col items-start justify-center gap-4">
                <div>
                  <p>{item.title}</p>
                  <p>${item.variant.price.amount * item.quantity}</p>
                </div>
                <div className="flex gap-2 items-center justify-center">
                  <span
                    className="border w-9 h-8 flex items-center justify-center cursor-pointer"
                    onClick={() => handleUpdateLineItems(item.id, "minus")}
                  >
                    <FaMinus />
                  </span>
                  <span className="border w-9 h-8 flex items-center justify-center cursor-pointer">
                    {item.quantity}
                  </span>
                  <span
                    className="border w-9 h-8 flex items-center justify-center cursor-pointer"
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
        })
      ) : (
        <p>Your cart is empty!</p>
      )}
    </>
  );
};

export default CartBody;
