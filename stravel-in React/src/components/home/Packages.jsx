import React from "react";
import { Link } from "react-router-dom";

export default class Packages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      packagesHeading: [],
      packagesBox: [],
      packagesStar: [],
    };
  }

  componentDidMount() {
    fetch("https://apiforstravel.herokuapp.com/home")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            packagesHeading: result.packagesHeading,
            packagesBox: result.packagesBox,
            packagesStar: result.packagesStar,
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
      <section className="packages" id="packages">
        <h1 className="heading">
          {this.state.packagesHeading.map((packagesHeading) => {
            return (
              <span
                key={packagesHeading.id}
                className={packagesHeading.className}
              >
                {packagesHeading.text}
              </span>
            );
          })}
        </h1>
        <div className="box-container">
          {this.state.packagesBox.map((packagesBox) => {
            return (
              <Link to={packagesBox.href} className="box" key={packagesBox.id}>
                <img src={packagesBox.src} alt={packagesBox.h3} />
                <div className="content">
                  <h3>
                    <i className="fas fa-map-marker-alt"></i>
                    {packagesBox.h3}
                  </h3>
                  <p>{packagesBox.p1}</p>
                  <p>{packagesBox.p2}</p>
                  <div className="stars">
                    {this.state.packagesStar.map((packagesStar) => {
                      return (
                        <i
                          key={packagesStar.id}
                          className={packagesStar.className}
                        ></i>
                      );
                    })}
                  </div>
                  <div className="price">
                    {packagesBox.price}
                    <span>{packagesBox.spanPrice}</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    );
  }
}
