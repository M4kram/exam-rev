import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function UpdateUser() {
  const [users, setUsers] = useState();
  const [user, setUser] = useState(1);

  const usersRedux = useSelector((data) => data.users);
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
      <h3 className="sub-title">UPDATE USER</h3>
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
          navigate(`/edit-user/${user}`);
        }}
      >
        SELECT
      </button>
    </div>
  );
}

export default UpdateUser;
