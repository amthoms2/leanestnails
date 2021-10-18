/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
// import {products} from '../../../data'
import axios from "axios";
import Product from "./Product";
import { ProductsContainer } from "./ProductElements";

const Products = ({ category, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          category
            ? `http://localhost:8080/api/products?category=${category}`
            : `http://localhost:8080/api/products`
        );
        // console.log(res.data)
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, [category]);

  useEffect(() => {
    if (category) {
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
    }
  }, [products, category, filters]);
  //if there is a category, filter and return all the products that include the item; use obj.entries to return an array of the key value pairs and for ever pair, check an item to see if it includes the value

  useEffect(() => {
    if (sort === "Newest") {
      setFilteredProducts((items) =>
        [...items].sort((a, b) => b.createdAt - a.createdAt)
      );
    } else if (sort === "Price Low to High") {
      setFilteredProducts((items) =>
        [...items].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((items) =>
        [...items].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);


  return (
    <>
      <ProductsContainer>
        {filteredProducts.map((product) => (
          <Product product={product} key={product._id} />
        ))}
      </ProductsContainer>
    </>
  );
};

export default Products;
