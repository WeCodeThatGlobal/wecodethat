"use client";
import { useState } from "react";
import Link from "next/link";
import "./Navbar.css";

export const Navbar = ({ showStickyNav }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav
      className={`bg-transparent border-b border-slate-50/10 py-2 top-0 z-50 transition-top duration-1500 ease-in-out 
    ${
      showStickyNav
        ? "fixed top-0 w-full bg-white shadow-lg text-gray-900"
        : "normal text-gray-100 top-0 left-0 right-0 absolute mb-50"
    }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" legacyBehavior>
          <a className="w-60 text-xl font-bold text-blue-600">
            {showStickyNav ? (
              <img src="/logo/Full_Logo_Bl.png" alt="" />
            ) : (
              <img src="/logo/Full_Logo.png" alt="" />
            )}
          </a>
        </Link>

        {/* Navbar Links */}
        <div className="hidden md:flex font-bold items-center space-x-6">
          <Link href="/" legacyBehavior>
            <a className=" transition">Home</a>
          </Link>
          <Link href="#services" legacyBehavior>
            <a className=" transition">Services</a>
          </Link>
          <Link href="/about-us" legacyBehavior>
            <a className=" transition">About Us</a>
          </Link>
          <Link href="/contact-us" legacyBehavior>
            <a className=" transition">Contact Us</a>
          </Link>
          {/* <Link href="/contact" legacyBehavior>
            <a className=" transition">Blog</a>
          </Link> */}
          <a
            href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0THqOtbWCkTEfTRS6X_4n16i8N0hFxFi_s6PKGGqCrZAHWCbgBmBtOFmqcFGOTZ3MdC8hK6RMI?gv=true"
            target="blank"
            className="rounded-md bg-gray-900 text-white px-3.5 py-2.5 text-sm font-semibold hover:text-white "
          >
            Book a Free Call
            <span className="ml-4" aria-hidden="true">
              →
            </span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-2 space-y-2">
            <Link href="/" legacyBehavior>
              <a className="block text-gray-800 hover:text-blue-600 transition">
                Home
              </a>
            </Link>
            <Link href="/features" legacyBehavior>
              <a className="block text-gray-800 hover:text-blue-600 transition">
                Features
              </a>
            </Link>
            <Link href="/pricing" legacyBehavior>
              <a className="block text-gray-800 hover:text-blue-600 transition">
                Pricing
              </a>
            </Link>
            <Link href="/contact" legacyBehavior>
              <a className="block text-gray-800 hover:text-blue-600 transition">
                Contact
              </a>
            </Link>
            <hr className="border-gray-800" />
            <Link href="/login" legacyBehavior>
              <a className="block text-gray-800 hover:text-blue-600 transition">
                Login
              </a>
            </Link>
            <Link href="/signup" legacyBehavior>
              <a className="block bg-blue-800 text-white text-center px-4 py-2 rounded hover:bg-blue-700 transition">
                Sign Up
              </a>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
