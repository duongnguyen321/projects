import React from "react";
import { Link } from "react-router-dom";
class Sydney extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      SydneyHeading: [],
      SydneyBox: [],
      Sydneylink: "",
    };
  }
  componentDidMount() {
    fetch("https://apiforstravel.herokuapp.com/gallery")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            SydneyHeading: result.SydneyHeading,
            SydneyBox: result.SydneyBox,
            Sydneylink: result.Sydneylink,
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
      <section className="gallery" id="sydney">
        <h1 className="heading">
          {this.state.SydneyHeading.map((SydneyHeading) => {
            return (
              <span key={SydneyHeading.id} className={SydneyHeading.className}>
                {SydneyHeading.text}
              </span>
            );
          })}
        </h1>
        <div className="box-container">
          {this.state.SydneyBox.map((SydneyBox) => {
            return (
              <div className="box" key={SydneyBox.id}>
                <img src={SydneyBox.src} alt={SydneyBox.h3} />
                <div className="content">
                  <h3>Sydney</h3>
                  <p>Xứ Sở Chuột Túi</p>
                  <Link to={this.state.Sydneylink} className="btn">
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
export default Sydney;
