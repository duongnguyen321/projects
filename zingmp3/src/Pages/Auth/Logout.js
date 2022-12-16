import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "./authSlice";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    localStorage.removeItem("login");
    dispatch(getUser());
    navigate("/");
  });
  return <></>;
}
