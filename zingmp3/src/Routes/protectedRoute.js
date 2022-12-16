//Cấu hình protected route
import { Route } from "react-router-dom";
import Profile from "../Pages/Profile/Profile";
import AuthMiddleware from "../Middlewares/AuthMiddleware";
import AdminMiddleware from "../Middlewares/AdminMiddleware";
import Single from "../Pages/Single/Single";

export const protectedRoutes = (
  <>
    <Route path="/ca-nhan" element={<AuthMiddleware />}>
      <Route path="" element={<Profile />} />
      <Route path="ca-si" element={<AdminMiddleware />}>
        <Route path="" element={<Single />} />
      </Route>
    </Route>
  </>
);
