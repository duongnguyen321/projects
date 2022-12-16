export default function AnswerContent({
  answer,
  question,
  choices,
  checked,
  handleChooseAnswer,
}) {
  let { id, answerText, isCorrect } = answer;
  let answerLength = question.answerOptions.length;
  let hideAnswer =
    !choices.includes(id) && checked && !isCorrect ? " d-none" : "";

  let checkedBackgroundColor = "";
  if (checked && choices.includes(id)) {
    if (isCorrect) checkedBackgroundColor = " right-answer";
    else checkedBackgroundColor = " wrong-answer";
  }

  let hover = choices.includes(id) && !checked ? " hover" : "";

  let showResultBg =
    checked && !choices.includes(id) && isCorrect ? " right-answer" : "";

  const itemLength =
    "calc((100% - (20px + " +
    (answerLength - 1) * 10 +
    "px)) /" +
    answerLength +
    ")";

  return (
    <div
      className="quizizzGame__answer--item"
      style={{
        width: itemLength,
      }}
    >
      <div
        onClick={
          !checked && !choices.includes(id)
            ? (e) => handleChooseAnswer(id, question)
            : undefined
        }
        className={
          "quizizzGame__answer--item-inner overlay d-flex justify-content-center align-items-center text-center" +
          hideAnswer +
          checkedBackgroundColor +
          hover +
          showResultBg
        }
        data-id={id}
      >
        {answerText}
      </div>
    </div>
  );
}
