import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
function Leaders() {
  return (
    <section className="flex flex-col justify-center items-center px-8 pt-14 pb-14 bg-white">
      <div className="mx-80 mt-20">
        <h2 className="text-[25.8px] md:text-[55.8px] text-center mt-8 mb-10">
          Leaders
        </h2>
      </div>
      <div className="flex flex-col gap-1.5 justify-center items-center">
        <Avatar className="w-32 h-32">
          <AvatarImage src="https://static.wixstatic.com/media/e9f2c6_e34c7db2b4364d01965b77192aba5f8f~mv2.jpg/v1/crop/x_100,y_0,w_600,h_600/fill/w_225,h_225,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/1698433569472_edited.jpg" />
          <AvatarFallback>Facilitator</AvatarFallback>
        </Avatar>
        <p className="text-[14px] md:text-[18px] text-secondary">
          <span className="font-semibold">Coordinator</span>
        </p>
      </div>
    </section>
  );
}

export default Leaders;
