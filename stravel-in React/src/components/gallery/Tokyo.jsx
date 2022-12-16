import React from "react";
import { Link } from "react-router-dom";
class Tokyo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      TokyoHeading: [],
      TokyoBox: [],
      Tokyolink: "",
    };
  }
  componentDidMount() {
    fetch("https://apiforstravel.herokuapp.com/gallery")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            TokyoHeading: result.TokyoHeading,
            TokyoBox: result.TokyoBox,
            Tokyolink: result.Tokyolink,
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
      <section className="gallery" id="tokyo">
        <h1 className="heading">
          {this.state.TokyoHeading.map((TokyoHeading) => {
            return (
              <span key={TokyoHeading.id} className={TokyoHeading.className}>
                {TokyoHeading.text}
              </span>
            );
          })}
        </h1>
        <div className="box-container">
          {this.state.TokyoBox.map((TokyoBox) => {
            return (
              <div className="box" key={TokyoBox.id}>
                <img src={TokyoBox.src} alt={TokyoBox.h3} />
                <div className="content">
                  <h3>Tokyo</h3>
                  <p>Truyền Thống Và Tương Lai</p>
                  <Link to={this.state.Tokyolink} className="btn">
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
export default Tokyo;
