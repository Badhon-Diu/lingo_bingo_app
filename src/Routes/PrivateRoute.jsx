import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

export default function PrivateRoute({children}) {
  const { userdata } = useContext(AuthContext);
  if (userdata) {
    return children;
  }

  return <Navigate to="/"></Navigate>;
}
