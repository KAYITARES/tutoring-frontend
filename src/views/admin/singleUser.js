import React from "react";
import { Carousel } from "antd";
import { RedEnvelopeFilled } from "@ant-design/icons";

const SingleUser = ({ data }) => {
  return (
    <>
      <div className="single-user">
        <div className="name">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              background: "#eee",
              gap: "0",
              marginBottom: "0",
            }}
          >
            <h2 style={{ fontWeight: "bold", background: "red" }}>Role</h2>
            <h5
              style={{
                fontWeight: "bold",
                textTransform: "capitalize",
                color: "blue",
                background: "green",

                // padding: "0 60px",
                // display: "flex",
                // alignItems: "flex-start",
                // flexDirection: "column",
                // justifyContent: "center",
                fontSize: "16px",
              }}
            >
              {data.role}
            </h5>
          </div>
          <h2 style={{ fontWeight: "bold" }}>Names</h2>
          <div
            className="names"
            style={{
              padding: "0 10px",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "flex-end",
              justifyContent: "space-around",
              // background: "green",
            }}
          >
            <h3 style={{ fontWeight: "bold" }}>First Name: </h3>
            <h3 style={{ fontWeight: "bold" }}>Last Name: </h3>
          </div>
          <div
            className="name"
            style={{
              padding: "0 10px",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "flex-start",
              justifyContent: "space-around",
              fontSize: "16px",
            }}
          >
            <h5 style={{ fontWeight: "bold", textTransform: "uppercase" }}>
              {data.firstName}
            </h5>
            <h5 style={{ fontWeight: "bold", textTransform: "capitalize" }}>
              {data.lastName}
            </h5>
          </div>
          <h2 style={{ fontWeight: "bold" }}>Email</h2>
          <h5
            style={{
              fontWeight: "bold",
              padding: "0 60px",
              display: "flex",
              alignItems: "flex-start",
              flexDirection: "column",
              justifyContent: "space-around",
              fontSize: "14px",
            }}
          >
            {data.email}
          </h5>
        </div>
        <div
          style={{
            fontWeight: "bold",
            padding: "0 10px",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
          }}
        >
          <h2 style={{ fontWeight: "bold" }}>phone</h2>
          <h2 style={{ fontWeight: "bold" }}>Gender </h2>
          <h2 style={{ fontWeight: "bold" }}>Address </h2>
        </div>
        <div
          className="name"
          style={{
            padding: "0 10px",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-start",
            justifyContent: "space-around",
            fontSize: "16px",
          }}
        >
          <h5 style={{ fontWeight: "bold", textTransform: "uppercase" }}>
            {data.phone}
          </h5>
          <h5 style={{ fontWeight: "bold", textTransform: "capitalize" }}>
            {data.gender}
          </h5>
          <h5 style={{ fontWeight: "bold", textTransform: "capitalize" }}>
            {data.address}
          </h5>
        </div>
      </div>
    </>
  );
};
export default SingleUser;
