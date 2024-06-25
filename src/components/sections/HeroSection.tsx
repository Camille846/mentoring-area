import Image from 'next/image';
import React from 'react';

function HeroSection() {
  return (
    <section className="flex flex-col justify-center items-center bg-hero-image bg-cover w-full h-[100vh] bg-center">
      <div>
        <Image src="/logo.png" width={180} height={180} alt="logo" />
      </div>
      <h1 className="text-[35.8px] md:text-[75.8px] text-center mt-8 text-primary font-bold">Mentoring Area</h1>
      <p className="font-semibold text-center my-4 text-text max-md:text-[13px]">On this website you can find everything you need for your mentoring sessions.</p>
    </section>
  );
}

export default HeroSection