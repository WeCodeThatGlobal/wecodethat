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
          <Link href="/#services" legacyBehavior>
            <a className=" transition">Services</a>
          </Link>
          <Link href="/about-us" legacyBehavior>
            <a className=" transition">About Us</a>
          </Link>
          <Link href="/contact-us" legacyBehavior>
            <a className="transition">Contact Us</a>
          </Link>
          {/* <Link href="/contact" legacyBehavior>
            <a className=" transition">Blog</a>
          </Link> */}
          <Link
            href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0THqOtbWCkTEfTRS6X_4n16i8N0hFxFi_s6PKGGqCrZAHWCbgBmBtOFmqcFGOTZ3MdC8hK6RMI?gv=true"
            legacyBehavior
          >
            <a
              target="blank"
              className="group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-6 font-semibold text-sm text-neutral-50 "
            >
              <span className="absolute h-48 w-44 rounded-full bg-blue-600 transition-all duration-300 group-hover:h-0 group-hover:w-0"></span>
              <span className="relative">Book a Free Call</span>
            </a>
          </Link>
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
            <Link href="/#services" legacyBehavior>
              <a className="block text-gray-800 hover:text-blue-600 transition">
                Services
              </a>
            </Link>
            <Link href="/about-us" legacyBehavior>
              <a className="block text-gray-800 hover:text-blue-600 transition">
                About Us
              </a>
            </Link>
            <Link href="/contact-us" legacyBehavior>
              <a className="block text-gray-800 hover:text-blue-600 transition">
                Contact Us
              </a>
            </Link>
            <hr className="border-gray-800" />
            <Link
              href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0THqOtbWCkTEfTRS6X_4n16i8N0hFxFi_s6PKGGqCrZAHWCbgBmBtOFmqcFGOTZ3MdC8hK6RMI?gv=true"
              legacyBehavior
            >
              <a
                target="blank"
                className="group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-6 font-semibold text-sm text-neutral-50 "
              >
                <span className="absolute h-48 w-44 rounded-full bg-blue-600 transition-all duration-300 group-hover:h-0 group-hover:w-0"></span>
                <span className="relative">Book a Free Call</span>
              </a>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
