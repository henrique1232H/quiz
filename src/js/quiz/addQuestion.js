export default function addQuestion() {

    const quizBox = document.querySelector(".quizBox");


    quizBox.innerHTML = `

        <div class="hidden">
        <form action="" class="quiz">

        <h2>Quem foi Pedro Alvares Cabral?</h2>


        <div class="inputChart">
            <div>
                <input type="checkbox" name="firstQuestion" id="firstQuestion" value="correct">
                <label for="firstQuestion">A</label>
            </div>
            <div>
                <input type="checkbox" name="secondQuestion" id="secondQuestion" value="incorrect">
                <label for="secondQuestion">B</label>
            </div>
            <div>
                <input type="checkbox" name="thirdQuestion" id="thirdQuestion" value="incorrect">
                <label for="thirdQuestion">C</label>
            </div>
            <div>
                <input type="checkbox" name="fourQuestion" id="fourQuestion" value="incorrect">
                <label for="fourQuestion">D</label>
            </div>
            </div>
                <div>
                    <button class="startGame">Enviar</button>
                </div>
    </form>
</div>

</div>
    `

    quizBox.querySelector("div").classList.remove("hidden")

    return quizBox

}