import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUserAction } from "../Redux/Actions/UsersAction";

function EditUser() {
  const { userId } = useParams();
  const userSelected = useSelector((data) => data.users).find(
    (us) => us.id === +userId
  );

  const [id, setId] = useState(userSelected.id);
  const [username, setUsername] = useState(userSelected.username);
  const [email, setEmail] = useState(userSelected.email);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="article">
      <h3 className="sub-title">UPDATE USER</h3>
      <input
        value={id}
        type="text"
        disabled
        onChange={(e) => {
          setId(e.target.value);
        }}
      />
      <input
        value={username}
        type="text"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input
        value={email}
        type="text"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch(
            updateUserAction({ id: id, username: username, email: email })
          );
          navigate("/");
        }}
      >
        UPDATE
      </button>
    </div>
  );
}

export default EditUser;
