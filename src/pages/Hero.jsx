import React from "react";

function Hero() {

  return (
    <section id="home">
      <div className="flex flex-col justify-center items-center h-screen  bg-center bg-[url('./axiom-pattern.png')]  text-center gap-4">
        <p className="text-lightText dark:text-white p-2 font-Abril text-xl">Hi, I'm</p>
        <p className="text-lightPrimary dark:text-primary font-bold text-7xl italic font-RockSalt">Guru Sanjay R K</p>
        <p className="text-lightText dark:text-white font-Abril text-xl">I'm a</p>
        <p className="font-RockSalt text-4xl text-lightPrimary dark:text-primary font-bold">Full Stack Developer</p>
      </div>
    </section>
  );
}

export default Hero;
