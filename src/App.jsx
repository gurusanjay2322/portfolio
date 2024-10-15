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
      role: 'Full Stack Developer Intern',
      description: 'Worked on developing a web application and creating the server for the backend of the application',
      duration: 'Jan 2023 - May 2023',
    },
  ];

  const components = [
    <Hero key="hero" />,
    <About key="about" />,
    <ProjectsPage key="projects" />,
    <Experience key="experience" experiences={experiences} />,
    <Contact key="contact" />,
  ];

  return (
    <div className="bg-lightBackground dark:bg-background h-screen">
      <Navbar />
      <div className="bg-lightBackground dark:bg-background">
        {components.map((Component, index) => (
          <div key={index} className={`${alternateColor(index)}`}>
            {Component}
          </div>
        ))}
      </div>
    </div>
  );
}

const alternateColor = (index) => (index % 2 === 0 ? "bg-lightBackground dark:bg-background" : "bg-lightBackground2 dark:bg-background2");

export default App;
