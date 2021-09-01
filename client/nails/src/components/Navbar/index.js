import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavContainer,
  NavbarLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavContainer>
          <NavbarLogo to="/">Leanest Nails</NavbarLogo>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services">Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="gallery">Gallery</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="book">Book</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
          </NavBtn>
        </NavContainer>
      </Nav>
    </>
  );
};

export default Navbar;

// 'rafce' creates a React Arrow Function Component with ES7 module system (ES7 React/Redux/GraphQL/React-Native snippets)

// import React from 'react'

// const  = () => {
//     return (s
//         <div>

//         </div>
//     )

//FaBars is the name of the bars from react-icons!
