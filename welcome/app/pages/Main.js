import React from "react";
import Link from "next/link";
import Cards from "../components/Cards";
import Image from "next/image";
import { Inter, Playfair_Display } from "next/font/google";
import Box from "../components/Box";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["italic", "normal"],
});
const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic"],
  weight: ["400"],
});

function Main() {
  return (
    <div className="bg-[#f1f2ed]">
      <div className="min-h-[600px] bg-[#f1f2ed] text-gray-800 sm:px-[55px] py-12 flex justify-between items-center flex-wrap">
        {/* Left Section */}
        <div className="flex flex-col sm:w-[56%]">
          <div className="flex flex-col items-start px-3">
            <h1
              className={`${inter.className} italic sm:text-[90px] text-[40px] font-semibold text-[#0f0f10e9] sm:leading-[70px]`}
            >
              Welcome
            </h1>
            <h1
              className={`${inter.className} italic sm:text-[75px] text-[40px] font-semibold text-[#0f0f10e9] sm:leading-[70px]`}
            >
              Packaging Solution
            </h1>

            <p
              className={`${inter.className} italic text-[18px] md:w-[70%] mt-5 text-gray-600`}
            >
              We are your trusted, industry-leading manufacturer of made to
              order, high-quality poly bags and plastic film products made right
              here in the INDIA.
            </p>
          </div>
          <div className="flex gap-3">
            <Link href="/about">
              <button className="mt-5 shadow active:scale-95 font-bold w-[120px] bg-[#0f0f10e9] text-white rounded-lg hover:bg-secondary transition text-center py-3">
                Explore
              </button>
            </Link>
          </div>
        </div>

        <div className="relative sm:w-[40%] flex items-end justify-end">
          <div className="absolute top-0 left-0 sm:w-full sm:h-[422px] bg-[#222] rounded-2xl -z-"></div>
          <img
            src="/Bag.png"
            alt="title"
            className="w-full sm:h-[420px] object-cover relative z-10"
          />
        </div>
      </div>

      <div className="p-6 flex flex-col items-center justify-center ">
        <h1
          className={`${inter.className} mt-2 flex font-semibold items-center justify-center p-5 text-[50px] md:text-5xl  text-[#0f0f10e9]`}
        >
          Custom Products to Meet Your Needs
        </h1>
        <p className=" w-[60%] text-center sm:py-1 py-7 text-lg text-gray-600">
          We manufacture and supply custom poly bags and plastic film products
          including plastic liners, pallet covers, polyethylene tubing, and SWS
          and CF sheeting. Our products are manufactured to your custom
          specifications and according to the highest quality standards. With
          2-3 week lead times, we are dedicated to supplying the custom poly bag
          and plastic film products you need.
        </p>
        <Link href="/products">
          <button className="mt-5 shadow active:scale-95 font-bold w-[120px] bg-[#0f0f10e9] text-white rounded-lg hover:bg-secondary transition text-center py-3">
            Products
          </button>
        </Link>
      </div>
{/* 
      <Box /> */}
      <div className="flex justify-center items-center">
        <div className="p-6 relative flex flex-col items-center justify-center w-[70%] border border-gray-300 ">
          <div className="flex items-center justify-center gap-6 px-3 w-full flex-wrap bg-[#222] py-3">
            <Cards
              image="/Sugar.png"
              title="BOPP Bag"
              subtitle="High-strength bag ideal for packaging grains, seeds, and other dry materials with vibrant printing."
            />

            <Cards
              image="/faltizer.png"
              title="PP Bag"
              subtitle="Lightweight and cost-effective polypropylene bags used for packaging food grains, sugar, and fertilizers."
            />

            <Cards
              image="/redbag.png"
              title="Leno Bag"
              subtitle="Mesh-style bags that provide breathability—perfect for storing vegetables like onions and garlic."
            />
            <Cards
              image="/pushta.png"
              title="PP Bag"
              subtitle="Lightweight and cost-effective polypropylene bags used for packaging food grains, sugar, and fertilizers."
            />
          </div>
        </div>
      </div>

      <div className="py-28 flex justify-center items-center ">
        <div className="flex flex-col w-[70%] gap-10">
          <div className="flex gap-20">
            <div className="flex flex-1 flex-col gap-6 justify-start">
              <div className="flex flex-col">
                <h1 className=" mt-2 text-5xl font-bold text-[#0f0f10e9]">
                  Fast, Reliable Service
                </h1>
                <h1 className=" mt-2 text-5xl font-bold text-[#0f0f10e9]">
                  Since 2020
                </h1>
              </div>
              <p className="text-gray-600 text-lg">
                At Welcome Packaging Agency, our customers are always our top
                priority. That’s why we work so hard to make high-quality bags
                that won’t rip or tear and offer fast lead times of 2-3 weeks.
              </p>
              <p className="text-[#0f0f10e9] text-lg font-semibold">
                We are committed to getting you the custom poly bag, liners and
                film products you need, when you need them.
              </p>
            </div>
            <div></div>
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
              <Link
                href="/contact"
               
              >
               <button className="mt-5 shadow active:scale-95 font-bold w-[120px] bg-[#0f0f10e9] text-white rounded-lg hover:bg-secondary transition text-center py-3">
            Contact us
          </button>
              </Link>
            </div>
            <div className="relative flex flex-col justify-center items-center border flex-1 p-8 border-gray-300 text-gray-600">
              <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-lg font-semibold text-secondary bg-white px-4">
                Certifications
              </span>
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
