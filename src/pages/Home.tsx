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
    <div className="overflow-hidden">
      {/* Hero Section */}
      <div className="relative w-full h-screen pl-10 pt-10 bg-gradient-to-b from-gray-900 to-rose-900 from-90%">
        <Nav executeScroll={executeScroll} />
        <h1 className="bg-gradient-to-b from-rose-500 to-pink-500 text-5xl sm:text-6xl text-transparent bg-clip-text
        -motion-translate-y-in-[300%] motion-duration-1000 ">
          HELLO, I'M MOHAMMED ABDULLA
        </h1>
      </div>

      {/* Projects Section */}
      <div
        ref={sections.projects}
        className="w-full h-fit pb-20 pt-10 px-20 bg-gradient-to-b from-rose-900 from-[97%] to-gray-800"
      >
        <h2 className="text-white text-4xl sm:text-5xl md:text-6xl opacity-0 intersect:motion-opacity-out-100 motion-duration-1000 ease-in">
          PROJECTS
        </h2>
        <Projects />
      </div>

      {/* Experience Section */}
      <div
        ref={sections.experience}
        className="w-full h-screen bg-gradient-to-b from-gray-800 via-gray-700 via-90% to-gray-700 flex items-center justify-center"
      >
        <h2 className="text-white text-4xl">Experience Section</h2>
      </div>

      {/* Hobbies Section */}
      <div
        ref={sections.hobbies}
        className="w-full h-screen bg-gradient-to-b from-gray-700 via-gray-600 via-90% to-gray-600 flex items-center justify-center"
      >
        <h2 className="text-white text-4xl">Hobbies Section</h2>
      </div>

      {/* Contact Section */}
      <div
        ref={sections.contact}
        className="w-full h-screen bg-gradient-to-b from-gray-600 via-black via-90% to-black flex items-center justify-center"
      >
        <h2 className="text-white text-4xl">Contact Section</h2>
      </div>
    </div>
  );
};

export default Home;