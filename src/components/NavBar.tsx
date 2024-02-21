import Link from "next/link";
import AlertButton from "./AlertButton";

const NavBar = () => {
  return (
    <header className="px-20 py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/" className="">
          <img src="../../logo.png" className="w-[2rem] h-[2rem]" alt="" />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden nav-list">
          <li><a href="/">Home</a></li>
          <li><a href="/verses">Verses</a></li>
          <li><a href="#about">About Us</a></li>
          <li><AlertButton  text="Books"/></li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar;
