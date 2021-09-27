import React from 'react'
import {FaShoppingCart } from "react-icons/fa";
import { AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
import { ProductContainer, Circle, Information, Image, Icon } from './ProductElements'

const Product = ({product}) => {
  return (
    <>
      <ProductContainer>
        <Circle />
        <Image src={product.img} />
        <Information>

          <Icon>
          <FaShoppingCart />
          </Icon>

          <Icon>
          <AiOutlineSearch />
          </Icon>

          <Icon>
          <AiOutlineHeart />
          </Icon>

        </Information>
      </ProductContainer>
    </>
  )
}

export default Product

