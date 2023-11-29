"use client";

import CustomIcon from "../custom-icon";

export default function GoToTop() {
  return (
    <button
      onClick={(): void => scrollTo(0, 0)}
      className="fixed bottom-10 right-6 border-none outline-none sm:right-10"
    >
      <CustomIcon icon="top" size="30" color="#fff" />
    </button>
  );
}
