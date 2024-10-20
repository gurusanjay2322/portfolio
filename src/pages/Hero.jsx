import React, { useEffect } from "react";
import backgroundImage from '../assets/backgrounds/axiom-pattern.png';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import './css/Hero.css';

function Hero() {
  const intro = new SplitType("#intro",{types: 'chars'});
  useGSAP(()=>{
    gsap.to('.char',{
      y: 0,
      stagger: 0.05,
      delay: 0.5,
      duration: 0.1,
    })
  })

  return (
    <section id="home">
      <div className="md:h-screen md:w-full flex flex-col justify-center items-center h-screen  bg-center  text-center gap-4" style={{backgroundImage: `url(${backgroundImage})`}}>
        <p className="text-lightText dark:text-white p-2 font-Abril text-xl">Hi, I'm</p>
        <h1 id="intro"  className="text-lightPrimary dark:text-primary font-bold text-3xl md:text-xl  italic font-RockSalt ">Guru Sanjay R K</h1> 
        <p className="text-lightText dark:text-white font-Abril text-xl">I'm a</p>
        <p className="font-RockSalt text-4xl text-lightPrimary dark:text-primary font-bold">Full Stack Developer</p>
      </div>
    </section>
  );
}

export default Hero;
