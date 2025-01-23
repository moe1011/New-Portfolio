import React from "react";

export default function Projects() {
  return (
    <div className="flex flex-col items-center   text-white mt-20 space-y-5">
      <div className="intersect:motion-preset-fade-lg bg-gray-700 w-[85vw] md:w-[80vw] h-[13rem] sm:h-[17rem] md:h-[20rem] flex items-center rounded-lg px-5 shadow-md shadow-gray-800 ">
        <div className="w-[12rem] sm:w-[15rem] md:w-[20rem] h-[10rem] sm:h-[12rem] md:h-[15rem] bg-gray-500 rounded-xl"></div>
      </div>
      <div className="intersect:motion-preset-fade-lg bg-gray-700 w-[85vw] md:w-[80vw] h-[13rem] sm:h-[17rem] md:h-[20rem] flex items-center rounded-lg px-5 shadow-md shadow-gray-800">
        <div className="w-[12rem] sm:w-[15rem] md:w-[20rem] h-[10rem] sm:h-[12rem] md:h-[15rem] bg-gray-500 rounded-xl"></div>
      </div>
    </div>
  );
}
