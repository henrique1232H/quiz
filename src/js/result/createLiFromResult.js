
export default function createLiFromResult(title, correct) {
    const li = document.createElement("li");
    const result = document.querySelector(".result ul")
    const h3 = document.createElement("h3");
    const p = document.createElement("p");

    h3.textContent = title,
    p.textContent = correct,



    li.append(h3);
    li.append(p)

    result.appendChild(li)
    
}