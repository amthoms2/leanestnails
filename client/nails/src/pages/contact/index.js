import React, { useState } from "react";

import axios from "axios";
import {
  MainContainer,
  Title,
  ButtonContainer,
  HorizontalRule,
  InputContainer,
  StyledInput,
  StyledButton,
  ContactWrapper,
  Form,
  IconsContainer,
  StyledIcon,
  // Error,
} from "./contactElements";
import { SocialLink } from "../../components/Footer/FooterElements";
import { FaInstagram } from "react-icons/fa";

const Contact = () => {
  const [status, setStatus] = useState("Submit");
  const [inputs, setInputs] = useState({});

  const handleChange = (evt) => {
    setInputs((prev) => {
      return { ...prev, [evt.target.name]: evt.target.value };
    });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    setStatus("Sending...");
    try {
      const res = await axios.post("http://localhost:8080/api/contact", inputs);
      console.log("res", res.data);
      setStatus("Submit");
      // let result = await res.json();
      // alert(result.status);
    } catch (err) {
      console.log(err);
    }
  };

  const InstaBG =
    "linear-gradient(to right, #A12AC4 0%, #ED586C 40%, #F0A853 100%)";

  return (
    <>
      <ContactWrapper>
        <MainContainer>
          <Title>Contact Me</Title>
          <Form onSubmit={handleSubmit}>
            <InputContainer>
              <StyledInput
                type="text"
                name="name"
                placeholder="Name"
                onChange={handleChange}
              />
              <StyledInput
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
              />
              <StyledInput
                type="text"
                name="message"
                placeholder="Message"
                onChange={handleChange}
              />
            </InputContainer>

            <ButtonContainer>
              <StyledButton type="submit">{status}</StyledButton>
            </ButtonContainer>
          </Form>
          <HorizontalRule />
          <SocialLink
            href="//www.instagram.com/theleanestnails/?hl=en."
            target="_blank"
            aria-label="Instagram"
          >
            <IconsContainer>
              <StyledIcon background={InstaBG}>
                <FaInstagram />
              </StyledIcon>
            </IconsContainer>
          </SocialLink>
        </MainContainer>
      </ContactWrapper>
    </>
  );
};

export default Contact;
