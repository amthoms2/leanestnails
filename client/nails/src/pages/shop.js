import React from 'react'
import ShopNav from '../components/Shop/ShopNav'
import ShopAnnouncements from '../components/Shop/ShopNav/ShopAnnouncements'
import Slider from '../components/Shop/Slider/Slider'

const Shop = () => {
  return (
    <>
      <ShopAnnouncements />
      <ShopNav />
      <Slider />
    </>
  )
}

export default Shop
