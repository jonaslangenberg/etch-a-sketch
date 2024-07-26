const container = document.querySelector("#container");
const gridBtn = document.querySelector("#grid-changer");

window.addEventListener("load", () => {
    for(let i = 0; i < 16; i++){
        let rowContainer = document.createElement("div");
        container.appendChild(rowContainer);
        rowContainer.classList.add("rowContainer");
        for(let j = 0; j < 16; j++){
            let newDiv = document.createElement("div");
            newDiv.classList.add("div");
            newDiv.addEventListener("mouseover", () => {
                newDiv.style.backgroundColor = "black";
            })
            rowContainer.appendChild(newDiv);
        }
    }
});

gridBtn.addEventListener("click", () => {
    let gridValue = parseInt(prompt("How many boxes per row do you want? "));
    while(gridValue > 100 || gridValue < 1) {
        alert("Invalid input, try again");
        gridValue = parseInt(prompt("How many boxes per row do you want? "));
    }
    const container = document.querySelector("#container");
    container.remove();
    const newContainer = document.createElement("div");
    newContainer.setAttribute("id","container");
    const body = document.querySelector("body");
    body.appendChild(newContainer);
    for(let i = 0; i < gridValue; i++){
        let rowContainer = document.createElement("div");
        newContainer.appendChild(rowContainer);
        rowContainer.classList.add("rowContainer");
        for(let j = 0; j < gridValue; j++){
            let newDiv = document.createElement("div");
            newDiv.classList.add("div");
            newDiv.addEventListener("mouseover", () => {
                newDiv.style.backgroundColor = "black";
            })
            rowContainer.appendChild(newDiv);
        }
    }
});