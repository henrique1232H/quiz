import { reset } from "../quiz/showQuestion.js";

export default function ifQuizComplete(quiz, answers) {
  console.log(quiz.length, answers.length);

  if (quiz.length === answers.length) {
    reset();

    

    return;
  }
}
