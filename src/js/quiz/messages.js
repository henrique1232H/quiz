import question from "./question.js";
import {deleteChecked, logicAboutCheckbox} from "./logicAboutCheckbox.js";
import {showQuestion} from "./showQuestion.js";
import addQuestion from "./addQuestion.js";
import ifQuizComplete from "../result/check.js";
import quizQuestion from "./quizQuestion.js";


let questionsAnswered = [];
let inputsChoose

export default function messages(questionChoose) {

    
    const div = question();

    try {
        document.querySelector(".quizBox h2").textContent = questionChoose.title;
        
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
        

        const searchRightQuestion = questionChoose.questions.find(entries => entries.value === true);
            

        questionsAnswered = [{title: questionChoose.title, correct: checkedTrue.value, rightQuestion: searchRightQuestion }, ...questionsAnswered];
    
        document.querySelector(".quizBox").innerHTML = "";
    
        addQuestion()
        showQuestion();
    
        if(quizQuestion.length === questionsAnswered.length) {
            ifQuizComplete(quizQuestion, questionsAnswered)
        }


        if(questionsAnswered.length === 5) {
            questionsAnswered = [];
        }

        deleteChecked()
    })
}