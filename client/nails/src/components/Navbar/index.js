import React, { useState, useEffect } from "react";
import {logout} from "../../redux/api";
import { useSelector, useDispatch } from "react-redux";
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
  NavLink,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = ({ toggleBar }) => {
  const [scroll, setScroll] = useState(false);
  const user = useSelector((state) => state.user.currentUser);
  console.log("user", user);
  const dispatch = useDispatch();

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

  const handleClick = (evt) => {
    evt.preventDefault();
    logout(dispatch);
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
                >
                  Services
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="gallery"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Gallery
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLink to="shop">Shop</NavLink>
              </NavItem>
            </NavMenu>

            {user ? (
              <NavBtn>
                <NavBtnLink onClick={handleClick}> Sign Out</NavBtnLink>
              </NavBtn>
            ) : (
              <NavBtn>
                <NavBtnLink to="signin">Sign In</NavBtnLink>
              </NavBtn>
            )}
          </NavContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
