import question from "./question.js";

export default function messages(questionChoosed) {
    const form = document.querySelector(".quizBox")


    const div = question();

    div.querySelector("h1").textContent = questionChoosed.title;


    form.append(div)

}