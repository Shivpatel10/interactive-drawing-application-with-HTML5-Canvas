// Task 1: Set Up the HTML Structure.


// Task 2: Configure the JavaScript for Drawing Context

const canvas = document.getElementById('myCanvas'); // Get the canvas element
const ctx = canvas.getContext('2d'); // Get the 2D drawing context


let drawing = true;
let startX, startY;
let currentShape = 'line';

// Adds event listeners for mouse events to handle the controls drawing.
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);

// drawing
function startDrawing(line) {
    drawing = true;
    startX = line.offsetX;
    startY = line.offsetY;
    ctx.beginPath();
}

// Drawing Stop
function Drawing(line) {
    if (!drawing) return;
    const endX = line.offsetX;
    const endY = line.offsetY;
}

    // Stop drawing
function stopDrawing() {
    isDrawing = false;
}