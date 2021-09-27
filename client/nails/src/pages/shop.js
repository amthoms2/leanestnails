import React from 'react'
import ShopNav from '../components/Shop/ShopNav'
import ShopAnnouncements from '../components/Shop/ShopNav/ShopAnnouncements'
import Slider from '../components/Shop/Slider/Slider'
import Categories from '../components/Shop/Categories'
import Products from '../components/Shop/Products'

const Shop = () => {
  return (
    <>
      <ShopAnnouncements />
      <ShopNav />
      <Slider />
      <Categories />
      <Products />
    </>
  )
}

export default Shop
