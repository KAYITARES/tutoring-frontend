import React from "react";
import Nav from "../component/nav";
import "./singleCourse.css";

const SingleCourse = ({ data }) => {
  return (
    <div className="class-container">
      <Nav />
      <h1 className="class-heading">{data.courseName}</h1>
      <h3 className="class-subheading marginBottom-0 paddinBottom-0">
        {data.courseTitle}
      </h3>
      <div className="duration">
        <h5 className="duration-title">Duration</h5>
        <p className="course-duration">{data.duration}</p>
      </div>
      <p>{data.content}</p>
    </div>
  );
};
export default SingleCourse;
