import backgroundImage from "../images/background.jpg";

export default function GameStats({
  score,
  correctAnswer,
  questionsLength,
  countStreak,
  resetGame,
}) {
  let accuracy = (correctAnswer / questionsLength) * 100;
  return (
    <div
      className="quizizzGame__stats"
      style={{
        background:
          "url(" + backgroundImage + ") no-repeat center center fixed",
        backgroundSize: "cover",
      }}
    >
      <div className="quizizzGame__stats--inner overlay text-center d-flex flex-column justify-content-center">
        <div className="quizizzGame__stats--inner-top">
          <p>Bảng tính điểm</p>
          <div className="quizizzGame__stats--accuracy summary-block">
            <p>Tỉ lệ "đoán" đúng</p>
            <div className="quizizzGame__stats--accuracy-total">
              <div
                className="quizizzGame__stats--accuracy-progress"
                style={{
                  width: accuracy + "%",
                }}
              >
                <span>{accuracy > 10 && accuracy + "%"}</span>
              </div>
            </div>
          </div>
          <div className="quizizzGame__stats--performance d-flex flex-wrap justify-content-between">
            <div className="quizizzGame__stats--performance-item summary-block">
              <p className="number">{score}</p>
              <p className="stat">Số điểm</p>
            </div>
            <div className="quizizzGame__stats--performance-item summary-block">
              <p className="number">{countStreak}</p>
              <p className="stat">Chuỗi thắng</p>
            </div>
            <div className="quizizzGame__stats--performance-item summary-block">
              <p className="number">{correctAnswer}</p>
              <p className="stat">Chính xác!</p>
            </div>
            <div className="quizizzGame__stats--performance-item summary-block">
              <p className="number">{questionsLength - correctAnswer}</p>
              <p className="stat">Sai lè</p>
            </div>
          </div>
          <div className="quizizzGame__stats--actions">
            <button
              className="quizizzGame__stats--actions-reset"
              onClick={resetGame}
            >
              Chơi lại
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
