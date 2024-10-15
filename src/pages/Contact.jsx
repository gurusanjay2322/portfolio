import React, { useRef } from "react";
import emailjs from "emailjs-com";
import Lottie from "react-lottie";
import data from "../assets/data.json";
import backgroundImage from '../assets/backgrounds/axiom-pattern.png';
import { FaGithubSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pech1kl",
        "template_zye65av",
        form.current,
        "i2luGLQyGsOubwwEU"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message.");
        }
      );

    e.target.reset();
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: data,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div
      className="h-screen flex flex-col justify-center items-center bg-center " style={{backgroundImage: `url(${backgroundImage})`}}
      id="contact"
    >
      <h1 className="font-bold font-RockSalt text-lightPrimary dark:text-primary text-5xl mb-6 text-center">
        Let's Connect
      </h1>

      <div className="flex justify-center items-center w-[70vw] max-w-7x dark:bg-transparent border bg-lightSecondary border-lightAccent dark:bg-secondary dark:border-accent dark:bg-opacity-30 dark:backdrop-blur-sm rounded-lg bg-transparent backdrop-blur-sm bg-opacity-30">

        <div className="w-1/2 flex justify-center">
          <Lottie options={defaultOptions} height={400} width={400} />
        </div>

 
        <div className="w-1/2 p-8 ">
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="mb-1 font-medium font-Ubuntu text-lightText dark:text-white"
                
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="user_name"
                required
                className="p-2 border rounded-lg border-lightAccent dark:border-accent bg-transparent text-lightText dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />  
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="mb-1 font-medium font-Ubuntu text-lightText dark:text-white"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="p-2 border rounded-lg border-lightAccent dark:border-accent bg-transparent text-lightText dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="message"
                className="mb-1 font-medium font-Ubuntu text-lightText dark:text-white"
              >
                Comments
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="p-2 border rounded-lg border-lightAccent dark:border-accent bg-transparent text-lightText dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-lightSecondary dark:bg-secondary bg-opacity-50 border border-accent text-lightText dark:text-white py-2 rounded-lg  hover:bg-lightAccent dark:hover:bg-accent transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <div className="mt-8 text-center">
        <h2 className="text-xl font-bold mb-4 text-lightPrimary dark:text-primary font-RockSalt">
          Follow Me
        </h2>
        <div className="flex justify-center space-x-6">
          <a href="https://www.linkedin.com/in/guru-sanjay-65b7a5316/" target="_blank">
            <FaLinkedin className="text-4xl text-black dark:text-white hover:text-lightSecondary dark:hover:text-secondary transition duration-300" />
          </a>
          <a href="https://github.com/gurusanjay2322" target="_blank">
            <FaGithubSquare className="text-4xl text-black dark:text-white hover:text-lightSecondary dark:hover:text-secondary transition duration-300" />
          </a>
          <a href="https://www.instagram.com/__.gs.__22" target="_blank">
            <FaInstagram className="text-4xl text-black dark:text-white hover:text-lightSecondary dark:hover:text-secondary transition duration-300" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
