import React from "react";
import { Link } from "react-router-dom";
class Hawaii extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      HawaiiHeading: [],
      HawaiiBox: [],
      Hawaiilink: "",
    };
  }
  componentDidMount() {
    fetch("https://apiforstravel.herokuapp.com/gallery")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            HawaiiHeading: result.HawaiiHeading,
            HawaiiBox: result.HawaiiBox,
            Hawaiilink: result.Hawaiilink,
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
      <section className="gallery" id="hawaii">
        <h1 className="heading">
          {this.state.HawaiiHeading.map((HawaiiHeading) => {
            return (
              <span key={HawaiiHeading.id} className={HawaiiHeading.className}>
                {HawaiiHeading.text}
              </span>
            );
          })}
        </h1>
        <div className="box-container">
          {this.state.HawaiiBox.map((HawaiiBox) => {
            return (
              <div className="box" key={HawaiiBox.id}>
                <img src={HawaiiBox.src} alt={HawaiiBox.h3} />
                <div className="content">
                  <h3>Hawaii</h3>
                  <p>Hòn Ngọc Của Thái Bình Dương</p>
                  <Link to={this.state.Hawaiilink} className="btn">
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
export default Hawaii;
