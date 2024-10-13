import React from 'react';

function ProjectCard({ src, title, description, link }) {
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className='h-[350px] w-[250px] flex flex-col justify-between items-center rounded-md bg-transparent border bg-secondary border-accent bg-opacity-30 backdrop-blur-sm hover:scale-105 transition ease-in-out'
    >
      <div className='m-2'>
        {/* Optional: Add any extra visual elements here */}
      </div>
      <div className='flex flex-col justify-center items-center text-center text-white h-full'>
        <img src={src} alt={title} className='mb-4 h-[160px] w-[160px] object-fit' />
        <p className='font-DmSerif text-xl text-primary text-balance'>{title}</p>
        <p className='text-sm px-2 overflow-hidden mt-2 font-Ubuntu text-wrap'>
          {description}
        </p>
      </div>
    </a>
  );
}

export default ProjectCard;
