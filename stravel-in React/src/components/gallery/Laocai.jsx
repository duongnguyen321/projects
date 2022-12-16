import React from "react";
import { Link } from "react-router-dom";
class Laocai extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      LaocaiHeading: [],
      LaocaiBox: [],
      Laocailink: "",
    };
  }
  componentDidMount() {
    fetch("https://apiforstravel.herokuapp.com/gallery")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            LaocaiHeading: result.LaocaiHeading,
            LaocaiBox: result.LaocaiBox,
            Laocailink: result.Laocailink,
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
      <section className="gallery" id="laocai">
        <h1 className="heading">
          {this.state.LaocaiHeading.map((LaocaiHeading) => {
            return (
              <span key={LaocaiHeading.id} className={LaocaiHeading.className}>
                {LaocaiHeading.text}
              </span>
            );
          })}
        </h1>
        <div className="box-container">
          {this.state.LaocaiBox.map((LaocaiBox) => {
            return (
              <div className="box" key={LaocaiBox.id}>
                <img src={LaocaiBox.src} alt={LaocaiBox.h3} />
                <div className="content">
                  <h3>Lào Cai</h3>
                  <p>Bốn mùa trong một ngày đêm</p>
                  <Link to={this.state.Laocailink} className="btn">
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

export default Laocai;
