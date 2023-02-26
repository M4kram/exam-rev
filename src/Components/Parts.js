import React, { useState, useEffect } from "react";
import { Link, Routes, Route } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

function Parts() {
  const listOfCountries = ["Morocco", "USA", "France", "Spain"];
  const listOfCities = [
    { name: "Choose Your Country", cities: ["Choose Your City"] },
    { name: "Morocco", cities: ["Casablanca", "Marrakech", "Fes", "Rabat"] },
    { name: "USA", cities: ["New York", "San Francisco", "Oregon", "Texas"] },
    { name: "France", cities: ["Paris", "Marseille", "Lyon", "Nice"] },
    { name: "Spain", cities: ["Barcelone", "Madrid"] },
  ];
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [country, setCountry] = useState("Choose Your Country");
  const [city, setCity] = useState("");

  const usersN2 = useSelector((data) => data.users);

  useEffect(() => {
    setCountries(
      listOfCountries.map((countrty) => (
        <option key={countrty} value={countrty}>
          {countrty}
        </option>
      ))
    );
  }, []);

  useEffect(() => {
    setCities(
      listOfCities
        .find((count) => {
          return count.name === country;
        })
        .cities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))
    );
  }, [country]);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setUsers(res.data);
    });
  }, []);

  return (
    <>
      <div className="article">
        <h3 className="sub-title">useEffect</h3>
        <form>
          <select
            value={country}
            onChange={(e) => {
              setCountry(e.target.value);
            }}
          >
            <option value="Choose Your Country" disabled>
              Choose Your Country
            </option>
            {countries}
          </select>
          <br />
          <br />
          <select
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
          >
            {cities}
          </select>
        </form>
      </div>
      <div className="article">
        <h3 className="sub-title">Api</h3>
        <table className="users">
          <thead>
            <tr>
              <th>#</th>
              <th>Username</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="article">
        <h3 className="sub-title">Routing</h3>
        <Link to="/user/1">User 1</Link>
      </div>
      <div className="article">
        <h3 className="sub-title">Redux</h3>
        <div className="CRUD-NAV">
          <Link to="add-user">ADD</Link>
          <Link to="update-user">UPDATE</Link>
          <Link to="delete-user">DELETE</Link>
        </div>
      </div>
      <div className="article">
        <h3 className="sub-title">List</h3>
        <table className="users">
          <thead>
            <tr>
              <th>#</th>
              <th>Username</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {usersN2.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Parts;
