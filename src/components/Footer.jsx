import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/4">
          <h4 className="text-lg font-semibold text-orange-500">About Us</h4>
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            cursus leo ut felis tincidunt cursus.
          </p>
        </div>
        <div className="w-full md:w-1/4">
          <h4 className="text-lg font-semibold text-orange-500">Links</h4>
          <ul className="mt-4">
            <li>
              <a href="#" className="text-blue-500 hover:text-blue-700">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-500 hover:text-blue-700">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-500 hover:text-blue-700">
                My Account
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-500 hover:text-blue-700">
                My Cart
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-500 hover:text-blue-700">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/4">
          <h4 className="text-lg font-semibold text-orange-500">Contact</h4>
          <ul className="mt-4">
            <li>Address: 123 Street, City</li>
            <li>Phone: 555-1234</li>
            <li>Email: info@example.com</li>
          </ul>
        </div>
        <div className="w-full md:w-1/4">
          <h4 className="text-lg font-semibold text-orange-500">Copyright</h4>
          <p className="mt-4 text-sm opacity-75">
            &copy; 2023 Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
