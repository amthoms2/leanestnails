import React from "react";
import {
  TopbarContainer,
  ShutIcon,
  Icon,
  TopbarWrapper,
  TopbarMenu,
  TopbarLink,
  TopbarLinkRoute,
  TopBtnWrap,
  TopbarRoute,
} from "./TopbarElements";

function handleBar(e) {
  console.log('you clicked')
}

const TopBar = ({ isOpen, toggleBar }) => {
  console.log({isOpen})
  return (
    <TopbarContainer isOpen={isOpen} onClick={handleBar}>
      <Icon onClick={toggleBar}>
        <ShutIcon />
      </Icon>
      <TopbarWrapper>
        <TopbarMenu>
          <TopbarLink to="about" onClick={toggleBar}>About</TopbarLink>
          <TopbarLink to="services" onClick={toggleBar}>Services</TopbarLink>
          <TopbarLink to="gallery" onClick={toggleBar}>Gallery</TopbarLink>
          <TopbarLinkRoute to="shop" onClick={toggleBar}>Shop</TopbarLinkRoute>
          <TopbarLinkRoute to="book" onClick={toggleBar}>Book</TopbarLinkRoute>
        </TopbarMenu>

        <TopBtnWrap>
          <TopbarRoute to="/signin">Sign In</TopbarRoute>
        </TopBtnWrap>
      </TopbarWrapper>
    </TopbarContainer>
  );
};

export default TopBar;

//rafce shortcut to set up react skeleton
