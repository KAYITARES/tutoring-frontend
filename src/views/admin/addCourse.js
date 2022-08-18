import React, { useState } from "react";
import DashboardLayout from "../../component/DashboardLayout";
import {
  Form,
  Input,
  DatePicker,
  Upload,
  Button,
  Radio,
  Space,
  InputNumber,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";

const NewUser = () => {
  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <>
      <Form onFinish={onFinish}>
        <Form.Item
          name="courseName"
          label="Course Name"
          rules={[{ required: true }]}
        >
          <Input placeholder="Course Name" />
        </Form.Item>
        <Form.Item
          name="courseTitle"
          label="Course Title"
          rules={[{ required: true }]}
        >
          <Input placeholder="Course Title" />
        </Form.Item>
        <Form.Item name="content" label="Content" rules={[{ required: true }]}>
          <Input placeholder="Content" />
        </Form.Item>
        <Form.Item
          name="duration"
          label="duration"
          rules={[{ required: true }]}
        >
          <Input placeholder="duration" />
        </Form.Item>

        <Button htmlType="submit" type="primary">
          Register
        </Button>
      </Form>
    </>
  );
};
export default NewUser;
