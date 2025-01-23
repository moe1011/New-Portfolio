import React, { useRef } from "react";
import Nav from "../components/Nav";
import Projects from "../components/Projects";

const Home = () => {
  const sections = {
    projects: useRef<HTMLDivElement>(null),
    experience: useRef<HTMLDivElement>(null),
    hobbies: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  };

  // Scroll function
  const executeScroll = (section: string) => {
    sections[section as keyof typeof sections]?.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="relative overflow-hidden">
      <div className="w-full h-[140vh] sm:h-[130vh] bg-gradient-to-b from-gray-900 from-45% sm:from-55% md:from-55% lg:from-55% to-rose-900 absolute"></div>

      <div className="relative z-20 p-10">
        <Nav executeScroll={executeScroll} />
        <h1 className="-motion-translate-y-in-[300%] motion-duration-1000 bg-gradient-to-b from-rose-500 from-80%  to-pink-500 text-5xl sm:text-6xl text-transparent bg-clip-text">
          HELLO, I'M MOHAMMED ABDULLA
        </h1>
      </div>

      {/* Sections */}
      <div className="flex flex-col items-center w-full">
        <div
          ref={sections.projects}
          className="relative z-10 w-[200%] sm:w-[170%] md:w-[150%] lg:w-[130%] h-fit bg-rose-900 rounded-[50%] rounded-b-none mt-[50vh] md:mt-[55vh] lg:mt-[60vh] pb-10"
        >
          <h2 className="text-white text-4xl sm:text-5xl md:text-6xl text-center mt-[12rem] mr-[45vw] sm:mr-[55vw] intersect:motion-preset-fade-lg">
            PROJECTS
          </h2>
          <Projects />
        </div>
      </div>
      <div
        ref={sections.experience}
        className="w-full h-screen bg-gray-800 flex items-center justify-center"
      >
        <h2 className="text-white text-4xl">Experience Section</h2>
      </div>
      <div
        ref={sections.hobbies}
        className="w-full h-screen bg-gray-700 flex items-center justify-center"
      >
        <h2 className="text-white text-4xl">Hobbies Section</h2>
      </div>
      <div
        ref={sections.contact}
        className="w-full h-screen bg-gray-600 flex items-center justify-center"
      >
        <h2 className="text-white text-4xl">Contact Section</h2>
      </div>
    </div>
  );
};

export default Home;
