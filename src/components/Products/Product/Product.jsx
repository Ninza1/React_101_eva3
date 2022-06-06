import React from "react";
import axios from "axios"
import { useState, useEffect } from "react";

const Product = () => {
  const [data, setData] = useState([]);

  useEffect(() => {

    axios({
      url: "http://localhost:8080/products",
      method: "GET"
    })
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  // Note: this id should come from api

  // const product = {id}
  return <div>{/* Code here */}

  {
    data.map((item) => (
      <div data-cy={`product-${item.id}`}>
        <h3 data-cy="product-name">{item.name}</h3>
        <h6 data-cy="product-description">{item.description}</h6>
        <button data-cy="product-add-item-to-cart-button">Add to Cart</button>
        <div>
          <button data-cy="product-increment-cart-item-count-button">+</button>
          <span data-cy="product-count">
            { 
              // Count here from CartItems
            }
          </span>
          <button data-cy="product-decrement-cart-item-count-button">-</button>
          <button data-cy="product-remove-cart-item-button">remove from cart</button>
        </div>
      </div>

    ))
  }


</div>;
};
export default Product;
