import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scrollUp } from "react-scroll";
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

const Navbar = ({ toggleBar }) => {
  const [scroll, setScroll] = useState(false);

  const scrollChange = () => {
    if (window.scrollY >= 80) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  const toggleHome = () => {
    scrollUp.scrollToTop();
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollChange);
  }, []);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scroll={scroll}>
          <NavContainer>
            <NavbarLogo to="/" onClick={toggleHome}>
              Logo
            </NavbarLogo>
            <MobileIcon onClick={toggleBar}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  About
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                to="services"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                >Services</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="gallery" smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}>Gallery</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="shop" >Shop</NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to="signin">Sign In</NavBtnLink>
            </NavBtn>
          </NavContainer>
        </Nav>
      </IconContext.Provider>
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
