import React from "react";
import { Link } from "react-router-dom";

import a from "../images/HTml.gif";


const About = () => {


 
  
  return (
    
    <div>
      <section class="text-gray-600 body-font" id="bg">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font md:text-5xl text-3xl mb-4 font-bold text-cyan-600">
              Me , Myself & I
            </h1>
            <p class="mb-8 text-sm text-white leading-relaxed">
              Welcome to my portfolio! I'm Mohammad Tayyab , a passionate
              frontend developer with 3 years of experience in the field. I
              specialize in creating beautiful and intuitive web experiences
              that engage users and deliver measurable results. <br />
              <br /> As a frontend developer, I'm skilled in a range of
              technologies, including HTML, CSS, JavaScript,Tailwind css,
              Bootstrap,React js,Github and various frontend frameworks and
              libraries. I pride myself on my attention to detail, ensuring that
              every element of a design is translated perfectly into a
              functioning website or application. I'm a strong communicator and
              collaborator, working closely with designers, project managers,
              and other developers to bring projects to life. <br />
              <br /> I'm committed to staying up-to-date with the latest trends
              and technologies in the frontend development space, and I'm always
              looking for new ways to improve my skills and deliver better
              results for my clients. Throughout my career, I've worked on a
              wide range of projects for clients in various industries, from
              small startups to large corporations. I've tackled everything from
              simple landing pages to complex web applications, and I take pride
              in delivering quality work on time and within budget. I invite you
              to take a look at my portfolio and explore some of the projects
              I've worked on. <br />
              <br /> I'm always open to new opportunities and challenges, so
              please don't hesitate to get in touch if you have a project in
              mind or just want to chat!
            </p>
            <div class="flex justify-center">
             
              <Link to={'/skill'} class="inline-flex cursor-pointer text-white font-bold bg-cyan-500 border-0 py-2  px-10 focus:outline-none hover:bg-transparent shadow-xl shadow-cyan-800 rounded text-lg">
                Have a Project?
              </Link>
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src={a}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
