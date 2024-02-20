import showQuestion from "./showQuestion.js";


document.querySelector(".startGame").onclick = () => {

    document.querySelector(".quizBox div").classList.remove("hidden")

    showQuestion()
    
}