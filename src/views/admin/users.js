import React, { useState } from "react";
import { Space, Table, Tag, Drawer } from "antd";
import DashboardLayout from "../../component/DashboardLayout";
import users from "../../assets/constant/user.json";
import SingleUser from "./singleUser";

const Home = () => {
  const [show, setShow] = useState(false);
  const [userSelected, setUserSelected] = useState({});
  const columns = [
    {
      title: "FirstName",
      dataIndex: "firstName",
      key: "firstName",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "LastName",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    ,
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
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
              setUserSelected(record);
            }}
          >
            Views
          </a>
        </Space>
      ),
    },
  ];
  return (
    <DashboardLayout>
      <Table columns={columns} dataSource={users} />
      <Drawer
        width={500}
        placement="center"
        visible={show}
        onClose={() => {
          setShow(false);
        }}
      >
        <SingleUser data={userSelected} />
      </Drawer>
    </DashboardLayout>
  );
};
export default Home;
