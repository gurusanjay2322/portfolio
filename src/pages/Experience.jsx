import React from 'react';
import backgroundImage from '../assets/backgrounds/pattern2.png';
const Experience = ({ experiences }) => {
  return (
    <div className="flex flex-col justify-center items-center bg-center =h-screen"  style={{backgroundImage: `url(${backgroundImage})`}} id='Experience'  >
      <h2 className="text-2xl mt-4 md:text-5xl  text-center mb-8 text-lightPrimary dark:text-primary font-bold font-RockSalt">Experience</h2>
      <div className="w-[90vw] md:max-w-4xl mx-auto ">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center justify-between dark:bg-transparent border bg-transparent backdrop-blur-sm bg-opacity-30 bg-lightSecondary border-lightAccent dark:bg-secondary dark:border-accent dark:bg-opacity-30 dark:backdrop-blur-sm shadow-lg p-6 rounded-lg mb-8"
          >
            <img
              src={experience.logo}
              alt={`${experience.company} logo`}
              className="w-20 h-20 object-contain mr-6"
            />
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-lightPrimary dark:text-primary font-Ubuntu">{experience.company}</h3>
              <p className="text-lightText dark:text-white mt-2">{experience.role}</p>
              <p className="text-lightText dark:text-white mt-2">{experience.description}</p>
            </div>
            <p className="text-sm text-lightText dark:text-white font-oswald">{experience.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
