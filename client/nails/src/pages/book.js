import React from 'react';
import ShopNav from "../components/Shop/ShopNav/"

const Book = () => {
  const bookingPage = true;
  return (
    <>
    <ShopNav isBooking={bookingPage} />
    <div>
      <h1>Book Appointment</h1>
    </div>
    </>
  )
}

export default Book
