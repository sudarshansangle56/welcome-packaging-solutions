import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <footer className="pb-10">
        <div className="flex items-center px-10">
          <div className="flex-1 flex-col flex justify-center items-center pr-16">
            <Image src="/welcome.png" alt="Logo" height={150} width={150} />
            <p className="text-gray-500 text-center">
              Welcome Packaging is a trusted supplier of high-quality poly bag and plastic film products made in India.
            </p>
            <div className="flex flex-col font-semibold mt-6 text-center">
              <p>
                ISO 9001 : 2015 Certified by Intertek
              </p>
              <p>
                FSSC 22000 Certified by Intertek
              </p>
            </div>
          </div>

          <div className="flex-1 flex pl-20">
            <div className="pt-5 flex-1">
              <h5 className="text-lg font-bold mb-3">Menu</h5>
              <ul className="space-y-2">
                {["Home", "About", "Products", "Contact"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-gray-500 hover:text-gray-900 transition"
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div className="pt-5 flex-1">
              <h5 className="text-lg font-bold mb-3">Contact</h5>
              <ul className="space-y-2">
                {["000-000-000-0", "xyz@gmail.com"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-gray-500 hover:text-gray-900 transition"
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-10 pt-6 border-t border-gray-300 px-10">
          <p className="text-gray-500">
            &copy; 2025 Welcome Packaging Agency | All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {["twitter", "instagram", "facebook"].map((platform) => (
              <a
                key={platform}
                href="#"
                className="text-gray-600 hover:text-gray-900 transition"
              >
                <span className="sr-only">{platform}</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M..." />{" "}
                  {/* Replace with real icons or use packages */}
                </svg>
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
