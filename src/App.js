import "./App.css";
import { UserList } from "./UserList";
import { Routes, Route, useNavigate } from "react-router-dom";
import { AddUser } from "./AddUser";
import { useEffect, useState } from "react";
import { Updateuser } from "./UpdateUser";

export const URL = "https://gvmnodebackend.herokuapp.com/user";

function App() {
  const [users, setUsers] = useState([]);
  let navigate = useNavigate();

  // Get all Users
  const getusers = () => {
    fetch(`${URL}/list`, { method: "GET" })
      .then((x) => x.json())
      .then((x) => setUsers(x));
  };
  useEffect(getusers, []);

  // Add new user
  const adduser = (newuser) => {
    fetch(`${URL}/add`, {
      method: "POST",
      body: JSON.stringify(newuser),
      headers: { "Content-Type": "application/json" },
    })
      .then((user) => user.json())
      .then(getusers)
      .then(() => navigate("/"))
      .catch((err) => console.log(err));
  };

  //Delete User
  const Delete = (email) => {
    fetch(`${URL}/delete/${email}`, { method: "DELETE" })
      .then((data) => data.json())
      .then(() => getusers())
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={<UserList users={users} Delete={Delete} />}
        />
        <Route exact path="/add/user" element={<AddUser adduser={adduser} />} />
        <Route
          exact
          path="/update/user/:email"
          element={<Updateuser users={users} getusers={getusers} />}
        />
      </Routes>
    </>
  );
}

export default App;
