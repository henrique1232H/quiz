import showCronometre from "./showCronometre.js";
import state from "./state.js"


export default function checkDifficulty() {
    const difficulty = document.querySelector("select").value;

    if(difficulty === "easy" || difficulty === "") {
        document.querySelector(".cronometer").classList.add("hidden")

        return
    }

    if(difficulty === "average") {
        state.minutes = 5
        state.seconds = 1

    }

    if(difficulty === "hard") {
        state.minutes = 0
    }


    showCronometre()

}