const container = document.createElement("div");
container.id = "container"

for(let i = 1; i <= 16; i++) {
    const squareDiv = document.createElement("div");
    squareDiv.id = i;
    squareDiv.className = "pixel";
    container.appendChild(squareDiv);

}


squareDiv = document.body.appendChild(container);