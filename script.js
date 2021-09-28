const container = document.createElement("div"); // Defines Container
container.className = "container"

for(let i = 1; i <= 16; i++) {  // Creates 16 divs and appends them to container
    const squareDiv = document.createElement("div");
    squareDiv.id = i;
    squareDiv.className = "pixel";
    container.appendChild(squareDiv);
}

squareDiv = document.body.appendChild(container);