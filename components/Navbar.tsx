import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex-center fixed top-0 z-50 w-full border-h-2 border-black-200 py-7 text-white backdrop-blur bg-black-200 bg-opacity-80">
      <div className="flex-between mx-auto w-full max-w-screen-2xl px-6 xs:px-8 sm:px-16">
        <Link href="/">
          <h1 className="text-xl">
            <span className="text-gradient blue-purple !font-bold">
              Projects
            </span>
            <span className="text-xs text-white"> by Developer's Den</span>
          </h1>
        </Link>
        <Link href={"/studio"}>
          <h1 className="body-text text-gradient blue-purple !font-bold">
            Admin
          </h1>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
