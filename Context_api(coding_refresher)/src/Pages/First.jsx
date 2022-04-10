// The first page asks for - name - age - date of birth

import React from "react";
import { useContext } from "react";
import { RegistrationContext } from "../Context/RegistrationContext";
import { useNavigate } from "react-router-dom";

export const First = () => {
  const { name, age, dateOfBirth, dispatch } = useContext(RegistrationContext);
  const navigate = useNavigate();

  return (
    <div
      className="first-page-container"
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "gray",
        width: "500px",
        height: "300px",
      }}
    >
      <br></br>
      NAME:
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) =>
          dispatch({ type: "CHANGE_NAME", payload: e.target.value })
        }
        style={{ width: "50%", height: "30%" }}
      ></input>
      <br></br>
      AGE:
      <input
        type="text"
        value={age}
           placeholder="Enter your Age"
        onChange={(e) => {
          dispatch({ type: "CHANGE_AGE", payload: e.target.value });
        }}
     
        style={{ width: "50%", height: "30%" }}
      ></input>
      <br></br>
      DATE OF BIRTH:
      <input
        type="date"
        value={dateOfBirth}
        onChange={(e) => {
          dispatch({ type: "CHANGE_DATE_OF_BIRTH", payload: e.target.value });
        }}
        placeholder="DOB"
        style={{ width: "50%", height: "30%" }}
      ></input>
      <br />
      <button
        disabled={!name && !age && !dateOfBirth}
        onClick={() => {
          navigate(`/registration/two`);
        }}
        style={{width:"50px"}}
      >
        NEXT
      </button>
    </div>
  );
};
export default First;
