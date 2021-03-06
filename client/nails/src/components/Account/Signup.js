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
        <MainContainer style={{ height: "95vh" }}>
          <Title style={{ marginTop: "20px" }}>Welcome</Title>
          {/* <BackDrop
              initial={false}
              animate={isExpanded ? "expanded" : "collapsed"}
              variants={backdropVariants}
              transition={expandingTransition}
            /> */}
          <Form style={{ height: "35%" }}>
            <StyledInput name="firstName" type="text" placeholder="First Name" />
            <StyledInput name="lastName" type="text" placeholder="Last Name" />
            <StyledInput name="email" type="email" placeholder="Email" />
            <StyledInput name="password" type="password" placeholder="Password" />
            <StyledInput name="retype-password" type="password" placeholder="Confirm Password" />
          </Form>
          <ButtonContainer>
            <StyledButton>SIGN UP</StyledButton>
          </ButtonContainer>
          <LoginWith>OR SIGNUP WITH</LoginWith>
          <HorizontalRule />
          <IconsContainer>
            <StyledIcon>
              <FaFacebookF />
            </StyledIcon>
            <StyledIcon>
              <FaGoogle />
            </StyledIcon>
          </IconsContainer>
          <Link style={{ color: "#fff", textDecoration: "none" }}><ForgotPassword>
            Forgot Password ?
            </ForgotPassword>
          </Link>
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
