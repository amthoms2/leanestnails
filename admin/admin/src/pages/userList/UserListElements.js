import styled from "styled-components";
import { DeleteOutline } from "@material-ui/icons";

export const UserListContainer = styled.div`
  flex: 4;
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
