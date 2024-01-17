'use client'
import React from 'react'
import { useEffect, useState } from 'react';
import { FaArrowAltCircleUp } from "react-icons/fa";

import '@/public/assets/css/top.css'

export const Top = () => {
  const [atBottom, setAtBottom] = useState(false);
  const handleScroll = () => {
    const scrollBuffer = 10; // pixels from the bottom to consider as "at the bottom"
    const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - scrollBuffer;
    setAtBottom(isAtBottom);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <a
      onClick={scrollToTop}
      href="#top"
      aria-label="Scroll to top"
      className={`your-class-name ${atBottom ? 'at-bottom' : ''}`}
    >
      <FaArrowAltCircleUp className="" />
    </a>
  );
};