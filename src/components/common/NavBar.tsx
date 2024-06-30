"use client";

import { useState, useRef } from "react";
import { RiCloseFill, RiMenuFill } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";

interface NavBarProps {
  heroRef: React.RefObject<HTMLDivElement>;
  aboutRef: React.RefObject<HTMLDivElement>;
  calendarRef: React.RefObject<HTMLDivElement>;
  faqRef: React.RefObject<HTMLDivElement>;
}

export const NavBar: React.FC<NavBarProps> = ({
  heroRef,
  aboutRef,
  calendarRef,
  faqRef,
}) => {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="md:sticky md:top-0  md:shadow-none z-20 border-b border-[#0005370d]">
      {/* DESKTOP */}
      <div className=" hidden lg:block animate-in fade-in zoom-in bg-background px-2 z-50">
        <div className="flex justify-between mx-[41px] items-center">
        <div className="max-w-24 max-h-24">
          <Image src="/logo.svg" width={65} height={65} alt="logo" />
        </div>
          <div className="flex items-center gap-[40px] select-none">
            <Link href="#hero" legacyBehavior className="scroll-mt-[80px] transition-all duration-300 ease-in-out">
              <a
                onClick={() =>
                  heroRef.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                    inline: "nearest",
                  })
                }
              >
                <p
                  className={`hover:text-orange hover:border-b hover:border-orange hover:font-bold font-medium px-4 py-2 cursor-pointer flex items-center gap-2 text-text transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none`}
                >
                  Home
                </p>
              </a>
            </Link>
            <Link href="#about" legacyBehavior>
            <div className="scroll-mt-[80px] transition-all duration-300 ease-in-out">
              <a
                onClick={() =>
                  heroRef.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                    inline: "nearest",
                    
                  })
                }
              >
                <p
                  className={`hover:text-orange hover:border-b hover:border-orange px-4 py-2 cursor-pointer flex items-center gap-2  hover:font-bold font-medium text-text transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none`}
                >
                  Links
                </p>
              </a>
            </div>
            </Link>
            <Link href="#calendar" legacyBehavior>
              <a
                onClick={() =>
                  heroRef.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                    inline: "nearest",
                  })
                }
              >
                <p
                  className={`hover:text-orange hover:border-b hover:border-orange px-4 py-2 cursor-pointer flex items-center gap-2 hover:font-bold font-medium text-text transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none`}
                >
                  Calendar
                </p>
              </a>
            </Link>
            <Link href="#faq" legacyBehavior>
              <a
                onClick={() =>
                  faqRef.current?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <p
                  className={`hover:text-orange hover:border-b hover:border-orange px-4 py-2 cursor-pointer flex items-center gap-2 hover:font-bold font-medium text-text transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none`}
                >
                  FAQ
                </p>
              </a>
            </Link>
          </div>
        </div>
      </div>
      {/* MOBILE */}
      <div
        className={`block lg:hidden shadow-sm  fixed top-0 w-full z-[999] bg-white py-4 animate-in fade-in zoom-in  ${
          menu ? " bg-primary py-2" : ""
        } `}
      >
        <div className="flex justify-between mx-[10px] ">
          <div className="flex gap-[50px] text-[16px] items-center select-none">
            <Image
              src="/logo.svg"
              width={100}
              height={100}
              alt="logo"
              className="w-[7rem]"
            />
          </div>
          <div className="flex justify-center items-center text-center gap-[40px]">
            {menu ? (
              <RiCloseFill
                className="cursor-pointer animate-in fade-in zoom-in text-primary text-[2rem]"
                onClick={toggleMenu}
              />
            ) : (
              <RiMenuFill
                className="cursor-pointer animate-in fade-in zoom-in text-primary text-[2rem]"
                onClick={toggleMenu}
              />
            )}
          </div>
        </div>
        {menu ? (
          <div className="my-8 select-none animate-in slide-in-from-right text-center max-lg:h-[100vh] max-md:p-0 max-lg:p-10 max-lg:bg-bg  max-lg:text-white max-lg:font-bold max-md:text-[1rem] max-lg:text-[2rem]">
            <div className="flex flex-col gap-8 mt-8 mx-4  max-md:border-t max-md:border-[#0005370d] max-md:pb-4">
              <p className="text-primary font-semibold cursor-pointer active:text-secondary max-md:pt-5 ">
                <span> Home</span>
              </p>
              <p className="text-primary font-semibold cursor-pointer active:text-secondary ">
                <span> Links </span>
              </p>
              <p className="text-primary font-semibold cursor-pointer active:text-secondary ">
                <span> Calendar </span>
              </p>
              <p className="text-primary font-semibold cursor-pointer active:text-secondary ">
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
};

export default NavBar;
