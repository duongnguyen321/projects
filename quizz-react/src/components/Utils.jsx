// export function setStateWhenNextQuestion() {
//   clearInterval(timerCountDown.current);
//   timerCountDown.current = null;
//   setTimer(TIME_LIMIT);
//   setChecked(false);
//   setCheckedResult(false);
//   setChosenAnswer(false);
//   setChoices([]);
// }

export function shuffeQuestionsList(array) {
  for (let i = 0; i < array.length; i++) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export function checkMultiCondition(choices, answer) {
  let result = true;
  for (let i = 0; i < choices.length; i++) {
    if (
      answer.filter((item) => item.id === choices[i] && item.isCorrect)
        .length === 0
    ) {
      result = false;
      break;
    }
  }
  return result;
}
