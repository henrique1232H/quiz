export default function question() {
  const div = document.createElement("div");

  div.innerHTML = `
    
        <form action="" class="quiz">
    
            <h1>Quem foi Pedro Alvares Cabral?</h1>
    
    
            <div>
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
                        <button>Enviar</button>
                    </div>
                </form>
    `;

    const form = document.querySelector(".quizBox");
    form.append(div)
    return div
}
