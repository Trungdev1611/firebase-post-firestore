import React from "react";
import { Navigate } from "react-router-dom";
import { UsegetUserContext } from "./../Context/AuthContext";

const ProtectedRoute = ({ children }) => {
  let contextData = UsegetUserContext();
  console.log("contextData", contextData);
  if (
    !contextData?.userDefined &&
    !JSON.parse(localStorage.getItem("userDefined"))
  ) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoute;
