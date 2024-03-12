import React, { useRef, useEffect } from "react";
import AlertButton from "./AlertButton";
import { IoCloseOutline } from "react-icons/io5";

const NavBarModal = ({ setShowNav }: { setShowNav: Function }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setShowNav(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setShowNav]);

  return (
    <nav className="fixed top-0 left-0 right-0 bottom-0 w-full h-full flex justify-end">
      <div ref={modalRef} className="max-w-[300px] pr-5 pl-20 pt-20 backdrop-filter backdrop-blur-lg bg-opacity-50 shadow-lg">
        <ul className="flex flex-col justify-start items-center gap-16 nav-list">
          <button className="text-xl" onClick={() => setShowNav(false)}>
            <IoCloseOutline />
          </button>
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
      </div>
    </nav>
  );
};

export default NavBarModal;
