import React from 'react';

function Navbar() {
  return (
    <nav className="bg-transparent p-4 fixed top-0 left-0 w-full z-10">
      <ul className="flex justify-center space-x-8">
        <li>
          <a href="/" className="text-text text-lg hover:text-secondary">Home</a>
        </li>
        <li>
          <a href="about" className="text-text text-lg hover:text-secondary">About</a>
        </li>
        <li>
          <a href="projects" className="text-text text-lg hover:text-secondary">Projects</a>
        </li>
        <li>
          <a href="contact" className="text-text text-lg hover:text-secondary">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
