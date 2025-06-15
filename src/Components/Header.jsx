import React, { useState } from 'react';
import { CgProfile } from 'react-icons/cg';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { FaBars, FaTimes, FaSearch } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="text-[#000000] text-[28px] font-bold">SHOP.CO</div>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex gap-8 text-black items-center">
          <li className="cursor-pointer">Shop</li>
          <li className="cursor-pointer">On Sale</li>
          <li className="cursor-pointer">New Arrivals</li>
          <li className="cursor-pointer">Brands</li>
        </ul>

        {/* Search Input */}
        <div className="hidden lg:flex items-center">
          <label className="input flex items-center border px-2 py-1 rounded-md">
            <FaSearch className="text-gray-500" />
            <input
              type="search"
              className="ml-2 outline-none"
              placeholder="Search"
            />
          </label>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-3 text-2xl text-black">
          {/* Mobile search icon */}
          <button
            className="lg:hidden"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            <FaSearch />
          </button>
          <MdOutlineShoppingCart className="w-6 h-6" />
          <CgProfile className="w-6 h-6" />
          {/* Menu icon */}
          <button
            className="lg:hidden text-xl ml-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="flex flex-col gap-4 px-6 pb-4 lg:hidden text-black">
          <li className="cursor-pointer">Shop</li>
          <li className="cursor-pointer">On Sale</li>
          <li className="cursor-pointer">New Arrivals</li>
          <li className="cursor-pointer">Brands</li>
        </ul>
      )}

      {/* Mobile Search Input */}
      {isSearchOpen && (
        <div className="lg:hidden px-6 pb-4">
          <label className="input flex items-center border px-2 py-1 rounded-md">
            <FaSearch className="text-gray-500" />
            <input
              type="search"
              className="ml-2 w-full outline-none"
              placeholder="Search"
            />
          </label>
        </div>
      )}
    </div>
  );
};

export default Header;
