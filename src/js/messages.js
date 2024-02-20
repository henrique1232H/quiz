import question from "./question.js";

let questionsAnswered = [];
let takeAnswered = []

export default function messages(questionChoosed) {
    const form = document.querySelector(".quizBox")


    const div = question();

    div.querySelector("h1").textContent = questionChoosed.title;


    let value = 0;

    div.querySelectorAll("label").forEach(entries => {
        entries.innerHTML = `<p>${questionChoosed.questions[value].question}</p>`;
        value++
    })

    value = 0

    let checkedFalse = []

    div.querySelectorAll("input").forEach(entries => {
        entries.value = questionChoosed.questions[value].value;

        entries.addEventListener("click", () => {
            takeAnswered = entries.value;
            
            
            console.log(entries, entries.checked)
            const array = Array.from(div.querySelectorAll("input"))
            
            array.forEach(input => {
                checkedFalse = array.filter(entries => entries.checked !== input.checked === false);

            })
            

            checkedFalse.forEach(entries => {
                console.log(entries.checked)
                entries.checked = false
            })
            
        })
        
        

        value++
    })



    div.querySelectorAll("form").forEach(entries => {
        entries.addEventListener("submit", (e) => {
            e.preventDefault();

            questionsAnswered = [takeAnswered ,...questionsAnswered];

            console.log(questionsAnswered)
            
        })
    })


    form.append(div)

}