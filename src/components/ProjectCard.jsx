import React from 'react';

function ProjectCard({ src, title, description, link }) {
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className='h-[350px] w-[250px] flex flex-col justify-between items-center rounded-md bg-transparent backdrop-blur-sm bg-opacity-30 dark:bg-transparent border bg-lightSecondary dark:bg-secondary border-lightAccent dark:border-accent dark:bg-opacity-30 dark:backdrop-blur-sm dark:hover:scale-105 dark:transition dark:ease-in-out hover:scale-105 transition ease-in-out'
    >
      <div className='m-2'>
        {/* Optional: Add any extra visual elements here */}
      </div>
      <div className='flex flex-col justify-center items-center text-center text-lightText dark:text-white h-full'>
        <img src={src} alt={title} className='mb-4 h-[160px] w-[160px] object-fit' />
        <p className='font-DmSerif text-xl text-lightPrimary dark:text-primary text-balance'>{title}</p>
        <p className='text-sm px-2 overflow-hidden mt-2 font-Ubuntu text-wrap'>
          {description}
        </p>
      </div>
    </a>
  );
}

export default ProjectCard;
