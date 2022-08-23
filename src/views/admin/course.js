import React, { useState } from "react";
import { Space, Table, Tag, Drawer } from "antd";
import DashboardLayout from "../../component/DashboardLayout";
import courses from "../../assets/constant/course.json";
import SingleCourse from "./singleCourse";

const Home = () => {
  const [show, setShow] = useState(false);
  const [courseSelected, setCourseSelected] = useState({});
  const columns = [
    {
      title: "Course Name",
      dataIndex: "courseName",
      key: "courseName",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Course Title",
      dataIndex: "courseTitle",
      key: "courseTitle",
    },
    {
      title: "Course Duration",
      dataIndex: "duration",
      key: "duration",
    },
    {
      title: "Created By",
      dataIndex: "createdBy",
      key: "createdBy",
    },

    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a
            style={{ color: "green" }}
            onClick={() => {
              setShow(true);
              setCourseSelected(record);
            }}
          >
            Views
          </a>
          <a style={{ color: "blue" }}>Enable</a>
          <a style={{ color: "red" }}>Disabled</a>
        </Space>
      ),
    },
  ];
  return (
    <DashboardLayout>
      <Table
        columns={columns}
        dataSource={courses}
        pagination={{
          defaultPageSize: 5,
          showSizeChanger: true,
          // pageSizeOptions: ["5", "10", "15"],
        }}
        size="small"
      />
      <Drawer
        width={500}
        placement="center"
        visible={show}
        onClose={() => {
          setShow(false);
        }}
      >
        <SingleCourse data={courseSelected} />
      </Drawer>
    </DashboardLayout>
  );
};
export default Home;
