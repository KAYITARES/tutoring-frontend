import React from "react";
import "./class.css";
import "../component/class.css";
import Classes from "../assets/constant/class.json";
import { Link } from "react-router-dom";
import Nav from "../component/nav";
import "../component/class.css";

const Class = ({ data }) => {
  return (
    <>
      <Nav />
      <div className="class-container" id="class">
        <h1 className="class-heading">Courses</h1>
        <h3 className="class-subheading">Courses Belong to this Class</h3>
        <div className="classe">
          {data?.course?.map((course) => (
            <Link
              className="class-card"
              to="#"
              // onClick={() => {
              //   setShow(true);
              //   setSingleData(data);
              // }}
            >
              <div className="imgz">
                <img className="course-imges " src={course?.courseImage} />
                {/* <img className="class-icon" src={data.classIcon} /> */}
              </div>
              <p>{course?.courseName}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
export default Class;
