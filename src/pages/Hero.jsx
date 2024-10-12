import React from "react";

function Hero() {
  return (
    <div className="flex flex-col justify-center items-center h-screen  bg-center bg-[url('./axiom-pattern.png')]  text-center gap-4">
      <p className="text-white p-2 font-Abril text-xl">Hi, I'm</p>
      <p className="text-primary font-bold text-7xl italic font-RockSalt">Guru Sanjay R K</p>

      <p className="text-white font-Abril text-xl">I'm a</p>
      <p className="font-RockSalt text-4xl text-primary font-bold">Full Stack Developer</p>
    </div>
  );
}

export default Hero;
