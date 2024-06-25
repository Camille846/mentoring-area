import React from "react";
import { Separator } from "@radix-ui/react-separator";
import { IoIosArrowForward } from "react-icons/io";
import { FaCalendarDays } from "react-icons/fa6";
import { Event } from "./CalendarSection";

function CarouselItemContent({ data }: { data: Event[] }) {
  return (
    <section className="max-md:p-8 px-4 flex flex-col gap-6 w-auto max-md:text-center">
      {data.map((event, index) => (
        <div key={index}>
          <div className="text-[18px] flex items-center gap-3 max-md:text-[13px] max-xl:text-[13px] max-md:flex-col">
            <div className="text-secondary text-xl bg-primary w-16 h-16 rounded-full flex items-center justify-center max-md:w-10 max-md:h-10">
            <FaCalendarDays />
            </div>
            <div className="text-text flex gap-2 max-md:text-[13px] max-xl:text-[13px] max-md:flex-col font-medium">
              {event.date} {event && <IoIosArrowForward className="max-md:hidden" />}{" "}
            </div>
            <div className="text-blueText font-bold max-md:text-[13px] max-md:text-center">
              {event.event}
            </div>
          </div>
          {!event && (
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
  );
}

export default CarouselItemContent;
