import { reset } from "../quiz/showQuestion.js";
import state from "./state.js"

export default function showCronometre() {

    
    state.seconds--

    if(state.seconds === 0 && state.minutes === 0) {
        clearTimeout(state.interval);
     
        
        reset();

        document.querySelector(".startGame").classList.remove("hidden");
        document.querySelector("select").classList.remove("hidden");
        document.querySelector(".quizBox div").classList.add("hidden");
        document.querySelector(".cronometer").classList.add("hidden")

        return
    }

    
    document.querySelector(".seconds").textContent = String(state.seconds).padEnd(2, '0');

    if(state.seconds < 10) {
        document.querySelector(".seconds").textContent = String(state.seconds).padStart(2, '0');
    }

    document.querySelector(".minutes").textContent = String(state.minutes).padStart(2, '0');

    
    
    if(state.seconds < 1) {
        state.seconds = 60;
        state.minutes--
    }
    

    state.interval = setTimeout(() => {
        showCronometre()
    }, 1000)
    

}
