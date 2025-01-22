import React from "react";
import { TbMail } from "react-icons/tb";

export default function Nav() {
    function NavButton(children: React.ReactNode, tw?: string){
        return (
            <button className={`${tw} hover:bg-gray-700 h-16 px-4 ease-in-out transition-all duration-500 
          text-shadow-rose-300 hover:text-shadow hover:-text-shadow-x-3 hover:text-shadow-y-1 hover:text-shadow-blur-1`}>
            {children}
          </button>
        )
    }

  return (
    <div className="fixed left-1/2 transform -translate-x-1/2 w-full bottom-10 ">
      <div className="flex justify-around items-center">
        <div className="bg-gray-500/70 backdrop-blur-sm w-fit h-16 rounded-full flex items-center font-semibold text-sm md:text-lg xl:text-xl 2xl:text-2xl text-white shadow-lg">
          {NavButton("PROJECTS", "rounded-l-full")}
          {NavButton("EXPERIENCE")}
          {NavButton("HOBBIES")}
          {NavButton(<TbMail className="text-2xl" />, "rounded-r-full")}
        </div>
      </div>
    </div>
  );
}