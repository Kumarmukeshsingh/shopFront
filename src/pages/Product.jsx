import React, { useContext } from "react";

import { ShopContext } from "../context/ShopContext";
import Breadcrums from "../components/Breadcrums/Breadcrums";
import { useParams } from "react-router-dom";
import ProductDisplay from "../components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../components/DescriptionBox/DescriptionBox";
import RelatedProduct from "../components/RelatedProduct/RelatedProduct";

function Product() {
  const { all_products } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_products.find((e) => e.id === Number(productId));
  console.log(all_products);

  console.log(product);

  return (
    <>
      <Breadcrums product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProduct />
    </>
  );
}

export default Product;
