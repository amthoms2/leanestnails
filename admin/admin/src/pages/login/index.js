import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {login} from "../../redux/api";
import { InputContainer, Input, Button } from "./LoginElements";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleClick = (evt) => {
    evt.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <InputContainer>
      <Input
        type="text"
        placeholder="username"
        onChange={(evt) => setUsername(evt.target.value)}
      ></Input>

      <Input
        type="password"
        placeholder="password"
        onChange={(evt) => setPassword(evt.target.value)}
      ></Input>
      <Button onClick={handleClick}>Login</Button>
    </InputContainer>
  );
};

export default Login;
