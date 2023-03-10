"use client";

import Image from "next/image";
import Link from "next/link";

import { useCallback, useState } from "react";

function useHeader() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const onMenuClick = useCallback(() => setMenuOpen(!menuOpen), [menuOpen]);

  return {
    menuOpen,
    onMenuClick,
  };
}

export default function Header() {
  const { menuOpen, onMenuClick } = useHeader();
  const menuTransition = `transition-all ease-in-out ${menuOpen ? "duration-500" : "duration-250"}`;
  const barClasses = `absolute left-1/4 w-1/2 h-0.5 ${menuTransition}`;
  const pageItemClasses = "m-3";
  const pageLinkClasses = "p-2 hover:text-blue-100 lg:hover:text-blue";

  return (
    <header className="flex justify-between items-center p-4 bg-full-white drop-shadow">
      <Link role="link" href="/" aria-label="Company Logo Link">
        <Image
          role="img"
          src={menuOpen ? "company-logo-white.svg" : "company-logo.svg"}
          alt="Bare Metal Software"
          width={241}
          height={40}
          className="relative z-10"
        />
      </Link>
      <nav
        role="navigation"
        className={`w-full h-screen lg:w-auto lg:h-auto absolute top-0 left-0 lg:relative bg-slate-900 lg:bg-transparent ${menuTransition} ${
          menuOpen === true ? "visible bg-gray-900" : "max-lg:invisible"
        }`}
      >
        <ul
          className={`flex flex-col lg:flex-row items-center h-full lg:mt-0 ${menuTransition} ${
            menuOpen === true ? "py-24 text-white" : "text-transparent lg:text-black"
          }`}
        >
          <li className={pageItemClasses}>
            <Link className={pageLinkClasses} href="/services">
              Services
            </Link>
          </li>
          <li className={pageItemClasses}>
            <Link className={pageLinkClasses} href="">
              About us
            </Link>
          </li>
          <li className={pageItemClasses}>
            <Link className={pageLinkClasses} href="/contact-us">
              Contact us
            </Link>
          </li>
        </ul>
      </nav>
      <button role="menu" className="lg:invisible relative w-12 h-12" onClick={onMenuClick}>
        <span
          className={`${barClasses} ${
            menuOpen ? "bg-white top-1/2 rotate-45" : "bg-gray-900 top-1/3"
          }`}
        />
        <span className={`${barClasses} ${menuOpen ? "w-0" : "bg-gray-900 "}`} />
        <span
          className={`${barClasses} ${
            menuOpen ? "bg-white top-1/2 rotate-[-45deg]" : "bg-gray-900 top-2/3"
          }`}
        />
      </button>
    </header>
  );
}
