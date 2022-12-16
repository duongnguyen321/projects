import React from "react";
import { GlobalContext } from "../../context/GlobalState";
import { Gear } from "react-bootstrap-icons";
import Mainchat from "../chatbot/MainChat";
import Emailjs from "../EmailJs/Emailjs";
import Login from "../login/Login";
function Header() {
  return (
    <GlobalContext.Consumer>
      {(context) => {
        return (
          <header>
            <Mainchat/>
            <Emailjs/>
            <Login/>
            <div className="information">
              <h1 className="firt_name title_h1">{context.names.first}</h1>
              <span className="last_name name">{context.names.last}</span>
              <h5 className="occupation title_h5">{context.occupation}</h5>
            </div>
            <div className="contents">
              <p className="body_18_regular">
                {context.contents.first_content}
                <br />
                <br />
                {context.contents.second_content}
              </p>
            </div>
            <i className="bi bi-plus star star_1" />
            <div className="img_ava" />
            <i className="bi bi-plus star star_2" />
            <Gear
              className="gear"
              onClick={() => {
                context.changeThemes();
              }}
            />
            <div className="rectangle rectangle_1" />
            <div className="rectangle rectangle_2" />
            <div className="ellipse ellipse_1" />
            <div className="ellipse ellipse_2" />
          </header>
        );
      }}
    </GlobalContext.Consumer>
  );
}

export default Header;
