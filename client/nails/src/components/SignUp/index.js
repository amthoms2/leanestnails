import React from 'react'
// eslint-disable-next-line
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import {MainContainer, WelcomeText, InputContainer, ButtonContainer, LoginWith, HorizontalRule, IconsContainer, ForgotPassword, StyledInput, StyledButton, RegisterWrapper, StyledIcon} from './SignUpElements'

const Register = () => {
  const FacebookBackground =
    "linear-gradient(to right, #0546A0 0%, #0546A0 40%, #663FB6 100%)";

    const InstagramBackground =
    "linear-gradient(to right, #A12AC4 0%, #ED586C 40%, #F0A853 100%)";
  return (
    <>
    <RegisterWrapper>
      <MainContainer>
      <WelcomeText>Welcome</WelcomeText>
      <InputContainer>
        <StyledInput type="text" placeholder="Email" />
        <StyledInput type="password" placeholder="Password" />
      </InputContainer>
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
          <FaInstagram />
        </StyledIcon>
      </IconsContainer>
      <ForgotPassword>Forgot Password ?</ForgotPassword>
    </MainContainer>
    </RegisterWrapper>
    </>
  )
}

export default Register
