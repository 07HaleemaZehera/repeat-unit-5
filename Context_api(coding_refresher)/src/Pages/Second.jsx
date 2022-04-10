// The second page asks for - state of residence - address - pin code

import React from "react";
import { useContext } from "react/";
import { RegistrationContext } from "../Context/RegistrationContext";
import { Navigate } from "react-router-dom";

 const Second=()=> {
  const { 
    dispatch,
    stateOfResidence,
     address,
      pincode,
       name,
        age, 
        dateOfBirth,
        handleSubmit 
  } =
    useContext(RegistrationContext);


    if(!name || !age || !dateOfBirth){
      return <Navigate to="/registration/one"/>
    }
  return (
    <div
      className="second-page-container"
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "green",
        width: "500px",
        height: "300px",
        color: "HighlightText",
      }}
    >
      State of Residence:
      <input
        type="text"
        placeholder="Residence"
        value={stateOfResidence}
        onChange={(e)=> dispatch({type:"CHANGE_STATE_OF_RESIDENCE",payload:e.target.value})}
        style={{ width: "50%", height: "30%", fontSize: "600" }}
      ></input>
      <br></br>
      <br></br>
      Address:
      <input
        type="text"
        placeholder="address"
        value={address}
        onChange={(e)=> dispatch({type:"CHANGE_ADDRESS",payload:e.target.value})}
        style={{ width: "50%", height: "30%" }}
      />
      <br></br>
      <br></br>
      Pin code:{" "}
      <input
        type="number"
        placeholder="pin code"
        value={pincode}
        onChange={(e)=> dispatch({type:"CHANGE_PINCODE",payload:e.target.value})}
        style={{ width: "50%", height: "30%" }}
      />
      <button  disabled={
        !stateOfResidence || !address || !pincode || !name || !age|| !dateOfBirth
      } onClick={handleSubmit}>SUBMIT</button>
    </div>
  );
}


export default Second