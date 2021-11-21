import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  NavContainer,
  NavWrapper,
  Left,
  Center,
  Right,
  Logo,
  MenuOffering,
} from "./ShopNavElements";
import { FaShoppingCart } from "react-icons/fa";
import { Badge } from "@material-ui/core";

const ShopNav = () => {
  const qty = useSelector((state) => state.cart.qty);
  return (
    <>
      <NavContainer>
        <NavWrapper>
          <Left>LOGO</Left>
          <Center>
            <Link to="/shop" style={{textDecoration: "none"}}>
              <Logo>Leanest Nails</Logo>
            </Link>
          </Center>
          <Right>
            <Link to="/signin">
              <MenuOffering>Sign In</MenuOffering>
            </Link>

            <Link to="/cart">
              <MenuOffering>
                <Badge badgeContent={qty} color="primary">
                  <FaShoppingCart />
                </Badge>
              </MenuOffering>
            </Link>
          </Right>
        </NavWrapper>
      </NavContainer>
    </>
  );
};

export default ShopNav;
