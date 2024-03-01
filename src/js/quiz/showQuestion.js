import messages from "./messages.js";
import quizQuestion from "./quizQuestion.js";
import randomNumber from "./randomNumber.js";

let mapQuizQuestion = quizQuestion.map(entries => entries);

let quizChoose;

const chooseQuestion = (question) => {
    
    quizChoose = mapQuizQuestion.find(entries => entries.title === mapQuizQuestion[question].title);

    mapQuizQuestion = mapQuizQuestion.filter(entries => entries.title !== mapQuizQuestion[question].title);

    return quizChoose
}


export function showQuestion() {

    const questions = randomNumber(mapQuizQuestion.length - 1);

    const questionChoose = chooseQuestion(questions);
    
    messages(questionChoose);


}


export function reset() {
    mapQuizQuestion = quizQuestion.map(entries => entries);
}