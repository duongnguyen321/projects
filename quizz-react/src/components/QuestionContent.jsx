import AnswerTopContent from "./AnswerTopContent";
import AnswerContent from "./AnswerContent";
import AnswerBottomContent from "./AnswerBottomContent";

// import { setStateWhenNextQuestion } from "./Utils";

import countDownTimerMusic from "../audio/countDownTimer.mp3";
import backgroundImage from "../images/background.jpg";
import { useEffect } from "react";

export default function QuestionContent({
  questions,
  currentQuestion,
  timer,
  score,
  streak,
  checked,
  checkedResult,
  chosenAnswer,
  choices,
  handleChooseAnswer,
  setQuestion,
  setCompleteGame,
  setStateWhenNextQuestion,
  countTimer,
}) {
  const question = questions[currentQuestion];
  const countRightAnswer = question.answerOptions.filter(
    (item) => item.isCorrect
  ).length;
  const listAnswer = question.answerOptions.map((answer) => (
    <AnswerContent
      answer={answer}
      question={question}
      choices={choices}
      checked={checked}
      handleChooseAnswer={handleChooseAnswer}
      key={answer.id}
    />
  ));

  let playMusic = true;

  useEffect(() => {
    if (timer === 0) {
      setQuestion((prevQuestion) => {
        if (prevQuestion < questions.length - 1) {
          setStateWhenNextQuestion();
          countTimer();
          return prevQuestion + 1;
        } else {
          setCompleteGame(true);
          return prevQuestion;
        }
      });
    }
  }, [timer]);

  useEffect(() => {
    playMusic = choices.length > 0 ? false : true;
  }, [choices]);

  return (
    <div className="quizizzGame__question h-100">
      <div className="row h-100">
        <AnswerTopContent
          timer={timer}
          score={score}
          streak={streak}
          chosenAnswer={chosenAnswer}
          currentQuestion={currentQuestion}
          totalLength={questions.length}
        />
        <div className="col-12 animate__animated animate__slideInLeft quizizzGame__question--main-content">
          <div
            className="quizizzGame__question--main-inner d-flex flex-column justify-content-lg-between h-100"
            style={{
              background:
                "url(" + backgroundImage + ") no-repeat center center fixed",
              backgroundSize: "cover",
            }}
          >
            <div className="quizizzGame__question--text w-100">
              <div className="d-flex flex-column justify-content-center align-items-center text-center overlay">
                <h3>{question.questionText}</h3>
                {question.isMultiple && (
                  <h4>
                    <em>(Chọn {countRightAnswer} đáp án đúng(số nhiều))</em>
                  </h4>
                )}
              </div>
            </div>
            <div className="quizizzGame__answers w-100 ">
              <div className="quizizzGame__answers--inner d-flex flex-column flex-lg-row justify-content-lg-between">
                {listAnswer}
              </div>
            </div>
          </div>
        </div>
        <AnswerBottomContent checked={checked} checkedResult={checkedResult} />
      </div>
      {playMusic && (
        <audio autoPlay={false}>
          <source type="audio/mp3" src={countDownTimerMusic} />
        </audio>
      )}
    </div>
  );
}
