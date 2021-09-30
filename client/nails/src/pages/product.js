import React from 'react'
import styled from 'styled-components'
import img from '../images/harley.png'
import ShopNav from '../components/Shop/ShopNav'
import ShopAnnouncements from '../components/Shop/ShopNav/ShopAnnouncements'
import Footer from '../components/Footer'
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'

export const ProductContainer = styled.div`
`

export const ProductWrapper = styled.div`
  padding: 50;
  display: flex;
`
export const ImageContainer = styled.div`
  flex: 1;
`
export const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: contain;
`
export const Information = styled.div`
  flex: 1;
  padding: 0px 50px;
`

export const Title = styled.h1`
  font-weight: 200;
`

export const Description = styled.p`
  margin: 20px 0px;
`
export const Price = styled.span`
  font-size: 40px;
  font-weight: 100;
`
export const AddContainer= styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: space-between;
`
export const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  cursor: pointer;
`
export const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 2px solid #43E4DB;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`
export const Button = styled.button`
  padding: 15px;
  border: 2px solid #43E4DB;
  background-color: #fff;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary ? '#fff' : '#01BF71')};
  }
`
const Product = () => {
  return (
    <>
      <ProductContainer>
        <ShopNav />
        <ShopAnnouncements />
        <ProductWrapper>
          <ImageContainer>
            <Image src={img}/>
          </ImageContainer>
          <Information>
            <Title>Harley Nails</Title>
            <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Description>
            <Price>$$$</Price>
            <AddContainer>
              <AmountContainer>
                <AiOutlineMinus />
                <Amount>1</Amount>
                <AiOutlinePlus />
              </AmountContainer>
              <Button>Add To Cart</Button>
            </AddContainer>
          </Information>
        </ProductWrapper>
        <Footer />
      </ProductContainer>
    </>
  )
}

export default Product
