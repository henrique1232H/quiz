
export default function createLiFromResult(title, correct) {
    const li = document.createElement("li");
    const result = document.querySelector(".result ul")

    li.innerHTML = `
        <details>
            <summary> 
                <h3> ${title} </h3>
            </summary>
            <p> ${correct} </>
        </details>
    `
    result.appendChild(li)
    
}
