import React, { useState, useEffect } from 'react'
import axios from "axios"
import {format} from "timeago.js"
// import img from "../../../nailflower.jpg"
import {LargeContainer, Title, Table, TableHead, TableRow, User, Username, Date, Amount, Status, StyledButton} from "./LargeElements"

let config = {
  headers:  { token: `Bearer ${JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken}` }
}

const LargeWidget = () => {
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

  const Button = ({type}) => {
  return <StyledButton type={type}>{type}</StyledButton>
  }

  return (
    <>
      <LargeContainer>
        <Title>Latest Transactions</Title>
        <Table>
          <TableRow>
            <TableHead>Customer</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>

          {orders.map(order => (
             <TableRow key={order._id}>
             <User>
               <Username>{order.userId}</Username>
             </User>
             <Date>{format(order.createdAt)}</Date>
             <Amount>${order.amount}</Amount>
             <Status>
               {/* <Button type="Approved"/> */}
               <Button type={order.status}/>
             </Status>
           </TableRow>
          ))}


        </Table>
      </LargeContainer>
    </>
  )
}

export default LargeWidget
