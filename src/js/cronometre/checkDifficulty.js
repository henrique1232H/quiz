import showCronometre from "./showCronometre.js";

export default function checkDifficulty() {
    const difficulty = document.querySelector("select").value;
    
    showCronometre(difficulty)

}