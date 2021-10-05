import React from "react";
// eslint-disable-next-line
import { FaFacebookF, FaInstagram, FaGoogle } from "react-icons/fa";
// import {AccountContext} from './AccountContext'
import { Link } from "react-router-dom";
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
//     width: "83vw",
//     height: "95vh",
//     borderRadius: "10px",
//     // transform: "rotate(0deg)",
//   },
//   collapsed: {
//     width: "0px",
//     height: "0px",
//     borderRadius: "10%",
//     // transform: "rotate(0deg)",
//   },
// };

// const expandingTransition = {
//   type: "spring",
//   duration: 2.3,
//   stiffness: 30,
// };

const SignUp = (props) => {
  // const [isExpanded, setExpanded] = useState(false);
  // // eslint-disable-next-line
  // const [active, setActive] = useState("signin");

  // const playExpandingAnimation = () => {
  //   setExpanded(true);
  //   setTimeout(() => {
  //     setExpanded(false);
  //   }, expandingTransition.duration * 1000 - 1500);
  // };

  // const switchToSignup = () => {
  //     playExpandingAnimation();
  //     setTimeout(() => {
  //       setActive("signup");
  //     }, 400);
  //   };

    // const switchToSignin = () => {
    //   playExpandingAnimation();
    //   setTimeout(() => {
    //     setActive("signin");
    //   }, 400);
    // };

    // const contextValue = { switchToSignup, switchToSignin };

  return (
    <>
       {/* <AccountContext.Provider value={contextValue}> */}
      <SigninWrapper>
        <MainContainer>
          <Title>Welcome</Title>
          {/* <BackDrop
              initial={false}
              animate={isExpanded ? "expanded" : "collapsed"}
              variants={backdropVariants}
              transition={expandingTransition}
            /> */}
          <Form>
            <StyledInput type="text" placeholder="First Name" />
            <StyledInput type="text" placeholder="Last Name" />
            <StyledInput type="email" placeholder="Email" />
            <StyledInput type="password" placeholder="Password" />
            <StyledInput type="password" placeholder="Confirm Password" />
          </Form>
          <ButtonContainer>
            <StyledButton>SIGN UP</StyledButton>
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
              to="/signin"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              SIGN IN ?
            </Link>
          </Signup>
        </MainContainer>
      </SigninWrapper>
      {/* </AccountContext.Provider> */}
    </>
  );
};

export default SignUp;
