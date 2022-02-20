import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import ShopNav from "../../components/Shop/ShopNav";
import Footer from "../../components/Footer";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
// eslint-disable-next-line
import { createNewCart, updateUserCart } from "../../redux/api";
import {ProductContainer, ProductWrapper, ImageContainer, Image, Information, Title, Description, Price, AddContainer, AmountContainer, Amount, Button} from "./ProductElements"

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
