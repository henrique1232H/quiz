import messages from "./messages.js";
import quizQuestion from "./quizQuestion.js";
import randomNumber from "./randomNumber.js";


let mapQuizQuestion = quizQuestion.map(entries => entries);
let quizChoosed;

const chooseQuestion = (valor) => {
    
    quizChoosed = mapQuizQuestion.find(entries => entries.title === mapQuizQuestion[valor].title);


    mapQuizQuestion = mapQuizQuestion.filter(entries => entries.title !== mapQuizQuestion[valor].title)


    return quizChoosed
}


export default function showQuestion() {

    const questions = randomNumber(mapQuizQuestion.length);
    
    const questionChoosed = chooseQuestion(questions)

    messages(questionChoosed)


    if(mapQuizQuestion.length === 0) {
        alert("Acabou o quiz");

        mapQuizQuestion = quizQuestion.map(entries => entries);

        return
    }

}