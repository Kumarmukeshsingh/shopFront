import React from "react";
import "./RelatedProduct.css";
import date_product from "../assets/data";
import Item from "../item/Item";

function RelatedProduct() {
  return (
    <div className="relatedProducts">
      <h1> Related Product </h1>
      <hr />
      <div className="relatedproduct-item">
        {date_product.map((item, i) => {
          return (
            <Item
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default RelatedProduct;
