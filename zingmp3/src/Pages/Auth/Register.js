import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./Auth.scss";
import useClient from "../../Services/Hooks/useClient";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getUser } from "./authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Register(props) {
  const client = useClient();
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    email: "",
    password: "",
    name: ""
  });

  const handleChange = (e) => {
    const data = { ...form };
    data[e.target.name] = e.target.value;
    setForm(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, name } = form;

    const data = {
      email: email,
      password: password,
      name: name
    };

    postLogin(data);
  };

  const postLogin = async (data) => {
    const res = await client.post(client.register, data);

    if (res.response.ok) {
      const dataRegister = {
        token: res.data.accessToken,
        userId: res.data.user.id,
      };
      localStorage.setItem("login", JSON.stringify(dataRegister));
      dispatch(getUser());
      toast.success("Đăng ký thành công");
      setTimeout(() => {
        navigate("/ca-nhan")
      }, 1000)
    } else {
      toast.error("Email đã được đăng ký");
    }
  };

  return (
    <div className="login">
      <h1>Đăng ký</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="name..."
            onChange={handleChange}
            required
          />
        </div>
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
        <button type="submit">Đăng Ký</button>
      </form>
      <ToastContainer />
    </div>
  );
}

Register.propTypes = {};

export default Register;
