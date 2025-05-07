import React from "react";

function Footer() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <footer className="py-10">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        <div className="mb-10 text-center">
            <h2 className="text-2xl font-medium italic text-gray-800">
              Welcome <br /> Packaging Agency
            </h2>
          </div>
          {[...Array(2)].map((_, i) => (
            <div key={i}>
              <h5 className="text-lg font-semibold mb-4">Section</h5>
              <ul className="space-y-2">
                {["Home", "Features", "Pricing", "FAQs", "About"].map(
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
          ))}
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-10 pt-6 border-t">
          <p className="text-gray-500">
            &copy; 2025 Welcome Packaging Agency. All rights reserved.
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
