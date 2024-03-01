let interval
let seconds = 60

export default function showCronometre(minutes) {
    clearTimeout(interval)

    seconds--


    if(seconds < 1) {
        seconds = 60;
        minutes--
    }


    interval = setTimeout(() => {
        showCronometre()
    }, 1000)


    console.log(seconds)

}