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
      <div className="m-40 grid grid-cols-4 gap-5 justify-center items-center">
      <Card className="hover:bg-background cursor-pointer">
          <CardHeader>
            <CardTitle>Manual</CardTitle>
            <CardDescription>This comprehensive manual serves as a guide for both new and experienced mentors. It covers a wide range of topics to understand your role as a mentor, offering practical tips and insights to facilitate a successful mentorship experience.</CardDescription>
          </CardHeader>
        </Card>
        <Card className="hover:bg-background cursor-pointer">
          <CardHeader>
            <CardTitle>Matching Platform</CardTitle>
            <CardDescription>Our matching platform connects you with our Soul Students. While you can select up to two students, we encourage you to initially choose one to ensure everyone has a chance to mentor. You can select your second student after 2 days. </CardDescription>
          </CardHeader>
        </Card>
        <Card className="hover:bg-background cursor-pointer">
        <CardHeader>
            <CardTitle>Support Material</CardTitle>
            <CardDescription>Collection of support materials based on different English levels. Access a shared drive with collaborative spreadsheets, interactive platforms designed for engaging mentorship sessions, and the classes schedule for inspiration and guidance. </CardDescription>
          </CardHeader>
        </Card>
        <Card className="hover:bg-background cursor-pointer">
        <CardHeader>
            <CardTitle>Mentoring Validation Form</CardTitle>
            <CardDescription>The Mentoring Validation Form is the document that proves to us that you and your student did the mentoring. We have around 1000 mentorings per month, so this system was the best one we could find to validate all mentoring sessions in a reasonable time.</CardDescription>
          </CardHeader>
        </Card>
      </div>
    </section>
  );
}

export default AboutSection;