export default function AnswerTopContent({
  timer,
  score,
  streak,
  chosenAnswer,
  currentQuestion,
  totalLength,
}) {
  return (
    <div className="col-12 quizizzGame__top">
      <div className="quizizzGame__top--inner">
        <div className="quizizzGame__top--timer">
          <div
            className={
              chosenAnswer
                ? "quizizzGame__top--timer-total d-none"
                : "quizizzGame__top--timer-total"
            }
          >
            <div
              className="quizizzGame__top--timer-progress"
              style={{ width: timer / 10 + "%" }}
            ></div>
          </div>
        </div>
        <div className="quizizzGame__top--inner d-flex justify-content-between align-items-center">
          <div className="quizizzGame__top--inner-left">
            <div className="d-flex align-items-center">
              <div className="quizizzGame__top--step top-block">
                <span id="current">{currentQuestion + 1}</span>
                <span id="total">/{totalLength}</span>
              </div>
              <div className="quizizzGame__streak">
                <div className="streak-line-left"></div>
                <div className="streak-line-right"></div>
                <div
                  className="quizizzGame__streak--status"
                  style={{
                    width: (100 / 3) * streak + "%",
                    padding: streak > 0 ? "0 5px" : "0",
                  }}
                >
                  {streak > 0 && "Chuỗi thắng"}
                </div>
              </div>
              {streak > 0 && (
                <span className="streak-bonus">+{streak * 100}</span>
              )}
            </div>
          </div>
          <div className="quizizzGame__top--inner-right">
            <div className="quizizzGame__top--score">Số điểm: {score}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
