import Chatbot from "react-chatbot-kit";
import ActionProvider from "./ActionProvider";
import MessageParser from "./MessageParser";
import config from "./config";
import "./chat.css";
import { useAuth0 } from "@auth0/auth0-react";

export default function Chatbots() {
  const { user, isAuthenticated } = useAuth0();
  if (isAuthenticated === true) {
    return (
      isAuthenticated && (
        <div className="Chatbot">
          <h2>Xin Chào {user.name} !</h2>
          <Chatbot
            config={config}
            actionProvider={ActionProvider}
            messageParser={MessageParser}
          />
        </div>
      )
    );
  }else{
    return (
      <div className="Chatbot">
        <h2>Xin Chào Bạn !</h2>
        <Chatbot
          config={config}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
        />
      </div>
    );
  }
}
