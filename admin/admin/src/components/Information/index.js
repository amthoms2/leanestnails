import React from 'react'
import {ArrowDownward, ArrowUpward} from "@material-ui/icons"
import {InformationContainer, InfoItem, MoneyContainer, Price, Rate, Sub, Title, Icon} from "./InformationElements"

const Information = () => {
  return (
    <>
      <InformationContainer>
        <InfoItem>
          <Title>Revenue</Title>
        <MoneyContainer>
          <Price>$50</Price>
          <Rate>-11 <Icon><ArrowDownward color="danger"/></Icon></Rate>
          </MoneyContainer>
          <Sub>last month</Sub>
        </InfoItem>

        <InfoItem>
          <Title>Sales</Title>
        <MoneyContainer>
          <Price>$3400</Price>
          <Rate>-1.4 <Icon><ArrowDownward color="danger"/></Icon></Rate>
          </MoneyContainer>
          <Sub>last month</Sub>
        </InfoItem>

        <InfoItem>
          <Title>Costs</Title>
        <MoneyContainer>
          <Price>$2400</Price>
          <Rate>1.9<Icon><ArrowUpward /></Icon></Rate>
          </MoneyContainer>
          <Sub>last month</Sub>
        </InfoItem>

      </InformationContainer>
    </>
  )
}

export default Information
