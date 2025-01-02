"use client";

import React, { useState, useEffect } from "react";

// Your list of titles
const titles = [
  "a Software Engineer",
  "an Educator",
  "a Mentor",
  "A Researcher",
  "and a Life Enjoyer",
];

export default function Typewriter() {
  const [currentTitle, setCurrentTitle] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const typingSpeed = 100;

  useEffect(() => {
    if (isPaused) return; // Stop typing/deleting if paused

    const fullTitle = titles[titleIndex];

    const timer = setTimeout(() => {
      if (isDeleting) {
        // Deleting characters
        setCurrentTitle(fullTitle.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else {
        // Typing characters
        setCurrentTitle(fullTitle.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }

      // If we have typed the entire title
      if (!isDeleting && currentTitle === fullTitle) {
        setTimeout(() => setIsDeleting(true), 1000);
      }

      // If we have deleted the entire title
      if (isDeleting && currentTitle === "") {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % titles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, currentTitle, isDeleting, titleIndex, isPaused]);

  return (
    <h1 className="relative text-3xl sm:text-[40px] lg:text-[50px] xl:text-[60px] text-white font-medium tracking-[-3.6px] leading-tight">
      {currentTitle}
      <span className="blinking-cursor">|</span>

      {/* The superscript Pause/Resume button */}
      <sup className="superscript-button">
        <button
          className="ml-1 text-sm bg-primary text-white px-3 py-1 rounded"
          style={{ cursor: "pointer", 
            letterSpacing: "0px"
          }}
          onClick={() => setIsPaused((prev) => !prev)}
        >
          {isPaused ? "Resume" : "Pause"}
        </button>
      </sup>
    </h1>
  );
}
