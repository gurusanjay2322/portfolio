import React from 'react';

function ProjectCard({ src, title, description, link }) {
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className='h-[350px] w-[250px] flex flex-col justify-between items-center rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 cursor-pointer hover:scale-105 transition ease-in-out'
    >
      <div className='m-2'>
        {/* Optional: Add any extra visual elements here */}
      </div>
      <div className='flex flex-col justify-center items-center text-center text-white h-full'>
        <img src={src} alt={title} className='mb-4 h-[160px] w-[160px] object-fit' />
        <p className='font-DmSerif text-balance'>{title}</p>
        <p className='text-sm px-2 overflow-hidden mt-2 text-wrap'>
          {description}
        </p>
      </div>
    </a>
  );
}

export default ProjectCard;
