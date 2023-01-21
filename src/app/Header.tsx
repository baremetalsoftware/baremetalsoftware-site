"use client";

import Link from "next/link";

import { useCallback, useState } from "react";

import useSiteUrl from "../useSiteUrl";

function useHeader() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const siteUrl = useSiteUrl();

  const onMenuClick = useCallback(() => setMenuOpen(!menuOpen), [menuOpen]);

  return {
    siteUrl,
    menuOpen,
    onMenuClick,
  };
}

export default function Header() {
  const { siteUrl, menuOpen, onMenuClick } = useHeader();
  const menuTransition = `transition-all ease-in-out ${menuOpen ? "duration-500" : "duration-250"}`;
  const barClasses = `absolute left-1/4 w-1/2 h-0.5 ${menuTransition}`;
  const pageItemClasses = "m-3";
  const pageLinkClasses = "p-2 hover:text-blue-100";

  return (
    <header className="flex justify-between">
      <Link href={siteUrl}>Bare Metal Software</Link>
      <nav
        role="navigation"
        className={`w-full h-screen lg:w-auto lg:h-auto absolute top-0 left-0 lg:relative bg-slate-900 lg:bg-transparent ${menuTransition} ${
          menuOpen === true ? "visible bg-gray-900" : "max-lg:invisible"
        }`}
      >
        <ul
          className={`flex flex-col lg:flex-row items-center h-full ${menuTransition} ${
            menuOpen === true ? "py-16 text-white" : "text-transparent lg:text-black"
          }`}
        >
          <li className={pageItemClasses}>
            <Link className={pageLinkClasses} href="">
              Services
            </Link>
          </li>
          <li className={pageItemClasses}>
            <Link className={pageLinkClasses} href="">
              About us
            </Link>
          </li>
          <li className={pageItemClasses}>
            <Link className={pageLinkClasses} href="">
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
