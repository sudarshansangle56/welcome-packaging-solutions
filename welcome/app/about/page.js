import React from 'react'
import Navbar from '../components/Navbar'

function page() {
  return (
    <div>
      <Navbar/>
   <div className="max-w-4xl mx-auto p-6">
        <div className="bg-blue-50 rounded-xl shadow-md p-6 space-y-4">
          <div className="text-3xl font-bold text-blue-700">Welcome Packaging Solution</div>
          <div className="text-lg font-semibold">Akshay Sonekar</div>
          <div className="text-md">Mob.: <a href="tel:9970346555" className="text-blue-600 underline">9970346555</a></div>
          <div className="text-md font-medium">
            Manufacturer:
            <span className="text-gray-700"> BOPP Bag, PP Bag, Leno Bag, HDPE Bag</span>
          </div>
          <div className="text-md">
            Plot No.B-45, Cooperative Industrial Estate, Station Road, Kopergaon - 423603<br />
            Dist. Ahmednagar
          </div>
          <div className="text-md">
            Email: <a href="mailto:welcomepackagingsolution@gmail.com" className="text-blue-600 underline">welcomepackagingsolution@gmail.com</a>
          </div>
        </div>
    </div>
    </div>
  )
}

export default page
