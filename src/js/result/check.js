import { reset } from "../quiz/showQuestion.js";
import createLiFromResult from "./createLiFromResult.js";

export default function ifQuizComplete(quiz, answers) {
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

      document.querySelector(".startGame").classList.remove("hidden");
      document.querySelector("select").classList.remove("hidden")
    };

}
