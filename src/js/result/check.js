import { reset } from "../quiz/showQuestion.js";
import createLiFromResult from "./createLiFromResult.js";

export default function ifQuizComplete(quiz, answers) {
  if (quiz.length === answers.length) {
    reset();

    let value = 0;
    answers.forEach((entries) => {
      createLiFromResult(entries.title, entries.correct);

      if (entries.correct === "true") {
        value++;
      }
    });

    document.querySelector(".result").classList.remove("hiddenAndOpacity");

    document.querySelector(
      ".title span"
    ).textContent = `${quiz.length}/${value}`;

    document.querySelector(".result button").onclick = () => {
      document.querySelector(".result").classList.add("hiddenAndOpacity");
      document.querySelector(".result ul").innerHTML = "";
    };
    return;
  }
}
