import React from 'react'
import Cards from '../components/Cards'
function page() {
  return (
    <div className='min-h-[300px] flex flex-col items-center justify-center '>
      <h1 className=" mt-2 text-[50px] font-bold text-[#22222296]">
          Products
        </h1>
      <div className="flex items-center justify-center gap-6 px-7 flex-wrap">
          <Cards
            image="https://m.media-amazon.com/images/I/312M8F7xY+L._AC_UF1000,1000_QL80_.jpg"
            title="BOPP Bag"
            subtitle="High-strength bag ideal for packaging grains, seeds, and other dry materials with vibrant printing."
          />

          <Cards
            image="https://m.media-amazon.com/images/I/51ovod+lw0L._SL1200_.jpg"
            title="PP Bag"
            subtitle="Lightweight and cost-effective polypropylene bags used for packaging food grains, sugar, and fertilizers."
          />

          <Cards
            image="https://m.media-amazon.com/images/I/31AVvUIOYuL._BO30,255,255,255_UF900,850_SR1910,1000,0,C_PIRIOFIVE-medium,BottomLeft,30,-20_QL100_.jpg"
            title="Leno Bag"
            subtitle="Mesh-style bags that provide breathability—perfect for storing vegetables like onions and garlic."
          />

          <Cards
            image="https://5.imimg.com/data5/SELLER/Default/2023/8/335714994/JS/DJ/RP/4373725/hdpe-bags-1000x1000.jpg"
            title="HDPE Bag"
            subtitle="High-density polyethylene bags used for industrial packaging requiring strength, moisture resistance, and durability."
          />
          <Cards
            image="https://m.media-amazon.com/images/I/312M8F7xY+L._AC_UF1000,1000_QL80_.jpg"
            title="BOPP Bag"
            subtitle="High-strength bag ideal for packaging grains, seeds, and other dry materials with vibrant printing."
          />

          <Cards
            image="https://m.media-amazon.com/images/I/51ovod+lw0L._SL1200_.jpg"
            title="PP Bag"
            subtitle="Lightweight and cost-effective polypropylene bags used for packaging food grains, sugar, and fertilizers."
          />
        </div>
    </div>
  )
}

export default page
