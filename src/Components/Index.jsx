import React from 'react';
import { Link } from "react-router-dom";
const Index = () => {
    return (
      <div
        className="w-full flex overflow-hidden h-screen justify-center"
        id="home"
      ><div className='justify-center my-auto'>
        <Link to={'/home'}>
          <button className="justify-center mx-auto my-auto " id="button">
            Start Tour
          </button>
        </Link></div>
      </div>
    );
};

export default Index;