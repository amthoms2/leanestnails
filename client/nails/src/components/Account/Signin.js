// eslint-disable-next-line
import React, { useState } from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line
import { FaFacebookF, FaInstagram, FaGoogle } from "react-icons/fa";
import {
  MainContainer,
  Title,
  ButtonContainer,
  LoginWith,
  HorizontalRule,
  IconsContainer,
  ForgotPassword,
  StyledInput,
  StyledButton,
  SigninWrapper,
  StyledIcon,
  Form,
  Signup,
} from "./SigninElements";

// const backdropVariants = {
//   expanded: {
//     width: "233%",
//     height: "1050px",
//     borderRadius: "20%",
//     transform: "rotate(60deg)",
//   },
//   collapsed: {
//     width: "80vw",
//     height: "80vh",
//     borderRadius: "10px",
//     transform: "rotate(0deg)",
//   },
// };

// const expandingTransition = {
//   type: "spring",
//   duration: 2.3,
//   stiffness: 30,
// };

const Signin = () => {
  // const [isExpanded, setExpanded] = useState(false);
  // const [active, setActive] = useState("signin");

  // const playExpandingAnimation = () => {
  //   setExpanded(true);
  //   setTimeout(() => {
  //     setExpanded(false);
  //   }, 3000);
  // };

  // const switchToSignup = () => {
  //   playExpandingAnimation();
  //   setTimeout(() => {
  //     // setActive("signup");
  //   }, 400);
  // };

  // const switchToSignin = () => {
  //   playExpandingAnimation();
  //   setTimeout(() => {
  //     // setActive("signin");
  //   }, 400);
  // };

  // const contextValue = { switchToSignup, switchToSignin };

  return (
    <>
      <SigninWrapper>
        <MainContainer>
          <Title>Welcome</Title>
          <Form>
          {/* <BackDrop
            // initial={false}
            // animate={isExpanded ? "expanded" : "collapsed"}
            // variants={backdropVariants}
            // transition={expandingTransition}
          /> */}
            <StyledInput type="text" placeholder="Email" />
            <StyledInput type="password" placeholder="Password" />
          </Form>
          <ButtonContainer>
            <StyledButton>SIGN IN</StyledButton>
          </ButtonContainer>
          <LoginWith>OR LOGIN WITH</LoginWith>
          <HorizontalRule />
          <IconsContainer>
            <StyledIcon>
              <FaFacebookF />
            </StyledIcon>
            <StyledIcon>
              <FaGoogle />
            </StyledIcon>
          </IconsContainer>
          <ForgotPassword>Forgot Password ?</ForgotPassword>
          <Signup>
            <Link
              to="/signup"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              SIGN UP ?
            </Link>
          </Signup>
        </MainContainer>
      </SigninWrapper>
    </>
  );
};

export default Signin;
