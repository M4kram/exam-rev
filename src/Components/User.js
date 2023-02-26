import React from "react";
import { useParams, Link } from "react-router-dom";

function User() {
  const { id } = useParams();
  return (
    <div className="article">
      <Link to="/">Back Home</Link>
      <h3 className="sub-title">User {id}</h3>
    </div>
  );
}

export default User;
