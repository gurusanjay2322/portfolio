import React, { useEffect } from "react";
import { FaReact } from "react-icons/fa";
import backgroundImage from '../assets/backgrounds/pattern2.png';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import {ScrollTrigger} from 'gsap/all';
import SplitType from "split-type";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useRecoilState } from "recoil";
import darkmode from "../Atom";

function Exp() {
  const [isDark, setIsDark] = useRecoilState(darkmode);
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(()=>{
    const about = new SplitType("#expText", {types: "chars"});
    const timeline = gsap.timeline({
      scrollTrigger: "#Expirience"
    });
    // timeline.from("#tag", { opacity: 0, duration: 2, delay: 1.5 });

    timeline.to(".char", {
      y: 0,
      stagger: 0.05,
      delay: 0.1,
      duration: 0.1,
    });
  })
 
  useEffect(() => {
    console.log("Dark mode:", isDark);
  }, [isDark]);

  const experienceData = [
    {
      id: 1,
      date: "Mar 2024 - Apr 2024",
      title: "Front End Developer",
      subtitle: "Sri Sairam Techno Incubator",
      description: "ReactJS, TailwindCSS, Sass, Integration, MySQL",
      icon: <FaReact />,
    },
    {
      id: 2,
      date: "Jul 2024 - Aug 2024",
      title: "Full Stack Developer",
      subtitle: "Genik Technologies",
      description: "ReactJS, NodeJS, ExpressJS, Firebase, Integration, Firestore",
      icon: <FaReact />,
    },
  ];

  return (
    <div
      className={`flex flex-col justify-center items-center bg-center h-screen ${isDark ? "bg-dark" : "bg-light"}`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
      id="Experience" 
    >
      <div className="mb-10"> 
        <p id="expText" className="text-xl md:text-4xl font-bold text-lightPrimary dark:text-primary font-RockSalt">
          Experience
        </p>
      </div>
      <VerticalTimeline lineColor={isDark ? "white" : "black"}>
        {experienceData.map((exp) => (
          <VerticalTimelineElement
            key={exp.id}
            className="vertical-timeline-element--work"
            contentStyle={{
              background: `${isDark ? "rgb(46, 7, 63)" : "rgb(255, 255, 255)"}`, // White background for light mode
              boxShadow: `${isDark ? "0 5px 20px 0 rgb(90,49,106)" : "0 5px 20px 0 rgb(127, 27, 97)"}`,
              color: `${isDark ? "#fff" : "#000"}`, // Text color based on mode
              border: "1px solid rgba(255, 255, 255, 0.18)",
              backdropFilter: "blur(1px)",
              borderRadius: "10px",
            }}
            contentArrowStyle={{ borderRight: `7px solid ${isDark ? "rgb(33, 150, 243)" : "rgb(127, 27, 97)"}` }}
            date={exp.date}
            dateClassName="font-oswald text-2xl"
            iconStyle={{ background: "rgb(127, 27, 97)", color: "#fff", borderColor: "#000" }}
            icon={exp.icon}
          >
            <h3 className="vertical-timeline-element-title text-xl font-semibold text-lightPrimary dark:text-primary font-Ubuntuf">
              {exp.title}
            </h3>
            <h4 className="vertical-timeline-element-subtitle text-lightText dark:text-white mt-2">
              {exp.subtitle}
            </h4>
            <p className="text-lightText dark:text-white mt-2">
              {exp.description}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}

export default Exp;
