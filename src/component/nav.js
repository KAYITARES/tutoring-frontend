import React, { useState } from "react";
import "./nav.css";
import {
  Modal,
  Form,
  Input,
  Button,
  Checkbox,
  Menu,
  Dropdown,
  notification,
} from "antd";

import {
  DownOutlined,
  LockOutlined,
  UserOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import SignUp from "../component/Signup";
import { Link } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  const onFinish = (values) => {
    console.log(values);
  };
  const [visible, setVisible] = useState(false);
  const [visibleSignUp, setVisibleSignUp] = useState(false);
  const [bgcolor, setBgColor] = useState(false);
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 5) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  const changeBgColor = () => {
    if (window.scrollY >= 5) {
      setBgColor(true);
    } else {
      setBgColor(false);
    }
  };
  window.addEventListener("scroll", changeBgColor);
  window.addEventListener("scroll", changeColor);
  return (
    <nav className={bgcolor ? "nav nav-bg" : "nav"}>
      <Modal
        visible={visible}
        width="25%"
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        footer={null}
      >
        <a href="/">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2641/2641422.png"
            style={{ width: "120px", marginBottom: "20px", objectFit: "cover" }}
          />
        </a>
        <h2>
          <b>
            {" "}
            <UserOutlined
              className="site-form-item-icon"
              style={{ padding: "5px", color: "skyblue" }}
            />
            Signin Form
          </b>
        </h2>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item name="phone" rules={[{ required: "true" }]}>
            <Input
              prefix={<PhoneOutlined className="site-form-item-icon" />}
              placeholder="Phone Number"
            />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true }]}>
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
            Or{" "}
            <a
              onClick={() => {
                setVisibleSignUp(true);
                setVisible(false);
              }}
            >
              register now!
            </a>
          </Form.Item>
        </Form>
      </Modal>
      <Modal
        visible={visibleSignUp}
        width="30%"
        onOk={() => setVisibleSignUp(false)}
        onCancel={() => setVisibleSignUp(false)}
        footer={null}
      >
        <SignUp />
      </Modal>
      <div className="logo">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2641/2641422.png"
          className="logo-img"
        />
      </div>
      <div className="link-container">
        <ul className="nav-links">
          <li>
            <a
              href="/"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              // className="nav-link"
              className={color ? "a" : "nav-link"}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/class"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className={color ? "a" : "nav-link"}
            >
              Class
            </a>
          </li>
          {/* <li>
            <a className="nav-link" href="#">
              Courses
            </a>
          </li> */}
          <li>
            <a
              href="#"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className={color ? "a" : "nav-link"}
              onClick={() => setVisible(true)}
            >
              Sign-In
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Nav;
