import state from "./state.js"


let interval

export default function showCronometre() {
    clearTimeout(interval)


    state.seconds--
    document.querySelector(".seconds").textContent = String(state.seconds).padEnd(2, '0');

    document.querySelector(".minutes").textContent = String(state.minutes).padStart(2, '0');

    
    
    if(state.seconds < 1) {
        state.seconds = 60;
        state.minutes--
    }
    
    
    interval = setTimeout(() => {
        showCronometre()
    }, 1000)
    

}


