import {reset, showQuestion} from "./quiz/showQuestion.js";
import createLiFromResult from "./result/createLiFromResult.js";


document.querySelector(".startGame").onclick = () => {
    reset()

    document.querySelector(".quizBox div").classList.remove("hidden");

    showQuestion()
}
