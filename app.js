// Task 1: Set Up the HTML Structure.


// Task 2: Configure the JavaScript for Drawing Context

const canvas = document.getElementById('myCanvas'); // Get the canvas element
const ctx = canvas.getContext('2d'); // Get the 2D drawing context


//Mouse Events
document.querySelector("html").addEventListener("mousemove", event => {
    console.log(`X: ${event.clientX} Y: ${event.clientY}`);
})



document.querySelector("html").addEventListener("mousemove", function(move){
    const x=info.x;
    const y=into.y;

    ctx.beginPath()
    ctx.arc(x,y,20,0,Math.PI*2);
    ctx.stroke();
});