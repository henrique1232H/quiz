import question from "./question.js";
import {logicAboutCheckbox} from "./logicAboutCheckbox.js";
import showQuestion from "./showQuestion.js";
import addQuestion from "./addQuestion.js";

let questionsAnswered = [];
let inputsChoosed


export default function messages(questionChoosed) {

    const div = question();

    div.querySelector("h1").textContent = questionChoosed.title;


    let value = 0;

    div.querySelectorAll("label").forEach(entries => {
        entries.innerHTML = `<p>${questionChoosed.questions[value].question}</p>`;
        value++
    })

    logicAboutCheckbox(div, questionChoosed)

    div.querySelector("form").addEventListener("submit", (e) => {
        e.preventDefault();
        
        inputsChoosed = []

        inputsChoosed = Array.from(div.querySelectorAll("input"));
        console.log(inputsChoosed)

        const checkedTrue = inputsChoosed.find(entries => entries.checked);

        questionsAnswered = [checkedTrue.value, ...questionsAnswered];

        console.log(questionsAnswered);
        document.querySelector(".quizBox").innerHTML = "";

        addQuestion()

        const teste = showQuestion();

        console.log(teste)
    })
}