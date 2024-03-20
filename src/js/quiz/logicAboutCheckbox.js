

let checkedTrue = [];
let agrupe = [];

export const logicAboutCheckbox = (div, questionChoose) => {
    let value = 0;

    div.querySelectorAll("input").forEach(inputs => {
        inputs.checked = false  

        inputs.value = questionChoose.questions[value].value;
        

        inputs.addEventListener("click", (e) => {


            const array = Array.from(div.querySelectorAll("input"))
            
            checkedTrue = array.find(entries => entries === e.target)
            

            agrupe = [checkedTrue, ...agrupe];


            if(agrupe.length == 2) {
                deleteChecked(agrupe)
            }

        })
        
        value++
    })

}


export const deleteChecked = () => {
    agrupe.forEach(entries => {
        entries.checked = false
    })
    agrupe = []
}