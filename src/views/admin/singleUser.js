import React from "react";
import { Carousel } from "antd";

const SingleUser = ({ data }) => {
  return (
    <>
      <div className="single-user">
        <h3 style={{ fontWeight: "bold" }}>
          FirstName: <span style={{ color: "blue" }}>{data.firstName}</span>
        </h3>
        <h3 style={{ fontWeight: "bold" }}>
          LastName: <span style={{ color: "blue" }}>{data.lastName}</span>
        </h3>
        <h3 style={{ fontWeight: "bold" }}>
          Email: <span style={{ color: "blue" }}>{data.email}</span>
        </h3>
        <h3 style={{ fontWeight: "bold" }}>
          phone: <span style={{ color: "blue" }}>{data.phone}</span>
        </h3>
        <h3 style={{ fontWeight: "bold" }}>
          gender: <span style={{ color: "blue" }}>{data.gender}</span>
        </h3>
        <h3 style={{ fontWeight: "bold" }}>
          Role: <span style={{ color: "blue" }}>{data.role}</span>
        </h3>
        <h3 style={{ fontWeight: "bold" }}>
          Address: <span style={{ color: "blue" }}>{data.address}</span>
        </h3>
      </div>
    </>
  );
};
export default SingleUser;
