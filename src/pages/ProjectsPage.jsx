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
import backgroundImage from '../assets/backgrounds/axiom-pattern.png';
function ProjectsPage() {
  const scrollRef = useRef(null);

  const projectData = [
    {
      src: movies,
      title: 'Movies-GS',
      description: 'A simple application developed using react springboot and mongodb to view and review movies',
      link: 'https://movies-gs.vercel.app',
    },
    {
      src: ieee,
      title: 'IEEE SMC Student Branch Sairam',
      description: 'The website of IEEE SMC Student Branch Sairam',
      link: 'https://edu.ieee.org/sairamin-smc',
    },
    {
      src: cc,
      title: 'Code Craft Hackathon',
      description: 'The Website for 24 hours Code Craft Hackathon of Department Of Mtech CSE',
      link: 'https://code-craft.xyz', 
    },
    {
      src: innovatia,
      title: 'Innovatia 23',
      description: 'The Website for Innovatia 23 of Department Of Mtech CSE',
      link: 'https://innovatia23.tech',
    },
    {
      src: seyal,
      title: 'Seyal Foundation',
      description: 'The Website for Seyal Foundation NGO',
      link: 'https://seyalngo.org',
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
      link: 'https://github.com/gurusanjay2322/SpeechToText-Flask',
    },
  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    const scrollSpeed = 1;
    let scrollInterval;

    const autoScroll = () => {
      scrollContainer.scrollLeft += scrollSpeed;
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      }
    };

    scrollInterval = setInterval(autoScroll, 10);

    return () => {
      clearInterval(scrollInterval);
    };
  }, [projectData]);

  return (
    <section id="projects" >
      <div className="min-h-screen  items-center bg-center  bg-repeat overflow-y-auto" style={{backgroundImage: `url(${backgroundImage})`}}>
        <div className="flex justify-center pt-32">
          <h1 className="text-5xl font-RockSalt text-lightPrimary dark:text-primary font-bold">My Projects</h1>
        </div>

        {/* Scrolling container */}
        <div
          ref={scrollRef}
          className="overflow-hidden flex flex-nowrap justify-center items-center h-[calc(100vh-280px)] whitespace-nowrap"
        >
          <div className="flex flex-row gap-5 min-w-max pt-10">
            {projectData.map((project, index) => (
              <ProjectCard
                key={index}
                src={project.src}
                title={project.title}
                description={project.description}
                link={project.link}
              />
            ))}

            {/* Duplicate cards to create a continuous scrolling effect */}
            {projectData.map((project, index) => (
              <ProjectCard
                key={index + projectData.length}
                src={project.src}
                title={project.title}
                description={project.description}
                link={project.link}
              />
            ))}
          </div>
        </div>

        
      </div>
    </section>
  );
}

export default ProjectsPage;
