import React from "react";
import { Route, Routes } from "react-router-dom";


import User from "./pages/user/User.jsx";
import Users from "./pages/user/Users.jsx";
import Home from "./pages/home/Home.jsx";
import Navbar from "./components/navbar/navbar.jsx";
import Footer from "./components/footer/footer.jsx";
import AddUser from "./pages/user/AddUser.jsx";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/ADD" element={<Users />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="/users/addUser" element={<AddUser />} />
      </Routes>

      <Footer />
    </>
  );
}
