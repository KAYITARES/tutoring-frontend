import React from "react";
import Nav from "../component/nav";

const SingleCourse = ({ data }) => {
  return (
    <div>
      <Nav />
      <p>{data.duration}</p>
    </div>
  );
};
export default SingleCourse;
