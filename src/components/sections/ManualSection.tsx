"use client";
import { useState, useRef, MouseEvent } from "react";
import { BiChevronDown } from "react-icons/bi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
import ManualContent from "./ManualContent";
import { cn } from "@/lib/utils";
import { FaDownload } from "react-icons/fa";

function ManualSection() {
  const summaryContent = [
    {
      title: "What is Soul Bilingue?",
      link: "#soul",
    },
    {
      title: "How does the program work?",
      link: "#how",
    },
    {
      title: "Students' Profile",
      link: "#students",
    },
    {
      title: "What does the game offer?",
      link: "#game",
    },
    {
      title: "What is mentoring?",
      link: "#mentoring",
    },
    {
      title: "How does it work?",
      link: "#how-mentoring",
    },
    {
      title: "Mentor's and Mentee's Role",
      link: "#roles",
    },
    {
      title: "Rules",
      link: "#rules",
    },
    {
      title: "Validation Form",
      link: "#validation",
    },
    {
      title: "Mentors' Leaders",
      link: "#leaders",
    },
    {
      title: "Matching Process",
      link: "#matching",
    },
    {
      title: "What platform should I use?",
      link: "#platform",
    },
    {
      title: "First Mentoring",
      link: "#first",
    },
    {
      title: "Tips for a good mentoring journey",
      link: "#tips",
    },
    {
      title: "I have English related questions!",
      link: "#english",
    },
    {
      title: "What if my student needs psychological support?",
      link: "#support",
    },
    {
      title: "Soul Clubs",
      link: "#clubs",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const manualContentRef = useRef<HTMLDivElement>(null);

  function handleSummaryClick(event:MouseEvent<HTMLAnchorElement>) {
    event.preventDefault(); 
    const link = event.currentTarget;
    const targetId = link.getAttribute('href');

    if (targetId && typeof targetId === 'string') {
      if (manualContentRef.current instanceof HTMLDivElement) {
        const targetElement = manualContentRef.current.querySelector(targetId); 

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "center"
          });
        }
      }
    } 
  }

  return (
    <div className="md:p-8 text-text flex flex-col justify-center items-center bg-bg bg-cover w-full h-auto bg-center bg-fixed bg-repeat-y lg:mt-28 mb-10">
        <article className="shadow-lg rounded-md bg-white text-text mx-60 mt-20 py-10 overflow-y-auto max-md:mx-2 max-md:py-0 max-md:w-[100%] ">
          <div className="flex flex-col justify-start lg:flex-row lg:justify-between">
            <div>
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-white hover:bg-secondary text-primary border-2 border-primary font-bold py-2 px-4 ml-4 mt-10 lg:mt-0 lg:ml-24 rounded transition-colors ease-in-out"
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
                {isOpen || ( 
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 p-4 lg:ml-24 lg:mr-8"
                  >
                    <h2 className="text-xl font-bold mb-2">On this page</h2>
                    <ul className="pl-2">
                      {summaryContent.map((content) => (
                        <div key={content.title} className="flex items-center">
                          <MdKeyboardArrowRight className="text-lg ml-2" />
                          <li className="hover:text-orange font-medium text-primary">
                            <a
                              onClick={handleSummaryClick}
                              href={content.link}
                            >
                              {content.title}
                            </a>
                          </li>
                        </div>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="max-md:pt-12 lg:mr-24">
              <button
                className="lg:hover:border-b-2 border-b-2 border-white lg:hover:border-orange hover:text-orange text-primary 2xl:text-lg font-bold py-4 px-4 max-2xl:p-5 flex gap-3 items-center"
                onClick={() => window.open("/manual.pdf")}
              >
                <FaDownload />
                Download PDF
              </button>
            </div>
          </div>
          <div ref={manualContentRef}>
            <ManualContent />
          </div>
        </article>
    </div>
  );
}

export default ManualSection;
