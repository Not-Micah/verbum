"use client";

import Link from "next/link";
import AlertButton from "./AlertButton";
import { CiMenuBurger } from "react-icons/ci";
import { useState } from "react";
import NavBarModal from "./NavBarModal";

const NavBar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="">
      <nav
        className="px-20 z-10 py-8 w-full flex justify-between items-center max-container
      max-sm:hidden"
      >
        <a href="/" className="max-md:hidden">
          <img src="../../logo.png" className="w-[2rem] h-[2rem]" alt="" />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 nav-list">
          <li className="dynamic-text">
            <a href="/">Home</a>
          </li>
          <li className="dynamic-text">
            <a href="/verses">Verses</a>
          </li>
          <li className="dynamic-text">
            <a href="#about">About Us</a>
          </li>
          <li className="dynamic-text">
            <AlertButton text="Books" />
          </li>
        </ul>
      </nav>
      <nav className="xl:hidden lg:hidden md:hidden sm:hidden z-10 relative flex flex-row items-center justify-between mx-5">
        <a href="/" className="pl-5">
          <img src="../../logo.png" className="w-[2rem] h-[2rem]" alt="" />
        </a>
        <button
          className="bg-soft-purple text-white text-2xl p-2 w-10 h-10 m-5
        flex justify-center items-center rounded-md"
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
