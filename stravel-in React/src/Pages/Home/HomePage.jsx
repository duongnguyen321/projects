import React, { useEffect } from "react";

import "../../Style/home/night.css";
import "../../Style/home/style.css";
import "../../Style/home/rate.css";

import Header from "../../components/home/Header";
import Footer from "../../components/home/Footer";
import Home from "../../components/home/Home";
import Packages from "../../components/home/Packages";
import Services from "../../components/home/Services";
import Gallery from "../../components/home/Gallery";
import Review from "../../components/home/Review";
import Contact from "../../components/home/Contact";
import Brand from "../../components/home/Brand";
import Chat from "../../components/chatbot/MainChat";
// https://apiforstravel.herokuapp.com/home/
function HomePage(props) {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  window.onscroll = () => {
    let menu = document.querySelector("#menu-bar");
    let loginForm = document.querySelector(".login-form-container");
    let navbar = document.querySelector(".navbar");
    loginForm.classList.remove("active");
    menu.classList.remove("fa-times");
    navbar.classList.remove("active");
    document.querySelector("#menu-bar .fas").classList.add("fa-bars");
  };
  return (
    <div className="HomePages">
      <Header />
      <div className="container">
        <Home />
        <Chat />
        <Packages />
        <Services />
        <Gallery />
        <Review />
        <Contact />
        <Brand />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
