import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import emailjs from "emailjs-com";

const ReviewBoxStar = () => {
  return (
    <div className="stars">
      <i className="fas fa-star"></i>
      <i className="fas fa-star"></i>
      <i className="fas fa-star"></i>
      <i className="fas fa-star"></i>
      <i className="fas fa-star"></i>
    </div>
  );
};

class ReviewRate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      ratingStar: [],
    };
  }

  componentDidMount() {
    fetch("https://apiforstravel.herokuapp.com/home")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            ratingStar: result.ratingStar,
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
  sendEmail(e) {
    e.preventDefault(); //This is important, i'm not sure why, but the email won't send without it

    emailjs
      .sendForm(
        "service_es5f8da",
        "template_je7pxnp",
        e.target,
        "KclByHfCL2ncJinR1"
      )
      .then(
        (result) => {
            alert(
              "Stravel đã ghi nhận lời đánh giá của bạn. Chúng tôi sẽ cố gắng để làm tốt hơn những gì có thể!"
            );
         e.preventDefault(); //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  render() {
    return (
      <div className="row">
        <div className="ratestar">
          <h2>đánh giá chuyến đi của bạn</h2>
          <div className="skills">
            <div className="rating">
              {this.state.ratingStar.map((ratingStar) => {
                return (
                  <input
                    key={ratingStar.id}
                    type={ratingStar.type}
                    className={ratingStar.class}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <form action="" onSubmit={this.sendEmail}>
          <div className="inputBox">
            <div className="information">
              <input
                className="name"
                type="name"
                placeholder="Tên của bạn"
                name="to_name"
                required
              />
              <input
                className="email"
                type="email"
                placeholder="Email của bạn"
                name="to_email"
                required
              />
            </div>
            <textarea
              name="reply_to"
              placeholder="viết đánh giá của bạn"
              cols="30"
              rows="15"
              required
            ></textarea>
          </div>
          <input type="submit" className="btn" value="gửi tới chúng tôi" />
        </form>
      </div>
    );
  }
}
export default class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      reviewHeading: [],
      reviewBox: [],
    };
  }

  componentDidMount() {
    fetch("https://apiforstravel.herokuapp.com/home")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            reviewHeading: result.reviewHeading,
            reviewBox: result.reviewBox,
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
      <section className="review" id="review">
        <h1 className="heading">
          {this.state.reviewHeading.map((reviewHeading) => {
            return (
              <span key={reviewHeading.id} className={reviewHeading.className}>
                {reviewHeading.text}
              </span>
            );
          })}
        </h1>
        <div className="rate">
          <ReviewRate />
        </div>
        <Swiper
          className="swiper-container review-slider"
          spaceBetween={20}
          slidesPerView={2}
        >
          <div className="swiper-wrapper">
            {this.state.reviewBox.map((reviewBox) => {
              return (
                <SwiperSlide className="swiper-slide" key={reviewBox.id}>
                  <div className="box">
                    <img src={reviewBox.src} alt={reviewBox.h3} />
                    <h3>{reviewBox.h3}</h3>
                    <p>{reviewBox.p}</p>
                    <ReviewBoxStar />
                  </div>
                </SwiperSlide>
              );
            })}
          </div>
        </Swiper>
      </section>
    );
  }
}
