"use client";
import { useState } from "react";
import { BiCategory, BiChevronDown } from "react-icons/bi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import ManualContent from "./ManualContent";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "react-responsive";
import { FaDownload } from "react-icons/fa";

function ManualSection() {
  const summary_content = [
    {
      title: "Soul Bilingue",
      items: [
        "What is Soul Bilingue?",
        "How does the program work?",
        "Students' Profile",
        "What does the game offer?",
      ],
      link: "#soul",
    },
    {
      title: "Mentoring Area",
      items: [
        "What is mentoring?",
        "How does it work?",
        "Mentor's and Mentee's Role",
        "Rules",
        "Validation Form",
        "Mentors' Leaders",
      ],
      link: "#mentoring",
    },
    {
      title: "First Steps",
      items: [
        "Matching Process",
        "What platform should I use?",
        "First Mentoring",
      ],
      link: "#first-steps",
    },
    {
      title: "Tips for a good mentoring journey",
      items: ["Tips for a good mentoring journey"],
      link: "#tips",
    },
    {
      title: "Other important topics",
      items: [
        "I have English related questions!",
        "What if my student needs psychological support?",
        "I have suggestions for the program!",
        "Extra activities",
      ],
      link: "#other",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const isDesktop = useMediaQuery({ minWidth: 1024 }); // Adjust breakpoint as needed

  return (
    <div className="max-md:p-8 text-text flex flex-col justify-center items-center bg-bg bg-cover w-full h-auto bg-center bg-fixed bg-repeat-y mt-28 mb-10">
      {isDesktop ? (
        <article className="shadow-lg rounded-md bg-white text-text mx-60 mt-20 py-10 overflow-y-auto max-md:mx-2 max-md:py-0 max-md:w-[100%]">
          <div className="flex justify-between">
            <div className="max-md:pt-12">
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-white hover:bg-secondary text-primary border-2 border-primary font-bold py-2 px-4 ml-24 rounded transition-colors ease-in-out"
              >
                Summary{" "}
                <BiChevronDown
                  className={cn(
                    "inline-block ml-2 transition-transform text-lg",
                    {
                      "rotate-180": isOpen,
                    }
                  )}
                />
              </motion.button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 p-4 ml-24 mr-8"
                  >
                    <h2 className="text-xl font-bold mb-2">On this page</h2>
                    <ul className="list-disc pl-2">
                      {summary_content.map((contentArray, arrayIndex) => (
                        <div key={arrayIndex}>
                          {contentArray.items.map((content, index) => (
                            <li
                              key={index}
                              className="hover:text-orange transition-colors ease-in-out list-none"
                            >
                              <a
                                href={contentArray.link}
                                className="flex gap-2 items-center max-md:items-start"
                              >
                                <MdKeyboardArrowRight className="font-bold text-[1rem]" />
                                <span className="font-medium">{content}</span>
                              </a>
                            </li>
                          ))}
                        </div>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="max-md:pt-12 mr-24">
              <button
                className="hover:border-b-2 hover:border-orange hover:text-orange text-primary 2xl:text-lg font-bold py-4 px-4 max-2xl:p-5 flex gap-3 items-center"
                onClick={() => window.open("/manual.pdf")}
              >
                <FaDownload />
                Download PDF
              </button>
            </div>
          </div>
          <ManualContent />
        </article>
      ) : (
        <article className="flex justify-center items-center h-[60vh] w-full px-20 bg-yellow-card bg-cover bg-center max-2xl:w-[80%]">
          <button
            className="bg-primary hover:bg-orange text-white font-bold py-2 px-4 rounded"
            onClick={() => window.open("/manual.pdf")}
          >
            Download PDF
          </button>
        </article>
      )}
    </div>
  );
}

export default ManualSection;
