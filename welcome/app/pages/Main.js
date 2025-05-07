import React from 'react';
import Navbar from '../components/Navbar';
import Link from 'next/link';

function Main() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navbar />
      <div className="pl-[50px] ">
        <h1 className="text-[250px] font-bold text-[#22222296]">Welcome</h1>
        <p className="text-2xl font-medium text-gray-600 mb-6">Packaging Solution</p>

        <Link href="/about">
          <button className="px-6 py-2 text-sm bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
            Explore
          </button>
        </Link>

        <div className="mt-12 text-lg text-left max-w-3xl mx-auto space-y-4">
          <p>
            We are <strong>Welcome Packaging Solution</strong>, located in <strong>Kopergaon, Dist. Ahmednagar</strong>.
            We specialize in manufacturing high-quality packaging materials including <strong>BOPP Bags, PP Bags, Leno Bags, and HDPE Bags</strong>.
          </p>
          <p>
            Our mission is to provide reliable and innovative packaging solutions to businesses across India, ensuring durability and sustainability in every product we deliver.
          </p>
          <p>
            Contact Person: <strong>Akshay Sonekar</strong> <br />
            Mobile: <a href="tel:9970346555" className="text-blue-600 underline">9970346555</a><br />
            Email: <a href="mailto:welcomepackagingsolution@gmail.com" className="text-blue-600 underline">welcomepackagingsolution@gmail.com</a>
          </p>
          <p>
            Address: Plot No.B-45, Cooperative Industrial Estate, Station Road, Kopergaon - 423603, Maharashtra.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
