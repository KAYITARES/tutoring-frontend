import React, { useState } from "react";

import "./home.css";
import Nav from "../component/nav";
import Class from "../component/class";
// import { useNavigate } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="home">
        <Nav />
        <div className="text-container">
          <h3 className="welcome-text">
            Welcome to <span>TUTORING TOOLS</span> online Class
          </h3>
        </div>
      </div>
      <Class />
    </>
  );
};
export default Home;
