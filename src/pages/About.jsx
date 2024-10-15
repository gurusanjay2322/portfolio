import React from "react";
import photo from '../assets/me.jpg';

function About() {
  return (
    <section id="About">
      <div className="h-screen flex justify-center items-center bg-center bg-[url('./pattern2.png')] ">
        <div className="flex items-center justify-center">
          <div className="w-[35%] items-center">
            <img src={photo} alt="My Photo" className="w-[400px] h-[400px] mx-auto rounded-md " />
          </div>
          <div className="w-[65%] ">
            <p className="text-lightPrimary dark:text-primary font-bold font-RockSalt text-5xl mx-auto w-[85%] mb-4">
              About Myself
            </p>
            <p className="text-left text-lightText dark:text-text text-2xl font-Ubuntu w-[85%] mx-auto">
              I am a passionate developer with a keen interest in creating
              user-centric web applications. I love working with the latest
              technologies and strive to build clean, efficient, and intuitive
              interfaces. My expertise spans various domains, including front-end
              development, web design, and problem-solving. With a focus on
              delivering seamless user experiences, I’m always eager to learn new
              skills and take on exciting challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
