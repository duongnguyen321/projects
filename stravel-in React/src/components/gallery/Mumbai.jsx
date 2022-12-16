import React from "react";
import { Link } from "react-router-dom";
class Mumbai extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      MumbaiHeading: [],
      MumbaiBox: [],
      Mumbailink: "",
    };
  }
  componentDidMount() {
    fetch("https://apiforstravel.herokuapp.com/gallery")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            MumbaiHeading: result.MumbaiHeading,
            MumbaiBox: result.MumbaiBox,
            Mumbailink: result.Mumbailink,
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
      <section className="gallery" id="mumbai">
        <h1 className="heading">
          {this.state.MumbaiHeading.map((MumbaiHeading) => {
            return (
              <span key={MumbaiHeading.id} className={MumbaiHeading.className}>
                {MumbaiHeading.text}
              </span>
            );
          })}
        </h1>
        <div className="box-container">
          {this.state.MumbaiBox.map((MumbaiBox) => {
            return (
              <div className="box" key={MumbaiBox.id}>
                <img src={MumbaiBox.src} alt={MumbaiBox.h3} />
                <div className="content">
                  <h3>Mumbai</h3>
                  <p>Thành Phố Có Tất Cả</p>
                  <Link to={this.state.Mumbailink} className="btn">
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
export default Mumbai;
