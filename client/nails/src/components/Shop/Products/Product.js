import React from 'react'
import { Link } from 'react-router-dom'
import {FaShoppingCart } from "react-icons/fa";
import { AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
import { ProductContainer, Information, Image, Icon } from './ProductElements'

const Product = ({product}) => {
  return (
    <>
      <ProductContainer>
        <Image src={product.img} />
        <Information>

          <Icon>
          <FaShoppingCart/>
          </Icon>

          <Link to={`/product/${product._id}`}>
          <Icon>
          <AiOutlineSearch />
          </Icon>
          </Link>

          <Icon>
          <AiOutlineHeart />
          </Icon>

        </Information>
      </ProductContainer>
    </>
  )
}

export default Product

