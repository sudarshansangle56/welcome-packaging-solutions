"use client"; // needed only if using App Router and state/hooks inside

import React, { useState } from "react";
import Image from "next/image";

function Box() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "Are your products safe for sensitive skin?",
      answer:
        "Yes, our products are formulated with gentle, non-irritating ingredients suitable for sensitive skin types.",
    },
    {
      question: "Are your products cruelty-free?",
      answer:
        "Absolutely! We never test on animals, and all our products are 100% cruelty-free.",
    },
    {
      question: "What’s your return policy?",
      answer:
        "We offer a 30-day hassle-free return policy. If you're not satisfied, contact our support.",
    },
    {
      question: "Do you ship internationally?",
      answer:
        "Yes, we ship to most countries worldwide. Shipping charges may vary.",
    },
    {
      question: "How do I choose the right product?",
      answer:
        "You can use our product quiz or reach out to our support team for personalized recommendations.",
    },
  ];

  return (
    <div className="flex sm:px-[90px] min-h-[550px] w-full sm:mt-[120px] mt-[20px] sm:gap-[100px] flex-wrap-reverse">
      {/* Image Section */}
   
      {/* FAQ Section */}
      <div className="sm:w-[40%] w-[100%] p-5  rounded-3xl">
        <div className="sm:w-[230px] w-[250px] border-[1px] border-black h-[35px] rounded-3xl flex items-center justify-center gap-3 text-[15px]">
          <div className="bg-black h-[15px] w-[15px] rounded-full"></div>
          <h1>Frequently Asked Question</h1>
        </div>

        <div className="sm:text-[35px] text-[25px] leading-[30px] sm:leading-[40px] sm:mt-10 mt-3">
          <h1>
            Answers to Your <br /> Skincare Questions, All <br /> in One Place.
          </h1>
        </div>

        <div className="sm:mt-9 mt-4">
          {faqData.map((item, index) => (
            <div key={index} className="mb-2">
              <div
                onClick={() => toggleFAQ(index)}
                className="sm:w-[450px] min-h-[50px] cursor-pointer border-[1px] border-black rounded-md flex items-center justify-between px-4 text-[17px]"
              >
                <h1>{item.question}</h1>
                <h1>{openIndex === index ? "-" : "+"}</h1>
              </div>
              {openIndex === index && (
                <div className="sm:w-[450px] text-[15px] bg-[#FEFFF4] p-3 border-x-[1px] border-b-[1px] border-black rounded-b-md">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Box;
