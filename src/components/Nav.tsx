import React from "react";
import { TbMail } from "react-icons/tb";

export default function Nav({
  executeScroll,
}: {
  executeScroll: (section: string) => void;
}) {
  const buttons = [
    { label: "PROJECTS", section: "projects", extraClass: "rounded-l-full" },
    { label: "EXPERIENCE", section: "experience" },
    { label: "HOBBIES", section: "hobbies" },
    {
      label: <TbMail className="text-xl md:text-3xl" />,
      section: "contact",
      extraClass: "rounded-r-full hover:text-rose-400",
    },
  ];

  return (
    <div className="fixed left-1/2 transform -translate-x-1/2 bottom-14 sm:bottom-10 z-50">
      <div
        className="bg-slate-700/70 backdrop-blur-sm w-fit h-16 rounded-full flex items-center font-semibold 
        text-xs md:text-base xl:text-lg 2xl:text-xl text-slate-100 shadow-slate-300 shadow drop-shadow-lg"
      >
        {buttons.map(({ label, section, extraClass = "" }, idx) => (
          <button
            key={idx}
            onClick={() => executeScroll(section)}
            className={`hover:bg-slate-800 h-16 px-3 md:px-4 ease-in-out duration-500 
              text-shadow-rose-400 hover:text-shadow hover:-text-shadow-x-2 hover:text-shadow-y-1 hover:text-shadow-blur-1 ${extraClass}`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}