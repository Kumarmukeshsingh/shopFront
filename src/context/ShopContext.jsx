import React, { createContext, useState } from "react";

import all_products from "../components/assets/all_product.js";
export const ShopContext = createContext();

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_products.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItem, setCattItems] = useState(getDefaultCart());

  // console.log(cartItem);

  const addToCart = (itemId) => {
    setCattItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    console.log(cartItem);
  };

  const removeFromCart = (itemId) => {
    setCattItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    console.log();
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        let itemInfo = all_products.find(
          (product) => product.id == Number(item)
        );
        totalAmount += itemInfo.new_price * cartItem[item];
      }
    }
    return totalAmount;
  };

  const getTotalCartItem = () => {
    let TotalItem = 0;
    for (const items in cartItem) {
      if (cartItem[items] > 0) {
        TotalItem += cartItem[items];
      }
    }
    return TotalItem;
  };

  // const contextValue = { all_products, cartItem, addToCart, removeFromCart };

  return (
    <ShopContext.Provider
      // value={
      //   contextValue
      // }
      value={{
        all_products,
        cartItem,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        getTotalCartItem,
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
};
