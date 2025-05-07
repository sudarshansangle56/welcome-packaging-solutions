import React from "react";
import Link from "next/link";
import Cards from "../components/Cards";

function Main() {
  return (
    <div>
      <div className="min-h-[400px] bg-amber-200   bg-[#ffffff] text-gray-800 px-6 py-12">
        <div className="flex flex-col  items-start">
          <h1 className="text-[150px] font-bold text-[#22222296] leading-[130px]">
            Welcome
          </h1>
          <p className="text-[17px] w-[50%] text-gray-600">
            We are your trusted, industry-leading manufacturer of made to order,
            high-quality poly bags and plastic film products made right here in
            the INDIA.
          </p>
        </div>

        <Link href="/about">
          <button className="mt-2 px-6 py-2 text-sm bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
            Explore
          </button>
        </Link>
      </div>

      <div className="second-phase p-6 h-min-[350px] flex flex-col items-center justify-center">
        <h1 className="mt-2 flex items-center justify-cente text-[50px] font-bold text-[#22222296]">
          Custom Products to Meet Your Needs
        </h1>
        <p className=" w-[60%] text-[17px]">
          We manufacture and supply custom poly bags and plastic film products
          including plastic liners, pallet covers, polyethylene tubing, and SWS
          and CF sheeting. Our products are manufactured to your custom
          specifications and according to the highest quality standards. With
          2-3 week lead times, we are dedicated to supplying the custom poly bag
          and plastic film products you need.
        </p>
      </div>

      <div className="second-phase p-6 h-min-[550px] flex flex-col items-center justify-center">
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
    </div>
  );
}

export default Main;
