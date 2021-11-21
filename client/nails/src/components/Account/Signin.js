// eslint-disable-next-line
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import login from "../../redux/api";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
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
  Error,
} from "./SigninElements";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  // eslint-disable-next-line
  const { isFetching, error } = useSelector((state) => state.user);

  const handleChange = (evt) => {
    if (evt.target.name === "username") {
      setUsername(evt.target.value);
    } else if (evt.target.name === "password") {
      setPassword(evt.target.value);
    }
  };

  const handleClick = (evt) => {
    evt.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <>
      <SigninWrapper>
        <MainContainer>
          <Title>Welcome</Title>
          <Form>
            <StyledInput
              type="text"
              name="username"
              placeholder="Email"
              onChange={handleChange}
            />
            <StyledInput
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />
          </Form>
          <ButtonContainer>
            <StyledButton onClick={handleClick} disabled={isFetching}>
              SIGN IN
            </StyledButton>
          </ButtonContainer>
          {error && <Error>Something went wrong...</Error>}
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

export default SignIn;
