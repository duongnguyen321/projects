import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { authSelector } from "../Pages/Auth/authSlice";

export default function AuthMiddleware() {
  const auth = useSelector(authSelector);

  const {isLoading, isAuth} = auth;

  if (!isLoading){
   
    return isAuth ? <Outlet /> : <Navigate to="/dang-nhap" />;
  }else{
    
    return <p>Loading......</p>
  }
  
}
