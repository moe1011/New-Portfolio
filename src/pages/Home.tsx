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
    }, 1500);
  }, [scrollAnimState]);

  return (
    <div>
      {/* HERO SECTION */}
      <div className="relative w-full h-screen bg-gradient-to-b from-slate-900 to-rose-900 from-75% sm:from-85%">
        <Nav executeScroll={executeScroll} />

        <h1
          className="bg-gradient-to-b from-rose-500 to-rose-700 from-70%
            text-5xl sm:text-6xl text-transparent bg-clip-text
            pl-10 pt-10"
        >
          HELLO, I'M MOHAMMED ABDULLA
        </h1>

        <div className="flex flex-col justify-end h-full pb-[30rem] sm:pb-[20rem]">
          <Player
            lottieRef={(instance) => {
              setScrollAnimState({ lottie: instance });
            }}
            loop
            src={scrollAnimation}
            className="w-[10rem] h-[10rem] sm:w-[15rem] sm:h-[15rem] md:w-[20rem] md:h-[20rem] mx-auto"
            ref={player}
          />
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