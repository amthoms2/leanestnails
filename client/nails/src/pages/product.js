import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import axios from "axios";
import ShopNav from "../components/Shop/ShopNav";
// import ShopAnnouncements from "../components/Shop/ShopNav/ShopAnnouncements";
import Footer from "../components/Footer";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { mobile } from "../responsive";
// eslint-disable-next-line
import { createNewCart, updateUserCart } from "../redux/api";
// import { addProduct } from "../redux/cartRedux";

export const ProductContainer = styled.div``;

export const ProductWrapper = styled.div`
  padding: 50;
  display: flex;
  /* ${mobile({ padding: "10px", flexDirection: "column" })} */
`;
export const ImageContainer = styled.div`
  flex: 1;
`;
export const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: contain;
  ${mobile({ height: "40vh" })}
`;
export const Information = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

export const Title = styled.h1`
  font-weight: 200;
`;

export const Description = styled.p`
  margin: 20px 0px;
`;
export const Price = styled.span`
  font-size: 40px;
  font-weight: 100;
`;
export const AddContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;
export const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  cursor: pointer;
`;
export const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 2px solid #43e4db;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
export const Button = styled.button`
  padding: 15px;
  border: 2px solid #43e4db;
  background-color: #fff;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#fff" : "#01BF71")};
  }
`;
const Product = () => {
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [qty, setQty] = useState(1);
  // const userId = useSelector((state) => state.user.currentUser._id);
  const cartCheck = useSelector((state) => state.cart.products);
  // const cartId = useSelector((state) => state.cart._id);

  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8080/api/products/find/" + productId
        );
        setProduct(res.data);
      } catch (err) {}
    };
    getProduct();
  }, [productId]);

  const handleQty = (type) => {
    if (type === "minus" && qty > 1) {
      setQty(qty - 1);
    } else if (type === "plus") {
      setQty(qty + 1);
    } else {
      setQty(qty + 1)
    }
  };

  const handleClick = (evt) => {
    evt.preventDefault();
    if (cartCheck.length === 0) {
      createNewCart(dispatch, product, qty);
    } else {
      updateUserCart(dispatch, product, qty);
    }
  };

  return (
    <>
      <ProductContainer>
        <ShopNav />
        {/* <ShopAnnouncements /> */}
        <ProductWrapper>
          <ImageContainer>
            <Image src={product.img} />
          </ImageContainer>
          <Information>
            <Title>{product.title}</Title>
            <Description>{product.desc}</Description>
            <Price>${product.price}</Price>
            <AddContainer>
              <AmountContainer>
                <AiOutlineMinus onClick={() => handleQty("minus")} />
                <Amount>{qty}</Amount>
                <AiOutlinePlus onClick={() => handleQty("plus")} />
              </AmountContainer>
              <Button onClick={handleClick}>Add To Cart</Button>
            </AddContainer>
          </Information>
        </ProductWrapper>
        <Footer />
      </ProductContainer>
    </>
  );
};

export default Product;
