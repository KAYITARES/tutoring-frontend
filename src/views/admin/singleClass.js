import React from "react";
import { Carousel } from "antd";

const SingleClass = ({ data }) => {
  return (
    <>
      <div className="single-class">
        <h3 className="" style={{ fontSize: "18px", fontWeight: "bold" }}>
          Class Name: <span style={{ color: "blue" }}>{data.className}</span>
        </h3>
        <div className="">
          <h3 style={{ fontSize: "18px", fontWeight: "bold" }}>User:</h3>
          <h4 className="" style={{ fontSize: "16px", fontWeight: "bold" }}>
            First Name:{" "}
            <span style={{ color: "blue" }}>{data.user.firstName}</span>
          </h4>
          <h4 className="" style={{ fontSize: "16px", fontWeight: "bold" }}>
            Last Name:{" "}
            <span style={{ color: "blue" }}>{data.user.lastName}</span>
          </h4>
          <h4 className="" style={{ fontSize: "16px", fontWeight: "bold" }}>
            Role: <span style={{ color: "blue" }}>{data.user.role}</span>
          </h4>
          <h4 className="" style={{ fontSize: "16px", fontWeight: "bold" }}>
            Email: <span style={{ color: "blue" }}>{data.user.email}</span>
          </h4>
        </div>
      </div>
    </>
  );
};
export default SingleClass;
