import React from "react";
import Class from "../component/class";
import Nav from "../component/nav";
import "./class.css";

const Classes = ({ children }) => {
  return (
    <>
      <div className="classes-container">
        <Nav />

        <Class />
      </div>
    </>
  );
};
export default Classes;
