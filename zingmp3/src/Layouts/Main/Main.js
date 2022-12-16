import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Header from "../Header/Header";
import RouteCore from "../../Services/Routes/RouteCore";
import Sidebar from "../Sidebar/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { authSelector, getUser } from "../../Pages/Auth/authSlice";

function Main(props) {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUser())
  }, [])

  const auth = useSelector(authSelector)

  return (
    <div id="app">
      <div className="background"></div>
      <div className="grid">
        <div className="zing">
          <Sidebar />
          <div className="zing-main">
            <Header />
            <div className="zing-body">
              <RouteCore />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Main.propTypes = {};

export default Main;
