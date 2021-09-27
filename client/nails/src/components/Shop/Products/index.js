import React from 'react'
import {products} from '../../../data'
import Product from './Product'
import { ProductsContainer } from './ProductElements'

const Products = () => {
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
