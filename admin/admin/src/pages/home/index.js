import React from 'react'
import Information from "../../components/Information"
import {HomeContainer} from "./homeElements"
import Chart from '../../components/Chart'
import {userData} from '../../data'

const Home = () => {
  return (
    <>
      <HomeContainer>
        <Information />
        <Chart data={userData} title="User Analytics" dataKey="Active User" grid/>
      </HomeContainer>
    </>
  )
}

export default Home
