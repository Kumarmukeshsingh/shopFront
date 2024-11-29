import React from "react";
import "./Popular.css";
import data_product from "../assets/data";
import Item from "../item/Item.jsx";

function Popular() {
  return (
    <>
      <div className="popular"  style={{backgroundColor:""}}>
        <h1>POPULAR IN HUMEN</h1>
        <hr />
        <div className="popular-item" style={{backgroundColor:""}} >
          {data_product.map((item) => {
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
    </>
  );
}

export default Popular;
