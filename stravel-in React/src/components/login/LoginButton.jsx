import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <button className="btn" onClick={() => loginWithRedirect()}>Đăng Nhập & Đăng Ký</button>
    )
  );
};

export default LoginButton;
