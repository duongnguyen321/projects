import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./Auth.scss";
import useClient from "../../Services/Hooks/useClient";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { authSelector, getUser } from "./authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Login(props) {
  const client = useClient();
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const data = { ...form };
    data[e.target.name] = e.target.value;
    setForm(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = form;

    const data = {
      email: email,
      password: password,
    };

    postLogin(data);
  };

  const postLogin = async (data) => {
    const res = await client.post(client.login, data);

    if (res.response.ok) {
      const dataLogin = {
        token: res.data.accessToken,
        userId: res.data.user.id,
      };
      localStorage.setItem("login", JSON.stringify(dataLogin));

      dispatch(getUser());

      toast.success("Đăng nhập thành công");
      setTimeout(() => {
        navigate("/ca-nhan")

      }, 1000)

    } else {
      toast.error("Email hoặc mật khẩu không chính xác");
    }
  };

  return (
    <div className="login">
      <h1>Đăng nhập</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email..."
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password..."
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Đăng nhập</button>
      </form>
      <ToastContainer />
    </div>
  );
}

Login.propTypes = {};

export default Login;
