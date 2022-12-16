import React,{ useEffect } from "react";
import Chatbots from "./Chatbot";
import "./mainchat.css"
const formChatRef = React.createRef()
export default function Mainchat() {
  useEffect (()=> {
    window.addEventListener('scroll', () => {
      formChatRef.current.classList.remove("active");
    });
  })
  function handleClick() {
    formChatRef.current.classList.toggle("active");
  }
  return (
    <div className="MainChat">
      <button className="Chattoggle" onClick={handleClick}>
      <i className="bi bi-messenger"></i>
      </button>
      <div className="formchat" ref={formChatRef}>
        <Chatbots />
      </div>
    </div>
  );
}
