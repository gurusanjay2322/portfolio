import React, { useRef, useEffect } from "react";
import ieee from '../assets/ieee.jpg';
import movies from '../assets/movies.png';
import ProjectCard from '../components/ProjectCard';
import cc from '../assets/cc.png';
import seyal from '../assets/seyal.png';
import innovatia from '../assets/innovatia.png';
import valo from '../assets/valo.jpg';
import firebase from '../assets/firebase.png';
import flask from '../assets/flask.png';

function ProjectsPage() {
  const scrollRef = useRef(null);

  const projectData = [
    {
      src: movies,
      title: 'Movies-GS',
      description: 'A simple application developed using react springboot and mongodb to view and review movies',
      link: 'https://movies-gs.vercel.app', // Add your link here
    },
    {
      src: ieee,
      title: 'IEEE SMC Student Branch Sairam',
      description: 'The website of IEEE SMC Student Branch Sairam',
      link: 'https://edu.ieee.org/sairamin-smc', // Add your link here
    },
    {
      src: cc,
      title: 'Code Craft Hackathon',
      description: 'The Website for 24 hours Code Craft Hackathon of Department Of Mtech CSE',
      link: 'https://code-craft.xyz', // Add your link here
    },
    {
      src: innovatia,
      title: 'Innovatia 23',
      description: 'The Website for Innovatia 23 of Department Of Mtech CSE',
      link: 'https://innovatia23.tech', // Add your link here
    },
    {
      src: seyal,
      title: 'Seyal Foundation',
      description: 'The Website for Seyal Foundation NGO',
      link: 'https://seyalngo.org', // Add your link here
    },
    {
      src: valo,
      title: 'Valobot',
      description: 'A chatbot based on valorant developed using botpress and react',
      link: 'https://gurusanjay2322.github.io/Valobot-botpress/',
    },
    {
      src: firebase,
      title: 'Firebase Analytics Setup',
      description: 'A express server for getting the analytics from your firebase dashboard',
      link: 'https://github.com/gurusanjay2322/firebase-analytics-express',
    },
    {
      src: flask,
      title: 'Speech To Text Server',
      description: 'A flask server for converting speech to text',
      link: 'https://github.com/gurusanjay2322/SpeechToText-Flask', // Add your link here
    },
  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      // Clone the project data to create a seamless scrolling effect
      const cloneProjects = [...projectData, ...projectData];

      // Create HTML elements for the project cards
      cloneProjects.forEach((project, index) => {
        const card = document.createElement('div');
        card.className = 'flex-shrink-0 w-64'; // Set width as needed
        card.innerHTML = `
          <a href="${project.link}" class="flex flex-col justify-between items-center h-full text-white no-underline" target="_blank">
            <img src="${project.src}" alt="${project.title}" class="w-full h-48 object-cover" />
            <h2 class="text-xl">${project.title}</h2>
            <p class="text-gray-300">${project.description}</p>
          </a>
        `;
        scrollContainer.appendChild(card);
      });

      const scrollSpeed = 1; // Adjust this value to change the speed of auto-scrolling
      let scrollInterval;

      const autoScroll = () => {
        scrollContainer.scrollLeft += scrollSpeed;

        // Loop the scroll if it exceeds the width of the container
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = scrollContainer.scrollLeft - (scrollContainer.scrollWidth / 2);
        }
      };

      scrollInterval = setInterval(autoScroll, 10); // Adjust the interval for smoother effect

      return () => {
        clearInterval(scrollInterval);
      };
    }
  }, []);

  return (
    <div className="min-h-screen bg-center bg-[url('./axiom-pattern.png')] bg-repeat overflow-y-auto">
      {/* Horizontal scroll container */}
      <div className="flex justify-center pt-16">
        <h1 className="text-white text-5xl font-DmSerif">My Projects</h1>
      </div>

      <div 
        ref={scrollRef} 
        className="overflow-x-hidden flex flex-nowrap h-[calc(100vh-280px)] whitespace-nowrap"
      >
        <div className="flex flex-row gap-5 min-w-max pt-10">
          {projectData.map((project, index) => (
            <ProjectCard
              key={index}
              src={project.src}
              title={project.title}
              description={project.description}
              link={project.link} // Pass the link to the ProjectCard
            />
          ))}
          {/* Clone the project data to create the infinite effect */}
          {projectData.map((project, index) => (
            <ProjectCard
              key={index + projectData.length} // Ensure unique keys
              src={project.src}
              title={project.title}
              description={project.description}
              link={project.link} // Pass the link to the ProjectCard
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
