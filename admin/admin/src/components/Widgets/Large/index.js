import React from 'react'
import img from "../../../nailflower.jpg"
import {LargeContainer, Title, Table, TableHead, TableRow, User, Image, Username, Date, Amount, Status, StyledButton} from "./LargeElements"

const LargeWidget = () => {

  const Button = ({type}) => {
    console.log(type)
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
        </Table>

        <Table>
          <TableRow>
            <User>
            <Image src={img} />
              <Username>Cody Bork</Username>
            </User>
            <Date>2 Dec 2021</Date>
            <Amount>$159.99</Amount>
            <Status>
              <Button type="Approved"/>
            </Status>
          </TableRow>

          <TableRow>
            <User>
            <Image src={img} />
              <Username>Cody Bork</Username>
            </User>
            <Date>2 Nov 2021</Date>
            <Amount>$179.99</Amount>
            <Status>
              <Button type="Declined" />
            </Status>
          </TableRow>

          <TableRow>
            <User>
            <Image src={img} />
              <Username>Cody Bork</Username>
            </User>
            <Date>2 Nov 2021</Date>
            <Amount>$159.99</Amount>
            <Status>
              <Button type="Pending"/>
            </Status>
          </TableRow>

        </Table>
      </LargeContainer>
    </>
  )
}

export default LargeWidget
