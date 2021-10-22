import React from 'react'
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'
import { useSelector } from "react-redux"
// import { useEffect, useState } from "react"
// import { userRequest } from "../requestMethods"
// import { useHistory } from "react-router"
// import img from '../../../images/beautybeast.jpg'
import { CartContainer, CartWrapper, Title, TopContainer, TopButton, TopTexts, TopText, BottomContainer, Information, ProductContainer, ProductDetail, Image, Details, ProductName, ProductId, ProductType, PriceDetail, ProductAmountContainer, ProductAmount, ProductPrice, Hr, Summary, SummaryTitle, SummaryItem, SummaryItemText, SummaryItemPrice, Button } from './CartElements'

const Cart = () => {
  const cart = useSelector(state => state.cart);
  // const [stripeToken, setStripeToken] = useState(null);
  // const history = useHistory();

  // const onToken = (token) => {
  //   setStripeToken(token);
  // };

  // useEffect(() => {
  //   const makeRequest = async () => {
  //     try {
  //       const res = await userRequest.post("/checkout/payment", {
  //         tokenId: stripeToken.id,
  //         amount: 500,
  //       });
  //       history.push("/success", {
  //         stripeData: res.data,
  //         products: cart, });
  //     } catch {}
  //   };
  //   stripeToken && makeRequest();
  // }, [stripeToken, cart.total, history]);

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
            {cart.products.map((product) => (
            <ProductContainer>
              <ProductDetail>
                <Image src={product.img} />
                <Details>
                  <ProductName>
                    <b>Product:</b> {product.title}
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> {product._id}
                  </ProductId>
                  <ProductType>
                    <b>Type:</b> {product.categories[0]}
                  </ProductType>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <AiOutlinePlus />
                  <ProductAmount>2</ProductAmount>
                  <AiOutlineMinus />
                </ProductAmountContainer>
                <ProductPrice>$ {product.price}</ProductPrice>
              </PriceDetail>
            </ProductContainer>))}
            <Hr />

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
