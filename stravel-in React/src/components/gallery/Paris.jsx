import React from "react";
import { Link } from "react-router-dom";
class Paris extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      ParisHeading: [],
      ParisBox: [],
      Parislink: "",
    };
  }
  componentDidMount() {
    fetch("https://apiforstravel.herokuapp.com/gallery")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            ParisHeading: result.ParisHeading,
            ParisBox: result.ParisBox,
            Parislink: result.Parislink,
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
      <section className="gallery" id="paris">
        <h1 className="heading">
          {this.state.ParisHeading.map((ParisHeading) => {
            return (
              <span key={ParisHeading.id} className={ParisHeading.className}>
                {ParisHeading.text}
              </span>
            );
          })}
        </h1>
        <div className="box-container">
          {this.state.ParisBox.map((ParisBox) => {
            return (
              <div className="box" key={ParisBox.id}>
                <img src={ParisBox.src} alt={ParisBox.h3} />
                <div className="content">
                  <h3>Paris</h3>
                  <p>Kinh Đô Thời Trang</p>
                  <Link to={this.state.Parislink} className="btn">
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
export default Paris;
