import React from "react";
import Parts from "./Components/Parts";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import User from "./Components/User";
import AddUser from "./Components/AddUser";
import DeleteUser from "./Components/DeleteUser";
import UpdateUser from "./Components/UpdateUser";
import EditUser from "./Components/EditUser";

function App() {
  return (
    <div>
      <h1 id="title">EXAM REV:</h1>
      <Routes>
        <Route path="/" element={<Parts />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/delete-user" element={<DeleteUser />} />
        <Route path="/update-user" element={<UpdateUser />} />
        <Route path="/edit-user/:userId" element={<EditUser />} />
      </Routes>
    </div>
  );
}

export default App;
