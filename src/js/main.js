import checkDifficulty from "./cronometre/checkDifficulty.js";
import {reset, showQuestion} from "./quiz/showQuestion.js";

document.querySelector(".startGame").onclick = () => {
    reset()

    document.querySelector(".quizBox div").classList.remove("hidden");

    document.querySelector(".startGame").classList.add("hidden");
    document.querySelector("select").classList.add("hidden");
    document.querySelector(".cronometre").classList.remove("hidden")


    showQuestion()
    checkDifficulty()
}
