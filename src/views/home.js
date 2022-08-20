import React, { useState } from "react";

import "./home.css";
import Nav from "../component/nav";
import Class from "./class";
// import { useNavigate } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Nav />
      <div className="home">
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
