import styled from 'styled-components'
import { mobile } from '../../../responsive'


export const SliderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })}
`

export const Arrow = styled.div`
display: flex;
width: 50px;
height: 50px;
background-color: #f7eeee;
border-radius: 50%;
align-items: center;
justify-content: center;
position: absolute;
top: 0;
left: ${props => props.direction === 'left' && '10px'};
right: ${props => props.direction === 'right' && '10px'};
bottom: 0;
margin: auto;
cursor: pointer;
opacity: 0.4;
z-index: 2;
`
export const SliderWrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.0s ease-in-out;
  transform: translateX(${props => props.slide * -100}vw);
`

export const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${props => props.bg}
`

 export const ImageContainer = styled.div`
  flex: 1;
  height: 100%;

 `
 export const Image = styled.img`
  height: 80%;
 `

 export const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
 `

 export const Title = styled.h1`
  font-size: 70px;
`

export const Description = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  letter-spacing: 3px;
  font-weight: 500;
`

export const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`
