import Header from "../../components/mumbai/Header";
import Footer from "../../components/mumbai/Footer";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import "../../Style/citys/night.css";
import "../../Style/citys/style.css";
import Chat from "../../components/chatbot/MainChat";
import vid1 from "../../assets/videos/vid-1.mp4";
import vid2 from "../../assets/videos/vid-2.mp4";
import vid3 from "../../assets/videos/vid-3.mp4";
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
          <p data-aos="fade-up" data-aos-delay="300">
            {this.state.home.textcontent}
          </p>
          <a
            data-aos="fade-up"
            data-aos-delay="450"
            href="#destination"
            className="btn"
          >
            Tìm hiểu thêm
          </a>
        </div>
      </section>
    );
  }
}

class Bookform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      Book: [],
    };
  }
  componentDidMount() {
    fetch("https://apiforstravel.herokuapp.com/pages/3")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            Book: result.Book,
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
      <section className="book-form" id="book-form">
        <form action="">
          <div data-aos="zoom-in" data-aos-delay="50" className="inputBox">
            <span style={{ fontSize: 2.5 + "em" }}>
              <h1>{this.state.Book.content}</h1>
            </span>
          </div>

          <div data-aos="zoom-in" data-aos-delay="100" className="inputBox">
            <span>
              <Link className="btn btn-book" to="/mumbai/book">
                Đặt ngay
              </Link>
            </span>
          </div>
        </form>
      </section>
    );
  }
}
const About = () => {
  const handleVidbtn1 = () => {
    document.querySelectorAll(".control-btn1").forEach((btn1) => {
      let src = btn1.getAttribute("data-src");
      btn1.classList.add("active");
      document.querySelector(".control-btn2").classList.remove("active");
      document.querySelector(".control-btn3").classList.remove("active");
      document.querySelector(".about .video-container .video").src = src;
    });
  };
  const handleVidbtn2 = () => {
    document.querySelectorAll(".control-btn2").forEach((btn2) => {
      let src = btn2.getAttribute("data-src");
      btn2.classList.add("active");
      document.querySelector(".control-btn1").classList.remove("active");
      document.querySelector(".control-btn3").classList.remove("active");
      document.querySelector(".about .video-container .video").src = src;
    });
  };
  const handleVidbtn3 = () => {
    document.querySelectorAll(".control-btn3").forEach((btn3) => {
      let src = btn3.getAttribute("data-src");
      btn3.classList.add("active");
      document.querySelector(".control-btn1").classList.remove("active");
      document.querySelector(".control-btn2").classList.remove("active");
      document.querySelector(".about .video-container .video").src = src;
    });
  };
  return (
    <section className="about" id="about">
      <div
        className="video-container"
        data-aos="fade-right"
        data-aos-delay="150"
      >
        <video
          src={vid1}
          muted
          autoPlay
          loop
          controls
          className="video"
        ></video>
        <div className="controls">
          <span
            className="control-btn1"
            data-src={vid1}
            onClick={handleVidbtn1}
          ></span>
          <span
            className="control-btn2"
            data-src={vid2}
            onClick={handleVidbtn2}
          ></span>
          <span
            className="control-btn3"
            data-src={vid3}
            onClick={handleVidbtn3}
          ></span>
        </div>
      </div>
      <div className="content" data-aos="fade-left" data-aos-delay="200">
        <span>Tại sao nên chọn Stravel</span>
        <h3>Trải nghiệm bậc nhất</h3>
        <p>
          chúng tôi hợp tác với những địa điểm nghỉ dưỡng có trải nghiệm bậc
          nhất để đem lại một kỳ nghỉ tuyệt vời cho bạn cùng người thân
        </p>
        <Link to="/aboutus" className="btn">
          Tìm hiểu thêm về Stravel
        </Link>
      </div>
    </section>
  );
};
class Destination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      destinationBox: [],
    };
  }
  componentDidMount() {
    fetch("https://apiforstravel.herokuapp.com/pages/3")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            destinationBox: result.destinationBox,
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
      <section className="destination" id="destination">
        <div className="heading">
          <span>Những điểm đến ở Mumbai</span>
          <h1>Những điểm du lịch bậc nhất</h1>
        </div>
        <div className="box-container">
          {this.state.destinationBox.map((destinationBox) => {
            return (
              <a
                href="https://ximgo.com/tin-tuc/17-dia-diem-du-lich-ai-cap-nhat-dinh-phai-ghe-tham-1-lan-1129"
                key={destinationBox.id}
                className="box"
              >
                <div className="image">
                  <img
                    src={destinationBox.src}
                    alt={destinationBox.h3}
                  />
                </div>
                <div className="content">
                  <h3>{destinationBox.h3}</h3>
                  <p>{destinationBox.p}</p>
                </div>
              </a>
            );
          })}
        </div>
      </section>
    );
  }
}

