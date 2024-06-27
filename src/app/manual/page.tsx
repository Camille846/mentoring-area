"use client";
import FooterSection from "@/components/sections/FooterSection";
import ManualSection from "@/components/sections/ManualSection";
import Link from "next/link";
import Image from "next/image";
import { IoIosArrowBack } from "react-icons/io";

function ManualPage({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-b border-[#0005370d] flex flex-col gap-10 justify-between max-md:gap-2 max-md:overflow-y-hidden">
      <div className="block animate-in fade-in zoom-in bg-white p-1 fixed w-full z-50 border-b border-[#0005370d]">
        <div className="flex justify-between mx-[41px] items-center max-md:mx-2">
          <div className="flex items-center gap-[40px] select-none max-md:gap-2">
            <Link href="/" legacyBehavior>
              <a>
                <button
                  className={`hover:text-orange hover:border-b hover:border-orange hover:font-bold font-medium px-4 py-2 cursor-pointer flex items-center gap-2 text-text transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none text-lg max-md:text-base`}
                >
                  <IoIosArrowBack />
                  Back to Home
                </button>
              </a>
            </Link>
          </div>
          <div className="hidden lg:block">
            <Image src="/logo.svg" width={100} height={100} alt="logo" />
          </div>
        </div>
      </div>
      <div>
        <ManualSection />
      </div>
      {/* in mobile view, the footer section is not visible */}
      <div>
        <FooterSection />
      </div>
    </div>
  );
}

export default ManualPage;
