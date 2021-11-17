import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { DataGrid } from "@material-ui/data-grid";
// import { Link } from "react-router-dom";
import styled from "styled-components";
import { getTransactions } from '../../redux/api';

const TransactionsListContainer = styled.div`
  flex: 4;
  text-align: right;
`;

const Transactions = () => {
  const dispatch = useDispatch();
  // const [orders, setOrders] = useState([]);
  const orders = useSelector((state) => state.transaction.orders);
  useEffect(() => {
    getTransactions(dispatch);
  }, [dispatch]);


  // useEffect(() => {
  //   const getOrders = async () => {
  //     try {
  //       const res = await axios.get(
  //         "http://localhost:8080/api/orders", config
  //       );
  //       setOrders(res.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   getOrders();
  // }, []);

console.log('orders',orders)
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
