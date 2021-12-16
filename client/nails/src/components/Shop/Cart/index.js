import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import StripeCheckout from "react-stripe-checkout";
import { useSelector, useDispatch } from "react-redux";
import {
  CartContainer,
  CartWrapper,
  Title,
  TopContainer,
  TopButton,
  TopTexts,
  TopText,
  BottomContainer,
  Information,
  ProductContainer,
  ProductDetail,
  Image,
  Details,
  ProductName,
  ProductId,
  ProductType,
  PriceDetail,
  ProductAmountContainer,
  ProductAmount,
  ProductPrice,
  Hr,
  Summary,
  SummaryTitle,
  SummaryItem,
  SummaryItemText,
  SummaryItemPrice,
  Button,
} from "./CartElements";
import {clearCart} from "../../../redux/cartRedux"

// const STRIPE_PUBLISHABLE = process.env.STRIPE_KEY;
const STRIPE_PUBLISHABLE = "pk_test_51JiqwFECtP9ThSLbWLNLoLc1DNRH7JCSYlfC4wRo1CB6yM6BXU8DXqLY8KMI8hHcJw0GlvvzvFfxlBGbzO75LaY800kdacfPPk";

const fromDollarToCent = (amount) => parseInt(amount * 100);

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  const shipping = () => {
    if (cart.total > 0) {
      return 5.99;
    } else return 0;
  };

  const [stripeToken, setStripeToken] = useState(null);
  const history = useHistory();
  const dispatch = useDispatch();

  const onToken = (token) => {
    setStripeToken(token);
  };
  useEffect(() => {
    const makeReq = async () => {

      try {
        const res = await axios.post('http://localhost:8080/api/checkout/payment', {
          tokenId: stripeToken.id,
          amount: fromDollarToCent(cart.total + 5.99)
          }
         );
        //  alert('Payment successful')
        history.push("/cart/success", {
          data: res.data,
          products: cart
        });
      } catch(err) {
        console.log(err);
        alert('Payment Error')
      }
    };
    stripeToken && makeReq()
  }, [stripeToken, cart, cart.total, history]);

  const handleClick = (evt) => {
    evt.preventDefault();
    dispatch(clearCart());
  }

  return (
    <CartContainer>
      <CartWrapper>
        <Title>YOUR BAG</Title>
        <TopContainer>
          <Link to="/products/press-ons">
            <TopButton>CONTINUE SHOPPING</TopButton>
          </Link>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
          <button onClick={handleClick}>Clear Cart</button>
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
                      <b>Shape:</b> {product.shape}
                    </ProductType>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <AiOutlinePlus />
                    <ProductAmount>{product.qty}</ProductAmount>
                    <AiOutlineMinus />
                  </ProductAmountContainer>
                  <ProductPrice>$ {Math.floor(product.price) * product.qty}</ProductPrice>
                </PriceDetail>
              </ProductContainer>
            ))}
            <Hr />
          </Information>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.99</SummaryItemPrice>
            </SummaryItem>
            {/* <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem> */}
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ {cart.total + shipping()}</SummaryItemPrice>
            </SummaryItem>
            <StripeCheckout
              name='The Leanest Nails'
              billingAddress
              shippingAddress
              description={`Your total is $${cart.total + shipping()}`}
              amount={fromDollarToCent(cart.total + shipping())}
              token={onToken}
              stripeKey={STRIPE_PUBLISHABLE}
              >
              <Button>CHECKOUT NOW</Button>
              </StripeCheckout>
          </Summary>
        </BottomContainer>
      </CartWrapper>
    </CartContainer>
  );
};

export default Cart;
