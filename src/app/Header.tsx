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
  const barClasses = `absolute left-1/4 w-1/2 h-0.5 bg-slate-900 transition ease-in-out ${
    menuOpen ? "duration-500" : "duration-250"
  }`;

  return (
    <header className="flex justify-between">
      <Link href={siteUrl}>Bare Metal Software</Link>
      <nav role="navigation" className={`${menuOpen === true ? "visible" : "max-lg:invisible"}`}>
        <ul>
          <li>Page 1</li>
          <li>Page 2</li>
          <li>Page 3</li>
        </ul>
      </nav>
      <button
        role="menu"
        className="lg:invisible relative w-12 h-12 rounded-full hover:bg-slate-200 ease-in-out duration-500"
        onClick={onMenuClick}
      >
        <span className={`${barClasses} ${menuOpen ? "top-1/2 rotate-45" : "top-1/3"}`} />
        <span className={`${barClasses} ${menuOpen ? "w-0" : ""}`} />
        <span className={`${barClasses} ${menuOpen ? "top-1/2 rotate-[-45deg]" : "top-2/3"}`} />
      </button>
    </header>
  );
}
