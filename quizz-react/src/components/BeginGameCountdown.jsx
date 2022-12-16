import countDownBeginMusic from "../audio/countDownBegin.mp3";

export default function BeginGameCountdown({ countBeginGame }) {
  return (
    <div className="quizizzGame__start--countdown w-100 text-center">
      <p className={"mb-0 animate__animated animate__zoomIn"}>
        {countBeginGame === 0 ? "GO!" : countBeginGame}
      </p>
      <audio autoPlay={false}>
        <source type="audio/mp3" src={countDownBeginMusic} />
      </audio>
    </div>
  );
}
