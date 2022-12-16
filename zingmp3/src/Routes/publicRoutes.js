//Cấu hình public route
import { Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Categories from "../Pages/Categories/Categories";
import Login from "../Pages/Auth/Login";
import Logout from "../Pages/Auth/Logout";
import Register from "../Pages/Auth/Register";
export const publicRoutes = (
  <>
    <Route path="/" element={<Home />} end />
    <Route path="/the-loai" element={<Categories />} />
    <Route path="/dang-nhap" element={<Login />} />
    <Route path="/dang-ky" element={<Register />} />
    <Route path="/dang-xuat" element={<Logout />} />
  </>
);
