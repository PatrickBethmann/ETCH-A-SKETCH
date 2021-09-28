const container = document.createElement("div"); // Defines Container
container.className = "container"
let columns
let rows

do {
    columns = null; // Resetting columns and rows so they are not carried over from last attempt
    rows = null;

    columns = prompt("Width: ");
    if(columns === "" || columns === null || columns == 0 || isNaN(columns)) continue;
    rows = prompt("Height: ");
} while(columns === "" || columns === null || columns == 0 || isNaN(columns) || rows === "" || rows === null || rows == 0 || isNaN(rows));


setCanvasSize();0

for(let i = 1; i <= columns*rows; i++) {  // Creates 16 divs and appends them to container
    const pixel = document.createElement("div");
    pixel.id = i;
    pixel.className = "pixel";

    if(columns <= rows) {
        pixel.style.height = 90/rows+"vh";
        pixel.style.maxHeight = 90/columns+"vw"; 
    } else {
        pixel.style.height = 90/columns+"vw";
        pixel.style.maxHeight =  90/rows+"vh"; 
    }
    container.appendChild(pixel); 
}

document.body.appendChild(container);

const pixels = document.querySelectorAll(".pixel");
pixels.forEach(pixel => {
    pixel.addEventListener('mouseenter', () => {
        pixel.classList.add("painted");
    })
});



function setCanvasSize() {
    container.style.gridTemplateColumns = "repeat("+columns+", 1fr)";
    container.style.gridTemplateRows = "repeat("+rows+", 1fr)";    
}