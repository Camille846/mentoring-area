import Image from "next/image";
import React from "react";

function HeroSection() {
  return (
    <section
      className="flex flex-col justify-center items-center bg-hero-image bg-cover w-full h-[100vh] bg-center"
      id="hero"
    >
      <div>
        <Image src="/logo.png" width={200} height={200} alt="logo" />
      </div>
      <h1 className="text-[35.8px] md:text-[6rem] text-center mt-8 text-primary font-bold">
        Mentoring Area
      </h1>
      <p className="font-semibold text-center my-4 text-text max-md:text-[13px] max-md:p-3">
        On this website you can find everything you need for your mentoring
        sessions.
      </p>
      <a href="#about">
        <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold mt-4 hover:bg-orange transition-colors duration-300 max-md:mt-2">
          Start Game
        </button>
      </a>
    </section>
  );
}

export default HeroSection;
