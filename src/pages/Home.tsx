import React from "react";
import Nav from "../components/Nav";

const Home = () => {
  return (
    <div className="relative">
      <div className="w-screen h-[140vh] sm:h-[130vh] bg-gradient-to-b from-gray-900 from-60% to-rose-900 absolute"></div>
      
      <div className="relative z-20 p-10">
        <Nav />
        <h1 className="text-rose-500 text-6xl">HELLO, IM MOHAMMED ABDULLA</h1>
      </div>

      <div className="relative z-10 w-screen h-[100vh] bg-rose-900 rounded-[50%] rounded-b-none sm:rounded-[50%] sm:rounded-b-none mt-[30vh] sm:mt-[60vh]">

      </div>
    </div>
  );
};

export default Home;
