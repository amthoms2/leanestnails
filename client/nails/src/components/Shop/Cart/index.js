import React from 'react'
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'
import img1 from '../../../images/beautybeast.jpg'
import img2 from '../../../images/alicenails.jpg'
import { CartContainer, CartWrapper, Title, TopContainer, TopButton, TopTexts, TopText, BottomContainer, Information, ProductContainer, ProductDetail, Image, Details, ProductName, ProductId, ProductType, PriceDetail, ProductAmountContainer, ProductAmount, ProductPrice, Hr, Summary, SummaryTitle, SummaryItem, SummaryItemText, SummaryItemPrice, Button } from './CartElements'

const Cart = () => {
  return (
    <CartContainer>
      <CartWrapper>
        <Title>YOUR BAG</Title>
        <TopContainer>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </TopContainer>
        <BottomContainer>
          <Information>
            <ProductContainer>
              <ProductDetail>
                <Image src={img2} />
                <Details>
                  <ProductName>
                    <b>Product:</b> Beauty & the Beast Press Ons
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 93813718293
                  </ProductId>
                  <ProductType>
                    <b>Type:</b> Oval
                  </ProductType>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <AiOutlinePlus />
                  <ProductAmount>2</ProductAmount>
                  <AiOutlineMinus />
                </ProductAmountContainer>
                <ProductPrice>$ 30</ProductPrice>
              </PriceDetail>
            </ProductContainer>
            <Hr />
            <ProductContainer>
              <ProductDetail>
                <Image src={img1} />
                <Details>
                  <ProductName>
                    <b>Product:</b> Harley Press Ons
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 93813718293
                  </ProductId>
                  <ProductType>
                    <b>Type:</b> Pointy
                  </ProductType>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <AiOutlinePlus />
                  <ProductAmount>1</ProductAmount>
                  <AiOutlineMinus />
                </ProductAmountContainer>
                <ProductPrice>$ 20</ProductPrice>
              </PriceDetail>
            </ProductContainer>
          </Information>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </BottomContainer>
      </CartWrapper>
    </CartContainer>
  )
}

export default Cart
