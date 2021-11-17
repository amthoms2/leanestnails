import React, { useState, useEffect } from 'react';
import { DataGrid } from "@material-ui/data-grid";
// import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const TransactionsListContainer = styled.div`
  flex: 4;
  text-align: right;
`;

let config = {
  headers: {
    token: `Bearer ${
      JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
        .currentUser.accessToken
    }`,
  },
};

const Transactions = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8080/api/orders", config
        );
        setOrders(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getOrders();
  }, []);
console.log(orders)
  const columns = [
    { field: "_id", headerName: "Transaction ID", width: 230 },
    { field: "userId", headerName: "UserId", width: 220 },
    {
      field: "createdAt",
      headerName: "Purchase Date",
      width: 220,
    },
    { field: "amount", headerName: "Amount", width: 150 },
    { field: "status", headerName: "Status", width: 150 },
  ];

  return (
    <>
       <TransactionsListContainer>
        <DataGrid
          rows={orders}
          columns={columns}
          pageSize={10}
          getRowId={(row) => row._id}
          rowsPerPageOptions={[10]}
          // checkboxSelection
          disableSelectionOnClick
        />
      </TransactionsListContainer>
    </>
  )
}

export default Transactions
