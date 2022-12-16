import "../../Style/citys/night.css";
import "../../Style/citys/style.css";
import { Link } from "react-router-dom";
export default function Header() {
  window.onscroll = () => {
    let Navbar = document.querySelector(".navbar");
    Navbar.classList.remove("active");
  };
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
  const handleMenu = (e) => {
    let Navbar = document.querySelector(".navbar");
    Navbar.classList.toggle("active");
  };
  return (
    <header className="header">
      <div id="menu-btn" className="fas fa-bars" onClick={handleMenu}></div>

      <Link
        data-aos="zoom-in-left"
        data-aos-delay="100"
        to="/"
        className="logo"
      >
        <span>S</span>TRAVEL
      </Link>

      <nav className="navbar">
        <a href="#home" data-aos="zoom-in-left" data-aos-delay="150">
          Home
        </a>
        <a data-aos="zoom-in-left" data-aos-delay="200" href="#about">
          About
        </a>
        <a data-aos="zoom-in-left" data-aos-delay="250" href="#destination">
          Điểm đến
        </a>
        <a data-aos="zoom-in-left" data-aos-delay="300" href="#services">
          Dịch vụ
        </a>
        <a data-aos="zoom-in-left" data-aos-delay="350" href="#gallery">
          Ảnh
        </a>
        <a data-aos="zoom-in-left" data-aos-delay="400" href="#blogs">
          blogs
        </a>
      </nav>
      <i
        className="far fa-moon btn-toggle"
        data-aos="zoom-in-left"
        data-aos-delay="450"
        onClick={handleTheme}
      ></i>
      <a
        data-aos="zoom-in-left"
        data-aos-delay="500"
        href="#book-form"
        className="btn"
      >
        Đặt Ngay
      </a>
    </header>
  );
}
