import React from "react";

function Navbar() {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offsetTop = section.offsetTop - 30; 
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  else{
      console.log("Section not found");
    }
    console.log(id);
  };

  return (
    <nav className="h-55px] flex justify-center space-x-8 bg-transparent p-4 fixed top-0 left-0 w-full z-10  bg-secondary rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border-b border-primary">
      {["home", "About", "projects","Experience", "contact"].map((section) => (
        <button
        key={section}
          className="transition-all duration-300 hover:scale-125 active:scale-95 text-text text-lg hover:text-secondary font-RockSalt font-bold" 
          onClick={() => handleScroll(section)}
        >
          {section.charAt(0).toUpperCase() + section.slice(1)}
        </button>
      ))}
    </nav>
  );
}

export default Navbar;
