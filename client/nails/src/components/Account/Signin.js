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

const Signin = () => {

  return (
    <>
      <SigninWrapper>
        <MainContainer>
          <Title>Welcome</Title>
          <Form>
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
