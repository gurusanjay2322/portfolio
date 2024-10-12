import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";

import ProjectsPage from "./pages/ProjectsPage";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="bg-background h-screen">
      <Navbar />
      <div className=" bg-background">
        {" "}
        {/* Offset for the fixed navbar */}
        <Hero />
        <About />

        <ProjectsPage />
        <Contact />
      </div>
    </div>
  );
}

export default App;
