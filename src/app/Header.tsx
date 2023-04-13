"use client";

import Link from "next/link";

import { useCallback, useState } from "react";

import Logo from "./Logo";

function useHeader() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const onMenuClick = useCallback(() => setMenuOpen(!menuOpen), [menuOpen]);

  const onMenuItemClick = useCallback(() => {
    if (menuOpen) {
      onMenuClick();
    }
  }, [menuOpen, onMenuClick]);

  return {
    menuOpen,
    onMenuClick,
    onMenuItemClick,
  };
}

export default function Header() {
  const { menuOpen, onMenuClick, onMenuItemClick } = useHeader();
  const menuTransition = `transition-all ease-in-out ${menuOpen ? "duration-500" : "duration-250"}`;
  const barClasses = `absolute left-1/4 w-1/2 h-0.5 ${menuTransition} bg-gray-900`;
  const pageItemClasses = "m-3";
  const pageLinkClasses = "p-2 hover:text-orange-100 lg:hover:text-orange";

  return (
    <header className="flex justify-center max-w-full bg-full-white drop-shadow">
      <div className="flex w-full justify-between items-center p-4 md:p-6 lg:p-8">
        <Link role="link" href="/" aria-label="Bare Metal Software Limited">
          <Logo />
        </Link>
        <nav
          role="navigation"
          className={`w-full h-screen lg:w-auto lg:h-auto absolute top-0 left-0 lg:relative bg-slate-900 lg:bg-transparent ${
            menuOpen === true ? "visible bg-full-white" : "max-lg:hidden"
          }`}
        >
          <ul
            className={`flex flex-col lg:flex-row items-center h-full lg:mt-0 ${menuTransition} ${
              menuOpen === true ? "py-24 text-black" : "text-transparent lg:text-black"
            }`}
          >
            <li role="menuitem" className={pageItemClasses} onClick={onMenuItemClick}>
              <Link className={pageLinkClasses} href="/services">
                Services
              </Link>
            </li>
            <li role="menuitem" className={pageItemClasses} onClick={onMenuItemClick}>
              <Link className={pageLinkClasses} href="/about-us">
                About us
              </Link>
            </li>
            <li role="menuitem" className={pageItemClasses}>
              <Link className={pageLinkClasses} href="/contact-us" onClick={onMenuItemClick}>
                Contact us
              </Link>
            </li>
          </ul>
        </nav>
        <button role="menu" className="lg:invisible relative w-12 h-12" onClick={onMenuClick}>
          <span className={`${barClasses} ${menuOpen ? "top-1/2 rotate-45" : "top-1/3"}`} />
          <span className={`${barClasses} ${menuOpen ? "w-0" : ""}`} />
          <span className={`${barClasses} ${menuOpen ? "top-1/2 rotate-[-45deg]" : "top-2/3"}`} />
        </button>
      </div>
    </header>
  );
}
