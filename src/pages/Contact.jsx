import React, { useRef } from "react";
import emailjs from "emailjs-com";
import Lottie from "react-lottie";
import data from "../assets/data.json";
import { CiInstagram, CiLinkedin } from "react-icons/ci";
import { FaGithubSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pech1kl",
        "template_rxdp93y",
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
      className="h-screen flex flex-col justify-center items-center bg-center bg-[url('./axiom-pattern.png')]"
      id="contact"
    >
      <h1 className="font-bold font-RockSalt text-primary text-5xl mb-6 text-center">
        Let's Connect
      </h1>

      <div className="flex justify-center items-center w-[70vw] max-w-7x bg-transparent border bg-secondary border-accent bg-opacity-30 backdrop-blur-sm rounded-lg">

        <div className="w-1/2 flex justify-center">
          <Lottie options={defaultOptions} height={400} width={400} />
        </div>

 
        <div className="w-1/2 p-8 ">
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="mb-1 font-medium font-Ubuntu text-white"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="user_name"
                required
                className="p-2 border rounded-lg border-accent bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="mb-1 font-medium font-Ubuntu text-white"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="user_email"
                required
                className="p-2 border rounded-lg border-accent bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="message"
                className="mb-1 font-medium font-Ubuntu text-white"
              >
                Comments
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="p-2 border rounded-lg border-accent bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-secondary bg-opacity-50 border border-accent text-white py-2 rounded-lg hover:bg-accent transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <div className="mt-8 text-center">
        <h2 className="text-xl font-bold mb-4 text-primary font-RockSalt">
          Follow Me
        </h2>
        <div className="flex justify-center space-x-6">
          <a href="https://www.linkedin.com/in/guru-sanjay-65b7a5316/" target="_blank">
            <FaLinkedin className="text-4xl text-white hover:text-secondary transition duration-300" />
          </a>
          <a href="https://github.com/gurusanjay2322" target="_blank">
            <FaGithubSquare className="text-4xl text-white hover:text-secondary transition duration-300" />
          </a>
          <a href="https://www.instagram.com/__.gs.__22" target="_blank">
            <FaInstagram className="text-4xl text-white hover:text-secondary transition duration-300" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
