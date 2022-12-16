import React from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

function Login() {
  const { isLoading } = useAuth0();

  if (isLoading) return ;

  return (
    <>
      <LoginButton />
      <LogoutButton />
    </>
  );
}

export default Login;
