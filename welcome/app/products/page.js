import React from "react";
import Cards from "../components/Cards";
function page() {
  return (
    <div className="min-h-[300px] flex flex-col items-center justify-center bg-[#f1f2ed] ">
      <h1 className=" mt-2 text-[50px] font-bold text-[#22222296]">Products</h1>
      <div className="flex items-center justify-center gap-6 px-7 flex-wrap">

        <Cards
          image="https://m.media-amazon.com/images/I/51ovod+lw0L._SL1200_.jpg"
          title="PP Bag"
          subtitle="Lightweight and cost-effective polypropylene bags used for packaging food grains, sugar, and fertilizers."
        />
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

        <Cards
          image="https://m.media-amazon.com/images/I/51ovod+lw0L._SL1200_.jpg"
          title="PP Bag"
          subtitle="Lightweight and cost-effective polypropylene bags used for packaging food grains, sugar, and fertilizers."
        />
      </div>
    </div>
  );
}

export default page;
