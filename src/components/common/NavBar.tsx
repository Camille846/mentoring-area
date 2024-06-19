"use client";

import { useState } from "react";
import { X } from "lucide-react";
import Link from "next/link";

function NavBar() {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="md:sticky md:top-0   md:shadow-none z-20 border-b border-[#0005370d]">
      {/* DESKTOP */}
      <div className=" hidden lg:block animate-in fade-in zoom-in bg-white p-4 b">
        <div className="flex justify-between mx-[41px] items-center">
          <div>
            <img src="/logo.png" width={100} height={100} alt="logo" />
          </div>
          <div className="flex items-center gap-[40px] select-none">
            <p
              className={`hover:text-secondary hover:border-b hover:border-secondary px-4 py-2 cursor-pointer flex items-center gap-2  font-[500] text-grey transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none`}
            >
              Home
            </p>
            <p
              className={`hover:text-secondary hover:border-b hover:border-secondary px-4 py-2 cursor-pointer flex items-center gap-2  font-[500] text-grey transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none`}
            >
              Links
            </p>
            <p
              className={`hover:text-secondary hover:border-b hover:border-secondary px-4 py-2 cursor-pointer flex items-center gap-2  font-[500] text-grey transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none`}
            >
              Calendar
            </p>
            <p
              className={`hover:text-secondary hover:border-b hover:border-secondary px-4 py-2 cursor-pointer flex items-center gap-2  font-[500] text-grey transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none`}
            >
              FAQ
            </p>
          </div>
        </div>
      </div>
      {/* MOBILE */}
      <div
        className={` block lg:hidden shadow-sm  fixed top-0 w-full z-[999] bg-white py-4 animate-in fade-in zoom-in  ${
          menu ? " bg-primary py-2" : ""
        } `}
      >
        <div className="flex justify-between mx-[10px]">
          <div className="flex gap-[50px] text-[16px] items-center select-none">
            <img
              src="/logo.png"
              width={100}
              height={100}
              alt="logo"
              className="w-[7rem]"
            />
          </div>
          <div className="flex items-center gap-[40px]">
            {menu ? (
              <X
                className="cursor-pointer animate-in fade-in zoom-in text-black"
                onClick={toggleMenu}
              />
            ) : (
              <img
                src="/menu.svg"
                alt="logo"
                className="cursor-pointer animate-in fade-in zoom-in"
                onClick={toggleMenu}
              />
            )}
          </div>
        </div>
        {menu ? (
          <div className="my-8 select-none animate-in slide-in-from-right">
            <div className="flex flex-col gap-8 mt-8 mx-4">
              <p className="text-black cursor-pointer active:text-secondary">
                <span> Home</span>
              </p>
              <p className="text-black cursor-pointer active:text-secondary">
                <span> Links </span>
              </p>
              <p className="text-black cursor-pointer active:text-secondary">
                <span> Calendar </span>
              </p>
              <p className="text-black cursor-pointer active:text-secondary">
                <span> FAQ</span>
              </p>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
