import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PiCode, PiHandTapDuotone, PiCursorClickDuotone } from "react-icons/pi";
import sanjiImage from "../assets/images/sanji_redsuit.jpg";
import useIsTouchdevice from "../hooks/useIsTouchDevice";

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
      name: "Portfolio Website",
      image: sanjiImage,
      description: "A portfolio website showcasing my skills and projects.",
      tools: ["React", "TailwindCSS", "TypeScript"],
      website: "https://portfolio.com",
      github: "https://github.com/username/portfolio",
    },
    {
      name: "E-commerce Platform",
      image: "https://via.placeholder.com/300",
      description:
        "An e-commerce platform with cart functionality, payment integration, and seamless user experience. Designed to support modern e-commerce operations.",
      tools: ["Next.js", "Node.js", "MongoDB"],
      website: "https://ecommerce.com",
      github: "https://github.com/username/ecommerce",
    },
    {
      name: "Blog CMS",
      image: "https://via.placeholder.com/300",
      description:
        "A content management system for creating and managing blog posts with markdown support and dynamic previews.",
      tools: ["Gatsby", "GraphQL", "Netlify"],
      github: "https://github.com/username/blogcms",
    },
  ];

  useEffect(() => {
    if (!sectionRef.current || !trackRef.current) return;

    const trackEl = trackRef.current;
    const totalWidth = trackEl.scrollWidth;
    const viewportWidth = window.innerWidth;

    const scrollDistance = totalWidth + viewportWidth;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${scrollDistance}`,
        pin: true,
        scrub: 1,
        markers: false,
      },
    });

    tl.fromTo(
      trackEl,
      { x: viewportWidth },
      {
        x: -totalWidth - 100,
        ease: "none",
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div ref={sectionRef} className="px-5 pt-5 pb-10 overflow-hidden">
      <h2 className="text-slate-100 text-4xl sm:text-5xl md:text-4xl mb-10 text-center">
        PROJECTS
      </h2>

      {/* HORIZONTAL TRACK */}
      <div
        ref={trackRef}
        className="flex gap-40 items-center h-[40rem] sm:h-[50rem] lg:h-[35rem] 2xl:h-[45rem] w-[90rem] sm:w-[140rem] lg:w-[120rem] 2xl:w-[130rem]"
      >
        {projects.map((proj, i) => (
          <div
            key={i}
            className="group inline-block w-full h-full
              outline outline-[3px] outline-slate-400 hover:outline-teal-400 duration-300
              rounded-lg shadow-md shadow-slate-800 overflow-hidden"
          >
            {/* Image */}
            <a
              href={proj.website || undefined} // Set `href` only if `proj.website` exists
              target={proj.website ? "_blank" : undefined} // Open in a new tab if clickable
              rel={proj.website ? "noopener noreferrer" : undefined} // Set rel only if clickable
              className={`relative block h-[50%] w-full overflow-hidden ${
                proj.website ? "cursor-pointer" : "pointer-events-none"
              }`}
            >
              <div
                className="w-full h-full bg-cover bg-center transition-transform 
      duration-[1200ms] ease-in-out group-hover:scale-110 origin-center"
                style={{ backgroundImage: `url(${proj.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70  to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 pointer-events-none" />
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
            <div className="pt-4 h-[50%] bg-gradient-to-b from-slate-600/70 from-50% to-slate-800/70 backdrop-blur-sm flex flex-col justify-start items-center">
              <p
                className="text-slate-100 text-center text-sm sm:text-lg 2xl:text-xl mb-2 w-[90%] sm:w-[80%] break-words"
                style={{ overflowWrap: "break-word" }}
              >
                {proj.description}
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {proj.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 text-xs sm:text-sm 2xl:text-lg font-semibold text-slate-100 bg-gradient-to-b from-slate-600 from-50% to-slate-700
                      rounded-xl shadow shadow-slate-400 drop-shadow-md"
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