class Services extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      servicesBox: [],
    };
  }
  componentDidMount() {
    fetch("https://apiforstravel.herokuapp.com/pages/3")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            servicesBox: result.servicesBox,
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
      <section className="services" id="services">
        <div className="heading">
          <span>Dịch vụ</span>
          <h1>Nâng cao trải nghiệm</h1>
        </div>
        <Link to={"/aboutus"} className="box-container">
          {this.state.servicesBox.map((servicesBox) => {
            return (
              <div key={servicesBox.id} className="box">
                <i className={servicesBox.icon}></i>
                <h3>{servicesBox.h3}</h3>
                <p>Some text...</p>
              </div>
            );
          })}
        </Link>
      </section>
    );
  }
}

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      galleryBox: [],
    };
  }
  componentDidMount() {
    fetch("https://apiforstravel.herokuapp.com/pages/3")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            galleryBox: result.galleryBox,
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
      <section className="gallery" id="gallery">
        <div className="heading">
          <span>
            <h2>những bức Ảnh về Mumbai</h2>
          </span>
        </div>
        <div className="box-container">
          {this.state.galleryBox.map((galleryBox) => {
            return (
              <div className="box" key={galleryBox.id}>
                <img src={galleryBox.src} alt={galleryBox.h3} />
                <span>{galleryBox.span}</span>
                <h3>{galleryBox.h3}</h3>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      blogBox: [],
    };
  }
  componentDidMount() {
    fetch("https://apiforstravel.herokuapp.com/pages/3")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            blogBox: result.blogBox,
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
      <section className="blogs" id="blogs">
        <div className="heading">
          <span>blogs & posts</span>
          <h1>Tìm hiểu thêm về Mumbai</h1>
        </div>
        <div className="box-container">
          {this.state.blogBox.map((blogBox) => {
            return (
              <div className="box" key={blogBox.id}>
                <div className="image">
                  <img src={blogBox.src} alt={blogBox.a} />
                </div>
                <div className="content">
                  <p className="link">{blogBox.a}</p>
                  <p>{blogBox.p}</p>
                  <div className="icon">
                    <p>
                      <i className="fas fa-clock"></i> 21st may, 2021
                    </p>
                    <p>
                      <i className="fas fa-user"></i> by admin
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      reviewuser: [],
    };
  }
  componentDidMount() {
    fetch("https://apiforstravel.herokuapp.com/pages/3")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            reviewuser: result.reviewuser,
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
      <section className="review">
        <div className="content" data-aos="fade-right" data-aos-delay="250">
          <span>Đánh giá</span>
          <h3>Những lời đánh giá tốt nhất</h3>
          <p>
            Tất cả những lời đánh giá chúng tôi đều ghi nhận và tiếp thu để phát
            triển. đây là những đánh giá tốt nhất về chuyến đi Egypt này.
          </p>
        </div>

        <div
          className="box-container"
          data-aos="fade-left"
          data-aos-delay="350"
        >
          <div className="box">
            <p>Some test</p>
            <div className="user">
              <img src={this.state.reviewuser.src1} alt="" />
              <div className="info">
                <h3>Some test</h3>
                <span>...</span>
              </div>
            </div>
          </div>
          <div className="box">
            <p>Some test</p>
            <div className="user">
              <img src={this.state.reviewuser.src2} alt="" />
              <div className="info">
                <h3>Some test</h3>
                <span>...</span>
              </div>
            </div>
          </div>
          <div className="box">
            <p>Some test</p>
            <div className="user">
              <img src={this.state.reviewuser.src3} alt="" />
              <div className="info">
                <h3>Some test</h3>
                <span>...</span>
              </div>
            </div>
          </div>
          <div className="box">
            <p>Some test</p>
            <div className="user">
              <img src={this.state.reviewuser.src4} alt="" />
              <div className="info">
                <h3>Some test</h3>
                <span>...</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
};
const Banner = () => {
  return (
    <div className="banner">
      <div className="content" data-aos="zoom-in-up" data-aos-delay="250">
        <span>Cùng STravel</span>
        <h3>Bắt đầu chuyến đi của bạn</h3>
        <p>
          Mỗi chuyến đi đều là một kỷ niệm đẹp. Hãy cùng STravel ghi lại kỷ niệm
          này !
        </p>
        <Link to="/mumbai/book" className="btn">
          Đặt Ngay
        </Link>
      </div>
    </div>
  );
};
export default function Mumbai() {
  const handleScroll = (e) => {
    let Navbar = document.querySelector(".navbar");
    let Pages = document.querySelectorAll(".Pages");
    Pages.onscroll = () => {
      Navbar.classList.remove("active");
    };
  };

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="Pages Mumbai" onScroll={handleScroll}>
      <Header />
      <div className="container">
        <Home />
        <Bookform />
        <About />
        <Destination />
        <Services />
        <Gallery />
        <Blog />
        <Review />
        <Banner />
        <Chat />
      </div>
      <Footer />
    </div>
  );
}
