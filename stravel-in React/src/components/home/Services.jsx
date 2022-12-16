import React from "react";
import { Link } from "react-router-dom";

export default class Services extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      servicesHeading: [],
      servicesBox: [],
    };
  }

  componentDidMount() {
    fetch("https://apiforstravel.herokuapp.com/home")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            servicesHeading: result.servicesHeading,
            servicesBox: result.servicesBox,
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
      <section className="services" id="services">
        <h1 className="heading">
          {this.state.servicesHeading.map((servicesHeading) => {
            return (
              <span
                key={servicesHeading.id}
                className={servicesHeading.className}
              >
                {servicesHeading.text}
              </span>
            );
          })}
        </h1>
        <div className="box-container">
          {this.state.servicesBox.map((servicesBox) => {
            return (
              <Link to={"/aboutus"} className="box" key={servicesBox.id}>
                <i className={servicesBox.icon}></i>
                <h3>{servicesBox.h3}</h3>
                <p>{servicesBox.p}</p>
              </Link>
            );
          })}
        </div>
      </section>
    );
  }
}
