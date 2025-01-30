import React, { useEffect, useRef, useState } from "react";
import Nav from "../components/Nav";
import Projects from "../components/Projects";
import { Player } from "@lottiefiles/react-lottie-player";
import scrollAnimation from "../assets/scrollAnimation.json";
import { AnimationItem } from "lottie-web";
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

  useEffect(() => {
    setTimeout(() => {
      scrollAnimState.lottie?.play();
    }, 1700);
  }, [scrollAnimState]);

  return (
    <div>
      {/* HERO SECTION */}
      <div className="relative w-full h-screen bg-gradient-to-b from-slate-900 to-rose-900 from-75% sm:from-85% overflow-hidden">
        <Nav executeScroll={executeScroll} />

        {/* Main Layout */}
        <div className="relative w-full h-screen flex flex-col items-center">
          {/* Name at the Top */}
          <h1 className="text-[1.5rem] sm:text-[3rem] 2xl:text-[4rem] pt-20 sm:pt-20 pb-10 text-white motion-preset-slide-down-md -mt-10 text-center 
          tracking-widest">
            MOHAMMED ABDULLA
          </h1>

          {/* Main Content (Text and Player Overlapping) */}
          <div className="relative flex flex-col items-center leading-[4rem] sm:leading-[9rem] 2xl:leading-[11rem]">
            {/* SOFTWARE Text */}
            <h1
              className="bg-gradient-to-b from-rose-500 to-rose-600 from-60% text-transparent bg-clip-text 
      text-[3.5rem] sm:text-[7rem] md:text-[9rem] 2xl:text-[12rem] z-20 pr-[10vw] motion-preset-slide-right-md motion-delay-[600ms]"
            >
              SOFTWARE
            </h1>

            {/* DEVELOPER Text */}
            <h1
              className="bg-gradient-to-b from-rose-600 to-rose-700 from-40% text-transparent bg-clip-text 
      text-[3.5rem] sm:text-[7rem] md:text-[9rem] 2xl:text-[12rem] z-0 pl-[10vw] motion-preset-slide-left-md motion-delay-[1100ms]"
            >
              DEVELOPER
            </h1>

            {/* Player */}
            <div className="relative mt-20 sm:mt-10 2xl:mt-32 mb-20">
              <Player
                lottieRef={(instance) => {
                  setScrollAnimState({ lottie: instance });
                }}
                loop
                src={scrollAnimation}
                className="w-[10rem] h-[10rem] sm:w-[12rem] sm:h-[12rem] 2xl:w-[15rem] 2xl:h-[15rem]"
                ref={player}
              />
            </div>
          </div>
        </div>
      </div>

      {/* PROJECTS SECTION */}
      <div
        ref={projectsRef}
        // Ensure each section is tall enough to avoid overlap
        className="w-full min-h-screen py-10 bg-gradient-to-b from-rose-900 from-[97%] to-slate-800"
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
