/* eslint-disable react/jsx-no-undef */
import React, { useState } from "react";
import nailsvid from "../../videos/nailsvid.mp4";
import { Button } from "../ButtonElements";
import {
  MainContainer,
  MainBackground,
  LandingPageBackground,
  MainContent,
  MainH1,
  MainP,
  MainButtonWrapper,
  ArrowForward,
  ArrowRight,
} from "./MainElements";

const MainElements = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <>
      <MainContainer>
        <MainBackground>
          <LandingPageBackground
            autoPlay
            loop
            muted
            src={nailsvid}
            type="video/mp4"
          ></LandingPageBackground>
        </MainBackground>
        <MainContent>
          <MainH1>The Leanest Nails</MainH1>
          <MainP>Lorem Ipssum dmkelfnenfke</MainP>
          <MainButtonWrapper>
            <Button to="book" onMouseHover={onHover} onMouseLeave={onHover} primary = 'true' dark='true'>
              Book Appointment{hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </MainButtonWrapper>
        </MainContent>
      </MainContainer>
    </>
  );
};

export default MainElements;
