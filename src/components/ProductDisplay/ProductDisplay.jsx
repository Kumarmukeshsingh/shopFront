import React, { useContext } from "react";
import "../ProductDisplay/ProductDisplay.css";
import star_icon from "../assets/star_icon.png";
import star_dull_icon from "../assets/star_dull_icon.png";
import { ShopContext } from "../../context/ShopContext";

function ProductDisplay(props) {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  // console.log(product);
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>

        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>

      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>122</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            ${product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-discription">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi rem
          sint ducimus reprehenderit dolore necessitatibus ullam, eius ea
          pariatur eos vero consequuntur asperiores esse sed eaque quos.
          Officia, ipsum veritatis?
        </div>
        <div className="productdisplay-right-size">
          <h1>select size</h1>
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}}> ADD To CART </button>
        <p className="productdisplay-right-category">
          <span>category : </span>Women , T-shirt , Crop Top
        </p>

        <p className="productdisplay-right-category">
          <span>Tags :</span> Modern ,Latest
        </p>
      </div>
    </div>
  );
}

export default ProductDisplay;
