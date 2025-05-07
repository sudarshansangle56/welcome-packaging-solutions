import React from 'react'
import Navbar from '../components/Navbar'

function page() {
  return (
    <div>
        <Navbar/>
      <div className="text-lg font-semibold">Akshay Sonekar</div>
      <div className="text-md">Mob.: <a href="tel:9970346555" className="text-blue-600 underline">9970346555</a></div>
    </div>
  )
}

export default page
