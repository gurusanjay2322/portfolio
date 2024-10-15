import React, { useState, useEffect } from "react";
import DarkModeToggle from "./DarkMode";
import darkmode from "../Atom";

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offsetTop = section.offsetTop - 30;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    } else {
      console.log("Section not found");
    }
    console.log(id);
  };

  const handleScrollEvent = () => {
    const sections = ["home", "About", "projects", "Experience", "contact"];
    let currentSection = "home";

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const sectionTop = element.offsetTop - 50; // Adjust for offset
        const sectionHeight = element.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          currentSection = section;
        }
      }
    });

    setActiveSection(currentSection);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollEvent);
    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);

  return (
    <nav className="h-55px flex justify-center space-x-8 bg-transparent p-4 fixed top-0 left-0 w-full z-10 bg-lightSecondary border-b-lightAccent dark:bg-secondary rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border-b dark:border-primary dark:bg-clip-padding dark:backdrop-filter dark:backdrop-blur-sm dark:bg-opacity-20">
      {["home", "About", "projects", "Experience", "contact"].map((section) => (
        <button
          key={section}
          className={`transition-all duration-300 active:scale-95 text-lightText dark:text-text text-lg font-RockSalt font-bold ${
            activeSection === section
              ? "scale-125 dark:text-secondary text-lightSecondary" // Keep scaled up if active
              : "hover:scale-125 hover:text-lightSecondary dark:hover:text-secondary" // Hover effect if not active
          }`}
          onClick={() => handleScroll(section)}
        >
          {section.charAt(0).toUpperCase() + section.slice(1)}
        </button>
      ))}
      <DarkModeToggle />
    </nav>
  );
}

export default Navbar;
