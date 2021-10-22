import React from 'react'
import { useLocation } from 'react-router';

const Success = () => {
  const location = useLocation();
  console.log('location', location)
  return (
    <div>
      hello
    </div>
  )
}

export default Success
