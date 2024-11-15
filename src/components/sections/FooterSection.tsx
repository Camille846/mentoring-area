import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {FaGithub, FaLinkedin} from "react-icons/fa";
import Image from "next/image";

function FooterSection() {
  return (
    <section className="flex justify-between px-72 pt-14 pb-14 bg-primary max-lg:px-10 max-lg:flex-col max-lg:items-center max-lg:justify-center">
        <div className="flex justify-center items-center">
          <a
            href="https://www.soulbilingue.com/"
            target="_blank"
            rel="noreferrer"
          >
            <Image src="/logo-branco.png" width={200} height={200} alt="logo" className="sm:w-40" />
          </a>
        </div>
      <div className="flex flex-col gap-5 justify-center items-center pt-10 pb-10 bg-primary">
        <h2 className="text-center">
          <span className="text-[12.8px] md:text-[20px] text-white text-center">
            In case you have issues, contact:
          </span>
        </h2>
        <div className="flex flex-col gap-1.5  text-center">
          <p className="text-[12px] md:text-[16px] text-secondary">
            <span className="font-semibold">Coordinator</span>
          </p>
          <p className="text-[12px] md:text-[16px] text-white hover:font-bold">
            <a href="mailto:mentoring@soulbilingue.com">
              mentoring@soulbilingue.com
            </a>
          </p>
        </div>
        <div className="flex flex-col gap-1.5  text-center">
          <p className="text-[12px] md:text-[16px] text-secondary">
            <span className="font-semibold"> Facilitator </span>
          </p>
          <p className="text-[12px] md:text-[16px] text-white hover:font-bold">
            <a href="mailto:adam.sousa@soulbilingue.com">
              adam.sousa@soulbilingue.com
            </a>
          </p>
        </div>
        <div className="flex flex-col items-center gap-2 mt-2">
          <p className="text-[12px] md:text-[16px] text-darkOrange text-center flex flex-col items-center">
            &copy; 2024 All rights reserved
            <a href="https://www.linkedin.com/in/camillegomes" target="_blank" rel="noreferrer"
               className="flex gap-2 text-darkOrange font-bold hover:text-white">
              <p className="text-[12px] md:text-[16px] font-semibold">Developed by Camille Gomes</p>
            </a>
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-10 justify-start pt-10 pb-10 bg-primary">
        <div className="flex flex-col gap-1.5 max-lg:text-center">
          <p className="text-[12px] md:text-[16px] text-secondary">
            <span className="font-semibold">Access</span>
          </p>
          <p className="text-[12px] md:text-[16px] text-white hover:text-orange">
            <a href="https://www.soulbilingue.com/quemsomos" target="_blank">
              About
            </a>
          </p>
          <p className="text-[12px] md:text-[16px] text-white hover:text-orange">
            <a href="https://www.soulbilingue.com/doe" target="_blank">
            Donate
            </a>
          </p>
          <p className="text-[12px] md:text-[16px] text-white hover:text-orange">
            <a href="https://www.soulbilingue.com/_files/ugd/e9f2c6_23c44046d14748a6b451666c915e65c8.pdf" target="_blank">
            Terms of Use
            </a>
          </p>
          <p className="text-[12px] md:text-[16px] text-white hover:text-orange">
            <a href="https://www.soulbilingue.com/_files/ugd/91eed0_3f8f9ba1e1464f6cb51a9821304638c5.pdf" target="_blank">
            Privacy Policy
            </a>
          </p>
          <p className="text-[12px] md:text-[16px] text-white hover:text-orange">
            <a href="https://www.soulbilingue.com/_files/ugd/e9f2c6_0e1ce78472114492a1df681abc0e2242.pdf"target="_blank">
            Articles of Association
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default FooterSection;
