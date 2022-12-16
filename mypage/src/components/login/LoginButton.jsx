import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <button className="btn" onClick={() => loginWithRedirect()}><i className="bi bi-person-circle"></i></button>
    )
  );
};

export default LoginButton;
