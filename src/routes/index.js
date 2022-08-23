import React from "react";
import Home from "../views/home";
import { Routes, Route } from "react-router-dom";
import Users from "../views/admin/users";
import User from "../views/admin/addUser";
import Class from "../views/admin/class";
import Course from "../views/admin/course";
import Courses from "../views/course";
import Classes from "../views/class";
import AddClass from "../views/admin/addClass"

const Index = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route exact path="/courses" element={<Courses />}></Route>
      <Route exact path="/class" element={<Classes />}></Route>
      <Route exact path="/admin/allUsers" element={<Users />}></Route>
      <Route exact path="/admin/addUser" element={<User />}></Route>
      <Route exact path="/admin/classes" element={<Class />}></Route>
      <Route exact path="/admin/classes/add" element={<AddClass />}></Route>
      <Route exact path="/admin/courses" element={<Course />}></Route>
    </Routes>
  );
};
export default Index;
