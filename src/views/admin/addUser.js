import React, { useState } from "react";
import DashboardLayout from "../../component/DashboardLayout";
import "./admin.css";
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
    <DashboardLayout>
      <Form
        onFinish={onFinish}
        style={{ background: "white", padding: "30px" }}
      >
        <Form.Item
          name="firstName"
          label="First Name"
          rules={[{ required: true }]}
        >
          <Input placeholder="FirstName" />
        </Form.Item>
        <Form.Item
          name="lastName"
          label="Last Name"
          rules={[{ required: true }]}
        >
          <Input placeholder="Last Name" />
        </Form.Item>

        <Form.Item label="Gender" name="gender">
          <Radio.Group>
            <Radio value="female"> Female </Radio>
            <Radio value="male"> Male </Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          name="phone"
          label="Phone Number"
          rules={[{ required: true }]}
          type="tel"
        >
          <Input placeholder="Phone Number" />
        </Form.Item>
        <Form.Item name="email" label="Email" rules={[{ required: true }]}>
          <Input placeholder="Email" type="email" />
        </Form.Item>
        <Form.Item name="address" label="Address" rules={[{ required: true }]}>
          <Input placeholder="Address" />
        </Form.Item>

        <Form.Item label="Role" name="role">
          <Radio.Group>
            <Radio value="admin">Admin </Radio>
            <Radio value="tutor">Tutor</Radio>
            <Radio value="student">Student</Radio>
          </Radio.Group>
        </Form.Item>

        <Button htmlType="submit" type="primary">
          Register
        </Button>
      </Form>
    </DashboardLayout>
  );
};
export default NewUser;
