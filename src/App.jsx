import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Experience from "./pages/Experience";
import genik from './assets/genik.jpeg';
import techno from './assets/techno.jpeg';
import ProjectsPage from "./pages/ProjectsPage";
import Contact from "./pages/Contact";

function App() {
  const experiences = [
    {
      logo: techno, 
      company: 'Sairam Techno Incubator Foundation',
      role: 'Software Developer Intern',
      description: 'Worked on developing the frontend of a web application',
      duration: 'June 2023 - Aug 2023',
    },
    {
      logo: genik,
      company: 'Genik Technologies',
      role: 'Full Stack Devloper Intern',
      description: 'Worked on developing a web application and creating the server for the backend of the application',
      duration: 'Jan 2023 - May 2023',
    },
  ];
  return (
    <div className="bg-background h-screen">
      <Navbar />
      <div className=" bg-background">
        {" "}
        
        <Hero />
        <About />

        <ProjectsPage />
        <Experience experiences={experiences} />
        <Contact />
      </div>
    </div>
  );
}

export default App;
