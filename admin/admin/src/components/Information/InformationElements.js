import styled from "styled-components";

export const InformationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const InfoItem = styled.div`
  flex: 1;
  margin: 0px 20px;
  padding: 30px;
  border-radius: 10px;
  cursor: pointer;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 5px 12px 7px rgba(0, 0, 0, 0.35);
`;

export const Title = styled.span`
  font-size: 20px;
`;

export const MoneyContainer = styled.div`
  margin: 10px 0px;
  display: flex;
  align-items: center;
`;

export const Price = styled.span`
  font-size: 30px;
  font-weight: 600;
`;

export const Rate = styled.span`
  display: flex;
  align-items: center;
  margin-left: 20px;
`;

export const Sub = styled.span`
  font-size: 15px;
  color: green;
`;

export const Icon = styled.span`
  font-size: 14px;
  margin-left: 5px;
  color: ${(danger) => (danger ? "#f50407" : "#01bf71")};
`;

