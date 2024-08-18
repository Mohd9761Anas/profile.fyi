import React, { useEffect, useState } from "react";
import Card from "./card";
import productsData from "./products.json";

const ProductList = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  return (
    <div className="product-list">
      {products.map((product) => (
        <Card key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;