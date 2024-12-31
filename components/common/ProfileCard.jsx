"use client";

import Image from "next/image";
import Link from "next/link";
import { EmailIcon, GithubIcon, LinkedinIcon } from "./Icon";
import { useEffect, useState } from "react";

export default function ProfileCard() {
  const currentYear = new Date().getFullYear();
  const [underlineWidth, setUnderlineWidth] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setUnderlineWidth((prevWidth) => {
        if (prevWidth >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prevWidth + 1;
      });
    }, 10);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-fit md:sticky md:top-20 bg-grayBg border border-grayBorder p-4 lg:p-6 text-white">
      {/* Developer image */}
      <Image
        src="/img/dev.png"
        width={340}
        height={300}
        quality={100}
        alt="dev"
        className="w-full object-cover max-sm:h-[230px]"
      />

      {/* Developer name and designation */}
      <div className="mt-3 md:mt-4">
        <div className="relative w-fit">
          <h2 className="relative z-10 text-2xl sm:text-[30px] font-medium line-clamp-1">
            Chidubem Ishie
          </h2>
          <div
            style={{ width: `${underlineWidth}%` }}
            className="absolute bottom-0 left-0 h-2 bg-primary"
          ></div>
        </div>
        <p className="text-base sm:text-lg opacity-70 mt-1">
          Senior Frontend Developer
        </p>
      </div>

      {/* Social links */}
      <div className="mt-3 sm:mt-4 md:mt-5 flex items-center gap-4">
        <Link
          href="/"
          className="hover:bg-grayBg hover:backdrop-blur-xl transition-all duration-300 ease-linear"
        >
          <LinkedinIcon />
        </Link>
        <Link
          href="/"
          className="hover:bg-grayBg hover:backdrop-blur-xl transition-all duration-300 ease-linear"
        >
          <GithubIcon />
        </Link>
      </div>

      {/* Contact me */}
      <Link className="relative w-full group mt-5 inline-block" href="/contact">
        <div className="w-full relative z-[1] px-5 sm:px-6 py-2 sm:py-[14px] border border-primary font-medium text-primary hover:text-white transition-all duration-300 ease-linear flex items-center justify-center gap-1">
          <EmailIcon />
          <span className="text-lg md:text-xl text-white group-hover:text-primary transition-all duration-300 ease-linear">
            Contact me
          </span>
        </div>
        <div className="absolute w-full group-hover:w-0 h-full top-0 left-0 duration-300 ease-linear bg-primary"></div>
      </Link>

      <p className="text-sm opacity-70 mt-4 md:mt-6">
        {`©${currentYear} logo. All Rights reserved.`}
      </p>
    </div>
  );
}
