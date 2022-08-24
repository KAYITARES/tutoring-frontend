import React from "react";
import "./class.css";
import "../component/class.css";
import Classes from "../assets/constant/class.json";
import { Link } from "react-router-dom";
import Nav from "../component/nav";

const Class = ({ data }) => {
  return (
    <>
      <Nav />
      <div className="class-container" id="class">
        <h1 className="class-heading">Courses</h1>
        <h3 className="class-subheading">Courses Belong to this Class</h3>
        {data?.course?.map((course) => (
          <p>{course?.courseName}</p>
        ))}
      </div>
    </>
  );
};
export default Class;
