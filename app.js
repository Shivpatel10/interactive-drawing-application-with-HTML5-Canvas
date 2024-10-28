// Task 1: Set Up the HTML Structure.


// Task 2: Configure the JavaScript for Drawing Context

const canvas = document.getElementById('myCanvas'); // Get the canvas element
const ctx = canvas.getContext('2d'); // Get the 2D drawing context


let isDrawing = true;
let startX, startY;
let currentShape = 'line';
let selectedColor = '#000000';

// Adds event listeners for mouse events to handle the controls drawing.
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);

// drawing
function startDrawing(c) {
    isDrawing = true;
    startX = c.offsetX;
    startY = c.offsetY;
    ctx.beginPath();
    ctx.strokeStyle = selectedColor;
}

// Stop drawing
function stopDrawing() {
    isDrawing = false;
}


// Drawing based on selected shape
function draw(c) {
    if (!isDrawing) return;

    const endX = c.offsetX;
    const endY = c.offsetY;

    // Clear the canvas and redraw to avoid artifacts
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    switch (currentShape) {
        case 'line':
            ctx.moveTo(startX, startY);
            ctx.lineTo(endX, endY);
            ctx.stroke();
            break;
    }}