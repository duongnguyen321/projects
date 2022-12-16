import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

export default class Brand extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      brandBox: [],
    };
  }

  componentDidMount() {
    fetch("https://apiforstravel.herokuapp.com/home")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            brandBox: result.brandBox,
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
      <Swiper
        className="swiper-container brand-slider"
        spaceBetween={20}
        slidesPerView={5}
        onSlideChange={() => console.log("Review change")}
      >
        <div className="swiper-wrapper">
          {this.state.brandBox.map((brandBox) => {
            return (
              <SwiperSlide className="swiper-slide" key={brandBox.id}>
                <img src={brandBox.src} alt="" />
              </SwiperSlide>
            );
          })}
        </div>
      </Swiper>
    );
  }
}
