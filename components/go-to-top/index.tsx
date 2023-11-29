"use client";

import { useEffect, useState } from "react";

import CustomIcon from "../custom-icon";

export default function GoToTop() {
  const [height, setHeight] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      console.log(scroll);

      if (scroll >= 150) {
        setHeight(true);
      } else {
        setHeight(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // função de limpeza
  }, [height]);

  return (
    <>
      {height && (
        <button
          onClick={(): void => scrollTo(0, 0)}
          className="fixed bottom-10 right-6 border-none outline-none sm:right-10"
        >
          <CustomIcon icon="top" size="30" color="#fff" />
        </button>
      )}
    </>
  );
}
