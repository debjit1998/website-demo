"use client";

import { useEffect, useRef } from "react";

const NavShadow = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        ref.current?.classList.add("nav-shadow");
      } else {
        ref.current?.classList.remove("nav-shadow");
      }
    });
  }, []);

  return (
    <div
      className="h-16 sm:h-[5.375rem] fixed z-5 top-0 left-0 w-full"
      ref={ref}
    />
  );
};

export default NavShadow;
