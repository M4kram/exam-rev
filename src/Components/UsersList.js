import React from "react";
import { useSelector } from "react-redux";

function UsersList() {
  const usersN2 = useSelector((data) => data.users);

  return (
    <div className="article">
      <h3 className="sub-title">List</h3>
      <table className="users">
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {usersN2.map((user) => (
            <tr key={user.username}>
              <td>{user.username}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UsersList;
