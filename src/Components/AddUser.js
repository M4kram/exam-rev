import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUserAction } from "../Redux/Actions/UsersAction";
import { useNavigate } from "react-router-dom";

function AddUser() {
  const [id, setId] = useState();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="article">
      <h3 className="sub-title">ADD USER</h3>
      <input
        type="text"
        onChange={(e) => {
          setId(e.target.value);
        }}
      />
      <input
        type="text"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input
        type="text"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch(
            addUserAction({ id: +id, username: username, email: email })
          );
          navigate("/");
        }}
      >
        ADD
      </button>
    </div>
  );
}

export default AddUser;
