import question from "./question.js";
import {logicAboutCheckbox} from "./logicAboutCheckbox.js";
import {showQuestion, reset} from "./showQuestion.js";
import addQuestion from "./addQuestion.js";
import ifQuizComplete from "../result/check.js";
import quizQuestion from "./quizQuestion.js";


let questionsAnswered = [];
let inputsChoose

export default function messages(questionChoose) {

    
    const div = question();

    try {
        document.querySelector(".quizBox h1").textContent = questionChoose.title;
        
    } catch (error) {
        document.querySelector(".quizBox div").classList.add("hidden")
        console.log(error)
        return 
    }

    
    let value = 0;
    
    div.querySelectorAll("label").forEach(entries => {
        entries.innerHTML = `<p>${questionChoose.questions[value].question}</p>`;
        value++
    })
    
    logicAboutCheckbox(div, questionChoose)
    
    div.querySelector("form").addEventListener("submit", (e) => {
        e.preventDefault();
        
        inputsChoose = []
    
        inputsChoose = Array.from(div.querySelectorAll("input"));
    
        const checkedTrue = inputsChoose.find(entries => entries.checked);
    
        questionsAnswered = [{title: questionChoose.title, correct: checkedTrue.value }, ...questionsAnswered];
    
        document.querySelector(".quizBox").innerHTML = "";
    
        addQuestion()
        showQuestion();
    
        ifQuizComplete(quizQuestion, questionsAnswered)
        

        if(questionsAnswered.length === 5) {
            questionsAnswered = [];
        }
    })
}