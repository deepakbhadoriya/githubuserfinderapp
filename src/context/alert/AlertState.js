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
    const bang = { message: " Please enter the Username", type: "light" };
    dispatch({
      type: SET_ALERT,
      payload: bang
    });

    setTimeout(() => {
      dispatch({ type: SET_ALERT, payload: null });
    }, 4000);
  };

  return (
    <AlertContext.Provider
      value={{
        //value:state.value
        alert: state.alert,

        //function name
        funalert
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
