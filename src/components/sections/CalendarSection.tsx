"use client";
import React from "react";
import { Separator } from "@/components/ui/separator";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { motion } from "framer-motion";
import CarouselItemContent from "./CarouselItemContent";

export interface Event {
  id: string;
  date: string;
  event: string;
}

function CalendarSection() {
  const event_data = [
    [
      {
        id: "1",
        date: "July 1 - July 19, 2024",
        event: "Training",
      },
      {
        id: "2",
        date: "July 17, 6 PM BRT",
        event: "Soul Talk hosted by mentor Marcos Trazzini",
      },
      {
        id: "3",
        date: "July 24, 7 PM BRT",
        event: "Welcome Volunteers",
      },
      {
        id: "4",
        date: "July 26 - August 9, 2024",
        event: "Matches",
      },
      {
        id: "5",
        date: "July 30, 2024",
        event: "Students' 1st English Class",
      },
    ],
    [
      {
        id: "6",
        date: "August 1, 2024",
        event: "Mentorship Program begins",
      },
      {
        id: "7",
        date: "August 9, 2024",
        event: "Deadline for matches",
      },
      {
        id: "8",
        date: "August 8, 2024",
        event: "1st Fundraising Challenge due September 6th",
      },
      {
        id: "9",
        date: "August 19, 2024",
        event: "1st homework due August 26th",
      },
    ],
    [
      {
        id: "20",
        date: "September 10, 2024",
        event: "1st English Test",
      },
      {
        id: "11",
        date: "September 16, 2024",
        event: "2nd homework due September 23rd",
      },
      {
        id: "12",
        date: "September 30, 2024",
        event: "Feedback Survey due October 4th",
      },
    ],
    [
      {
        id: "13",
        date: "October 14, 2024",
        event: "3rd homework due October 21st",
      },
      {
        id: "14",
        date: "October 17, 2024",
        event: "2nd Fundraising Challenge due November 15th",
      },
      {
        id: "15",
        date: "October 22, 2024",
        event: "2nd English Test",
      },
    ],
    [
      {
        id: "16",
        date: "November 11, 2024",
        event: "4th homework due November 18th",
      },
      {
        id: "17",
        date: "November 15, 2024",
        event: "Deadline for 2nd Fundraising Challenge",
        
      },
      {
        id: "18",
        date: "November 19, 2024",
        event: "Student Application for 2025 open",
      },
    ],
    [
      {
        id: "19",
        date: "Through December",
        event: "Optional Mentorship Program",
      },
      {
        id: "20",
        date: "December 3, 2024",
        event: "3rd English Test",
      },
      {
        id: "21",
        date: "December 11, 2024",
        event: "Feedback Survey due December 17th",
      },
      {
        id: "22",
        date: "December 19, 2024",
        event: "Final Day: Scholarship Winners Announcement",
      },
    ],
  ];

  return (
    <section className="flex flex-col justify-center items-center mt-20 mb-20  w-auto" id="calendar">
      <h2 className="flex flex-col items-center justify-center text-[38px] md:text-[55.8px] text-center mt-8 mb-10 text-blueText">
        Calendar
        <span className="w-full h-2 b-secondary bg-secondary ml-2 max-md:ml-1"></span>
      </h2>

      {/* <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSzOIPbjkbctT7D7J9Lt4k6cSFnp5qU85rn5T8g2x3PpOSEStK12voyhpEoD6Ua2HZPcE2wbzuIxLvM/pubhtml?widget=true&amp;headers=false"  width="60%" height="800" className="m-auto flex items-center"></iframe> */}

      <Carousel className="w-[50%]">
        <CarouselContent >
          <CarouselItem className="flex flex-col justify-center items-center">
            <CarouselItemContent data={event_data[0]}/>
          </CarouselItem>
          <CarouselItem className="p-0 flex flex-col justify-center items-center">
            <CarouselItemContent data={event_data[1]} />
          </CarouselItem>
          <CarouselItem className="p-0 flex flex-col justify-center items-center">
            <CarouselItemContent data={event_data[2]} />
          </CarouselItem>
          <CarouselItem className="p-0 flex flex-col justify-center items-center">
            <CarouselItemContent data={event_data[3]} />
          </CarouselItem>
          <CarouselItem className="p-0 flex flex-col justify-center items-center">
            <CarouselItemContent data={event_data[4]} />
          </CarouselItem>
          <CarouselItem className="p-0 flex flex-col justify-center items-center">
            <CarouselItemContent data={event_data[5]} />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="bg-orange text-primary m-0 p-0" />
        <CarouselNext className="bg-orange text-primary m-0 p-0" />
      </Carousel>
    </section>
  );
}

export default CalendarSection;
