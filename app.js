// Task 1: Set Up the HTML Structure.


// Task 2: Configure the JavaScript for Drawing Context

const canvas = document.getElementById('myCanvas'); // Get the canvas element
const ctx = canvas.getContext('2d'); // Get the 2D drawing context


//Mouse Events
document.querySelector("html").addEventListener("mousemove", event => {
    console.log(`X: ${event.clientX} Y: ${event.clientY}`);
})



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