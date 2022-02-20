// import {
//   NavContainer,
//   NavWrapper,
//   Left,
//   Center,
//   Right,
//   Logo,
//   MenuOffering,
// } from "./ShopNavElements";
// import { FaShoppingCart } from "react-icons/fa";
// import { Badge } from "@material-ui/core";

// const ShopNav = () => {
//   const qty = useSelector((state) => state.cart.qty);
//   const cartId = useSelector((state) => state.cart._id);
//   return(
//     <>
//       <NavContainer>
//         <NavWrapper>
//           <Left>LOGO</Left>
//           <Center>
//             <Link to="/shop" style={{textDecoration: "none"}}>
//               <Logo>Leanest Nails</Logo>
//             </Link>
//           </Center>
//           <Right>
//             <Link to="/signin">
//               <MenuOffering>Sign In</MenuOffering>
//             </Link>

//             <Link to={`/cart/${cartId}`}>
//               <MenuOffering>
//                 <Badge badgeContent={qty} color="primary">
//                   <FaShoppingCart />
//                 </Badge>
//               </MenuOffering>
//             </Link>
//           </Right>
//         </NavWrapper>
//       </NavContainer>
//     </>
//   )
// };

// export default ShopNav;
// eslint-disable-next-line
import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Badge } from "@material-ui/core";
import { logout } from "../../../redux/api";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
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
} from "./ShopNavElements";
import ShopAnnouncements from "./ShopAnnouncements"

const ShopNav = ({isBooking}) => {

  const qty = useSelector((state) => state.cart.qty);
  const cartId = useSelector((state) => state.cart._id);
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false)

  const toggleBar = () => {
    setIsOpen(!isOpen)
  }
  // console.log('qty in sn', qty)

  const toggleHome = () => {
    scrollUp.scrollToTop();
  };

  const handleClick = (evt) => {
    evt.preventDefault();
    logout(dispatch);
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>

      { !isBooking ? <ShopAnnouncements /> : console.log('true')}
        <Nav>
          <NavContainer isOpen={isOpen}>
            <NavbarLogo to="/" onClick={toggleHome}>
              Logo
            </NavbarLogo>
            <MobileIcon>
              <FaBars onClick={toggleBar}/>
            </MobileIcon>
            <NavMenu>

            <NavItem>
                <NavLinks to="/shop">Home</NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks to="/services"> Services</NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks to="/gallery">Gallery</NavLinks>
              </NavItem>

              <Link to={`/cart/${cartId}`}>
                <Badge badgeContent={qty} color="primary">
                  <FaShoppingCart />
                </Badge>
              </Link>

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

export default ShopNav;
