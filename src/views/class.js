import React from "react";
import "./class.css";
import Classes from "../assets/constant/class.json";

const Class = () => {
  return (
    <div className="class-container">
      <h1 className="class-heading">Classes</h1>
      <h3 className="class-subheading">
        Recently Viewed Courses and Specializations
      </h3>
      <div className="classe">
        {Classes.map((data) => (
          <div className="class-card">
            <>
              <div className="imgz">
                <img className="class-img" src={data.classeImage} />
                <img className="class-icon" src={data.classIcon} />
              </div>

              <div className="class-name-cont">
                <h3 className="class-name">
                  {" "}
                  Class:{data.className}
                  <span>{data.classComp}</span>
                </h3>
                <h3 className="course-name">{data.course.courseName}</h3>
              </div>
            </>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Class;
