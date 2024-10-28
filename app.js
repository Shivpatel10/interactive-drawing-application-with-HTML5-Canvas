// Task 1: Set Up the HTML Structure.


// Task 2: Configure the JavaScript for Drawing Context

const canvas = document.getElementById('myCanvas'); // Get the canvas element
const ctx = canvas.getContext('2d'); // Get the 2D drawing context


let isDrawing = true;
let startX, startY;
let selectedColor = '#000000';

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
    ctx.strokeStyle = selectedColor;
}

function draw(event) {
    if (!isDrawing) return;
    const endX = event.offsetX;
    const endY = event.offsetY;
    ctx.lineTo(endX, endY); // Draw a line to the current mouse position
    ctx.stroke(); // Creates the line
}

    // Stop drawing
    function stopDrawing() {
        isDrawing = false;
    }


// Clear the canvas when the 'Clear Canvas' button is clicked
//document.getElementById('canvasClear').addEventListener('click', function() {
//    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the entire canvas
//});
