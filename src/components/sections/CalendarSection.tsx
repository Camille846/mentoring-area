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
    <section className="flex flex-col justify-center items-center mt-20 mb-20 px-8">
      <h2 className="text-[25.8px] md:text-[55.8px] text-center mt-8 mb-10 text-blueText">
        Calendar
      </h2>

      {/* <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSzOIPbjkbctT7D7J9Lt4k6cSFnp5qU85rn5T8g2x3PpOSEStK12voyhpEoD6Ua2HZPcE2wbzuIxLvM/pubhtml?widget=true&amp;headers=false"  width="100%" height="800" frameBorder="0" scrolling="no" className="m-auto"></iframe> */}


      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <section className="p-10 max-md:p-0">
              {event_data.map((event, index) => (
                <div key={index}>
                  <div className="text-[18px] flex items-center gap-3 max-md:text-[13px] max-md:flex-col">
                    <div className="text-secondary bg-primary w-16 h-16 rounded-full p-2 flex items-center justify-center max-md:w-10 max-md:h-10">
                      <CalendarDays />
                    </div>
                    <div className="text-text flex gap-2 max-md:text-[13px] max-md:flex-col">
                      {event.date} {event && <ChevronRight className="max-md:hidden"/>}{" "}
                    </div>
                    <div className="text-blueText font-bold max-md:text-[13px] ">{event.event}</div>
                  </div>
                  {!event.is_last && (
                    <div>
                      <Separator
                        orientation="vertical"
                        className="h-[1.5rem] my-1 ml-8 bg-background max-md:bg-white"
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
        <CarouselPrevious className="bg-orange text-primary"/>
        <CarouselNext className="bg-orange text-primary" />
      </Carousel>
    </section>
  );
}

export default CalendarSection;
