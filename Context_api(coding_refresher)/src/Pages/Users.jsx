import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3001/users`)
      .then((res) => res.json())
      .then((res) => setUsers(res))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <table style={{ border: "2px solid gray" }}>
        <thead>
          <tr>
            <th style={{ border: "2px solid gray" }}>Name</th>
            <th style={{ border: "2px solid gray" }}>Age</th>
            <th style={{ border: "2px solid gray" }}>DOB</th>
            <th style={{ border: "2px solid gray" }}>State Of Residence</th>
            <th style={{ border: "2px solid gray" }}>ADDRESS</th>
            <th style={{ border: "2px solid gray" }}>PINCODE</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            <tr>
              <th style={{ border: "2px solid blue" }}>{user.name}</th>
              <th style={{ border: "2px solid blue" }}>{user.age}</th>
              <th style={{ border: "2px solid blue" }}>{user.dateOfBirth}</th>
              <th style={{ border: "2px solid blue" }}>{user.stateOfResidence}</th>
              <th style={{ border: "2px solid blue" }}>{user.address}</th>
              <th style={{ border: "2px solid blue" }}>{user.pincode}</th>
            </tr>;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
