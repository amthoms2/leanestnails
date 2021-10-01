import React from 'react'
import { Link } from 'react-router-dom'
// eslint-disable-next-line
import { FaFacebookF, FaInstagram, FaGoogle } from "react-icons/fa";
import {MainContainer, Title, ButtonContainer, LoginWith, HorizontalRule, IconsContainer, ForgotPassword, StyledInput, StyledButton, SigninWrapper, StyledIcon, Form, Signup} from './SigninElements'

const SignUp = () => {
  const FacebookBackground =
    "linear-gradient(to right, #0546A0 0%, #0546A0 40%, #663FB6 100%)";

    const InstagramBackground =
    "linear-gradient(to right, #A12AC4 0%, #ED586C 40%, #F0A853 100%)";
  return (
    <>
    <SigninWrapper>
      <MainContainer>
      <Title>Welcome</Title>
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
        <StyledIcon color={FacebookBackground}>
          <FaFacebookF />
        </StyledIcon>
         <StyledIcon color={InstagramBackground}>
          <FaGoogle />
        </StyledIcon>
      </IconsContainer>
      <ForgotPassword>Forgot Password ?</ForgotPassword>
      <Signup><Link to="/signIN" style={{color: '#fff', textDecoration: 'none'}}>SIGN IN ?</Link></Signup>
    </MainContainer>
    </SigninWrapper>
    </>
  )
}

export default SignUp
