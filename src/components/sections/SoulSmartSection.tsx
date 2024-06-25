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


function SoulSmartSection() {
 

  return (
    <section className="pt-10 pb-32 bg-bg bg-cover w-full h-full bg-center py-20 px-10">
     
      <div className="flex flex-col max-md:mx-0">
        <h2 className="flex flex-col items-center justify-center text-[25.8px] md:text-[55.8px] text-center mt-8 mb-10 text-blueText">
          Soul Smart
          <span className="w-36 h-2 b-secondary bg-secondary ml-2 max-md:w-28 max-md:h-2 max-md:ml-1"></span>
        </h2>
        <p className="text-center text-lg max-md:text-base text-text max-md:pb-10">
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
            <Card className="hover:bg-secondary text-white bg-lightBlue cursor-pointer transition-colors	ease-in-out max-md:text-[13px]">
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
            <Card className="hover:bg-secondary text-white bg-lightBlue cursor-pointer transition-colors	ease-in-out">
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
            <Card className="hover:bg-secondary text-white bg-lightBlue cursor-pointer transition-colors	ease-in-out">
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
            <Card className="hover:bg-secondary text-white bg-lightBlue cursor-pointer transition-colors	ease-in-out">
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
            <Card className="hover:bg-secondary text-white bg-lightBlue cursor-pointer transition-colors	ease-in-out">
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

export default SoulSmartSection;
