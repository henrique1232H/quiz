import {reset, showQuestion} from "./quiz/showQuestion.js";


document.querySelector(".startGame").onclick = () => {
    reset()

    document.querySelector(".quizBox div").classList.remove("hidden");

    showQuestion()
}