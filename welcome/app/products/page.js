import React from 'react'
import Navbar from '../components/Navbar'

function page() {
  return (
    <div>
      <Navbar/>
      <div className="text-md font-medium">
            Manufacturer:
            <span className="text-gray-700"> BOPP Bag, PP Bag, Leno Bag, HDPE Bag</span>
          </div>
    </div>
  )
}

export default page
