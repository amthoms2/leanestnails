
import React, { useState } from "react";
// import Photo1 from '../../../images/nailpolish.jpg'
import { SliderContainer, Arrow, SliderWrapper, ImageContainer, InfoContainer, Image, Slide, Title, Description, Button } from "./SliderElements";
import {FaAngleLeft, FaAngleRight} from "react-icons/fa";
import {sliderData} from '../../../data'

const Slider = () => {
  // eslint-disable-next-line
  const [slide, setSlide] = useState(0);
  //slide represents the index!!

  const handleClick = (direction) => {
    if(direction === 'left'){
      setSlide(slide > 0 ? slide-1 : sliderData.length-1)
    } else {
      setSlide(slide < sliderData.length-1 ? slide+1 : 0)
    }
  }

  return (
    <>
      <SliderContainer>
        <Arrow direction='left' onClick={()=>handleClick('left')}>
          <FaAngleLeft />
        </Arrow>
        <SliderWrapper slide={slide}>
          {sliderData.map((slide) => (
             <Slide bg={slide.bg}  key={slide.img}>
             <ImageContainer>
               <Image src={slide.img}/>
             </ImageContainer>
             <InfoContainer>
               <Title>{slide.title}</Title>
               <Description>{slide.description}</Description>
               <Button>SHOP NOW</Button>
             </InfoContainer>
             </Slide>
          ))}
        </SliderWrapper>
        <Arrow direction='right' onClick={()=>handleClick('right')}>
          <FaAngleRight/>
          </Arrow>
      </SliderContainer>
    </>
  );
};

export default Slider;
