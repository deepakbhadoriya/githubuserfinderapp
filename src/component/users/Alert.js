import React, { useContext } from "react";
import AlertContext from "../../context/alert/alertContext";

const Alert = props => {
  const alertContext = useContext(AlertContext);
  const { alert } = alertContext;
  if (alert === null) {
    return null;
  } else {
    return (
      <div className={`alert alert-${alert.type}`}>
        <i className="fas fa-exclamation-circle"> </i>
        {alert.message}
      </div>
    );
  }
};

export default Alert;
