import React from "react";
import { createContext } from "react";
import { useReducer } from "react";

export const RegistrationContext = createContext();

// const RegistrationContext = () => {
const initState = {
  name: "",
  age: "",
  dateOfBirth: "",
  stateOfResidence: "",
  address: "",
  pincode: "",
};
function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_NAME":
      return { ...state, name: action.payload };

    case "CHANGE_AGE":
      return { ...state, age: action.payload };

    case "CHANGE_DATE_OF_BIRTH":
      return { ...state, dateOfBirth: action.payload };

    case "CHANGE_STATE_OF_RESIDENCE":
      return { ...state, stateOfResidence: action.payload };

    case "CHANGE_ADDRESS":
      return { ...state, address: action.payload };
    case "CHANGE_PINCODE":
      return { ...state, pincode: action.payload };
    default:
      throw new Error();
  }
}

export function RegistrationContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initState);

  const handleSubmit=()=>{
    fetch(`http://localhost:3001/users`,{
      method:"POST",
      body:JSON.stringify(state),
      headers:{
        "Content-Type": "application/json"
      }
    })
    // .then((res)=>res.json())
    // .catch((err)=>console.log(err))
    .then(function(response) {
      console.log(response);
      console.log(response.status);
      // console.log(response.json());
      console.log(response.text());
      })  
.catch(function(err) {  
  console.log('Fetch Error :-S', err);  
});
  }

  const { name, age, dateOfBirth, stateOfResidence, address, pincode } = state;
  return (
    <RegistrationContext.Provider
      value={{
        name,
        age,
        dateOfBirth,
        stateOfResidence,
        address,
        pincode,
        dispatch,
        handleSubmit
      }}
    >
      {children}
    </RegistrationContext.Provider>
  );
}

export default RegistrationContext;
