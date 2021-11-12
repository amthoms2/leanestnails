import React, { useState, useMemo, useEffect } from 'react'
import axios from "axios"
import Information from "../../components/Information"
import {HomeContainer, Widgets} from "./homeElements"
import Chart from '../../components/Chart'
// import {userData} from '../../data'
import SmallWidget from '../../components/Widgets/Small'
import LargeWidget from '../../components/Widgets/Large'

let config = {
  headers:  { token: `Bearer ${JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken}` }
}

const Home = () => {
  const [stats, setStats] = useState([])

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(() => {
    const getStats = async () => {
      try{
        const res = await axios.get(
          "http://localhost:8080/api/users/stats", config
        )
        res.data.map((stat)=>
          setStats(prev=>[
            ...prev,
            {name:MONTHS[stat._id-1], "Active User": stat.total}
          ])
        )
      } catch(err){
        console.log(err)
      }
    }
    getStats()
  }, [MONTHS])

  // console.log(stats)
  return (
    <>
      <HomeContainer>
        <Information />
        <Chart data={stats} title="User Analytics" dataKey="Active User" grid/>

        <Widgets>
          <SmallWidget />
          <LargeWidget />
        </Widgets>

      </HomeContainer>
    </>
  )
}

export default Home
