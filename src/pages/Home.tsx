import React, { useEffect, useRef, useState } from "react";
import Nav from "../components/Nav";
import Projects from "../components/Projects";
import { Player } from "@lottiefiles/react-lottie-player";
import scrollAnimation from "../assets/scrollAnimation.json";
import { AnimationItem } from "lottie-web";
import { TbBrandGithub, TbBrandLinkedin, TbFileText, TbShare, TbX } from "react-icons/tb";
import resumePDF from "../assets/resume/Mohammed_Abdulla_Resume_01_25.pdf";
// import { useScrollAnimations } from "../hooks/useScrollAnimations";

export default function Home() {
  // Refs for each section
  const projectsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const hobbiesRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  // Animate each big section
  // useScrollAnimations(
  //   [projectsRef, experienceRef, hobbiesRef, contactRef],
  //   {
  //     once: false,
  //     start: "top 80%",
  //     end: "bottom 20%",
  //     scrub: false,
  //     // The 'sections' themselves can fade up slightly if you want:
  //     yOffset: 50,
  //     duration: 1,
  //     markers: false, // set to true for debugging
  //   }
  // );

  const sections = {
    projects: projectsRef,
    experience: experienceRef,
    hobbies: hobbiesRef,
    contact: contactRef,
  };

  // Smooth scroll function for Nav
  const executeScroll = (section: string) => {
    sections[section as keyof typeof sections]?.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  // Lottie arrow
  const player = React.createRef<Player>();
  const [scrollAnimState, setScrollAnimState] = useState<{
    lottie: AnimationItem | null;
  }>({ lottie: null });

  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      scrollAnimState.lottie?.play();
    }, 1700);
  }, [scrollAnimState]);

  return (
    <div>
      {/* Social Links */}
      <div className={`fixed top-6 right-6 sm:top-8 sm:right-8 z-50 flex items-center justify-center sm:gap-6 
        bg-slate-900/30 backdrop-blur-sm rounded-full px-3 py-2 outline outline-1 outline-slate-400/30
        transition-all duration-300 ${isExpanded ? "w-[160px]" : "w-[42px] sm:w-auto"}`}>
        
        {/* Mobile Toggle - Show share icon when collapsed, X when expanded */}
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className={`sm:hidden text-slate-300 transition-colors duration-300
            ${isExpanded ? "bg-rose-500/20 rounded-full p-1" : ""}`}
        >
          {isExpanded ? (
            <TbX className="w-4 h-4" />
          ) : (
            <TbShare className="w-5 h-5" />
          )}
        </button>

        {/* Links - Hidden on mobile unless expanded */}
        <div className={`flex gap-4 sm:gap-6 overflow-hidden transition-all duration-300
          ${isExpanded ? "ml-4 w-full opacity-100" : "w-0 opacity-0 sm:w-full sm:opacity-100"}`}>
          <a
            href="https://github.com/moe1011"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-indigo-400 transition-colors duration-300 flex-shrink-0"
          >
            <TbBrandGithub className="w-5 h-5 sm:w-6 sm:h-6 2xl:w-8 2xl:h-8" />
          </a>
          <a
            href="https://www.linkedin.com/in/mohammed-s-abdulla/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-sky-400 transition-colors duration-300 flex-shrink-0"
          >
            <TbBrandLinkedin className="w-5 h-5 sm:w-6 sm:h-6 2xl:w-8 2xl:h-8" />
          </a>
          <a
            href={resumePDF}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-rose-400 transition-colors duration-300 flex-shrink-0"
          >
            <TbFileText className="w-5 h-5 sm:w-6 sm:h-6 2xl:w-8 2xl:h-8" />
          </a>
        </div>
      </div>

      {/* HERO SECTION */}
      <div className="relative w-full h-screen bg-gradient-to-b from-slate-900 to-rose-900 from-75% sm:from-85% overflow-hidden">
        <Nav executeScroll={executeScroll} />

        {/* Main Layout */}
        <div className="relative w-full h-screen flex flex-col items-center">
          {/* Name at the Top */}
          <h1 className="text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] 2xl:text-[4rem] pt-28 md:pt-20 pb-10 text-white motion-preset-slide-down-md -mt-10 text-center 
          tracking-widest">
            MOHAMMED ABDULLA
          </h1>

          {/* Main Content (Text and Player Overlapping) */}
          <div className="relative flex flex-col items-center leading-[4rem] sm:leading-[6rem] 2xl:leading-[11rem]">
            {/* SOFTWARE Text */}
            <h1
              className="bg-gradient-to-b from-rose-500 to-rose-600 from-60% text-transparent bg-clip-text 
      text-[3.5rem] sm:text-[5rem] md:text-[7rem] 2xl:text-[12rem] z-20 pr-[10vw] motion-preset-slide-right-md motion-delay-[600ms]"
            >
              SOFTWARE
            </h1>

            {/* DEVELOPER Text */}
            <h1
              className="bg-gradient-to-b from-rose-600 to-rose-700 from-40% text-transparent bg-clip-text 
      text-[3.5rem] sm:text-[5rem] md:text-[7rem] 2xl:text-[12rem] z-0 pl-[10vw] motion-preset-slide-left-md motion-delay-[1100ms]"
            >
              DEVELOPER
            </h1>

            {/* Player */}
            <div className="relative  mt-[40%] sm:mt-[10%] 2xl:mt-[5%] mb-[10%]">
              <Player
                lottieRef={(instance) => {
                  setScrollAnimState({ lottie: instance });
                }}
                loop
                src={scrollAnimation}
                className="w-[10rem] h-[10rem] sm:w-[11rem] sm:h-[11rem] md:w-[10rem] md:h-[10rem] 2xl:w-[15rem] 2xl:h-[15rem]"
                ref={player}
              />
            </div>
          </div>
        </div>
      </div>

      {/* PROJECTS SECTION */}
      <div
        ref={projectsRef}
        className="w-full min-h-screen py-10 bg-gradient-to-b from-rose-900 from-90% to-slate-800"
      >
        <Projects />
      </div>

      {/* EXPERIENCE SECTION */}
      <div
        ref={experienceRef}
        className="w-full min-h-screen bg-gradient-to-b from-slate-800 via-slate-700 to-slate-700 flex items-center justify-center"
      >
        <h2 className="text-slate-100 text-4xl">Experience Section</h2>
      </div>

      {/* HOBBIES SECTION */}
      <div
        ref={hobbiesRef}
        className="w-full min-h-screen bg-gradient-to-b from-slate-700 via-slate-600 to-slate-600 flex items-center justify-center"
      >
        <h2 className="text-slate-100 text-4xl">Hobbies Section</h2>
      </div>

      {/* CONTACT SECTION */}
      <div
        ref={contactRef}
        className="w-full min-h-screen bg-gradient-to-b from-slate-600 via-black to-black flex items-center justify-center"
      >
        <h2 className="text-slate-100 text-4xl">Contact Section</h2>
      </div>
    </div>
  );
}
