

let checkedTrue = [];
let agrup = [];

export const logicAboutCheckbox = (div, questionChoosed) => {
    let value = 0;

    div.querySelectorAll("input").forEach(inputs => {
        inputs.checked = false  

        inputs.value = questionChoosed.questions[value].value;
        
        inputs.addEventListener("click", (e) => {

            agrup = []

            const array = Array.from(div.querySelectorAll("input"))
            
            checkedTrue = array.find(entries => entries === e.target)
                        
            agrup = [checkedTrue, ...agrup];

            if(agrup.length == 2) {
                deleteChecked(agrup)
            }
        })
        
        value++
    })

}


export const deleteChecked = () => {
    agrup.forEach(entries => {
        entries.checked = false
    })
    agrup = []
}