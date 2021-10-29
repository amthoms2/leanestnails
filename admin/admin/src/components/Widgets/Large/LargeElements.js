import styled from "styled-components";

export const LargeContainer = styled.div`
  flex: 2;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 5px 12px 7px rgba(0, 0, 0, 0.35);
`
export const Title = styled.h3`
  font-size: 22px;
  font-weight: 600;
`
export const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

export const Table = styled.table`

`

export const TableRow = styled.tr``

export const TableHead = styled.td``

export const User = styled.div``

export const Username = styled.span``

export const Date = styled.td``

export const Amount = styled.td``

export const Status = styled.td``

export const StyledButton = styled.button`
  padding: 5px 7px;
  border: none;
  border-radius: 10px;
  background-color: ${({type}) => type==="Approved" ? '#01bf71' : '#d80000'}
`
