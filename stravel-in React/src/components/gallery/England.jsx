import React from "react";
import { Link } from "react-router-dom";
class England extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      EnglandHeading: [],
      EnglandBox: [],
      Englandlink: "",
    };
  }
  componentDidMount() {
    fetch("https://apiforstravel.herokuapp.com/gallery")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            EnglandHeading: result.EnglandHeading,
            EnglandBox: result.EnglandBox,
            Englandlink: result.Englandlink,
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
      <section className="gallery" id="england">
        <h1 className="heading">
          {this.state.EnglandHeading.map((EnglandHeading) => {
            return (
              <span key={EnglandHeading.id} className={EnglandHeading.className}>
                {EnglandHeading.text}
              </span>
            );
          })}
        </h1>
        <div className="box-container">
          {this.state.EnglandBox.map((EnglandBox) => {
            return (
              <div className="box" key={EnglandBox.id}>
                <img src={EnglandBox.src} alt={EnglandBox.h3} />
                <div className="content">
                  <h3>England</h3>
                  <p>đất nước Mặt Trời không bao giờ lặn</p>
                  <Link to={this.state.Englandlink} className="btn">
                    Đặt Ngay
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}

export default England;
