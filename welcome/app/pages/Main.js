import React from "react";
import Link from "next/link";
import Cards from "../components/Cards";
import Image from "next/image";

function Main() {
  return (
    <div>
      <div className="min-h-[600px] text-gray-800 px-6 py-12 bg-[url('/polybags-background.jpg')] bg-cover bg-center flex justify-end items-center">
        <div className="flex flex-col w-[45%]">
          <div className="flex flex-col items-start">
            <h1 className="sm:text-[65px] text-[40px] font-semibold text-secondary leading-[70px]">
              Welcome
            </h1>
            <h1 className="sm:text-[65px] text-[40px]  font-semibold text-secondary leading-[70px]">
              Packaging Solution
            </h1>
            <p className="text-[18px] md:w-[70%] w-[105%] mt-5 text-gray-600">
              We are your trusted, industry-leading manufacturer of made to order,
              high-quality poly bags and plastic film products made right here in
              the INDIA.
            </p>
          </div>

          <Link href="/about" className="mt-5 shadow active:scale-95 font-bold w-[120px] bg-primary text-white rounded-lg hover:bg-secondary transition text-center py-3">
            Explore
          </Link>

        </div>
      </div>

      <div className="p-6 flex flex-col items-center justify-center py-28">
        <h1 className=" mt-2 flex items-center justify-center p-5 text-[40px] md:text-5xl font-bold text-secondary">
          Custom Products to Meet Your Needs
        </h1>
        <p className=" w-[60%] text-center py-7 text-lg text-gray-600">
          We manufacture and supply custom poly bags and plastic film products
          including plastic liners, pallet covers, polyethylene tubing, and SWS
          and CF sheeting. Our products are manufactured to your custom
          specifications and according to the highest quality standards. With
          2-3 week lead times, we are dedicated to supplying the custom poly bag
          and plastic film products you need.
        </p>
        <Link href="/products" className="font-bold w-[200px] bg-primary text-white rounded-lg hover:bg-secondary hover:text-white transition text-center py-3 active:scale-95" >
          See All Products
        </Link>
      </div>

      <div className="flex justify-center items-center">
        <div className="p-6 relative flex flex-col items-center justify-center w-[70%] border border-gray-300 px-10 py-20">
          <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl font-semibold text-secondary bg-white px-8">Welcome Manufacturing Products</span>
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
          </div>
        </div>
      </div>


      <div className="py-28 flex justify-center items-center ">
        <div className="flex flex-col w-[70%] gap-10">
          <div className="flex gap-20">
            <div className="flex flex-1 flex-col gap-6 justify-start">
              <div className="flex flex-col">
                <h1 className=" mt-2 text-5xl font-bold text-secondary">
                  Fast, Reliable Service
                </h1>
                <h1 className=" mt-2 text-5xl font-bold text-secondary">
                  Since 2020
                </h1>
              </div>
              <p className="text-gray-600 text-lg">At Welcome Packaging Agency, our customers are always our top priority. That’s why we work so hard to make high-quality bags that won’t rip or tear and offer fast lead times of 2-3 weeks.</p>
              <p className="text-secondary text-lg font-semibold">We are committed to getting you the custom poly bag, liners and film products you need, when you need them.</p>
            </div>
             <div>
              
             </div>
             <Image
  src="/welcome-home-about.jpg"
  alt="Welcome Packaging"
  className="hidden md:flex flex-1"
  width={500}
  height={500}
/>

            
          </div>
          <div className="flex flex-wrap items-center justify-center gap-30 ">
            <div className="flex-1">
              <Link href="/contact" className="font-bold px-3 bg-primary text-white rounded-lg hover:bg-secondary hover:text-white transition text-center py-3 active:scale-95" >
                Contact Us
              </Link>
            </div>
            <div className="relative flex flex-col justify-center items-center border flex-1 p-8 border-gray-300 text-gray-600">
              <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-lg font-semibold text-secondary bg-white px-4">Certifications</span>
              <span>ISO 9001 : 2015 certified by Intertek</span>
              <span>FSSC 22000 certification</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
