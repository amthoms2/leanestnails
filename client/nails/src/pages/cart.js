import React from 'react'
import ShopNav from '../components/Shop/ShopNav'
import ShopAnnouncements from '../components/Shop/ShopNav/ShopAnnouncements'
import Footer from '../components/Footer'
import Cart from '../components/Shop/Cart'

const ShoppingCart = () => {
  return (
    <>
    <ShopNav />
    <ShopAnnouncements />
    <Cart />
    <Footer />
    </>
  )
}

export default ShoppingCart
