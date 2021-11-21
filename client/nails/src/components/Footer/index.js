import React from "react"
import {FaFacebook, FaYoutube, FaLinkedin, FaInstagram} from "react-icons/fa";
import {animateScroll as scrollUp} from "react-scroll";
import {
  FooterContainer,
  FooterWrapper,
  FooterLinks,
  LinksWrapper,
  FooterItems,
  FooterH1,
  FooterLink,
  SocialMedia,
  SocialMediaWrapper,
  Logo,
  CopyRights,
  SocialIcon,
  SocialLink,
} from "./FooterElements";

const Footer = () => {

  const toggleHome = () => {
    scrollUp.scrollToTop();
  };
  return (
    <>
      <FooterContainer>
        <FooterWrapper>
          <FooterLinks>
            <LinksWrapper>
              <FooterItems>
                <FooterH1>Quick Links</FooterH1>
                <FooterLink to="/" onClick={toggleHome}>Home</FooterLink>
                <FooterLink to="/gallery">Gallery</FooterLink>
                <FooterLink to="/book">Book an Appointment</FooterLink>
                <FooterLink to="/shop">Shop</FooterLink>
                <FooterLink to="/signin">Sign In</FooterLink>
                <FooterLink to="/contact">Contact Me</FooterLink>
              </FooterItems>

              <FooterItems>
                <FooterH1>Quick Links</FooterH1>
                <FooterLink to="/" onClick={toggleHome}>Home</FooterLink>
                <FooterLink to="/gallery">Gallery</FooterLink>
                <FooterLink to="/book">Book an Appointment</FooterLink>
                <FooterLink to="/shop">Shop</FooterLink>
                <FooterLink to="/signin">Sign In</FooterLink>
                <FooterLink to="/contact">Contact Me</FooterLink>
              </FooterItems>
            </LinksWrapper>

            <LinksWrapper>
              <FooterItems>
                <FooterH1>Quick Links</FooterH1>
                <FooterLink to="/" onClick={toggleHome}>Home</FooterLink>
                <FooterLink to="/gallery">Gallery</FooterLink>
                <FooterLink to="/book">Book an Appointment</FooterLink>
                <FooterLink to="/shop">Shop</FooterLink>
                <FooterLink to="/signin">Sign In</FooterLink>
                <FooterLink to="/contact">Contact Me</FooterLink>
              </FooterItems>

              <FooterItems>
                <FooterH1>Quick Links</FooterH1>
                <FooterLink to="/" onClick={toggleHome}>Home</FooterLink>
                <FooterLink to="/gallery">Gallery</FooterLink>
                <FooterLink to="/book">Book an Appointment</FooterLink>
                <FooterLink to="/shop">Shop</FooterLink>
                <FooterLink to="/signin">Sign In</FooterLink>
                <FooterLink to="/contact">Contact Me</FooterLink>
              </FooterItems>
            </LinksWrapper>
          </FooterLinks>

          <SocialMedia>
            <SocialMediaWrapper>
              <Logo to="/" onClick={toggleHome}>Logo</Logo>
              <CopyRights>
                Leanest Nails © {new Date().getFullYear()} All rights reserved.
              </CopyRights>
              <SocialIcon>
                <SocialLink href='/' target='_blank' aria-label="Facebook">
                  <FaFacebook />
                </SocialLink>

                <SocialLink href='//www.instagram.com/theleanestnails/?hl=en.' target='_blank' aria-label="Instagram">
                  <FaInstagram />
                </SocialLink>

                <SocialLink href='/' target='_blank' aria-label="Youtube">
                  <FaYoutube />
                </SocialLink>

                <SocialLink href='/' target='_blank' aria-label="Linkedin">
                  <FaLinkedin />
                </SocialLink>

              </SocialIcon>
            </SocialMediaWrapper>
          </SocialMedia>
        </FooterWrapper>
      </FooterContainer>
    </>
  );
};

export default Footer;
