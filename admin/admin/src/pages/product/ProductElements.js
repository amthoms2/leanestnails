import styled from "styled-components";

export const ProductContainer = styled.div`
  flex: 4;
  padding: 20px;
`;

export const ProductTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1``;

export const ProductButton = styled.button`
  width: 120px;
  border: none;
  padding: 5px;
  background-color: #01bf71;
  border-radius: 5px;
  cursor: pointer;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
`;

export const Top = styled.div`
  display: flex;
`;

export const TopLeft = styled.div`
  flex: 1;
`;

export const TopRight = styled.div`
  flex: 1;
  padding: 20px;
  margin: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 5px 12px 7px rgba(0, 0, 0, 0.35);
`;

export const InfoTop = styled.div`
  display: flex;
  align-items: center;
`;

export const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 20px;
`;

export const ProductName = styled.span`
  font-weight: 600;
`;

export const InfoBottom = styled.div`
  margin-top: 10px;
`;

export const InfoItem = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;
`;

export const Key = styled.span``;

export const Value = styled.span`
  font-weight: 300;
`;

export const Bottom = styled.div`
  padding: 20px;
  margin: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 5px 12px 7px rgba(0, 0, 0, 0.35);
`;

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  margin-bottom: 10px;
  border: none;
  padding: 5px;
  border-bottom: 1px solid gray;
`;

export const Select = styled.select`
  margin-bottom: 10px;
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Upload = styled.div`
  display: flex;
  align-items: center;
`;

export const UploadImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  object-fit: cover;
  margin-right: 20px;
`;
