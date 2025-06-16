import React from 'react';
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#F0F0F0] text-gray-700 px-6 py-10 z-0 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 pt-[130px] z-0">
        {/* Brand */}
        <div className="col-span-1">
          <h2 className="text-2xl font-bold mb-4 ">SHOP.CO</h2>
          <p className="text-sm mb-4">
            We have clothes that suit your style and which you're proud to wear. From women to men.
          </p>
          <div className="flex gap-3 text-gray-600">
            <FaTwitter className="hover:text-black cursor-pointer" />
            <FaFacebookF className="hover:text-black cursor-pointer" />
            <FaInstagram className="hover:text-black cursor-pointer" />
            <FaGithub className="hover:text-black cursor-pointer" />
          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold mb-3">COMPANY</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-black cursor-pointer">About</li>
            <li className="hover:text-black cursor-pointer">Features</li>
            <li className="hover:text-black cursor-pointer">Works</li>
            <li className="hover:text-black cursor-pointer">Career</li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="font-semibold mb-3">HELP</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-black cursor-pointer">Customer Support</li>
            <li className="hover:text-black cursor-pointer">Delivery Details</li>
            <li className="hover:text-black cursor-pointer">Terms & Conditions</li>
            <li className="hover:text-black cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        {/* FAQ */}
        <div>
          <h3 className="font-semibold mb-3">FAQ</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-black cursor-pointer">Account</li>
            <li className="hover:text-black cursor-pointer">Manage Deliveries</li>
            <li className="hover:text-black cursor-pointer">Orders</li>
            <li className="hover:text-black cursor-pointer">Payments</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold mb-3">RESOURCES</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-black cursor-pointer">Free eBooks</li>
            <li className="hover:text-black cursor-pointer">Development Tutorial</li>
            <li className="hover:text-black cursor-pointer">How to - Blog</li>
            <li className="hover:text-black cursor-pointer">Youtube Playlist</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container mx-auto border-gray-300 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p className="mb-4 md:mb-0">Shop.co © 2000–2023. All Rights Reserved</p>
        <div className="flex items-center gap-3 flex-wrap justify-center">
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" className="w-10 h-auto" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" alt="MasterCard" className="w-10 h-auto" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="w-10 h-auto" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple Pay" className="w-6 h-auto" />
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;
