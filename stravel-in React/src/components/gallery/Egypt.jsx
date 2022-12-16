import React from "react";
import { Link } from "react-router-dom";
class Egypt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      EgyptHeading: [],
      EgyptBox: [],
      Egyptlink: "",
    };
  }
  componentDidMount() {
    fetch("https://apiforstravel.herokuapp.com/gallery")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            EgyptHeading: result.EgyptHeading,
            EgyptBox: result.EgyptBox,
            Egyptlink: result.Egyptlink,
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
      <section className="gallery" id="egypt">
        <h1 className="heading">
          {this.state.EgyptHeading.map((EgyptHeading) => {
            return (
              <span key={EgyptHeading.id} className={EgyptHeading.className}>
                {EgyptHeading.text}
              </span>
            );
          })}
        </h1>
        <div className="box-container">
          {this.state.EgyptBox.map((EgyptBox) => {
            return (
              <div className="box" key={EgyptBox.id}>
                <img src={EgyptBox.src} alt={EgyptBox.h3} />
                <div className="content">
                  <h3>Egypt</h3>
                  <p>Vùng Đất Của Pharaohs</p>
                  <Link to={this.state.Egyptlink} className="btn">
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

export default Egypt;
