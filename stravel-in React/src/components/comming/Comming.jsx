import "./index.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Chatbots from "../chatbot/Chatbot";
const Header = () => {
  return (
    <header>
      <a href="/" className="logo">
        Stravel
      </a>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
function Chat() {
  function handleClick() {
    let formchat = document.querySelector(".formchat");
    formchat.classList.toggle("active");
  }
  return (
    <div className="HomeChat">
      <button className="Chattoggle" onClick={handleClick}>
        <i className="fab fa-facebook-messenger"></i>
      </button>
      <div className="formchat">
        <Chatbots />
      </div>
    </div>
  );
}
const Section = () => {
  function handleAdd(e) {
    let newsletter = document.querySelector(".newsletter");
    newsletter.classList.add("active");
  }
  return (
    <section>
      <img
        alt="img"
        src="https://apiforstravel.herokuapp.com/images/Home/curve.png"
        className="wave"
      />
      <div className="contentBx">
        <h2>Comming Soon...</h2>
        <p>
          Page đang trong quá trình hoàn thiện và nâng cấp. Chúng tôi sẽ gửi
          thông báo tới bạn khi Page hoàn thành bằng việc bạn điền vào form
          "Thông Báo cho tôi"
        </p>
        <div className="countdown">
          <div className="time">
            <span id="day"></span>
            <p>Ngày</p>
          </div>
          <div className="time">
            <span id="hour"></span>
            <p>Giờ</p>
          </div>
          <div className="time">
            <span id="minute"></span>
            <p>Phút</p>
          </div>
          <div className="time">
            <span id="second"></span>
            <p>Giây</p>
          </div>
        </div>
        <button onClick={handleAdd}>Thông báo cho tôi</button>
      </div>
      <div className="imgBx">
        <img alt="img" src="https://apiforstravel.herokuapp.com/images/Home/man.png" />
      </div>
      <ul className="sci">
        <li>
          <Link to="/">
            <img alt="img" src="https://apiforstravel.herokuapp.com/images/Home/facebook.png" />
          </Link>
        </li>
        <li>
          <Link to="/">
            <img alt="img" src="https://apiforstravel.herokuapp.com/images/Home/instagram.png" />
          </Link>
        </li>
        <li>
          <Link to="/">
            <img alt="img" src="https://apiforstravel.herokuapp.com/images/Home/twitter.png" />
          </Link>
        </li>
      </ul>
    </section>
  );
};
const Newsletter = () => {
  function handleRemove(e) {
    let newsletter = document.querySelector(".newsletter");
    newsletter.classList.remove("active");
  }
  return (
    <div className="newsletter">
      <img alt="img" src="https://apiforstravel.herokuapp.com/images/Home/close.png" onClick={handleRemove} />
      <h2>thông báo cho tôi</h2>
      <p>Nhập email của bạn</p>
      <div className="inputBox">
        <form action="">
          <input type="email" name="" placeholder="abc@gmail.com" />
          <input type="submit" value="Gửi đi" />
        </form>
      </div>
    </div>
  );
};
export default function CommingSoon() {
  window.onscroll = function () {
    let newsletter = document.querySelector(".newsletter");
    newsletter.classList.remove("active");
  };
  let countDate = new Date("December 31,2022 00:00:00").getTime();
  useEffect(() => {
    function newYear() {
      let now = new Date().getTime();
      const gap = countDate - now;
      let second = 1000;
      let minute = second * 60;
      let hour = minute * 60;
      let day = hour * 24;
      let d = Math.floor(gap / day);
      let h = Math.floor((gap % day) / hour);
      let m = Math.floor((gap % hour) / minute);
      let s = Math.floor((gap % minute) / second);
      document.getElementById("day").innerText = d;
      document.getElementById("hour").innerText = h;
      document.getElementById("minute").innerText = m;
      document.getElementById("second").innerText = s;
    }
    setInterval(function () {
      newYear();
    }, 1000);
  });

  return (
    <div className="Comming">
      <Header />
      <Section />
      <Newsletter />
      <Chat/>
    </div>
  );
}
