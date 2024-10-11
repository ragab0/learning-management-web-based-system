import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import NonAuth from "../NonAuth/NonAuth";
import { Outlet, useNavigate } from "react-router-dom";

/**
 * MY BEST PART ^_^;
 *
 */

const roles = ["student", "mentor", "admin"];
export default function ProtectedRoute({ children, roleOfRoute }) {
  const navigate = useNavigate();
  const { isAuthRole, isInitialized } = useSelector(
    (state) => state.auth.login
  );

  // we have to call the navigate from useEffect - as it is a sideEffect;
  useEffect(() => {
    if (isInitialized && isAuthRole !== roleOfRoute) {
      if (roleOfRoute === "mentor") navigate("/dashboard/login");
      else if (roleOfRoute === "student") navigate("/login");
    }
  }, [isInitialized, isAuthRole, roleOfRoute, navigate]);

  // outlet.. in case we passed comp as a direct element withno children into the routes (to not go and add it through each nested route);
  if (roles.includes(isAuthRole) && isAuthRole === roleOfRoute)
    return children || <Outlet />;

  return <NonAuth />;
}
