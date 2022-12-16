import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return isAuthenticated && <button className="btn" onClick={() => logout()}><i className="bi bi-box-arrow-in-left"></i></button>;
};

export default LogoutButton;
