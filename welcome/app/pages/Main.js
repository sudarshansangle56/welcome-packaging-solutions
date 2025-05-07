import React from "react";
import Link from "next/link";
import Cards from "../components/Cards";

function Main() {
  return (
    <div>
      <div className="min-h-[400px]  ml-6  bg-[#ffffff] text-gray-800 px-6 py-12">
        <div className="flex flex-col  w-[50%] items-start">
          <h1 className="text-[150px] font-bold text-[#22222296] leading-[130px]">
            Welcome
          </h1>
          <p className="text-[17px] text-gray-600">
            We are your trusted, industry-leading manufacturer of made to order,
            high-quality poly bags and plastic film products made right here in
            the USA.
          </p>
        </div>

        <Link href="/about">
          <button className="mt-2 px-6 py-2 text-sm bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
            Explore
          </button>
        </Link>
      </div>

      <div className="second-phase p-6 h-min-[350px] flex flex-col items-center justify-center">
        <h1 className=" mt-2 text-[50px] font-bold text-[#22222296]">
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
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>
    </div>
  );
}

export default Main;
