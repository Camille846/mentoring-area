import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function AboutSection() {
  return (
    <section className="pt-10 pb-32 px-8 bg-background">
      <div className="m-40 grid grid-cols-4 gap-5 justify-center items-center max-md:grid-cols-1 max-md:m-0 max-2xl:grid-cols-2 max-2xl:m-0">
        <Card className="hover:bg-background cursor-pointer">
          <CardHeader>
            <CardTitle>Manual</CardTitle>
            <CardDescription>
              This comprehensive manual serves as a guide for both new and
              experienced mentors. It covers a wide range of topics to
              understand your role as a mentor, offering practical tips and
              insights to facilitate a successful mentorship experience.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="hover:bg-background cursor-pointer">
          <CardHeader>
            <CardTitle>Support Material</CardTitle>
            <CardDescription>
              Collection of support materials based on different English levels.
              Access a shared drive with collaborative spreadsheets, interactive
              platforms designed for engaging mentorship sessions, and the
              classes schedule for guidance.{" "}
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="hover:bg-background cursor-pointer">
          <CardHeader>
            <CardTitle>Mentoring Validation Form</CardTitle>
            <CardDescription>
              The Mentoring Validation Form is the document that proves to us
              that you and your student did the mentoring. We have around 1000
              mentorings per month, so in this way, we can validate all
              mentoring sessions in a reasonable time.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="hover:bg-background cursor-pointer">
          <CardHeader>
            <CardTitle>Matching Platform</CardTitle>
            <CardDescription>
              Our matching platform connects you with our Soul Students. While
              you can select up to two students, we encourage you to initially
              choose one to ensure everyone has a chance to mentor. You can
              select your second student after 2 days.{" "}
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
        <div className="m-40 flex flex-col">
          <h2 className="text-[25.8px] md:text-[55.8px] text-center mt-8 mb-10">
            Soul Smart
          </h2>
          <p className="text-center text-lg max-md:text-base">
            Soul Smart is the material that the students will use to learn
            English. It is used during classes and is divided into 5 levels:
            Beginner, Elementary, Intermediate, Upper and Advanced. You can
            use as a reference to help your student during the mentoring
            sessions.
          </p>
          <div className="mt-10 grid grid-cols-5 gap-5 justify-center items-center text-center max-md:grid-cols-1 max-md:m-0 max-2xl:grid-cols-2 max-2xl:m-0">
        <Card className="hover:bg-background cursor-pointer">
          <CardHeader>
            <CardTitle>Beginner</CardTitle>
          </CardHeader>
        </Card>
        <Card className="hover:bg-background cursor-pointer">
          <CardHeader>
            <CardTitle>Elementary</CardTitle>
          </CardHeader>
        </Card>
        <Card className="hover:bg-background cursor-pointer">
          <CardHeader>
            <CardTitle>Intermediate</CardTitle>
          </CardHeader>
        </Card>
        <Card className="hover:bg-background cursor-pointer">
          <CardHeader>
            <CardTitle>Upper</CardTitle>
          </CardHeader>
        </Card>
        <Card className="hover:bg-background cursor-pointer">
          <CardHeader>
            <CardTitle>Advanced</CardTitle>
          </CardHeader>
        </Card>
      </div>
        </div>
    </section>
  );
}

export default AboutSection;
