import React, { useState } from 'react'
import { DataGrid } from "@material-ui/data-grid";
// import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import {rowsData} from "../../data"
import { UserListContainer, EditButton, DeleteButton } from "./UserListElements"


const UserList = () => {

  const [data, setData] = useState(rowsData);

  const deleteButton = (id) => {
    console.log(id)
    setData(data.filter((row) => row.id !== id), console.log(data.filter((row) => row.id !== id)));
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 95 },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 150,
      editable: true,
    },
    {
      field: 'username',
      headerName: 'Username',
      width: 150,
      editable: true,
    },
    {
      field: 'email',
      headerName: 'Email',
      type: 'email',
      width: 150,
      editable: true,
    },
    {
      field: 'transaction',
      headerName: 'Transaction',
      description: 'This column has a value getter and is not sortable.',
      sortable: true,
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <EditButton>Edit</EditButton>
            </Link>
            <DeleteButton
            onClick={() => deleteButton(params.row.id)}
            />
          </>
        );
      },
    }
  ];



  return (
    <>
      <UserListContainer>
      <DataGrid
        rows={rowsData}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />

      </UserListContainer>
    </>
  )
}

export default UserList
