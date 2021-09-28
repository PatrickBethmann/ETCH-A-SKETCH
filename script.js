let container;
let columns
let rows
const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", () => reset());

initialize();




function initialize() {
    container = document.createElement("div");
    container.className = "container"
    do {
        columns = null; // Resetting columns and rows so they are not carried over from last attempt
        rows = null;
    
        columns = prompt("Width: ");
        if(columns === "" || columns === null || columns == 0 || isNaN(columns)) continue;
        rows = prompt("Height: ");
    } while(columns === "" || columns === null || columns == 0 || isNaN(columns) || rows === "" || rows === null || rows == 0 || isNaN(rows));
    
    // sets Grid Size
    container.style.gridTemplateColumns = "repeat("+columns+", 1fr)"
    container.style.gridTemplateRows = "repeat("+rows+", 1fr)"; 

    // Creates 16 divs and appends them to container
    for(let i = 1; i <= columns*rows; i++) {  
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

    // Adds EventListeners to pixel
    const pixels = document.querySelectorAll(".pixel");
    pixels.forEach(pixel => {
        pixel.addEventListener('mouseenter', () => {
            pixel.classList.add("painted");
    })
});
}

function reset() {
    container.remove();
    initialize(); 
}