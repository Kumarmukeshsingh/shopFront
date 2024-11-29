import React, { useContext } from "react";
import Hero from "../components/hero/Hero";
import Popular from "../components/popular/Popular";
import Offers from "../components/offers/Offers";
import Exp from "../components/exp/exp";
import NewCollection from "../components/newCollection/NewCollection";
import NewsLetter from "../components/NewsLetter/NewsLetter";

function Shop() {
  

  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollection />
      <NewsLetter />
    </div>
  );
}

export default Shop;
