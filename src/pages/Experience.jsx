import React from 'react';

const Experience = ({ experiences }) => {
  return (
    <div className="flex flex-col justify-center items-center bg-background bg-center bg-[url('./axiom-pattern.png')] h-screen" id='Experience' >
      <h2 className="text-5xl  text-center mb-8 text-primary font-bold font-RockSalt">Experience</h2>
      <div className="max-w-4xl mx-auto ">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-transparent border bg-secondary border-accent bg-opacity-30 backdrop-blur-sm shadow-lg p-6 rounded-lg mb-8"
          >
            <img
              src={experience.logo}
              alt={`${experience.company} logo`}
              className="w-20 h-20 object-contain mr-6"
            />
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-primary font-Ubuntu">{experience.company}</h3>
              <p className="text-white mt-2">{experience.role}</p>
              <p className="text-white mt-2">{experience.description}</p>
            </div>
            <p className="text-sm text-white font-oswald">{experience.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
