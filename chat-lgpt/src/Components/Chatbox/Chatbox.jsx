import React from "react";
import Typed from "react-typed";
export default function Chatbox(props) {
  const { text, userChat, loading } = props;
  const data = [];
  for (let i = 0; i < text.length; i++) {
    data.push({
      id: i,
      text: text[i],
      userChat: userChat[i],
    });
  }
  return (
    <div className="chatbox">
      {data.map(({ id, text, userChat }) => {
        return (
          <div className="chat" key={id}>
            <p className="right">{userChat}</p>
            <Typed
              strings={[text]}
              typeSpeed={20}
              showCursor={false}
              startDelay={200}
              fadeOut={true}
              className="left"
            />
          </div>
        );
      })}
      {loading && (
        <Typed
          strings={["Loading..."]}
          showCursor={true}
          typeSpeed={50}
          backSpeed={25}
          loop={true}
          shuffle={true}
          className={"loading"}
        />
      )}
    </div>
  );
}
