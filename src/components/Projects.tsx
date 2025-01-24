import React from "react";
import sanjiImage from "../assets/images/sanji_redsuit.jpg"; // Import the image

interface ProjectProps {
  name: string;
  image: string;
  description: string;
  tools: string[];
}

function ProjectCard({ name, image, description, tools }: ProjectProps) {
  return (
    <div className="flex flex-col items-center space-y-3">
      {/* Image Card */}
      <div
        className="relative group bg-gray-700 
        w-[30rem] h-[30rem] sm:w-[25rem] sm:h-[25rem] lg:w-[40rem] lg:h-[40rem] outline outline-[3px] outline-gray-500
        rounded-lg shadow-md shadow-gray-800 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
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
      </div>

      {/* Description */}
      <p className="text-sm sm:text-base text-gray-300 text-center w-[90%] sm:w-[80%] lg:w-[70%]">
        {description}
      </p>

      {/* Tools Used */}
      <div className="flex flex-wrap justify-center gap-2 mt-2">
        {tools.map((tool, index) => (
          <span
            key={index}
            className="px-2 py-1 text-xs font-semibold text-gray-100 bg-gray-600 rounded-full shadow-sm"
          >
            {tool}
          </span>
        ))}
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
    },
    {
      name: "E-commerce Platform",
      image: "https://via.placeholder.com/300", // External image URL
      description:
        "An e-commerce platform with cart functionality and payment integration.",
      tools: ["Next.js", "Node.js", "MongoDB"],
    },
    {
      name: "Blog CMS",
      image: "https://via.placeholder.com/300", // External image URL
      description:
        "A content management system for creating and managing blog posts.",
      tools: ["Gatsby", "GraphQL", "Netlify"],
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
        />
      ))}
    </div>
  );
}
