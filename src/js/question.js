export default function question() {
  const div = document.createElement("div");

  div.innerHTML = `
    
        <form action="" class="quiz">
    
            <h1>Quem foi Pedro Alvares Cabral?</h1>
    
    
            <div>
                <div>
                    <input type="checkbox" name="" id="" value="correct">
                    <label for="">A</label>
                </div>
                <div>
                    <input type="checkbox" name="" id="" value="incorrect">
                    <label for="">B</label>
                </div>
                <div>
                    <input type="checkbox" name="" id="" value="incorrect">
                    <label for="">C</label>
                </div>
                <div>
                    <input type="checkbox" name="" id="" value="incorrect">
                    <label for="">D</label>
                </div>
                </div>
                    <div>
                        <button>Enviar</button>
                    </div>
                </form>
    `;


    return div
}
