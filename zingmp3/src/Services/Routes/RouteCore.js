import React from "react";
import { publicRoutes } from "../../Routes/publicRoutes";
import { protectedRoutes } from "../../Routes/protectedRoute";
import { Routes, Route } from "react-router-dom";
import Error404 from "../../Errors/Error404";

export default function RouteCore() {
  return (
    <Routes>
      {publicRoutes}
      {protectedRoutes}
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}
