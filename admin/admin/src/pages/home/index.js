import React from 'react'
import Information from "../../components/Information"
import {HomeContainer, Widgets} from "./homeElements"
import Chart from '../../components/Chart'
import {userData} from '../../data'
import SmallWidget from '../../components/Widgets/Small'
import LargeWidget from '../../components/Widgets/Large'

const Home = () => {
  return (
    <>
      <HomeContainer>
        <Information />
        <Chart data={userData} title="User Analytics" dataKey="Active User" grid/>

        <Widgets>
          <SmallWidget />
          <LargeWidget />
        </Widgets>

      </HomeContainer>
    </>
  )
}

export default Home
