// create grid based on user's selection
const canvas = document.getElementById('canvas');
const small = document.getElementById('small');
const medium = document.getElementById('medium');
const large = document.getElementById('large');

small.addEventListener('click', (e) => {
    clearBoard();
    for (let i = 0; i < 256; i++) {
        const box = document.createElement('div');
        box.setAttribute("id", "box");
        canvas.appendChild(box);
        canvas.style.gridTemplateColumns = "repeat(16,1fr)";
    };
});

medium.addEventListener('click', (e) => {
    clearBoard();
    for (let i = 0; i < 576 ; i++) {
        const box = document.createElement('div');
        box.setAttribute("id", "box");
        canvas.appendChild(box);
        canvas.style.gridTemplateColumns = "repeat(24,1fr)";
    };
});

large.addEventListener('click', (e) => {
    clearBoard();
    for (let i = 0; i < 2304; i++) {
        const box = document.createElement('div');
        box.setAttribute("id", "box");
        canvas.appendChild(box);
        canvas.style.gridTemplateColumns = "repeat(48,1fr)";
    };
});

// clear board 
const clearBtn = 

function clearBoard() {

}










// create click and hold effect 
canvas.addEventListener('mousedown', sketch); // mouseover/movemove = 'hover' mousedown and click are the same 
// make clicks faster 

// create function that fills selected divs with color 
function sketch(e) { 
    e.target.style.backgroundColor = 'black';
}

// select color button


// rainbow mode 



// create clear 




// create eraser 



// create different grid layouts 