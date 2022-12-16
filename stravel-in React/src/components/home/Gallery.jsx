import React from "react";
import { Link } from "react-router-dom";

export default class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      galleryHeading: [],
      galleryBox: [],
    };
  }

  componentDidMount() {
    fetch("https://apiforstravel.herokuapp.com/home")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            galleryHeading: result.galleryHeading,
            galleryBox: result.galleryBox,
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
      <section className="gallery" id="gallery">
        <h1 className="heading">
          {this.state.galleryHeading.map((galleryHeading) => {
            return (
              <span
                key={galleryHeading.id}
                className={galleryHeading.className}
              >
                {galleryHeading.text}
              </span>
            );
          })}
        </h1>
        <div className="box-container">
          {this.state.galleryBox.map((galleryBox) => {
            return (
              <div className="box" key={galleryBox.id}>
                <img src={galleryBox.src} alt={galleryBox.h3} />
                <div className="content">
                  <h3>{galleryBox.h3}</h3>
                  <p>{galleryBox.p}</p>
                  <Link to="/images" className="btn">
                    Xem thêm
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
