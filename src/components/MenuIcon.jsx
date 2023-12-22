import React from "react";

const MenuIcon = ({ isMenuOpen }) => {
  return (
    <div className="grid justify-items-center gap-1">
      <span
        class={
          `h-1 w-8 rounded-full bg-black sm:bg-white ` +
          (isMenuOpen ? " transition rotate-45 translate-y-1" : "")
        }
      ></span>
      <span
        class={
          `h-1 w-8 rounded-full bg-black sm:bg-white ` +
          (isMenuOpen ? "hidden" : "")
        }
      ></span>
      <span
        class={
          `h-1 w-8 rounded-full bg-black sm:bg-white ` +
          (isMenuOpen ? " transition -rotate-45 -translate-y-1" : "")
        }
      ></span>
    </div>
  );
};

export default MenuIcon;
