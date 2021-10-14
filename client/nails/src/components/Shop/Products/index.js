/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
// import {products} from '../../../data'
import axios from "axios"
import Product from './Product'
import { ProductsContainer } from './ProductElements'

const Products = ({category, filters, sort}) => {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      try{
        const res = await axios.get("http://localhost:8080/api/products");
        console.log(res.data)
      } catch(err){

      }
    }
    getProducts()
  }, [category])

  return (
    <>
      <ProductsContainer>
        {products.map(product => (
          <Product product={product} key={product.id}/>
        ))}
      </ProductsContainer>
    </>
  )
}

export default Products
