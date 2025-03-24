import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="absolute flex w-full h-16  items-center align-middle z-1 justify-end p-4 ">
      <div className="mr-20 flex gap-20">
        <div>
          <a href={"/"} className="text-2xl font-serif text-[#F3EEE1]">
            Home
          </a>
        </div>
        <div>
          <a href={"/projects"} className="text-2xl font-serif text-[#F3EEE1]">
            Projects
          </a>
        </div>
        <div>
          <a href={"/about"} className="text-2xl font-serif text-[#F3EEE1]">
            About
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
