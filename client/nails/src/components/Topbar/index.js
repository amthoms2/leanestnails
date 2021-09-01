import React from "react";
import {
  TopbarContainer,
  ShutIcon,
  Icon,
  TopbarWrapper,
  TopbarMenu,
  TopbarLink,
  TopBtnWrap,
  TopbarRoute,
} from "./TopbarElements";

const TopBar = () => {
  return (
    <TopbarContainer>
      <Icon>
        <ShutIcon />
      </Icon>
      <TopbarWrapper>
        <TopbarMenu>
          <TopbarLink to="about">About</TopbarLink>
          <TopbarLink to="services">Services</TopbarLink>
          <TopbarLink to="gallery">Gallery</TopbarLink>
          <TopbarLink to="book">Book</TopbarLink>
          <TopbarLink to="signin">Signin</TopbarLink>
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
