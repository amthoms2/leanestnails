import React from 'react';
import {NavContainer, NavWrapper, Left, Center, Right, Logo, MenuOffering}from './ShopNavElements'
import {FaShoppingCart} from "react-icons/fa";

const ShopNav = () => {
  return (
    <>
      <NavContainer>
          <NavWrapper>
            <Left>LOGO</Left>
            <Center><Logo>Leanest Nails</Logo></Center>
            <Right>
              <MenuOffering>Sign In</MenuOffering>
              <MenuOffering>
                <FaShoppingCart />
              </MenuOffering>
            </Right>
            </NavWrapper>
      </NavContainer>
    </>
  )
}

export default ShopNav
