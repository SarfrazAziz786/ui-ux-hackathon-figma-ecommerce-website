'use client';
import Image from 'next/image';
import Link from 'next/link';
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi';
import { useState } from 'react';

import logo from '@/app/assets/Meubel House_Logos-05.jpg';
import accountAlert from '@/app/assets/mdi_account-alert-outline.png';
import searchIcon from '@/app/assets/akar-icons_search.png';
import heartIcon from '@/app/assets/akar-icons_heart.png';
import cartIcon from '@/app/assets/ant-design_shopping-cart-outlined.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="w-full bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo Section */}
        <div className="flex items-center gap-4">
          <Image src={logo} alt="Meubel House Logo" className="w-12 h-12" />
          <h1 className="text-2xl font-bold text-black">Furniro</h1>
        </div>

        {/* Links Section (Desktop) */}
        <div className="hidden md:flex gap-8 font-medium">
          <Link href="/" className="hover:underline hover:text-yellow-500">
            Home
          </Link>
          <Link href="/shop" className="hover:underline hover:text-yellow-500">
            Shop
          </Link>
          <Link href="/blog" className="hover:underline hover:text-yellow-500">
            Blog
          </Link>
          <Link href="/contact" className="hover:underline hover:text-yellow-500">
            Contact
          </Link>
        </div>

        {/* Icon Section */}
        <div className="flex items-center gap-4">
          <Image src={accountAlert} alt="Account" className="hidden md:block w-6 h-6" />
          <Image src={searchIcon} alt="Search" className="w-6 h-6" />
          <Image src={heartIcon} alt="Wishlist" className="hidden md:block w-6 h-6" />
          <Image src={cartIcon} alt="Cart" className="w-6 h-6" />

          {/* Mobile Menu Button */}
          <button
            className="text-2xl md:hidden focus:outline-none"
            onClick={toggleMenu}
          >
            {menuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-800 text-white text-center py-4 space-y-4">
          <Link href="/" className="block hover:text-gray-400">
            Home
          </Link>
          <Link href="/shop" className="block hover:text-gray-400">
            Shop
          </Link>
          <Link href="/blog" className="block hover:text-gray-400">
            Blog
          </Link>
          <Link href="/contact" className="block hover:text-gray-400">
            Contact
          </Link>
          
        </div>
      )}
    </nav>
  );
};

export default Navbar;
