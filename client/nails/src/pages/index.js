import React, { useState } from 'react'
import TopBar from '../components/Topbar'
import Navbar from '../components/Navbar'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleBar = () => {
    console.log('hello')
    setIsOpen(!isOpen)
  }

  return (
    <>
    <TopBar isOpen={isOpen} toggleBar={toggleBar} />
    <Navbar toggleBar={toggleBar} />
    </>
  )
}

export default Home
