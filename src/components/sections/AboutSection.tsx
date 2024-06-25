"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { PiBookOpenTextBold } from "react-icons/pi";
import { LiaHandsHelpingSolid } from "react-icons/lia";
import { HiOutlineDocumentArrowUp } from "react-icons/hi2";
import { FaPeopleArrows } from "react-icons/fa";


function AboutSection() {
  const router = useRouter();
  const card_content = [
    {
      icon: "book-open-text",
      title: "Manual",
      description:
        "This comprehensive manual serves as a guide for both new and experienced mentors. It covers a wide range of topics to understand your role as a mentor, offering practical tips and insights to facilitate a successful mentorship experience.",
    },
    {
      icon: "support",
      title: "Support Material",
      description:
        "Collection of support materials based on different English levels. Access a shared drive with collaborative spreadsheets, interactive platforms designed for engaging mentorship sessions, and the classes schedule for guidance.",
    },
    {
      icon: "form",
      title: "Mentoring Validation Form",
      description:
        "The Mentoring Validation Form serves as proof that you and your mentee completed your mentoring session. You have to fill it out in the last 5 minutes of each session and submit it to us. Don't forget to ask your student to do the same!", 

    },
    {
      icon: "link",
      title: "Matching Platform",
      description:
        "Our matching platform connects you with our Soul Students. While you can select up to two students, we encourage you to initially choose one to ensure everyone has a chance to mentor. You can select your second student after 2 days.",
    },
  ];

  return (
    <section className="pt-10 pb-32 bg-bg bg-cover w-full h-full bg-center py-20 px-10">
      <h2 className="flex flex-col items-center justify-center text-[38px] md:text-[55.8px] text-center mt-16 mb-28 text-blueText max-md:mt-5 max-md:mb-10">
        Links
        <span className="w-36 h-2 b-secondary bg-secondary ml-2 max-md:w-20 max-md:h-2 max-md:ml-1"></span>
      </h2>

      <div className="mx-40 mb-20 grid grid-cols-4 gap-5 justify-center items-center max-md:grid-cols-1 max-md:m-0 max-2xl:grid-cols-2 max-2xl:m-0">
        {card_content.map((content, index) => (
          <motion.div
            whileHover={{
              scale: 1.05,
              transition: {
                duration: 0.2,
              },
            }}
            key={index}
          >
            <Card
              key={index}
              // onClick={() => router.push(`/about/${content.title.toLowerCase()}`)}
              className="hover:bg-darkOrange text-white bg-primary cursor-pointer transition-colors	ease-in-out"
            >
              <CardHeader >
                {content.icon === "book-open-text" && ( <PiBookOpenTextBold  className="w-10 h-10 mb-2" /> )}
                {content.icon === "support" && ( <LiaHandsHelpingSolid className="w-10 h-10 mb-2" /> )}
                {content.icon === "form" && ( <HiOutlineDocumentArrowUp className="w-10 h-10 mb-2" /> )}
                {content.icon === "link" && ( <FaPeopleArrows className="w-10 h-10 mb-2" /> )}
                <CardTitle>{content.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{content.description}</CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      <div className="flex flex-col max-md:mx-0 px-32 max-md:p-0">
        <h2 className="flex flex-col items-center justify-center text-[38px] md:text-[55.8px] text-center mt-8 mb-10 text-blueText">
          Soul Smart
          <span className="w-36 h-2 b-secondary bg-secondary ml-2 max-md:w-28 max-md:h-2 max-md:ml-1"></span>
        </h2>
        <p className="text-center text-lg max-md:text-base text-text max-md:pb-10 mb-8">
          Soul Smart is the material that the students will use to learn
          English. It is used during classes and is divided into 5 levels:
          Beginner, Elementary, Intermediate, Upper and Advanced. You can use as
          a reference to help your student during the mentoring sessions.
        </p>
        <div className="mt-10 grid grid-cols-5 gap-5 justify-center items-center text-center max-md:grid-cols-1 max-md:m-0 max-2xl:grid-cols-2 max-2xl:m-0">
          <motion.div
            whileHover={{
              scale: 1.05,
              transition: {
                duration: 0.2,
              },
            }}
          >
            <Card className="hover:bg-secondary text-white bg-primary cursor-pointer transition-colors	ease-in-out max-md:text-[13px]">
              <CardHeader>
                <CardTitle className="max-md:text-[20px]">Beginner</CardTitle>
              </CardHeader>
            </Card>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.05,
              transition: {
                duration: 0.2,
              },
            }}
          >
            <Card className="hover:bg-secondary text-white bg-primary cursor-pointer transition-colors	ease-in-out">
              <CardHeader>
                <CardTitle className="max-md:text-[20px]">Elementary</CardTitle>
              </CardHeader>
            </Card>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.05,
              transition: {
                duration: 0.2,
              },
            }}
          >
            <Card className="hover:bg-secondary text-white bg-primary cursor-pointer transition-colors	ease-in-out">
              <CardHeader>
                <CardTitle className="max-md:text-[20px]">
                  Intermediate
                </CardTitle>
              </CardHeader>
            </Card>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.05,
              transition: {
                duration: 0.2,
              },
            }}
          >
            <Card className="hover:bg-secondary text-white bg-primary cursor-pointer transition-colors	ease-in-out">
              <CardHeader>
                <CardTitle className="max-md:text-[20px]">Upper</CardTitle>
              </CardHeader>
            </Card>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.05,
              transition: {
                duration: 0.2,
              },
            }}
          >
            <Card className="hover:bg-secondary text-white bg-primary cursor-pointer transition-colors	ease-in-out">
              <CardHeader>
                <CardTitle className="max-md:text-[20px]">Advanced</CardTitle>
              </CardHeader>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
