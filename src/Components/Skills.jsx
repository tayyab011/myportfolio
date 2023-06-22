import React from "react";

const SKILL = () => {
  return (
    <div className="flex-wrap overflow-hidden" data-aos="zoom-out" id="bg">
      <section>
        {" "}
        <div className=" w-full md:px-24 p-5">
          <h1 className="lg:text-7xl md:text-7xl text-cyan-300 text-5xl font-extrabold  py-7">
            Skill and
            <br /> Experience
          </h1>
          <p className="text-cyan-200  text-md ">
            As a frontend developer, I have extensive experience in HTML, CSS,
            and JavaScript, as well as the popular frontend framework ReactJS.
            Whether it's building responsive layouts, crafting beautiful
            animations, or developing complex web applications, I have the
            skills and knowledge to bring your vision to life. <br />
            In addition to my technical skills, I am also an experienced team
            leader, able to manage projects and coordinate with designers,
            developers, and stakeholders to ensure timely and high-quality
            delivery. I pride myself on my ability to communicate effectively,
            listen actively, and collaborate productively, building strong
            relationships and creating successful outcomes.
            <br /> I am also highly focused on time management and punctuality,
            understanding the importance of meeting deadlines and delivering
            work on time. Whether it's managing multiple projects or juggling
            competing priorities, I am able to prioritize effectively and work
            efficiently to achieve the best results.
            <br />
            <br /> Overall, I am confident that my skills and experience as a
            frontend developer, team leader, and project manager make me a
            valuable asset to any team. I look forward to the opportunity to
            work with you and contribute to the success of your projects.
          </p>
        </div>
        <div className=" w-full md:flex flex-wrap p-5">
          <div className="mx-auto justify-center">
            <div class="skills-bar">
              <div class="bar">
                <div class="info">
                  <span className="text-white">HTML</span>
                </div>
                <div class="progress-line">
                  <span class="html"></span>
                </div>
                <div class="bar">
                  <div class="info">
                    <span>CSS</span>
                  </div>
                  <div class="progress-line">
                    <span class="css"></span>
                  </div>
                  <div class="bar">
                    <div class="info">
                      <span>Tailwind Css</span>
                    </div>
                    <div class="progress-line">
                      <span class="bootstrap"></span>
                    </div>
                    <div class="bar">
                      <div class="info">
                        <span>JAVASCRIPT</span>
                      </div>
                      <div class="progress-line">
                        <span class="javascript"></span>
                      </div>
                      <div class="bar">
                        <div class="info">
                          <span>React Js</span>
                        </div>
                        <div class="progress-line">
                          <span class="c"></span>
                        </div>
                      </div>
                    </div>
                    <div class="bar">
                      <div class="info">
                        <span>GitHub</span>
                      </div>
                      <div class="progress-line">
                        <span class="javascript"></span>
                      </div>
                      <div class="bar">
                        <div class="info">
                          <span>Bootstrap</span>
                        </div>
                        <div class="progress-line">
                          <span class="c"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:h-72   md:h-96 bg-gray-700 shadow-lg shadow-cyan-300 px-3 rounded-xl">
            <h2 className="text-4xl text--cyan-500 font-extrabold py-2">
              Frontend Developer
            </h2>
            <br />
            <p className="text-md text-cyan-500">
              My goal as a frontend developer is to create intuitive and
              visually appealing user experiences using HTML, CSS, JavaScript,
              and ReactJS. I am committed to leading teams, managing my time
              efficiently, and being punctual. I aim to stay up-to-date with
              emerging trends and to continuously improve my skills to
              contribute to impactful projects. Ultimately, I hope to use my
              creativity and technical knowledge to bring meaningful ideas to
              life through frontend development.
            </p>
          </div>
        </div>
      </section>
      {/*project send */}
      <section id="pr">
        <h3
          className="pt-5 pl-2 text-5xl font-extrabold lg:pl-96 text-tahiti lg:ml-64"
          id="pr"
          data-aos="fade-left"
        >
          _Have a Project?
        </h3>

        <div className="flex-wrap w-full md:flex " data-aos="fade-up">
          <form
            className="flex-wrap w-full p-5 md:m-5 md:w-3/4"
            autocomplete="off"
          >
            <p className="p-3 text-lg text-bermuda" data-aos="fade-right">
              What can I do for you?
            </p>{" "}
            <br />
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 m-3 bg-transparent border-b-2 border-transparent outline-none focus:border-b-cyan-300 text-white shadow-lg shadow-cyan-900  border-b-cyan-100 placeholder-cyan-500  transition duration-150"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 m-3 bg-transparent border-b-2 border-transparent outline-none focus:border-b-cyan-300 text-white shadow-lg shadow-cyan-900  border-b-cyan-100 placeholder-cyan-500  transition duration-150"
            />
            <br />
            <input
              type="text"
              placeholder="Project type"
              className="p-3 m-3 bg-transparent border-b-2 border-transparent outline-none focus:border-b-cyan-300 text-white  border-b-cyan-100 placeholder-cyan-500 shadow-lg shadow-cyan-900 transition duration-150"
              id="ptype"
            />
            <br />
            <input
              placeholder="project details"
              cols="30"
              rows="10"
              className="w-full px-5 p-3 m-3 bg-transparent border-b-2 border-transparent outline-none  border-b-cyan-500 focus:border-b-cyan-600 text-cyan-400 placeholder-cyan-700 shadow-lg shadow-cyan-900  transition duration-150"
            />
            <br />
            <p className="p-3 text-sm text-bermuda">
              ps:please include project type,your goals,expectaions &
              milestones,your budget and payment method.You can also contact me
              through my email.
            </p>
            <button
              type="submit"
              className="inline-flex  shadow-lg shadow-cyan-700 bg-cyan-600 text-white py-2 px-16 rounded-lg m-3 btn1"
            >
              Send details
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default SKILL;
