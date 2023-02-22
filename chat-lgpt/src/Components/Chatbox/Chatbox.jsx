import Typed from "react-typed";

export default function Chatbox({ text, userChat, loading }) {
  const data = text.map((value, index) => ({
    id: index,
    text: value,
    userChat: userChat[index],
  }));
  return (
    <div className="chatbox">
      {data.map(({ id, text, userChat }) => (
        <div className="chat" key={id}>
          <p className="right">{userChat}</p>
          <Typed
            strings={[text]}
            typeSpeed={15}
            showCursor={false}
            startDelay={200}
            fadeOut={true}
            className="left"
          />
        </div>
      ))}
      {loading && (
        <Typed
          strings={["Loading..."]}
          showCursor={true}
          typeSpeed={50}
          backSpeed={25}
          loop={true}
          shuffle={true}
          className="loading"
        />
      )}
    </div>
  );
}
