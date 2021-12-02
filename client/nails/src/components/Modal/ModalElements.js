import styled from "styled-components";

export const ModalBackground = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;


export const ModalWrapper = styled.div`
  /* width: 800px;
  height: 500px; */
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;

  @media only screen and (min-width: 350px) {
  width: 350px;
  height: 400px;
  }

  /* @media only screen and (min-width: 768px) {
  width: 450px;
  height: 400px;
  }
  @media only screen and (max-width: 1024px) {
    width: 450px;
  height: 400px;
  }
  @media only screen and (max-width: 1280px) {
    width: 950px;
  height: 400px;
  } */
`;

export const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  background: #000;
`;

export const ModalInformation = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
line-height: 1.8;
color: #141414;
p {
  margin-bottom: 1rem;
}

`;
