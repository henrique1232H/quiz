import question from "./question.js";

let questionsAnswered = [];
let takeAnswered = []
let agrupo = []
let checkedTrue = [];
let teste = []

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

    div.querySelectorAll("input").forEach(inputs => {
        inputs.value = questionChoosed.questions[value].value;
        
        inputs.addEventListener("click", () => {
            takeAnswered = inputs.value;
            
            const array = Array.from(div.querySelectorAll("input"))
            
            checkedTrue = array.find(entries => entries.checked === inputs.checked === true)
            

            
            agrupo = [checkedTrue, ...agrupo]
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


}