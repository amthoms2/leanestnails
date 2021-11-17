import React, { useEffect } from 'react'
import { DataGrid } from "@material-ui/data-grid";
import { useDispatch, useSelector } from "react-redux";
import {getUsers} from "../../redux/api"
// import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
// import axios from "axios";
// import {rowsData} from "../../data"
import { UserListContainer, EditButton, DeleteButton } from "./UserListElements"

const UserList = () => {
  // const [users, setUsers] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getUsers(dispatch);
  }, [dispatch]);

  const users = useSelector((state) => state.user.users);


//   useEffect(() => {
//     const getUsers = async () => {
//       try {
//         const res = await axios.get(
//           "http://localhost:8080/api/users", config
//         );
//         setUsers(res.data);
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     getUsers();
//   }, []);
// console.log(users)

  // const deleteButton = (id) => {
  //   const filteredRow = data.filter((row) => row.id !== id);
  //   setData(filteredRow);
  // };

  const columns = [
    { field: '_id', headerName: 'UserID', width: 150 },
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
      editable: false,
    },
    {
      field: 'email',
      headerName: 'Email',
      type: 'email',
      width: 150,
      editable: true,
    },
    {
      field: 'orders',
      headerName: 'Transactions',
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row._id}>
              <EditButton>Edit</EditButton>
            </Link>
            <DeleteButton
            // onClick={() => deleteButton(params.row.id)}
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
        rows={users}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        getRowId={(row) => row._id}
        checkboxSelection
        disableSelectionOnClick
      />

      </UserListContainer>
    </>
  )
}

export default UserList
