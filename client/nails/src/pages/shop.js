import React from 'react'
// import Navbar from "../components/Navbar"
import ShopNav from '../components/Shop/ShopNav'
import ShopAnnouncements from '../components/Shop/ShopNav/ShopAnnouncements'
import Slider from '../components/Shop/Slider/Slider'
import Categories from '../components/Shop/Categories'
import Products from '../components/Shop/Products'
import Footer from '../components/Footer'

const Shop = () => {
  return (
    <>
      <ShopAnnouncements />
      <ShopNav />
      {/* <Navbar /> */}
      <Slider />
      <Categories />
      <Products />
      <Footer />
    </>
  )
}

export default Shop
