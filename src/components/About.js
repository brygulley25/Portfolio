import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-2xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Bryson Gulley.
            <br className="hidden lg:inline-block" />I love to build amazing
            apps and websites.
          </h1>
          <p className="mb-8 leading-relaxed">
          I am a self-taught web developer with intermediate skills in HTML, CSS, and JavaScript. I am constantly learning and striving to become an advanced developer. I have started my own web development company, helping businesses to start or grow their online presence. My passion for technology and web development has led me to pursue a career in the tech industry, where I have been for under a year and plan to gain more knowledge and experience every day.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-white-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Live projects 
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
        </div>
      </div>
    </section>
  );
}
