"use client";

import Link from "next/link";
import React from "react";
import { navLinksData } from "./Helper";
import { usePathname } from "next/navigation";

export default function Sidebar({ showSidebar, setShowSidebar }) {
  const pathName = usePathname();

  return (
    <aside
      className={`fixed z-10 top-0 left-0 bg-grayBg border-2 border-grayBorder backdrop-blur-2xl w-full flex flex-col gap-4 sm:gap-10 h-full p-6 duration-300 ease-in-out lg:hidden ${
        showSidebar ? "left-0" : "left-[-110%]"
      }`}
    >
      {navLinksData.map((link) => (
        <Link
          key={link.id}
          href={link.linkUrl}
          onClick={() => setShowSidebar(!showSidebar)}
          className={`font-medium transition w-fit duration-300 ease-linear hover:text-primary ${
            pathName === link.linkUrl ? "text-primary" : "text-white"
          }`}
        >
          {link.linkLabel}
        </Link>
      ))}
    </aside>
  );
}
