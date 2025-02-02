import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PiCode, PiHandTapDuotone, PiCursorClickDuotone } from "react-icons/pi";
import useIsTouchdevice from "../hooks/useIsTouchDevice";
import Bubbles from "./Bubbles";

// Project Images
import petconnectImage from "../assets/images/petconnect.png";
import minerverseImage from "../assets/images/minerverse.png";
import managesysImage from "../assets/images/managesys.png";
import spaceshowcaseImage from "../assets/images/spaceshowcase.crop.png";
import eightballImage from "../assets/images/8ball.png";
import calculatorImage from "../assets/images/calculator.png";

// Register the plugin once
gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  // Pin container
  const sectionRef = useRef<HTMLDivElement>(null);
  // The horizontal "track" that slides from right to left
  const trackRef = useRef<HTMLDivElement>(null);

  const isTouchDevice = useIsTouchdevice();

  // Sample projects
  const projects = [
    {
      name: "Pet Connect",
      image: petconnectImage,
      description:
        "A cross-platform social media app for pet owners to share photos, create profiles, and connect with other pet enthusiasts. Features include authentication, timeline feeds, and interactive posts.",
      tools: [
        "React Native",
        "Apollo GraphQL",
        "Express",
        "MySQL",
        "TypeScript",
      ],
      website: "", // You'll add this
      github: "https://github.com/FinalScript/pet-connect",
    },
    {
      name: "MinerVerse",
      image: minerverseImage,
      description:
        "A blockchain-based web3 game where users can mint unique NFT miners using ETH and engage in a cookie-clicker style mining experience. Features MetaMask integration, smart contracts, and real-time mining mechanics.",
      tools: ["Next.js", "TypeScript", "Solidity", "Web3.js", "MetaMask"],
      website: "https://minerverse.vercel.app/",
      github: "https://github.com/FinalScript/minerverse",
    },
    {
      name: "Space Showcase",
      image: spaceshowcaseImage,
      description:
        "An engaging web app that displays NASA's astronomy pictures with AI-generated explanations and interactive animations, featuring OpenAI's GPT-4o and TTS integration.",
      tools: ["React", "OpenAI API", "NASA API", "Tailwind CSS", "Vercel"],
      website: "https://space-showcase.vercel.app/",
      github: "https://github.com/moe1011/SpaceShowcase",
    },
    {
      name: "Manage.sys",
      image: managesysImage,
      description:
        "A full-stack store management system that enables CRUD operations for store and employee data, featuring secure user authentication and a modern React frontend.",
      tools: ["React", "Spring Boot", "PostgreSQL", "TypeScript", "Docker"],
      website: "https://manage-sys.web.app",
      github: "https://github.com/FinalScript/manage.sys",
    },
    {
      name: "Magic 8 Ball",
      image: eightballImage,
      description:
        "An interactive Magic 8 Ball web application with hold-to-charge mechanics and smooth animations, providing fortune-telling entertainment.",
      tools: ["React", "Tailwind CSS", "Rive"],
      website: "https://moe1011.github.io/8Ball",
      github: "https://github.com/moe1011/8Ball",
    },
    {
      name: "Calculator App",
      image: calculatorImage,
      description:
        "A desktop calculator application with keyboard shortcuts, calculation history, and the ability to save calculations to a file.",
      tools: ["React", "Electron", "Tailwind CSS", "MathJS"],
      website: "", // You'll add this if available
      github: "https://github.com/moe1011/CalculatorApp",
    },
  ];

  useEffect(() => {
    if (!sectionRef.current || !trackRef.current) return;

    const trackEl = trackRef.current;
    const totalWidth = trackEl.scrollWidth;
    const viewportWidth = window.innerWidth;

    const scrollDistance = totalWidth + viewportWidth;

    // Animation for scrolling the projects BEFORE reaching the section
    gsap.fromTo(
      trackEl,
      { x: viewportWidth }, // Start from slightly visible
      {
        x: -totalWidth - 100, // Scroll to fully off-screen left
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 40%", // Start BEFORE reaching the section
          end: `+=${scrollDistance}`,
          scrub: 1,
          markers: false, // Debugging markers (set to true to visualize)
        },
      }
    );

    // Separate ScrollTrigger for PINNING the Projects section
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top", // Pin when it reaches the top
      end: `+=${scrollDistance - 700}`,
      pin: true, // Pin the section in place
      anticipatePin: 1, // Smooth pinning
      markers: false,
    });

    ScrollTrigger.normalizeScroll(true);
    ScrollTrigger.config({
      ignoreMobileResize: true,
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div ref={sectionRef} className="px-5 pt-5 pb-10 overflow-hidden">
      <Bubbles
        opacity={1.0}
        size={0.6}
        count={10} // Try with 6 bubbles
      />

      <h2 className="text-slate-100 text-4xl sm:text-5xl md:text-4xl mb-10 text-center underline underline-offset-8 tracking-widest">
        PROJECTS
      </h2>

      {/* HORIZONTAL TRACK */}
      <div
        ref={trackRef}
        className="flex gap-24 items-center h-[32rem] sm:h-[35rem] lg:h-[35rem] 2xl:h-[45rem]"
      >
        {projects.map((proj, i) => (
          <div
            key={i}
            className="group inline-block w-[20rem] sm:w-[25rem] lg:w-[25rem] 2xl:w-[35rem] h-full
                outline outline-[3px] outline-slate-400 hover:outline-teal-400 duration-300
                rounded-lg shadow-md shadow-slate-800 overflow-hidden flex-shrink-0"
          >
            {/* Image */}
            <a
              href={proj.website || undefined}
              target={proj.website ? "_blank" : undefined}
              rel={proj.website ? "noopener noreferrer" : undefined}
              className={`relative block h-[55%] w-full overflow-hidden ${
                proj.website ? "cursor-pointer" : "pointer-events-none"
              }`}
            >
              <div
                className="w-full h-full bg-cover bg-center transition-transform 
      duration-[1200ms] ease-in-out group-hover:scale-110 origin-center"
                style={{ backgroundImage: `url(${proj.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 from-5% to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500 pointer-events-none" />
              <div className="absolute inset-0 flex items-end justify-center">
                <h3 className="text-lg sm:text-xl font-bold text-white text-center mb-3">
                  {proj.name}
                </h3>
              </div>
              {proj.website && (
                <div className="absolute inset-0 flex items-end justify-end p-2">
                  {isTouchDevice ? (
                    <PiHandTapDuotone className="text-4xl text-gray-200 -rotate-45" />
                  ) : (
                    <PiCursorClickDuotone className="text-4xl text-gray-200" />
                  )}
                </div>
              )}
            </a>

            {/* Bottom Info */}
            <div className="relative h-[45%] bg-gradient-to-b from-slate-800 from-40% to-slate-900 backdrop-blur-sm flex flex-col justify-start items-center px-3 pt-3">
              <p className="text-slate-100 text-left text-xs sm:text-sm lg:text-sm 2xl:text-lg mb-2 w-[90%] break-words">
                {proj.description}
              </p>
              <div className="flex flex-wrap justify-center gap-1.5 mt-1">
                {proj.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="px-1.5 py-0.5 text-[10px] sm:text-xs lg:text-xs 2xl:text-sm font-semibold text-slate-100 outline outline-[1.5px] outline-rose-400/30
                      hover:outline-rose-400/60 hover:text-white duration-500 rounded-lg shadow shadow-rose-400 drop-shadow-md"
                  >
                    {tool}
                  </span>
                ))}
              </div>
              {proj.github && (
                <div className="relative h-full">
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-black text-2xl sm:text-3xl rounded-lg p-1"
                  >
                    <div
                      className="relative bg-gradient-to-b from-teal-200 from-50% to-teal-400
                              rounded-full h-[2rem] w-[2rem] sm:h-[3rem] sm:w-[3rem] 
                              flex items-center justify-center hover:scale-110 duration-500 transition-all ease-in-out"
                    ></div>
                    <div className="absolute inset-0 flex items-center justify-center text-lg sm:text-3xl pointer-events-none">
                      <PiCode />
                    </div>
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
