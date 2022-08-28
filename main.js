
// create grid based on user's selection
const canvas = document.getElementById('canvas');
const small = document.getElementById('small');
const medium = document.getElementById('medium');
const large = document.getElementById('large');

const smallSize = 16;
const mediumSize = 24;
const largeSize = 48;

function defaultGrid() {
    for (let i = 0; i < 256; i++) {
        const box = document.createElement('div');
        box.classList = 'box';
        canvas.appendChild(box);
        canvas.style.gridTemplateColumns = "repeat(16,1fr)";
    }
};

small.addEventListener('click', (e) => {
    clearBoard();
    defaultGrid();
});

medium.addEventListener('click', (e) => {
    clearBoard();
    for (let i = 0; i < 576 ; i++) {
        const box = document.createElement('div');
        box.classList = 'box';
        canvas.appendChild(box);
        canvas.style.gridTemplateColumns = "repeat(24,1fr)";
    };
});

large.addEventListener('click', (e) => {
    clearBoard();
    for (let i = 0; i < 2304; i++) {
        const box = document.createElement('div');
        box.classList = 'box';;
        canvas.appendChild(box);
        canvas.style.gridTemplateColumns = "repeat(48,1fr)";
    };
});

// clear board 
const clearBtn = document.getElementById('clear-mode');
clearBtn.addEventListener('click', clearBoard);
const boxes = document.getElementsByClassName('box');

function clearBoard(e) {
    Array.from(boxes).forEach((box => {
        box.remove();
    }));
};


// create click and hold effect 
canvas.addEventListener('click', sketch); // mouseover/movemove = 'hover' mousedown and click are the same 
// make clicks faster 

// create function that fills selected divs with color 
const defaultColor = '#333333';
let currentColor = '';

function sketch(e) { 
    if (e.target.classList.contains('box')) {
        e.target.style.backgroundColor = 'black';
    }
};



// color selector
// rainbow mode 


// create eraser 
const eraser = document.getElementById('delete-button');

eraser.addEventListener('click', erase);

function erase(e) {
    canvas.addEventListener('click', (e) => {
        e.target.style.backgroundColor = 'white';
    })
};


window.onload = () => {
    defaultGrid();
}
