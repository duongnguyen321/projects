import rightAnswerMusic from "../audio/rightAnswer.mp3";
import wrongAnswerMusic from "../audio/wrongAnswer.mp3";

export default function AnswerBottomContent({ checked, checkedResult }) {
  let bgColor = "";
  if (checked) {
    bgColor = checkedResult ? " right-answer" : " wrong-answer";
  }
  let text = checkedResult ? "Chính Xác !" : "Sai òi pà zà";
  return (
    <div
      className={
        "col-12 quizizzGame__result text-center text-uppercase" + bgColor
      }
    >
      {checked && text}
      {checked && (
        <audio autoPlay={true}>
          <source
            type="audio/mp3"
            src={checkedResult ? rightAnswerMusic : wrongAnswerMusic}
          />
        </audio>
      )}
    </div>
  );
}
