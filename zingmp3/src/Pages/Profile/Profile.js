import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { authSelector, getUser } from "../Auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import useClient from "../../Services/Hooks/useClient";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Profile(props) {
  const state = useSelector(authSelector)
  const client = useClient()
  let { userLogin } = { ...state }
  const dispatch = useDispatch()
  const [form, setForm] = useState({
    email: "",
    name: "",
  });
  useEffect(() => {
    const { name, email } = userLogin

    setForm({
      name, 
      email,
    })
  }, [])
  const handleChange = (e) => {
    const data = { ...form };
    data[e.target.name] = e.target.value;
    setForm(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postLogin(form);
  };
  const token = JSON.parse(localStorage.getItem("login")).token
  const postLogin = async (data) => {
    console.log(data)
    const res = await client.patch(client.users + "/" + userLogin.id, data, {}, token);
    console.log(res)
    if (res.response.ok) {
      dispatch(getUser());
      toast.success("Sửa thành công");
    } else {
      toast.error("Có vấn đề! Vui nòng thử nại");
    }
  };


  const { name, email } = form
  return <div className="login">
    <h1>{userLogin.name}</h1>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Name</label>
        <input
          type="name"
          name="name"
          placeholder="name..."
          value={name}
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
          value={email}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Sửa thông tin</button>
    </form>
    <ToastContainer />
  </div>
}

Profile.propTypes = {};

export default Profile;
