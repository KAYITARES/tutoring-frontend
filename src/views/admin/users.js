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
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
    },
    ,
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
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
      <Table
        columns={columns}
        dataSource={users}
        pagination={{
          defaultPageSize: 5,
          showSizeChanger: true,
          // pageSizeOptions: ["5", "10", "15"],
        }}
        size="small"
      />
      <Drawer
        width={500}
        placement="left"
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
