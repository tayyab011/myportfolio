import { Animate, initTE } from "tw-elements";
import React from 'react';
import a from '../images/HTml.gif';
import me from '../images/IMG_20230415_125927-removebg-preview.png';
import { Link } from 'react-router-dom';


initTE({ Animate });


const Home = () => {
  
  
    return (
      <div id="bg" >

        <section class="text-gray-600 body-font">
          <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 pb-16 md:mb-0">
              <img
                class="object-cover object-center rounded"
                alt="hero"
                src={me}
              />
            </div>
            <div class="lg:flex-grow md:w-1/2 lg:pl-20  flex flex-col md:items-start md:text-right items-center text-center">
              <h1 class="title-font text-2xl text-right md:pl-16 lg:pl-60 md:text-4xl mb-4 font-bold text-cyan-600">
                Hi, I am Md Tayyab
                <br class="hidden lg:inline-block" />
                Frontend Developer <br />
                React js Developer
              </h1>
              <p
                class="mb-8 text-white text-sm text-right leading-relaxed"
                data-te-animation-on-scroll="repeat"
              >
                Welcome to my world of web development wizardry! I'm a
                22-year-old frontend web developer hailing from the vibrant
                country of Bangladesh. I've always been fascinated with the art
                of coding, and my passion has led me to complete coding
                bootcamps and courses, and pursue a CS degree at Institute of
                Science And Technology. <br /> <br /> I've brought my ideas to
                life through numerous personal projects, showcasing my skills in
                creating dynamic and responsive designs with intuitive user
                experiences. <br />
                <br />
                My expertise in the field of web development is complemented by
                my thirst for knowledge and constant desire to learn and grow.
                I'm always up for a challenge and look forward to collaborating
                with other talented minds to create visually stunning and
                impactful websites that leave a lasting impression. So, come
                aboard and let's create some magic together! .
              </p>
              <div class="flex justify-center">
                <Link
                  to={"/contact"}
                  class="inline-flex text-white bg-cyan-500 border-0 py-2 ml-48 px-10 focus:outline-none hover:bg-transparent shadow-xl shadow-cyan-800 rounded text-lg"
                >
                  Get in touch
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/*Portfolio */}
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto flex flex-wrap">
            <h2 class="md:text-5xl text-2xl text-cyan-500 font-medium title-font font-semibold mb-2 md:w-2/5">
              My portfolio
            </h2>
            <div class="md:w-3/5 md:pl-6">
              <p class="leading-relaxed text-base text-white">
                A small gallery of recent projects chosen by me. I've done them
                all together with amazing people from companies around the
                globe. It's only a drop in the ocean compared to the entire
                list. Interested to see some more?{" "}
                <Link to={"/project"} className=" text-cyan-300 underline">
                  Visit my work page.
                </Link>
              </p>
            </div>
          </div>
        </section>
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto flex flex-wrap">
            <div class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
              <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div class="flex-shrink-0 w-5 h-5 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-cyan-500 text-white relative z-10 title-font font-bold text-sm ">
                1
              </div>
              <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div class="flex-shrink-0 w-16 h-8 text-indigo-500 rounded-full inline-flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="300"
                    height="300"
                    viewBox="0 0 512 512"
                  >
                    <title>ionicons-v5_logos</title>
                    <path
                      d="M64,32,98.94,435.21,255.77,480,413,435.15,448,32ZM372,164H188l4,51H368L354.49,366.39,256,394.48l-98.68-28L150.54,289H198.8l3.42,39.29L256,343.07l53.42-14.92L315,264H148L135.41,114.41l240.79,0Z"
                      fill="#ff8000"
                    ></path>
                  </svg>
                </div>
                <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 class="font-bold text-3xl title-font text-white mb-1 ">
                    Html
                  </h2>
                </div>
              </div>
            </div>

            <div class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
              <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div class="flex-shrink-0 w-5 h-5 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-cyan-500 text-white relative z-10 title-font font-bold text-sm ">
                2
              </div>
              <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div class="flex-shrink-0 w-16 h-8 text-indigo-500 rounded-full inline-flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="512"
                    height="512"
                    viewBox="0 0 512 512"
                  >
                    <title>ionicons-v5_logos</title>
                    <path
                      d="M64,32,99,435.22,255.77,480,413,435.15,448,32ZM354.68,366.9,256.07,395l-98.46-28.24L150.86,289h48.26l3.43,39.56,53.59,15.16.13.28h0l53.47-14.85L315.38,265H203l-4-50H319.65L324,164H140l-4-49H376.58Z"
                      fill="blue"
                    ></path>
                  </svg>
                </div>
                <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 class="title-font text-white mb-1 font-bold text-3xl">
                    Css
                  </h2>
                </div>
              </div>
            </div>

            <div class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
              <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div class="flex-shrink-0 w-5 h-5 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-cyan-500 text-white relative z-10 title-font font-bold text-sm ">
                3
              </div>
              <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div class="flex-shrink-0 w-16 h-8 text-indigo-500 rounded-full inline-flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="185"
                    height="185"
                    viewBox="0 0 512 512"
                    id="IconChangeColor"
                  >
                    <title>ionicons-v5_logos</title>
                    <path
                      d="M32,32V480H480V32ZM272,380c0,43.61-25.76,64.87-63.05,64.87-33.68,0-53.23-17.44-63.15-38.49h0l34.28-20.75c6.61,11.73,11.63,21.65,26.06,21.65,12,0,21.86-5.41,21.86-26.46V240h44Zm99.35,63.87c-39.09,0-64.35-17.64-76.68-42h0L329,382c9,14.74,20.75,24.56,41.5,24.56,17.44,0,27.57-7.72,27.57-19.75,0-14.43-10.43-19.54-29.68-28l-10.52-4.52c-30.38-12.92-50.52-29.16-50.52-63.45,0-31.57,24.05-54.63,61.64-54.63,26.77,0,46,8.32,59.85,32.68L396,290c-7.22-12.93-15-18-27.06-18-12.33,0-20.15,7.82-20.15,18,0,12.63,7.82,17.74,25.86,25.56l10.52,4.51c35.79,15.34,55.94,31,55.94,66.16C441.12,424.13,411.35,443.87,371.35,443.87Z"
                      id="mainIconPathAttribute"
                      fill="yellow"
                    ></path>
                  </svg>
                </div>
                <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 class="font-bold text-3xl title-font text-white mb-1 ">
                    Javascript
                  </h2>
                </div>
              </div>
            </div>

            <div class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
              <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div class="flex-shrink-0 w-5 h-5 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-cyan-500 text-white relative z-10 title-font font-bold text-sm ">
                4
              </div>
              <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div class="flex-shrink-0 w-16 h-8 text-indigo-500 rounded-full inline-flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    id="IconChangeColor"
                    height="222"
                    width="222"
                  >
                    <path
                      d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"
                      id="mainIconPathAttribute"
                      fill="#03989e"
                    ></path>
                  </svg>
                </div>
                <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 class="font-bold text-3xl title-font text-white mb-1 ">
                    React
                  </h2>
                </div>
              </div>
            </div>

            <div class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
              <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div class="flex-shrink-0 w-5 h-5 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-cyan-500 text-white relative z-10 title-font font-bold text-sm ">
                5
              </div>
              <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div class="flex-shrink-0 w-16 h-8 text-indigo-500 rounded-full inline-flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                    id="IconChangeColor"
                    height="200"
                    width="200"
                  >
                    <path
                      d="M320 104.5c171.4 0 303.2 72.2 303.2 151.5S491.3 407.5 320 407.5c-171.4 0-303.2-72.2-303.2-151.5S148.7 104.5 320 104.5m0-16.8C143.3 87.7 0 163 0 256s143.3 168.3 320 168.3S640 349 640 256 496.7 87.7 320 87.7zM218.2 242.5c-7.9 40.5-35.8 36.3-70.1 36.3l13.7-70.6c38 0 63.8-4.1 56.4 34.3zM97.4 350.3h36.7l8.7-44.8c41.1 0 66.6 3 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7h-70.7L97.4 350.3zm185.7-213.6h36.5l-8.7 44.8c31.5 0 60.7-2.3 74.8 10.7 14.8 13.6 7.7 31-8.3 113.1h-37c15.4-79.4 18.3-86 12.7-92-5.4-5.8-17.7-4.6-47.4-4.6l-18.8 96.6h-36.5l32.7-168.6zM505 242.5c-8 41.1-36.7 36.3-70.1 36.3l13.7-70.6c38.2 0 63.8-4.1 56.4 34.3zM384.2 350.3H421l8.7-44.8c43.2 0 67.1 2.5 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7H417l-32.8 168.7z"
                      id="mainIconPathAttribute"
                      fill="purple"
                    ></path>
                  </svg>
                </div>
                <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 class="title-font text-white font-bold mb-1 text-3xl">
                    PHP
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*ABout */}
        
        <section class="text-gray-600 body-font">
          <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 class="title-font md:text-4xl text-3xl mb-4 font-bold text-cyan-600">
                Me , Myself &
                <br class="hidden lg:inline-block" />I
              </h1>
              <p class="mb-8 text-sm text-white leading-relaxed">
                I am a frontend developer with expertise in HTML, CSS,
                JavaScript, and ReactJS. With a passion for creating visually
                appealing and intuitive user experiences, I excel in leading
                teams, managing time effectively, and being punctual. My goal is
                to continuously improve my skills and use my creativity to bring
                impactful ideas to life.
              </p>
              <div class="flex justify-center">
                <Link
                  to={"/skill"}
                  class="inline-flex cursor-pointer text-white font-bold bg-cyan-500 border-0 py-2  px-10 focus:outline-none hover:bg-transparent shadow-xl shadow-cyan-800 rounded text-lg"
                >
                  Have a Project?
                </Link>{" "}
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


export default Home;