import styled from "styled-components";
import { DeleteOutline } from "@material-ui/icons";

export const ProductListContainer = styled.div`
  flex: 4;
`;

export const ProductItem = styled.div`
   display: flex;
    align-items: center;
`

export const Image = styled.img`
  width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
`

export const EditButton = styled.button`
  border: none;
  border-radius: 10px;
  padding: 5px 10px;
  background-color: #01bf71;
  color: #fff;
  cursor: pointer;
`

export const DeleteButton = styled(DeleteOutline)`
cursor: pointer;
margin-left: 10px;
`
