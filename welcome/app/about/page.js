import React from "react";

function page() {
  return (
    <div className="bg-[#f1f2ed]">
     
      <div className="h-[350px] p-2 bg-[url('/about-bg.jpg')] bg-cover bg-center mb-8 flex flex-col justify-center items-center gap-5">
        <span className="text-5xl font-bold text-secondary">
          About Welcome Packaging
        </span>
        <span className="text-lg text-[#0f0f10e9]">
          At Welcome Packaging Solution, our customers are always our first priority.
        </span>
      </div>

      
      <div className="min-h-[500px] w-[90%]  md:w-[70%] mx-auto p-6 text-[#0f0f10e9]">

        <div className="flex flex-col md:flex-row items-center gap-6 mb-10">
          <div>
            <h1 className="text-[40px] font-bold leading-[60px]">
              Welcome Packaging Solution
            </h1>
            <p className="mt-3">
              We are a trusted manufacturer of BOPP Bags, PP Bags, Leno Bags,
              and HDPE Bags, catering to diverse industries with durable and
              eco-friendly packaging solutions. Based in Kopargaon, Ahmednagar,
              we combine innovation with quality to meet the growing needs of
              our customers.
            </p>
            <p className="mt-2 font-semibold">
              📍 Plot No.B-45, Cooperative Industrial Estate, Station Road,
              Kopargaon-423603, Dist. Ahmednagar
            </p>
            <p>📞 +91 9970346555</p>
            <p>✉️ welcomepackagingsolution@gmail.com</p>
          </div>
        </div>

        {/* Mission */}
        <h1 className="text-[40px] font-bold leading-[70px]">Our Mission</h1>
        <p>
          At Welcome Packaging Solution, our mission is to provide high-quality,
          durable, and eco-friendly packaging solutions that meet the diverse
          needs of our customers, while ensuring reliability, innovation, and
          customer satisfaction.
        </p>

        {/* How We Work */}
        <h1 className="text-[40px] font-bold leading-[70px]">How We Work</h1>
        <p>
          We start by thoroughly understanding your product and packaging needs.
          Based on your requirements, we offer customized solutions—whether it’s
          BOPP bags for vibrant branding, PP bags for cost-effective packaging,
          or Leno bags for breathable storage. Our products are manufactured
          using high-quality materials and advanced technology to ensure
          durability, functionality, and visual appeal. We prioritize timely
          delivery through an efficient logistics system, ensuring your orders
          reach you without delay.
        </p>

        {/* Reviews */}
        <h1 className="text-[40px] font-bold leading-[70px]">Reviews</h1>
        <p>
          ⭐⭐⭐⭐⭐ <br />
          Welcome Packaging Solution has truly elevated our packaging standards.
          Their BOPP Bags are not only durable but also feature vibrant,
          high-quality printing that enhances our brand presence. The PP Bags
          are a cost-effective solution for bulk packaging—sturdy yet
          lightweight, making logistics much easier. We especially appreciate
          the Leno Bags, which are perfect for storing fresh produce like onions
          and garlic, thanks to their breathable mesh design. Highly reliable
          and great customer service—definitely our go-to packaging partner!
        </p>
      </div>
    </div>
  );
}

export default page;
