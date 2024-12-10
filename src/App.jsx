import { useState } from "react";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./Login";
import Admin from "./admin/admin";
import User from "./user/user";
import Teacher from "./teacher/teacher";
import Teacher from "./trainer/trainer";

function App() {
 
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/user" element={<User />} />
      <Route path="/teacher" element={<Teacher />} />
      <Route path="/trainer" element={<Trainer />} /> 
    </Routes>
  </BrowserRouter>
  )
}

export default App
