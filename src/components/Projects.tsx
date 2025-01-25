import React from "react";
import { PiCode } from "react-icons/pi";
import sanjiImage from "../assets/images/sanji_redsuit.jpg"; // Import the image

interface ProjectProps {
  name: string;
  image: string;
  description: string;
  tools: string[];
}

function ProjectCard({
  name,
  image,
  description,
  tools,
  website,
  github,
}: ProjectProps & { website?: string; github?: string }) {
  const Wrapper = website ? "a" : "div"; // Dynamically decide the wrapper type

  return (
    <div className="flex flex-col items-center space-y-3">
      {/* Image Card */}
      <Wrapper
        {...(website
          ? { href: website, target: "_blank", rel: "noopener noreferrer" }
          : {})}
        className="relative group bg-gray-700
        w-[20rem] h-[20rem] sm:w-[25rem] sm:h-[25rem] lg:w-[40rem] lg:h-[40rem] outline outline-[3.5px] outline-gray-400 hover:outline-emerald-400 duration-500
        rounded-lg shadow-md shadow-gray-800 overflow-hidden"
      >
        {/* Image with Zoom and Move Animation */}
        <div
          className="w-full h-full bg-cover bg-center transition-transform duration-[1500ms] ease-in-out group-hover:scale-110 group-hover:translate-y-5 group-hover:translate-x-3"
          style={{ backgroundImage: `url(${image})` }}
        ></div>

        {/* Base Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-lg pointer-events-none"></div>

        {/* Hover Darkening Effect */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 rounded-lg pointer-events-none"></div>

        {/* Project Name */}
        <div className="absolute inset-0 flex items-end justify-center">
          <h3 className="text-lg sm:text-xl font-bold text-white text-center mb-3">
            {name}
          </h3>
        </div>
      </Wrapper>

      {/* Bottom Section */}
      <div
        className="flex flex-col items-center w-full h-fit p-2 bg-gradient-to-b from-gray-600 to-gray-800 rounded-lg shadow-md shadow-gray-800
      outline outline-[3.5px] outline-gray-400 hover:outline-indigo-300 duration-500"
      >
        {/* Description */}
        <p className="text-sm sm:text-lg text-gray-100 text-center w-[90%] sm:w-[80%] lg:w-[70%]">
          {description}
        </p>

        {/* Tools Used */}
        <div className="flex flex-wrap justify-center gap-2 mt-2">
          {tools.map((tool, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs sm:text-base font-semibold text-gray-100 bg-gradient-to-b 
            from-slate-600 from-70% to-slate-700 rounded-full shadow shadow-gray-500 drop-shadow-md"
            >
              {tool}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 mt-4 ">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black text-2xl sm:text-5xl rounded-lg p-1"
            >
              <div className="bg-gradient-to-b from-indigo-200 from-40% to-emerald-300 rounded-full h-[2rem] w-[2rem] sm:h-[4rem] sm:w-[4rem] flex items-center justify-center">
                <PiCode/>
              </div>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const projects = [
    {
      name: "Portfolio Website",
      image: sanjiImage, // Imported image
      description: "A portfolio website showcasing my skills and projects.",
      tools: ["React", "TailwindCSS", "TypeScript"],
      website: "https://portfolio.com", // Add website link
      github: "https://github.com/username/portfolio", // Add GitHub link
    },
    {
      name: "E-commerce Platform",
      image: "https://via.placeholder.com/300", // External image URL
      description:
        "An e-commerce platform with cart functionality and payment integration.",
      tools: ["Next.js", "Node.js", "MongoDB"],
      website: "https://ecommerce.com",
      github: "https://github.com/username/ecommerce",
    },
    {
      name: "Blog CMS",
      image: "https://via.placeholder.com/300", // External image URL
      description:
        "A content management system for creating and managing blog posts.",
      tools: ["Gatsby", "GraphQL", "Netlify"],
      website: "",
      github: "https://github.com/username/blogcms",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-10 mt-20 px-5">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          name={project.name}
          image={project.image}
          description={project.description}
          tools={project.tools}
          website={project.website}
          github={project.github}
        />
      ))}
    </div>
  );
}
