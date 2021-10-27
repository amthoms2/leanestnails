// eslint-disable-next-line
import React, { useState, useEffect } from 'react'
// import axios from 'axios'
import { useLocation } from 'react-router';
import styled from 'styled-components'

const OrderContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Success = () => {
  const location = useLocation();
  console.log('location', location)
  const data = location.state.data;
  console.log('state data', data)
  const cart = location.state.products
  console.log(cart)

  // const [orderId, setOrderId] = useState(null);

  // useEffect(() => {
  //   const order = async () => {
  //     try{
  //       const res = await axios.post('http://localhost:8080/api/orders', {
  //         // userId:
  //       })
  //     }catch(err){
  //       console.log(err)
  //     }
  //   }
  // }, [cart, data])

  return (
    <>
    <OrderContainer>
      hello
    </OrderContainer>
    </>
  )
}

export default Success
