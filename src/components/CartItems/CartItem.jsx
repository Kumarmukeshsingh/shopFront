import React, { useContext } from "react";
import "./cartItem.css";
import { ShopContext } from "../../context/ShopContext";
import remove_icon from "../assets/cart_cross_icon.png";

function CartItem() {
  const {
    all_products,
    cartItem,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
  } = useContext(ShopContext);

  return (
    <div className="cartitem">
      <div className="cartitem-format-main">
        <p>Poducts</p>
        <p>Title</p>
        <p>Price </p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_products.map((e) => {
        if (cartItem[e.id] > 0) {
          return (
            <div className="" key={e.id}>
              <div className="cartitem-format cartitem-format-main ">
                <img src={e.image} alt="" className="cartitem-product-icon" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="cartitem-quantity">{cartItem[e.id]}</button>
                <p>${e.new_price * cartItem[e.id]}</p>
                <img
                  className="cartitem-remove-icon"
                  src={remove_icon}
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitem-down">
        <div className="cartitem-total">
          <h1>cart total</h1>
          <div className="cartitem-total-item">
            <p>subtotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <hr />

          <div className="cartitem-total-item">
            <p>Shipping Fee</p>
            <p>Free</p>
          </div>
          <hr />

          <div className="cartitem-total-item">
            <h3>Total</h3>
            <h3>${getTotalCartAmount()}</h3>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>

        <div className="cartitem-promocode">
          <p>if you have a promo code , enter it here</p>
          <div className="cartitem-promobox">
            <input type="text" placeholder="promo code" />
            <button>submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
