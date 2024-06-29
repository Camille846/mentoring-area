"use client";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BsPatchQuestionFill } from "react-icons/bs";
import { IoFootsteps } from "react-icons/io5";
import { FaCirclePlay, FaPeopleGroup } from "react-icons/fa6";
import { FaClipboardList, FaHandsHelping } from "react-icons/fa";
import { AiFillAlert, AiOutlineGlobal } from "react-icons/ai";

import Image from "next/image";

function ManualContent() {
  return (
    <div className="flex flex-col mt-8 mb-10 text-text lg:px-60 w-11/12 mx-auto h-[70vh] overflow-y max-md:h-[100vh]">
      <h2 className="text-[38px] md:text-[55.8px] text-center font-bold text-primary" id="soul">
        Manual
        <span className="w-full h-2 b-secondary bg-secondary ml-2 max-md:ml-1"></span>
      </h2>
      <div className="flex flex-col gap-4 font-medium leading-7">
        <div className="flex gap-2 text-primary border-b-2 border-[#0005370d] py-2">
          <BsPatchQuestionFill className="font-bold text-[2rem]" />
          <h3 className="text-xl font-semibold flex items-center">
            What is Soul Bilíngue?
          </h3>
        </div>
        <p>
          Soul Bilíngue is a social initiative that aims to change the future of
          young, low-income Brazilians through English immersion and exchange
          opportunities.
        </p>
        <p>
          Fluency in English is a reality for less than 5% of the Brazilian
          population. For individuals coming from low-income backgrounds and
          graduating from public schools, the challenge is even greater due to
          inadequate encouragement and a lack of awareness regarding the
          transformative power of English in shaping their future lives. Our
          goal is to shift the perspectives of young Brazilians, providing them
          access to more opportunities and a brighter future.
        </p>
        <p className="bg-primary w-full p-2 rounded-lg font-bold text-center text-secondary max-md:text-sm">
          Our vision is to make the exchange dream possible for all low-income
          young Brazilians.
        </p>
      </div>
      <div className="flex flex-col gap-4 font-medium leading-7 pt-4" id="how">
        <div className="flex gap-2 text-primary border-b-2 border-[#0005370d] py-2 text-start">
          <BsPatchQuestionFill className="font-bold text-[2rem]" />
          <h3 className="text-xl font-semibold flex items-center text-start">
            How does the program work?
          </h3>
        </div>
        <p>
          We are a gamified English program focused primarily on English
          language development and other skills. Once approved, students engage
          in a semester-long journey of point-worthy online activities. You can
          check the activities and their respective points below:
        </p>
        <div className="flex justify-center items-center">
          <Image src="/score.svg" width={1000} height={500} alt="pontos" />
        </div>
        <p>
          Upon completing the 22-week immersion program, the most dedicated Soul
          Students earn rewards, including scholarships for up to four weeks of
          English language study abroad!
        </p>
        <div className="space-y-4">
          <div>
            <h4 className="text-lg font-semibold mb-2">
              For Soul Students Completing the Program:
            </h4>
            <ul className="list-disc list-inside">
              <li>
                Significant English Improvement (75% demonstrate notable
                progress)
              </li>
              <li>
                Level Advancement (45% advance to a higher English level after
                22 weeks)
              </li>
              <li>Certificate of Achievement</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-2">
              For the Most Committed Students:
            </h4>
            <ul className="list-disc list-inside">
              <li>
                One of 40 scholarships for a 1-year online English course at EF
                after the Soul Program
              </li>
              <li>
                One of 60 scholarships for online exchange at English Path,
                including live classes
              </li>
              <li>
                Outstanding Student Soul Bilíngue badge for LinkedIn and other
                social media profiles
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-2">
              For the Top 8 Students:
            </h4>
            <ul className="list-disc list-inside">
              <li>Title of Young Ambassador Soul Bilíngue</li>
              <li>Scholarship for a minimum 3-week study abroad program</li>
              <li>
                Accommodation for the exchange period with partner schools
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 justify-center items-center">
          <p className="font-bold">
            You can find out the winners of the last edition in the video below:
          </p>
          <div className="flex justify-center items-center max-md:w-10/12">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/5DQNprBUXrM"
              title="A GRANDE FINAL E ANÚNCIO DOS BOLSISTAS - TURMA 2024.1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
        </div>
      </div>
      <div
        className="flex flex-col gap-4 font-medium leading-7 pt-4"
        id="students"
      >
        <div className="flex gap-2 text-primary border-b-2 border-[#0005370d] py-2 text-start">
          <FaPeopleGroup className="font-bold text-[2rem]" />
          <h3 className="text-xl font-semibold flex items-center text-start">
            Students&apos; Profile
          </h3>
        </div>
        <p className="font-semibold">Requirements to join as a student:</p>
        <ul className="list-disc list-inside">
          <li>Be between 18 and 26 years old ;</li>
          <li>
            Have completed all three years of high school in a public school;
          </li>
          <li>Residents of North, Northeast, and Southeast Brazil</li>
          <li>Have a per capita income of 2 minimum wages.</li>
          <li>
            Have never participated in an international exchange program for
            work or study (leisure travel does not affect eligibility).
          </li>
        </ul>
      </div>
      <div
        className="flex flex-col gap-4 font-medium leading-7 pt-4"
        id="game"
      >
        <div className="flex gap-2 text-primary border-b-2 border-[#0005370d] py-2 text-start">
          <BsPatchQuestionFill className="font-bold text-[2rem]" />
          <h3 className="text-lg font-semibold flex items-center text-start">
            What does the game offer?
          </h3>
        </div>
        <div className="flex justify-center items-center flex-col gap-2">
          <p className="my-4">
            <span className="font-bold text-lg px-4 py-2 text-primary border-b-2 border-orange">
              Classes
            </span>
          </p>
          <div>
            The English classes are online group classes held on Tuesdays with
            volunteer teachers. With materials from Oxford University Press, the
            classes last around an hour and a half and are divided by English
            level.
            <p>
              Time of the Classes:{" "}
              <span className="font-semibold">
                {" "}
                Tuesdays from 7 pm to 8:30 pm (BRT/GMT-3)
              </span>
            </p>
            <p>
              P.S.: You cannot schedule mentoring sessions at the same time as
              classes.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col gap-2">
          <p className="my-4">
            <span className="font-bold text-lg px-4 py-2 text-primary border-b-2 border-orange">
              Counseling
            </span>
          </p>
          <p>
            At Soul Bilíngue, we prioritize the well-being of all our
            participants, especially our young learners. We recognize that
            everyone comes from diverse backgrounds, and understanding oneself
            is crucial for navigating the world successfully. The program has
            two types of counselors:
          </p>
          <p className="font-semibold py-3 w-full p-2 rounded-lg  text-orange">
            Group counseling (10 students):
          </p>
          <p>
            The psychology volunteer at Soul has a more welcoming role and
            direct contact with the young Soul students. Through orientation,
            the volunteers approach various themes related to mental health,
            depression, motivation, frustrations, and self-knowledge through
            sporadic meetings with groups of a maximum of ten students each.
          </p>
          <p className="py-3">
            P.S.:
            <span className="font-semibold">
              {" "}
              The meetings are held every other Thursdays from 7 PM to 8:30 PM
              (BRT/GMT-3).{" "}
            </span>
            You cannot schedule mentoring sessions at the same time as
            counseling.
          </p>
          <p className="font-semibold py-3 w-full p-2 rounded-lg  text-orange">
            Individual support
          </p>
          <p>
            In specific cases, young people also receive free individual
            counseling sessions with volunteer psychologists throughout the
            program. Pre-departure support: All students who receive
            international academic scholarships have individual sessions with a
            specialized psychologist in intercultural counseling.
          </p>
        </div>
        <div className="flex justify-center items-center flex-col gap-2">
          <p className="my-4">
            <span className="font-bold text-lg px-4 py-2 text-primary border-b-2 border-orange">
              Soul Summit
            </span>
          </p>
          <p>
            We host exclusive events designed to inspire our Soul Students to
            explore the world by bringing in inspirational individuals,
            showcasing different exchange programs, and helping them prepare for
            their first international experience.
          </p>
        </div>
      </div>
      <div
        className="flex flex-col gap-4 font-medium leading-7 pt-4"
        id="mentoring"
      >
        <div className="flex gap-2 text-primary border-b-2 border-[#0005370d] py-2 text-start">
          <FaHandsHelping className="font-bold text-[2rem]" />
          <h3 className="text-lg font-semibold flex items-center text-start">
            Mentoring Area
          </h3>
        </div>
        <div>
          <p className="flex flex-col gap-2">
            <span className="font-bold text-lg text-primary">
              What is mentoring?
            </span>
            Mentoring is a part of the program dedicated to helping the students
            with their confidence in learning English.
          </p>
          <p>
            Mentors <span className="font-bold"> ARE NOT </span> English
            teachers, so the goal is to inspire the students with people that
            use the language on a daily basis.
          </p>
          <p>
            Your job is to help them work their English through different
            dynamics such as youtube videos, talking about a specific subject,
            reading articles, listening to songs and etc., to support them on
            their learning journey.
          </p>
          <div id="how-mentoring">
          <p className="flex flex-col gap-2 py-3">
            <span className="font-bold text-lg text-primary">
              How does it work?
            </span>
            To earn their full mentoring points, students must attend three
            mandatory meetings per month with their mentor.
          </p>
          <p>
            Your role as a mentor is to support your mentee&apos;s learning
            journey, drawing from your own experiences. During mentoring
            sessions, you are free to address any English-related topic.
            However, always prioritize and incorporate your mentee&apos;s
            feedback on the work and activities.
          </p>
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-8 text-center text-primary">
            Roles and Responsibilities
          </h1>

          <div className="flex justify-between max-2xl:flex-col lg:px-5 py-3 gap-8">
            <div className="lg:w-1/2 w-full border-2 rounded-lg border-primary bg-background p-2 lg:p-5">
              <h3 className="font-bold text-primary text-lg py-2" id="roles">
                Mentor&apos;s Role
              </h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Attend a minimum of 3 mentoring sessions per month.</li>
                <li>
                  Submit the mentoring validation form at the end of each
                  session.
                </li>
                <li>
                  Keep in contact with your leader and respond to their messages
                </li>
                <li>Be prepared and engaged during mentoring sessions.</li>
                <li>
                  When sharing your experiences, be mindful that your mentee may
                  have different backgrounds and perspectives. Approach
                  conversations with sensitivity and awareness.
                </li>
              </ul>
            </div>

            {/* Mentee&apos;s Role div */}
            <div className="lg:w-1/2 w-full border-2 rounded-lg border-primary bg-background p-5">
              <h3 className="font-bold text-primary text-lg pb-2">
                Mentee&apos;s Role
              </h3>
              <ul className="list-disc pl-6">
                <li>
                  Schedule and attend a minimum of 3 mentoring sessions per
                  month.
                </li>
                <li>
                  Submit the mentoring validation form at the end of each
                  session.
                </li>
                <li>
                  Provide advance notice in case of rescheduling or canceling.
                </li>
                <li>Be prepared and engaged during mentoring sessions.</li>
                <li>Attend all scheduled mentoring sessions.</li>
              </ul>
            </div>
          </div>
          <div id="rules">
            <p className="flex flex-col gap-2 py-3">
              <span className="font-bold text-lg text-primary">
                Mentoring rules
              </span>
              Both mentors and students have rules and restrictions!
            </p>
            <ul className="list-decimal px-3 font-semibold">
              <li>
                It is <span className="text-orange">not</span> allowed to carry
                out two mentorships on the same day
              </li>
              <li>
                Each mentoring session should last a minimum of{" "}
                <span className="text-orange"> 40 minutes. </span>
              </li>
              <li>
                At the end of each mentoring session, both the mentor and mentee
                <span className="text-orange">
                  {" "}
                  must complete a validation form.{" "}
                </span>
              </li>
              <li>
                If you need to reschedule a session, please provide at least{" "}
                <span className="text-orange"> 3 hours&apos; </span> notice in
                advance.
              </li>
              <li>
                While mentors are expected to be on time, a 5-minute grace
                period is recommended for mentee arrivals. However, please note
                that{" "}
                <span className="text-orange">
                  {" "}
                  mentors are not obligated to reschedule sessions or wait
                  beyond this grace period.{" "}
                </span>
              </li>
              <li>
                Students of different English proficiency levels{" "}
                <span className="text-orange">cannot</span> participate in group
                mentoring sessions together. However, students at the same
                English proficiency level may participate if they feel
                comfortable doing so.
              </li>
            </ul>
          </div>
          <div className="py-3" id="validation">
            <p className="flex flex-col gap-2 py-3">
              <span className="font-bold text-lg text-primary">
                Validation Form
              </span>
            </p>
            <p className="py-3">
              The Mentoring Validation Form is the document that proves to us
              that you and your student did the mentoring. We have around 1000
              mentorings per month, so this system was the best one we could
              find to validate all mentoring sessions in a reasonable time.{" "}
            </p>
            <p className="py-3">
              At the end of each mentorship session, both mentors and students
              are required to complete a form to validate their participation.
              To facilitate this process, we recommend filling out the form
              together with your student approximately five minutes before the
              session ends. The completion of this form by both parties is
              crucial for awarding mentorship points.
            </p>
            <p className="py-3">
              The mentors form will always be available in the &quot;links&quot;
              section of the website, and the students form will be available in
              the WhatsApp group description.
            </p>
          </div>
          <div className="py-3" id="leaders">
            <p className="flex flex-col gap-2 py-3">
              <span className="font-bold text-lg text-primary">
                Mentors&apos; Leaders
              </span>
            </p>
            <p className="py-3">
              To ensure a smooth and supportive experience for all 250+
              volunteers in our program, we have a dedicated group of 12
              volunteer leaders who provide invaluable assistance.
            </p>
            <p className="py-3">
              Our leaders have participated in the mentoring program for at
              least a semester, making them well-versed in our guidelines and
              procedures. Their experience and commitment allow them to provide
              additional support and guidance to fellow volunteers.
            </p>
            <p className="py-3">
              Don&apos;t hesitate to reach out to our leaders if you have any
              questions about program guidelines or best practices, ideas for
              engaging mentoring activities or concerns about any aspect of the
              program.
            </p>
            <p className="py-3">
              Our leaders are here to help create a positive and enriching
              experience for everyone involved.
            </p>
          </div>
          <div
            className="flex flex-col gap-4 font-medium leading-7 pt-4"
            id="matching"
          >
            <div className="flex gap-2 text-primary border-b-2 border-[#0005370d] py-2 text-start">
              <IoFootsteps className="font-bold text-[2rem]" />
              <h3 className="text-lg font-semibold flex items-center text-start">
                First Steps
              </h3>
            </div>
            <div>
              <p className="flex flex-col gap-2">
                <span className="font-bold text-lg text-primary py-3">
                  Matching Process
                </span>
              </p>
              <p className="mb-4">
                Once you have selected a student, they will automatically
                receive an email with your contact information, notifying them
                that you are their mentor.
              </p>

              <p className="mb-4">
                {" "}
                <strong className="font-bold">
                  You should receive an email from your mentee within 48 hours
                  of the match.
                </strong>
              </p>

              <p className="mb-4">
                If you don&apos;t hear from them after this deadline, please{" "}
                <span className="text-blue-500 underline">contact us</span>.
              </p>

              <p className="mb-6">
                Upon receiving your mentee&apos;s email, please promptly
                schedule your first mentoring session starting from{" "}
                <span className="text-primary font-semibold border-b-2 border-secondary">
                  August 1st.
                </span>
              </p>

              <div className="p-4 border-4 rounded-xl text-white bg-primary">
                <h3 className="text-lg font-bold mb-2">Important Reminders:</h3>
                <ul className="list-disc pl-6">
                  <li>
                    Please wait 48 hours before contacting us if you
                    haven&apos;t heard from your mentee.
                  </li>
                  <li>
                    Double-check your spam/trash folder, as their email might be
                    there!
                  </li>
                </ul>
              </div>
            </div>
            <div id="platform">
              <p className="flex flex-col gap-2">
                <span className="font-bold text-lg text-primary py-3">
                  What platform should I use?
                </span>
              </p>
              <p className="mb-4">
                You can use any platform you and your student prefer! Make sure
                you have your students&apos; opinion, because each platform has
                its ups and downs, and some of them can work better with their
                equipment.
              </p>

              <p className="mb-4 font-semibold">
                Here are some examples of platforms you can use:
              </p>
              <p>
                To{" "}
                <span className="text-primary border-b-2 border-secondary font-semibold">
                  schedule
                </span>{" "}
                your mentoring sessions, we recommend:
              </p>
              <ul className="list-disc pl-6 py-5">
                <li className="hover:text-primary hover:font-semibold transition-colors ease-in-out">
                  <a href="https://calendly.com/" target="_blank">
                    Calendly
                  </a>
                </li>
                <li className="hover:text-primary hover:font-semibold transition-colors ease-in-out">
                  <a href="https://doodle.com/" target="_blank">
                    Doodle
                  </a>
                </li>
                <li className="hover:text-primary hover:font-semibold transition-colors ease-in-out">
                  <a href="https://calendar.google.com/" target="_blank">
                    Google Calendar
                  </a>
                </li>
                <li className="hover:text-primary hover:font-semibold transition-colors ease-in-out">
                  <a href="https://youcanbook.me" target="_blank">
                    Youcanbook.me
                  </a>
                </li>
              </ul>
              <p className="py-5">
                For the{" "}
                <span className="text-primary border-b-2 border-secondary font-semibold">
                  mentoring sessions
                </span>
                , you can use:
              </p>
              <ul className="list-disc pl-6">
                <li className="hover:text-primary hover:font-semibold transition-colors ease-in-out">
                  <a href="https://meet.google.com/" target="_blank">
                    Google Meet
                  </a>
                </li>
                <li className="hover:text-primary hover:font-semibold transition-colors ease-in-out">
                  <a href="https://zoom.us/" target="_blank">
                    Zoom
                  </a>
                </li>
                <li className="hover:text-primary hover:font-semibold transition-colors ease-in-out">
                  <a
                    href="https://www.microsoft.com/en-us/microsoft-teams/group-chat-software"
                    target="_blank"
                  >
                    Microsoft Teams
                  </a>
                </li>
                <li className="hover:text-primary hover:font-semibold transition-colors ease-in-out">
                  <a href="https://discord.com/" target="_blank">
                    Discord
                  </a>
                </li>
              </ul>
            </div>
            <div id="first">
              <p className="flex flex-col gap-2">
                <span className="font-bold text-lg text-primary py-3">
                  First Mentoring
                </span>
              </p>
              <p className="mb-4">
                The first mentoring session is a great opportunity to get to
                know your student better. You can ask questions about their
                expectations, their hobbies, and their goals for the program.
                Here&apos;s the step by step for the first mentoring session:
              </p>
              <h3 className="font-bold text-secondary py-2">
                Introduction and Goals
              </h3>
              <ul className="list-disc pl-6">
                <li>Tell your name and how they should call you</li>
                <li>Where you&apos;re from and where you live</li>
                <li>Tell them about what you like to do in your free time</li>
                <li>
                  Share a little bit about your background and your experience
                  with English
                </li>
                <li>Ask your mentee to introduce themselves</li>
                <li>Ask them about their expectations for the program</li>
                <li>Discuss the program&apos;s rules and guidelines</li>
                <li>Set goals for the program</li>
                <li>Plan the next mentoring sessions</li>
              </ul>
              <h3 className="font-bold text-secondary py-2">
                Share curiosities
              </h3>
              <ul className="list-disc pl-6">
                <li>What English means to you;</li>
                <li>Why did you learn English;</li>
                <li>Why you have decided to be a mentor;</li>
                <li>Experience abroad (if you had).</li>
              </ul>
              <h3 className="font-bold text-secondary py-2">
                Get to know each other
              </h3>
              <p>
                To build a connection it&apos;s nice to find things you both
                have in common. Always take notes on what&apos;s important for
                them and you can use during the mentorings;
              </p>
              <div className="bg-background border-2 text-primary border-primary lg:p-4 rounded-md shadow-sm flex flex-col gap-2 mt-4 mb-8">
                <p className="py-3 px-3">
                  Here are{" "}
                  <span className="text-primary font-semibold border-b-2 border-secondary">
                    {" "}
                    key questions{" "}
                  </span>{" "}
                  to get to know your mentee better:
                </p>
                <ul className="list-disc italic pl-6 ml:pl-10 max-2xl:text-base">
                  <li className="py-1">Why do you want to learn English?</li>
                  <li className="py-1">What do you like to do in your free time?</li>
                  <li className="py-1">What are your favorite types of music?</li>
                  <li className="py-1">What are your favorite kinds of movies and TV shows?</li>
                  <li className="py-1">
                    Do you like reading? What things do you like to read?
                    (books, magazines, comics, newspapers…)
                  </li>
                  <li className="py-1">
                    Do you like traveling? What kind of places do you like to
                    visit?
                  </li>
                  <li className="py-1">
                    Can you share something you like about the place you&apos;re
                    from?
                  </li>
                  <li className="py-1">
                    What are the best things about your culture? (music, food,
                    people…?)
                  </li>
                  <li className="py-1">What places in the world would you like to travel to?</li>
                  <li className="py-1">What are your hobbies?</li>
                  <li className="py-1">Do you have a special talent?</li>
                  <li className="py-1">What do you like doing on vacation?</li>
                  <li className="py-1">Can you share a story about a vacation you really enjoyed?</li>
                  <li className="py-1">What are your dreams and plans for the future?</li>
                </ul>
              </div>
              <div className="p-4 rounded-xl text-white bg-primary">
                <h3 className="text-lg font-bold mb-2">Important Reminders:</h3>
                <ul className="list-disc pl-6">
                  <li>
                    Before you say goodbye, please open your validation form and
                    fill it out together with your mentee. This is the only way
                    to get points for the mentoring session.
                  </li>
                  <li>
                    The Mentoring Validation Form will only be available on
                    August 1st. This is also the first mentoring day, which
                    means the students will only get points for the sessions
                    that are following the rules!
                  </li>
                  <li>
                    Create meeting invites for all your sessions. This way, you
                    will not forget about them, and your mentee will have the
                    link to the meeting.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col gap-4 font-medium leading-7 pt-4"
            id="tips"
          >
            <div className="flex gap-2 text-primary border-b-2 border-[#0005370d] py-2 text-start">
              <FaClipboardList className="font-bold text-[2rem]" />
              <h3 className="text-lg font-semibold flex items-center text-start">
                Planning a Mentoring
              </h3>
            </div>

            <p className="mb-4">
              It&apos;s normal to have questions about starting a mentorship,
              but don&apos;t worry! We provide training and support materials to
              guide you through the process.
            </p>

            <div className="bg-gray-100 rounded-md mb-6">
              <h3 className="font-bold text-lg text-primary py-3">
                Steps for Mentoring
              </h3>
              <div className="mb-4">
                <h4 className="font-bold py-2 text-primary">
                  Which language should I speak?
                </h4>
                <p>
                  We recommend holding the first mentoring session with Beginner
                  and Elementary English level students in Portuguese. This
                  helps create a more comfortable environment, especially since
                  some students may feel nervous speaking English for the first
                  time.
                </p>
              </div>
              <div className="mb-4">
                <h4 className="font-bold py-2 text-primary">Break the ice</h4>
                <p className="py-3">
                  To start your mentoring session, begin by sharing a bit about
                  yourself, such as where you&apos;re from, your background, and
                  a fun fact or hobby. Encourage your mentee to do the same. You
                  can also start with a light discussion about recent news or
                  events that are relevant and interesting. This can lead to
                  natural conversation and help you both feel more comfortable.
                </p>
                <p className="py-3">
                  Next, ask open-ended questions that encourage your mentee to
                  share about themselves. Avoid questions that can be answered
                  with a simple &quot;yes&quot; or &quot;no&quot;. Actively
                  listen to their responses and look for common interests or
                  experiences that you can connect with.
                </p>
                <p className="py-3">
                  Use games like &quot;Two Truths and a Lie&quot; where each
                  person shares two true statements and one false statement
                  about themselves. This can be a fun way to learn more about
                  each other.
                </p>
                <p className="py-3">
                  When appropriate, ask follow-up questions to delve deeper into
                  their thoughts and experiences. Relate your own experiences
                  sparingly to show empathy and understanding, but ensure the
                  conversation remains focused on their needs and goals.
                </p>
                <p className="py-3">
                  You can discuss cultural differences or similarities between
                  the region where you live and the region where your mentee
                  lives. This can help both of you learn more about each
                  other&apos;s backgrounds and perspectives.
                </p>
                <p className="py-3">
                  You should always ask your mentee if they have any English
                  related questions or topics they would like to discuss.
                </p>
                <p className="py-3">
                  Be sure to maintain a positive and encouraging tone throughout
                  the session. Offer words of validation and support to reassure
                  your mentee that you are there to help them succeed.
                </p>
              </div>
              <div className="mb-4">
                <h4 className="font-bold py-2 text-primary">Plan Activities</h4>
                <p>
                  You can play a game or read a small book, write and email
                  together, or talk about their classes. Maybe your mentee
                  won&apos;t bring you doubts… In case you feel lost and need
                  support material, you can access the mentors&apos; drive to
                  find support material for each level of English. The link is
                  available in the &quot;links&quot; section of the website.
                </p>
              </div>
              <div className="mb-4">
                <p>
                  Achieving success in your mentoring sessions requires careful
                  planning and clear goal-setting. By taking the time to prepare
                  personalized reports and asking your mentee about their week
                  beforehand, you can make sure your discussions are focused and
                  relevant. Creating a checklist of topics to cover and
                  prioritizing them can help you stay on track and ensure
                  nothing important is missed. Remember, the more you invest in
                  your mentoring sessions, the more rewarding the experience
                  will be for both you and your mentee.
                </p>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col gap-4 font-medium leading-7 pt-4"
          >
            <div className="flex gap-2 text-primary border-b-2 border-[#0005370d] py-2 text-start">
              <AiFillAlert className="font-bold text-[2rem]" />
              <h3 className="text-lg font-semibold flex items-center text-start">
                Other important topics
              </h3>
            </div>
            <div className="mb-4">
              <h3 className="font-bold py-2 text-lg text-primary" id="english">
                I have English related questions!
              </h3>
              <p>
                If you have any questions regarding the English classes,
                homework, or tests, please don&apos;t hesitate to contact our
                Teacher Coordinator.
              </p>
              <p className="text-primary font-semibold text-center my-4">
                <a
                  href="mailto:teachers@soulbilingue.com"
                  className="text-secondary font-bond underline bg-primary p-2 rounded-lg hover:bg-secondary hover:text-primary transition-colors ease-in-out"
                >
                  teachers@soulbilingue.com
                </a>
              </p>
            </div>
            <div className="mb-4">
              <h3 className="font-bold py-2 text-lg text-primary max-md:text-base" id="support">
                What if my student needs psychological support?
              </h3>
              <p>
                If you notice that your student may need closer psychological
                support from our team, you can contact Bruna Santos, head of
                Counselors.
              </p>
              <p className="text-primary font-semibold text-center my-4">
                <a
                  href="mailto:bruna.santos@soulbilingue.com"
                  className="text-secondary font-bond underline bg-primary p-2 rounded-lg hover:bg-secondary hover:text-primary transition-colors ease-in-out"
                >
                  bruna.santos@soulbilingue.com
                </a>
              </p>
            </div>
            <div className="mb-4">
              <h3 className="font-bold py-2 text-lg text-primary max-md:text-base" id="clubs">
                Soul Clubs
              </h3>
              <p>
                Soul Clubs are for all our network members, including mentors,
                counselors, teachers and students. The clubs are spaces for
                sharing experiences, learning, and networking. We have clubs for
                different interests. If you are interested in joining a club,
                please let us know.
              </p>
              <p className="text-primary font-semibold text-center my-4">
                Why should I join?
              </p>
              <ul className="list-disc pl-6">
                <li>
                  It&apos;s an opportunity to practice English in groups through
                  different dynamics: playing games, reading, watching movies,
                  talking about a specific topic
                </li>
                <li>
                  It&apos;s an opportunity to make friends and meet new people
                </li>
                <li>
                  Connections you won&apos;t be able to make any other time at
                  Soul: only in the Soul Clubs there are students, former
                  students, and volunteers
                </li>
                <li>Be part of something fun with our community</li>
                <li>Get close to our community</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 font-medium leading-7 pt-4 pb-14">
        <div className="flex gap-2 text-primary border-b-2 border-[#0005370d] py-2 text-start">
          <AiOutlineGlobal className="font-bold text-[2rem]" />
          <h3 className="text-xl font-semibold flex items-center text-start">
            Thank you for being part of our team!
          </h3>
        </div>
        <div className="mb-4">
          <p>
            If you have any questions or need support, please get in touch with
            us through your leader or the email below.
          </p>
          <p className="text-primary font-semibold text-center my-4">
            <a
              href="mailto:mentoring@soulbilingue.com"
              className="text-secondary font-bond underline bg-primary p-2 rounded-lg hover:bg-secondary hover:text-primary transition-colors ease-in-out"
            >
              mentoring@soulbilingue.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ManualContent;
