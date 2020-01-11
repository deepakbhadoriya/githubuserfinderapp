import React, { useReducer } from "react";
import AlertContext from "./alertContext";
import AlertReducer from "./alertReducer";
import { SET_ALERT } from "../types";

const AlertState = props => {
  const intitalState = {
    alert: null
  };

  const [state, dispatch] = useReducer(AlertReducer, intitalState);

  //functions here
  const funalert = () => {
    setAlert({ message: " Please enter the Username", type: "light" });
    console.log(alert);
    setTimeout(() => {
      setAlert(null);
    }, 4000);
  };

  return (
    <AlertContext.Provider
      value={{
        //value:state.value
        alert: state.alert,

        //function name
        getUserRepos
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
