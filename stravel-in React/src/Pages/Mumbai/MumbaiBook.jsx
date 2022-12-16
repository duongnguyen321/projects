import Header from "../../components/mumbai/Header2";
import Footer from "../../components/mumbai/Footer2";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import React from "react";
import "../../Style/citys/night.css";
import "../../Style/citys/style.css";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      home: [],
    };
  }
  componentDidMount() {
    fetch("https://apiforstravel.herokuapp.com/pages/3")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            home: result.home,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }
  render() {
    return (
      <section className="home" id="home">
        <div className="content">
          <span data-aos="fade-up" data-aos-delay="100">
            {this.state.home.name}
          </span>
          <h3 data-aos="fade-up" data-aos-delay="200">
            {this.state.home.content}
          </h3>
          <p data-aos="fade-up" data-aos-delay="400">
            {this.state.home.textcontent}
          </p>
          <Link
            data-aos="fade-up"
            data-aos-delay="500"
            to="/mumbai"
            className="btn"
          >
            Tìm hiểu thêm
          </Link>
        </div>
      </section>
    );
  }
}

const Book = () => {
  return (
    <section className="book-form" id="book-form">
      <form action="">
        <div data-aos="zoom-in" data-aos-delay="50" className="inputBox">
          <span>
            <h1>chuyến đi được bình chọn tốt nhất</h1>
          </span>
        </div>
        <div data-aos="zoom-in" data-aos-delay="100" className="inputBox">
          <span>Số điện thoại</span>
          <input type="text" placeholder="0912345678" maxLength={11} />
        </div>
        <div data-aos="zoom-in" data-aos-delay="150" className="inputBox">
          <span>Email</span>
          <input type="email" placeholder="email@gmail.com" />
        </div>
        <div data-aos="zoom-in" data-aos-delay="200" className="inputBox">
          <span>Thời gian đi</span>
          <input type="datetime-local" />
        </div>
        <div data-aos="zoom-in" data-aos-delay="250" className="inputBox">
          <span>Tôi có</span>
          <input type="number" min={2} max={8} placeholder="Từ 2-8 người" />
        </div>
        <div data-aos="zoom-in" data-aos-delay="300" className="inputBox">
          <span>Tôi thanh toán bằng</span>
          <select>
            <option value="momo">Momo</option>
            <option value="bank">Chuyển khoản</option>
            <option value="card">Thẻ VISA</option>
            <option value="none">Thanh toán khi đến nơi</option>
          </select>
        </div>
        <Link
          data-aos="zoom-in"
          data-aos-delay="350"
          className="btn"
          to="/success"
        >
          Đặt Ngay
        </Link>
      </form>
    </section>
  );
};

export default function MumbaiBook() {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="Pages Mumbai">
      <Header />
      <div className="container">
        <Home />
        <Book />
      </div>
      <Footer />
    </div>
  );
}
