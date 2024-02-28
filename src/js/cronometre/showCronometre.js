
let count

export default function showCronometre(difficulty) {
    console.log(difficulty)

    if(difficulty === "average") {
        count = 5
    }


    setInterval(() => {
        count--
        console.log(count)

        if(count == 0) {
            return
        }
    }, 1000)
    

}