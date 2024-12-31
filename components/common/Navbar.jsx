"use client";

import Link from "next/link";
import { navLinksData } from "./Helper";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Sidebar from "./Sidebar";

export default function Navbar() {
  const pathName = usePathname();
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="w-full px-4 py-4 fixed top-0 left-0 z-20">
      <div className="max-w-[1154px] w-full mx-auto flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="text-2xl sm:text-[30px]">
          <span className="text-primary">{`{`}</span>
          <span className="text-white">{`CÖde`}</span>
          <span className="text-primary">{`}`}</span>
        </Link>

        {/* Menus */}
        <nav className="max-w-[613px] w-full max-lg:hidden py-[14px] px-5 flex items-center justify-between gap-4 bg-grayBg border border-grayBorder backdrop-blur-sm">
          {navLinksData.map((link) => (
            <Link
              key={link.id}
              href={link.linkUrl}
              className={`transition duration-300 ease-linear hover:text-primary ${
                pathName === link.linkUrl ? "text-primary" : "text-white"
              }`}
            >
              {link.linkLabel}
            </Link>
          ))}
        </nav>

        {/* Download CV and menu btns */}
        <div className="flex items-center justify-center gap-4">
          <Link className="relative group" href="">
            <div className="relative z-[1] px-5 sm:px-6 py-2 sm:py-[14px] border border-primary font-medium text-primary hover:text-white transition-all duration-300 ease-linear">
              Download CV
            </div>
            <div className="absolute w-0 group-hover:w-full h-full top-0 left-0 duration-300 ease-linear bg-primary"></div>
          </Link>

          {/* Menu btn */}
          <button
            onClick={() => setShowSidebar(!showSidebar)}
            className="flex flex-col gap-[6px] lg:hidden relative z-20"
          >
            <div
              className={`bg-white duration-300 ease-in-out h-1 w-6 sm:w-8 ${
                showSidebar ? "-rotate-45" : "rotate-0"
              }`}
            ></div>
            <div
              className={`bg-white duration-300 ease-in-out h-1 w-6 sm:w-8 ${
                showSidebar ? "hidden" : "block"
              }`}
            ></div>
            <div
              className={`bg-white duration-300 ease-in-out h-1 w-6 sm:w-8 ${
                showSidebar ? "rotate-45" : "rotate-0"
              }`}
            ></div>
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
    </div>
  );
}
