import React from "react";
import { Link } from "react-router-dom";
class Russia extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      RussiaHeading: [],
      RussiaBox: [],
      Russialink: "",
    };
  }
  componentDidMount() {
    fetch("https://apiforstravel.herokuapp.com/gallery")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            RussiaHeading: result.RussiaHeading,
            RussiaBox: result.RussiaBox,
            Russialink: result.Russialink,
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
      <section className="gallery" id="russia">
        <h1 className="heading">
          {this.state.RussiaHeading.map((RussiaHeading) => {
            return (
              <span key={RussiaHeading.id} className={RussiaHeading.className}>
                {RussiaHeading.text}
              </span>
            );
          })}
        </h1>
        <div className="box-container">
          {this.state.RussiaBox.map((RussiaBox) => {
            return (
              <div className="box" key={RussiaBox.id}>
                <img src={RussiaBox.src} alt={RussiaBox.h3} />
                <div className="content">
                  <h3>Nga</h3>
                  <p>Cung điện,Tiếng đàn,Sự yêu đời</p>
                  <Link to={this.state.Russialink} className="btn">
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

export default Russia;
