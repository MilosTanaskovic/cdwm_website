"use client";
import Link from "next/link";
import React, { useState } from "react";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  const [isNavOpen , setIsNavOpen] = useState<boolean>(false);
  return (
    <header className="fixed w-full h-14 shadow-md bg-[#F2F5FA]">
    <div className="flex justify-between items-center max-w-6xl mx-auto h-full px-4">
      <Link href="/">
        CodeDancingwithMilos
      </Link>
      <nav>
        {/* Hamburger Icon */}
        <button
          className="block lg:hidden"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          <img src="/path-to-hamburger-icon.svg" alt="Menu" />
        </button>

        {/* Navigation Links */}
        <ul
          className={`${
            isNavOpen ? "block" : "hidden"
          } lg:flex items-center space-x-6 font-sans_light `}
        >
          <li>
            <Link href="/about" className="text-[#222] tracking-wider">About</Link>
          </li>
          <li>
            <Link href="/articles" className="text-[#222] tracking-wider">Articles</Link>
          </li>
          <li>
            <Link href="/newsletter" className="text-[#222] tracking-wider">Newsletter</Link>
          </li>
        </ul>
      </nav>

      {/* Join Button */}
      <button className="hidden lg:block font-sans_light bg-[#001c46] text-white px-4 py-2 rounded-full">
        Join 195K+ Subscribers
      </button>
    </div>
  </header>
  );
};

export default Header;
