import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
function FaqSection() {
  const questions = [
    {
      id: "1",
      question: "Where can I find my mentoring session validation form?",
      answer:
        "At the link section on this website and in the Whatsapp group description;",
    },
    {
      id: "2",
      question: "Where is the student's mentoring validation form?",
      answer: "It is on their Whatsapp group description.",
    },
    {
      id: "3",
      question:
        "What does it happen if my student forgets to complete their mentoring validation form?",
      answer:
        "We ask the student to fill out this form during the 5 (five) last minutes of each mentoring session (as you should fill out yours also, and submit it before you say goodbye, so you're sure both of you did it). If for some reason they forget, the student has 24h to complete the form after a mentoring session. If they do not, they won't receive the mentoring points for that session, even though it happened.",
    },
    {
      id: "4",
      question: "How long each mentoring session should last?",
      answer:
        "At least 40 minutes (if you have any problems, please contact your Leader)",
    },
    {
      id: "5",
      question: "Can I do two mentoring sessions on the same day?",
      answer:
        "No, the mentoring sessions are supposed to be one week apart. If you have a problem and can only mentor on the same week or day, contact your Leader about it.",
    },
    {
      id: "6",
      question:
        "I won't be able to complete the three (3) mandatory mentoring sessions this month. Can I do it the next month?",
      answer:
        "No, you have from the first to the final day of the mentoring cycle to complete 3 (three) mentoring sessions each month. Please get in touch with your Leader as soon as possible if you have any problems.",
    },
    {
      id: "7",
      question: "Which platform should I use for my mentoring sessions?",
      answer:
        "You can use any platform you want to. Just make sure your student also has access to it and if there's one that works better on their computer or smartphone.",
    },
    {
      id: "8",
      question:
        "How many points do my students get the monthly mentoring sessions?",
      answer:
        "The students gets 10 points per month if completed all mandatory mentorings. ",
    },
    {
      id: "9",
      question: "Can I invite people to join the mentoring session? ",
      answer:
        "Yes, make sure your student is comfortable about it and you trust the person you are inviting. You have to be there the whole time.",
    },
    {
      id: "10",
      question: "What can I do to help the student if I am going on vacation?",
      answer:
        "Let your leader know the dates as soon as possible. This way, they can find extra help for this period.",
    },
    {
      id: "11",
      question:
        "My student is struggling with their level, or it is too easy for them. What should I do?",
      answer:
        "Contact your leader as soon as possible. We will only be able to solve this problem at the beginning of the semester. ",
    },
    {
      id: "12",
      question: "My student is giving up the program, what should I do?",
      answer:
        "Please talk to your Leader about it. We will see together each case.",
    },
  ];
  return (
    <section className="bg-background flex flex-col justify-center mt-32">
      <div className="mx-80 mt-20">
        <h2 className="text-[25.8px] md:text-[55.8px] text-center mt-8 mb-10 text-blueText">
          Frequent Asked Questions
        </h2>
      </div>

      <div className="mx-80 mb-20 text-text">
        <Accordion type="multiple" className="text-text">
          {questions.map((question) => (
            <AccordionItem key={question.id} value={question.id}>
              <AccordionTrigger>{question.question}</AccordionTrigger>
              <AccordionContent>{question.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export default FaqSection;
