import styled from 'styled-components';
import { mobile } from "../../responsive";

export const ProductContainer = styled.div``;

export const ProductWrapper = styled.div`
  padding: 50px;
  display: flex;
  /* ${mobile({ padding: "10px", flexDirection: "column" })} */
`;

export const ImageContainer = styled.div`
  flex: 1;
`;

export const Image = styled.img`
  width: 100%;
  height: 80%;
  border-radius: 10px;
  /* object-fit: contain; */
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

export const Information = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

export const Title = styled.h1`
  font-weight: 200;
`;

export const Description = styled.p`
  margin: 20px 0px;
`;

export const Price = styled.span`
  font-size: 40px;
  font-weight: 100;
`;

export const AddContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

export const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  cursor: pointer;
`;

export const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 2px solid #43e4db;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

export const Button = styled.button`
  padding: 15px;
  border: 2px solid #43e4db;
  background-color: #fff;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#fff" : "#01BF71")};
  }
`;
