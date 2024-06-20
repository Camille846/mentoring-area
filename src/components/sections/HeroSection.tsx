import React from 'react'

function HeroSection() {
  return (
    // add background image to this section
    <section className="flex flex-col justify-center items-center bg-hero-pattern bg-cover w-full h-[60vh] bg-center">
      <h1 className="text-[35.8px] md:text-[75.8px] text-center mt-8 text-secondary font-bold">Mentoring Area</h1>
      <p className="font-semibold text-center my-4 text-background">On this website you can find everything you need for your mentoring sessions.</p>
    </section>
  )
}

export default HeroSection