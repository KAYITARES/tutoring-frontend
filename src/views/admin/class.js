import React, { useState } from "react";
import { Space, Table, Tag, Drawer, Modal } from "antd";
import DashboardLayout from "../../component/DashboardLayout";
import classes from "../../assets/constant/class.json";
import SingleClass from "./singleClass";
import AddUser from "./addUser";
import AddCourse from "./addCourse";

const Home = () => {
  const [show, setShow] = useState(false);

  const [showCourse, setShowCourse] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const [classSelected, setClassSelected] = useState({});
  const columns = [
    {
      title: "Class Name",
      dataIndex: "className",
      key: "",
      render: (text) => <a>{text}</a>,
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
              setClassSelected(record);
            }}
          >
            Views
          </a>
          <a
            onClick={() => {
              setShowCourse(true);
              // setClassSelected(record);
            }}
            style={{ color: "blue" }}
          >
            Add Course
          </a>
          <a
            onClick={() => {
              setShowUser(true);
              // setClassSelected(record);
            }}
            style={{ color: "green" }}
          >
            Add User
          </a>
        </Space>
      ),
    },
  ];
  return (
    <DashboardLayout>
      <Table columns={columns} dataSource={classes} />
      <Drawer
        width={500}
        placement="left"
        visible={show}
        onClose={() => {
          setShow(false);
        }}
      >
        <SingleClass data={classSelected} />
      </Drawer>
      <Modal
        width="80%"
        onOk={() => setShowUser(false)}
        onCancel={() => setShowUser(false)}
        visible={showUser}
        onClose={() => {
          setShowUser(false);
        }}
        footer={null}
      >
        <AddUser />
      </Modal>
      <Modal
        width="40%"
        onOk={() => setShowCourse(false)}
        onCancel={() => setShowCourse(false)}
        visible={showCourse}
        onClose={() => {
          setShowCourse(false);
        }}
        footer={null}
      >
        <AddCourse />
      </Modal>
    </DashboardLayout>
  );
};
export default Home;
