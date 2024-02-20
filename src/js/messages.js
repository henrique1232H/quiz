import question from "./question.js";
import logicAboutCheckbox from "./logicAboutCheckbox.js";
import showQuestion from "./showQuestion.js";

let questionsAnswered = [];


export default function messages(questionChoosed) {

    const div = question();

    div.querySelector("h1").textContent = questionChoosed.title;


    let value = 0;

    div.querySelectorAll("label").forEach(entries => {
        entries.innerHTML = `<p>${questionChoosed.questions[value].question}</p>`;
        value++
    })

    logicAboutCheckbox(div, questionChoosed)

    div.querySelectorAll("form").forEach(entries => {
        entries.addEventListener("submit", (e) => {
            e.preventDefault();

            // questionsAnswered = [takeAnswered ,...questionsAnswered];

            const array = Array.from(div.querySelectorAll("input"));

            const checkedTrue = array.find(entries => entries.checked === true);

            questionsAnswered = [checkedTrue.value, ...questionsAnswered];

            console.log(questionsAnswered)

            showQuestion()

            
        })
    })


}