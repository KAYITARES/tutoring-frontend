import React, { useState } from "react";
import "./class.css";
import "../component/class.css";
import Classes from "../assets/constant/class.json";
import { Link } from "react-router-dom";
import Nav from "../component/nav";
import "../component/class.css";
import Image from "rc-image";
import "./course.css";
import SingleCourse from "./singleCourse";
import { Drawer } from "antd";

const Class = ({ data }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [singleData, setSingleData] = useState({});
  return (
    <>
      <div className="class-container">
        <Nav />
        <h1 className="class-heading">Courses</h1>
        <h3 className="class-subheading">Courses Belong to this Class</h3>
        <div className="classe">
          {data?.course?.map((course) => (
            <div
              className="class-card"
              to="#"
              // onClick={() => {
              //   setShow(true);
              //   setSingleData(data);
              // }}
            >
              <div className="imgz">
                <img className="class-img " src={course?.courseImage} />
                {/* <img className="class-icon" src={data.classIcon} /> */}
              </div>

              <h3 className="courseName"> {course?.courseName}</h3>

              <div className="courseCreator">
                <h5>CreatedBy</h5>
                <p>{course?.createdBy}</p>
              </div>
              <div className="btn-course">
                <a
                  href="#"
                  className="course-btn"
                  onClick={() => {
                    setSingleData(course);
                    setModalVisible(true);
                  }}
                >
                  Start
                </a>
              </div>
            </div>
          ))}
        </div>
        <Drawer
          width="100%"
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
        >
          <SingleCourse data={singleData} />
          {/* data={singleData} */}
        </Drawer>
      </div>
    </>
  );
};
export default Class;
