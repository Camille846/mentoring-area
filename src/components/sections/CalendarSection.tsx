import React from "react";
import { Separator } from "@/components/ui/separator";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ChevronRight, CalendarDays, CalendarHeart } from "lucide-react";
import Image from "next/image";

function CalendarSection() {
  const event_data = [
    {
      date: "July 1st to July 19th, 2024",
      event: "Training",
      is_last: false,
    },
    {
      date: "July 23, 2024",
      event: "Welcome Volunteers",
      is_last: false,
    },
    {
      date: "July 26th to August 9th, 2024",
      event: "Matches",
      is_last: true,
    },
  ];

  return (
    <section className="flex flex-col justify-center items-center mt-32 mb-32 px-8">
      <h2 className="text-[25.8px] md:text-[55.8px] text-center mt-8 mb-10">
        Calendar
      </h2>

      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <section className="p-10">
              {event_data.map((event, index) => (
                <div key={index}>
                  <div className="text-[18px] flex items-center gap-3">
                    <div className="text-[#706D79] bg-background w-16 h-16 rounded-full p-2 flex items-center justify-center">
                      <CalendarDays />
                    </div>
                    <div className="text-[#706D79] flex gap-2">
                      {event.date} {event && <ChevronRight />}{" "}
                    </div>
                    <div className="text-[#333] font-bold ">{event.event}</div>
                  </div>
                  {!event.is_last && (
                    <div>
                      <Separator
                        orientation="vertical"
                        className="h-[1.5rem] my-1 ml-8 bg-background"
                      />
                    </div>
                  )}
                </div>
              ))}
            </section>
          </CarouselItem>
          <CarouselItem>...</CarouselItem>
          <CarouselItem>...</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}

export default CalendarSection;
