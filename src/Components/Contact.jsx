import React from "react";

const Contact = () => {
  return (
    <div id="bg">
      <section class="text-gray-600 body-font relative" data-aos="fade-up">
        <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              class="absolute inset-0"
              frameborder="0"
              title="map"
              marginheight="0"
              marginwidth="0"
              scrolling="no"
              /* src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" */
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2161.933850210865!2d90.36715783497203!3d23.757702802117908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf6588590111%3A0xf69b09aa0456f085!2sZakir%20Hossain%20Play%20ground!5e0!3m2!1sen!2sbd!4v1681706647632!5m2!1sen!2sbd" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
            ></iframe>
            <div class="bg-gray-400 relative flex flex-wrap py-6 rounded shadow-md">
              <div class="lg:w-1/2 px-6">
                <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p class="mt-1">B-43 Zakir Hossain Road</p>
              </div>
              <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  EMAIL
                </h2>
                <a class=" leading-relaxed">
                  tayyabmd00001@gmail.com
                </a>
                <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p class="leading-relaxed">01644385198</p>
              </div>
            </div>
          </div>
          <div class="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 class="text-cyan-300 text-7xl font-extrabold  mb-1 title-font">
              Contact Me
            </h2>
            <p class="leading-relaxed mb-5 text-white">
              Post-ironic portland shabby chic echo park, banjo fashion axe
            </p>
            <div class="relative mb-4">
              <label for="name" class="leading-7 text-sm text-white">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                class="w-full  rounded border text-cyan-900 focus:border-cyan-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                class="w-full  rounded border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-cyan-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="message" class="leading-7 text-sm text-white">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                class="w-full rounded border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-cyan-900 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <form>
              <button
             type="submit"
                class="text-white bg-cyan-500 border-0 py-2 px-6 focus:outline-none hover:bg-cyan-700 shadow-xl shadow-cyan-700 rounded text-lg"
                id="btn"
              >
                Send 
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
