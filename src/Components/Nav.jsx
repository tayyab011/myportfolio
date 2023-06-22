import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import './Nav.css'
import { faBars } from "@fortawesome/free-solid-svg-icons";



const Nav = () => {
  return (
    <header class="text-white bg-black body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link
            to={"/home"}
            class="mr-3 md:mr-7 hover:text-white hover:scale-110  shadow-sm hover:font-bold"
          >
            Home
          </Link>
          <Link
            to={"/about"}
            class="mr-3 md:mr-7 hover:text-white hover:scale-110  shadow-sm hover:font-bold"
          >
            About
          </Link>
          <Link
            to={"/skill"}
            class="mr-3 md:mr-7 hover:text-white hover:scale-110  shadow-sm hover:font-bold"
          >
            Skill
          </Link>
          <Link
            to={"/project"}
            class="mr-3 md:mr-7 hover:text-white hover:scale-110  shadow-sm hover:font-bold"
          >
            Project
          </Link>
          <Link
            to={"/contact"}
            class="mr-3 md:mr-7 hover:text-white hover:scale-110  shadow-sm hover:font-bold hover:text-shadow-[500px]"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
