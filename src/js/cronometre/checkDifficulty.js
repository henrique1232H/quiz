import showCronometre from "./showCronometre.js";



export default function checkDifficulty() {
    const difficulty = document.querySelector("select").value;
    let minutes
    

    if(difficulty === "easy" || difficulty === "") {
        return
    }

    if(difficulty === "average") {
        minutes = 5
    }

    if(difficulty === "hard") {
        minutes = 0
    }


    showCronometre(minutes)

}