"use client";
import { useState } from "react";
import Link from "next/link";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
  <nav className="bg-transparent top-0 z-50">
  <div className="container mx-auto px-4 md:px-8 flex items-center justify-between h-16">
    {/* Logo */}
    <Link href="/" legacyBehavior>
      <a className="text-xl font-bold text-blue-600">WeCodeThat</a>
    </Link>

    {/* Navbar Links */}
    <div className="hidden md:flex font-bold items-center space-x-6">
      <Link href="/" legacyBehavior>
        <a className="text-gray-200 hover:text-blue-600 transition">Home</a>
      </Link>
      <Link href="/features" legacyBehavior>
        <a className="text-gray-200 hover:text-blue-600 transition">Features</a>
      </Link>
      <Link href="/pricing" legacyBehavior>
        <a className="text-gray-200 hover:text-blue-600 transition">Pricing</a>
      </Link>
      <Link href="/contact" legacyBehavior>
        <a className="text-gray-200 hover:text-blue-600 transition">Contact</a>
      </Link>
    </div>

    {/* Actions */}
    <div className="hidden md:flex items-center space-x-4">
      <Link href="/login" legacyBehavior>
        <a className="text-gray-200 hover:text-blue-600 transition">Login</a>
      </Link>
      <Link href="/signup" legacyBehavior>
        <a className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Sign Up</a>
      </Link>
    </div>

    {/* Mobile Menu Button */}
    <button 
      className="md:hidden text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600" 
      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7"></path>
      </svg>
    </button>
  </div>

  {/* Mobile Menu */}
  {isMobileMenuOpen && (
    <div className="md:hidden bg-white border-t border-gray-200">
      <div className="px-4 py-2 space-y-2">
        <Link href="/" legacyBehavior>
          <a className="block text-gray-200 hover:text-blue-600 transition">Home</a>
        </Link>
        <Link href="/features" legacyBehavior>
          <a className="block text-gray-200 hover:text-blue-600 transition">Features</a>
        </Link>
        <Link href="/pricing" legacyBehavior>
          <a className="block text-gray-200 hover:text-blue-600 transition">Pricing</a>
        </Link>
        <Link href="/contact" legacyBehavior>
          <a className="block text-gray-200 hover:text-blue-600 transition">Contact</a>
        </Link>
        <hr className="border-gray-200" />
        <Link href="/login" legacyBehavior>
          <a className="block text-gray-200 hover:text-blue-600 transition">Login</a>
        </Link>
        <Link href="/signup" legacyBehavior>
          <a className="block bg-blue-600 text-white text-center px-4 py-2 rounded hover:bg-blue-700 transition">Sign Up</a>
        </Link>
      </div>
    </div>
  )}
</nav>
  );
};
