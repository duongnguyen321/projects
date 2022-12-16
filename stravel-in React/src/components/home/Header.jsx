import "../../Style/home/night.css";
import "../../Style/home/style.css";
import { Link } from "react-router-dom";
import Login from "../login/Login";
const navbarItems = [
  {
    id: 1,
    text: "Trang chủ",

    href: "#home",
  },
  {
    id: 3,
    text: "Ưu Đãi",

    href: "#packages",
  },
  {
    id: 4,
    text: "Dịch Vụ",

    href: "#services",
  },
  {
    id: 5,
    text: "Thư viện",

    href: "#gallery",
  },
  {
    id: 6,
    text: "Đánh Giá",

    href: "#review",
  },
  {
    id: 7,
    text: "Liên hệ",

    href: "#contact",
  },
];

function FormLogin(props) {
  const handleCloselogin = (e) => {
    let loginForm = document.querySelector(".login-form-container");
    loginForm.classList.remove("active");
  };
  return (
    <div className="login-form-container">
      <i
        className="fas fa-times"
        id="form-close"
        onClick={handleCloselogin}
      ></i>
      <form action="">
        <Login />
      </form>
    </div>
  );
}

function Header(props) {
  const handleTheme = (e) => {
    let btnToggle = document.querySelector(".btn-toggle");
    let body = document.body;
    var theme = localStorage.getItem("theme");

    if (body.getAttribute("class") === "light" && theme === "light") {
      body.classList = "dark";
      localStorage.setItem("theme", "dark");
      btnToggle.classList.remove("fa-moon");
      btnToggle.classList.add("fa-sun-o");
    } else {
      body.classList = "light";
      localStorage.setItem("theme", "light");
      btnToggle.classList.add("fa-moon");
      btnToggle.classList.remove("fa-sun-o");
    }
  };
  const handleLogin = (e) => {
    let loginForm = document.querySelector(".login-form-container");
    loginForm.classList.add("active");
  };

  const handleSearch = (e) => {
    let searchBtn = document.getElementById("search-btn");
    let formchat = document.querySelector(".formchat");

    searchBtn.classList.toggle("fa-times");
    formchat.classList.toggle("active");
  };
  const handleMenu = (e) => {
    let navbar = document.querySelector(".navbar");
    let menu = document.querySelector("#menu-bar");

    menu.classList.toggle("fa-times");
    document.querySelector("#menu-bar .fas").classList.toggle("fa-bars");
    navbar.classList.toggle("active");
  };
  return (
    <header>
      <FormLogin />
      <div
        id="menu-bar"
        className="fas"
        data-aos="zoom-in-left"
        data-aos-delay="100"
        onClick={handleMenu}
      >
        <i className="fas fa-bars"></i>
      </div>
      <Link
        to="/"
        className="logo"
        data-aos="zoom-in-left"
        data-aos-delay="200"
      >
        <span>S</span>Travel
      </Link>
      <nav className="navbar" data-aos="zoom-in-left" data-aos-delay="300">
        {navbarItems.map((navbarItems) => {
          return (
            <a key={navbarItems.id} href={navbarItems.href}>
              {navbarItems.text}
            </a>
          );
        })}
      </nav>
      <div className="icons" data-aos="zoom-in-left" data-aos-delay="400">
        <i className="far fa-moon btn-toggle" onClick={handleTheme} />
        <i className="fas fa-search" id="search-btn" onClick={handleSearch} />
        <i className="fas fa-user" id="login-btn" onClick={handleLogin} />
      </div>
    </header>
  );
}

export default Header;
