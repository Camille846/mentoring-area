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
        date: "Jul 1 - Jul 19, 2024",
        event: "Training",
      },
      {
        id: "2",
        date: "Jul 17, 2024",
        event: "TalkSoul hosted by mentor Marcos",
      },
      {
        id: "3",
        date: "Jul 24, 7 PM BRT",
        event: "Welcome Volunteers",
      },
      {
        id: "4",
        date: "Jul 26 - Aug 9, 2024",
        event: "Matches",
      },
      {
        id: "5",
        date: "Jul 30, 2024",
        event: "Students' 1st English Class",
      },
    ],
    [
      {
        id: "6",
        date: "Aug 1, 2024",
        event: "Mentorship Program begins",
      },
      {
        id: "7",
        date: "Aug 7, 2024",
        event: "TalkSoul hosted by teacher Raul",
      },
      {
        id: "8",
        date: "Aug 9, 2024",
        event: "Deadline for matches",
      },
      {
        id: "8",
        date: "Aug 8, 2024",
        event: "1st Fundraising Challenge starts",
      },
      {
        id: "9",
        date: "Aug 19, 2024",
        event: "1st homework due Aug 26th",
      },
      {
        id: "10",
        date: "Aug 26, 2024",
        event: "TalkSoul hosted by mentor Gerison",
      },
    ],
    [
      {
        id: "20",
        date: "Sep 6, 2024",
        event: "1st Fundraising Challenge due",
      },
      {
        id: "20",
        date: "Sep 10, 2024",
        event: "1st English Test",
      },
      {
        id: "11",
        date: "Sep 16, 2024",
        event: "2nd homework due Sep 23rd",
      },
      {
        id: "12",
        date: "Sep 30, 2024",
        event: "Feedback Survey due Oct 4th",
      },
    ],
    [
      {
        id: "13",
        date: "Oct 14, 2024",
        event: "3rd homework due Oct 21st",
      },
      {
        id: "14",
        date: "Oct 17, 2024",
        event: "2nd Fundraising Challenge starts",
      },
      {
        id: "15",
        date: "Oct 22, 2024",
        event: "2nd English Test",
      },
    ],
    [
      {
        id: "16",
        date: "Nov 1, 2024",
        event: "Interest Form for 2025 open",
      },
      {
        id: "16",
        date: "Nov 11, 2024",
        event: "4th homework due Nov 18th",
      },
      {
        id: "17",
        date: "Nov 15, 2024",
        event: "2nd Fundraising Challenge due",
        
      },
      {
        id: "18",
        date: "Nov 18, 2024",
        // event: "Mentors and teachers application for 2025 open",
        event: "2025 Application open for mentors and teachers",
      },
      {
        id: "19",
        date: "Nov 19, 2024",
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
        date: "Dec 3, 2024",
        event: "3rd English Test",
      },
      {
        id: "21",
        date: "Dec 11, 2024",
        event: "Feedback Survey due Dec 17th",
      },
      {
        id: "22",
        date: "Dec 19, 2024",
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
