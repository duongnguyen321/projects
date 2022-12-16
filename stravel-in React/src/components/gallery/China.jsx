import React from "react";
import { Link } from "react-router-dom";
class China extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      ChinaHeading: [],
      ChinaBox: [],
      Chinalink: "",
    };
  }
  componentDidMount() {
    fetch("https://apiforstravel.herokuapp.com/gallery")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            ChinaHeading: result.ChinaHeading,
            ChinaBox: result.ChinaBox,
            Chinalink: result.Chinalink,
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
      <section className="gallery" id="china">
        <h1 className="heading">
          {this.state.ChinaHeading.map((ChinaHeading) => {
            return (
              <span key={ChinaHeading.id} className={ChinaHeading.className}>
                {ChinaHeading.text}
              </span>
            );
          })}
        </h1>
        <div className="box-container">
          {this.state.ChinaBox.map((ChinaBox) => {
            return (
              <div className="box" key={ChinaBox.id}>
                <img src={ChinaBox.src} alt={ChinaBox.h3} />
                <div className="content">
                  <h3>China</h3>
                  <p>Đất nước 3500 năm lịch sử</p>
                  <Link to={this.state.Chinalink} className="btn">
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

export default China;
