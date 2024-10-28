// Task 1: Set Up the HTML Structure.


// Task 2: Configure the JavaScript for Drawing Context

const canvas = document.getElementById('myCanvas'); // Get the canvas element
const ctx = canvas.getContext('2d'); // Get the 2D drawing context


let isDrawing = false;
let startX, startY;

// Adds event listeners for mouse events to handle the controls drawing.
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);

//Drawing
function startDrawing(event) {
    isDrawing = true;
    startX = event.offsetX;
    startY = event.offsetY;
    ctx.beginPath();
}

function draw(event) {
    if (!isDrawing) return;
    const endX = event.offsetX;
    const endY = event.offsetY;
}

    // Stop drawing
    function stopDrawing() {
        isDrawing = false;
    }