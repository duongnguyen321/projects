export const QUESTIONS = [
  {
    id: 1,
    questionText: "Một con vịt xòe ra mấy đôi cánh ?",
    isMultiple: false,
    answerOptions: [
      { id: 1, isCorrect: false, answerText: "4" },
      { id: 2, isCorrect: false, answerText: "3" },
      { id: 3, isCorrect: false, answerText: "2" },
      { id: 4, isCorrect: true, answerText: "1" },
    ],
  },
  {
    id: 2,
    questionText: "Chó là bạn, không phải thức ăn. Thịt chó mới là ?",
    isMultiple: false,
    answerOptions: [
      { id: 1, isCorrect: false, answerText: "Bạn" },
      { id: 2, isCorrect: false, answerText: "Bạn thân" },
      { id: 3, isCorrect: true, answerText: "Thức ăn" },
      { id: 4, isCorrect: false, answerText: "Đồ uống" },
    ],
  },
  {
    id: 3,
    questionText: "Bà ơi bà cháu yêu bà lắm, tóc bà trắng màu trắng như ?",
    isMultiple: false,
    answerOptions: [
      { id: 1, isCorrect: false, answerText: "Mây" },
      { id: 2, isCorrect: false, answerText: "Mưa" },
      { id: 3, isCorrect: true, answerText: "Tóc bà" },
      { id: 4, isCorrect: false, answerText: "Màu trắng" },
    ],
  },
  {
    id: 4,
    questionText: "Trứng có trước hay quả trứng có  trước ?",
    isMultiple: true,
    answerOptions: [
      { id: 1, isCorrect: false, answerText: "Con gà" },
      { id: 2, isCorrect: false, answerText: "Con vịt" },
      { id: 3, isCorrect: true, answerText: "Quả trứng" },
      { id: 4, isCorrect: true, answerText: "Trứng" },
    ],
  },
];
