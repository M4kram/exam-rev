import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserAction } from "../Redux/Actions/UsersAction";
import { useNavigate } from "react-router-dom";

function DeleteUser() {
  const [users, setUsers] = useState();
  const [user, setUser] = useState(1);

  const usersRedux = useSelector((data) => data.users);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setUsers(
      usersRedux.map((user) => (
        <option key={user.id} value={user.id}>
          {user.username}
        </option>
      ))
    );
  }, []);

  return (
    <div className="article">
      <h3 className="sub-title">DELETE USER</h3>
      <select
        value={user}
        onChange={(e) => {
          setUser(e.target.value);
        }}
      >
        {users}
      </select>
      <button
        onClick={() => {
          dispatch(deleteUserAction(+user));
          navigate("/");
        }}
      >
        X
      </button>
    </div>
  );
}

export default DeleteUser;
