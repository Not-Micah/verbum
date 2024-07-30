"use client";

import Link from "next/link";
import AlertButton from "./AlertButton";
import { CiMenuBurger } from "react-icons/ci";
import { useState } from "react";
import NavBarModal from "./NavBarModal";

import { twMerge } from "tailwind-merge";

interface NavBarProps {
  className?: string;
}

const NavBar: React.FC<NavBarProps> = ({ className }) => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="">
      <nav
        className={twMerge("px-20 z-10 py-8 flex justify-between items-center max-container max-sm:hidden", className)}
      >
        <ul className="w-full flex justify-center items-center gap-16 nav-list">
          <li className="dynamic-label">
            <a href="/">Home</a>
          </li>
          <li className="dynamic-label">
            <a href="#about">About</a>
          </li>
          <li className="dynamic-label">
            <a href="/verses">Verses</a>
          </li>
          <li className="dynamic-label">
            <a href="/books">Books</a>
          </li>
          <li className="dynamic-label
          flex flex-row justify-center items-center gap-x-5">
            <a href="/ai" className="">AI</a>
            <div className="text-xs bg-green-300 rounded-md ring-1 ring-green-400 p-1">New</div>
          </li>
        </ul>
      </nav>
      <nav className="xl:hidden lg:hidden md:hidden sm:hidden z-10 relative flex flex-row items-center justify-end mx-5">
        <button
          className="bg-white-400/20 text-black text-2xl p-2 w-10 h-10 m-5
        flex justify-center items-center rounded-md shadow-md"
          onClick={() => {
            setShowNav(true);
          }}
        >
          <CiMenuBurger />
        </button>
        {showNav && <NavBarModal setShowNav={setShowNav} />}
      </nav>
    </div>
  );
};

export default NavBar;
