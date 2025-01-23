// import { useState } from "react";

import "./App.css";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import { Route, Routes } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor";
import ObserverProvider from "./components/ObserverProvider";

function App() {
  return (
    <ObserverProvider>
      <AnimatedCursor
        innerSize={30}
        outerSize={30}
        innerScale={0.4}
        outerScale={1}
        trailingSpeed={1}
        innerStyle={{
          backdropFilter: "blur(2px)",
          backgroundColor: "var(--cursor-inner-bg)", // Dynamic inner color
        }}
        outerStyle={{
          backgroundColor: "var(--cursor-outer-bg)", // Dynamic outer color
          border: "2px solid var(--cursor-outer-border)", // Dynamic border color
        }}
      />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </ObserverProvider>
  );
}

export default App;
