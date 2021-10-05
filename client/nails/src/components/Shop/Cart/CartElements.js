/* eslint-disable no-undef */
import styled from 'styled-components'
import { mobile } from '../../../responsive'

export const CartContainer = styled.div``

export const CartWrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

export const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

export const TopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

// background: linear-gradient(to right, #14163c 0%, #03217b 79%);

export const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  ${mobile({ marginLeft: "5px" })}
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

export const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;

export const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

export const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

export const Information = styled.div`
  flex: 3;
  ${mobile({ flexDirection: "column" })}
`;

export const ProductContainer = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

export const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

export const Image = styled.img`
  width: 200px;
`;

export const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  ${mobile({ justifyContent: "space-between" })}
`;

export const ProductName = styled.span``;

export const ProductId = styled.span``;

export const ProductType = styled.span``;

export const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${mobile({ margin: "25px" })}
`;

export const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

export const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

export const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

export const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

export const SummaryTitle = styled.h1`
  font-weight: 200;
`;

export const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

export const SummaryItemText = styled.span``;

export const SummaryItemPrice = styled.span``;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  /* background: linear-gradient(to right, #14163c 0%, #03217b 79%); */
  color: white;
  font-weight: 600;
`;
