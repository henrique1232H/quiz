

let checkedTrue = [];
let agrup = [];

export default function logicAboutCheckbox(div, questionChoosed) {

    let value = 0;

    div.querySelectorAll("input").forEach(inputs => {
        inputs.value = questionChoosed.questions[value].value;
        
        inputs.addEventListener("click", (e) => {

            const array = Array.from(div.querySelectorAll("input"))
            
            checkedTrue = array.find(entries => entries === e.target)
                        
            agrup = [checkedTrue, ...agrup];

            console.log(agrup);

            if(agrup.length == 2) {
                deleteChecked(agrup)
            }
        })
        
        value++
    })


    const deleteChecked = () => {
        agrup.forEach(entries => {
            entries.checked = false
        })
        agrup = []
    }
}