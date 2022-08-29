
// user selects grid size 
function selectGrid() {
const gridButtons = document.querySelectorAll('#grid-button');

gridButtons.forEach((button) => {
    button.addEventListener('click', () => {
        removeActiveStatus(gridButtons);
        if (button.classList.contains('small')) {
            gridButtons[0].classList.add('active'); // add active status 
            createGrid(16, 'small'); // creates grid based on given parameters
        }
        else if (button.classList.contains('medium')) {
            gridButtons[1].classList.add('active');
            createGrid(24, 'medium');
        }
        else if (button.classList.contains('large')) {
            gridButtons[2].classList.add('active');
            createGrid(48, 'large');
        };  
        });
    });
};

selectGrid();

function removeActiveStatus(buttons) {
    buttons.forEach((button) => {
        button.classList.remove('active'); // remove active status 
    });
};

// create grid 
function createGrid(size, input) {
    const canvas = document.getElementById('canvas');
    canvas.innerHTML = ''; // remove all children so the grid does not multiply each time 
    for (let i = 0; i < size * size; i++) {
        const box = document.createElement('div'); 
        box.classList = 'grid-box'; 
        box.id = 'box';
        canvas.classList.remove('small', 'medium', 'large'); // good to be sure there will be no duplicates
        canvas.classList.add(input); // add new class name based on density name
        canvas.appendChild(box); // 
        canvas.style.gridTemplateColumns = `repeat(${size}, 1fr)`; 
    };
};
createGrid();
// create sketch based on color mode selected

// generating random color (rainbow mode)
function randomColor() {

};

function certainColor() {
    const inputColor = document.getElementById('input-color');
    inputColor.addEventListener('input', () => {
        let selectedColor = inputColor.value;
        const boxes = document.getElementsByClassName('grid-box');
        Array.from(boxes).forEach((box) => {
            box.addEventListener('click', (e) => {
            e.target.style.backgroundColor = selectedColor;
            });
        });
    });
};

certainColor();

// erase sketch 

// clear sketch 
function clearCanvas() {
    const clearBtn = document.getElementById('clear-mode');
    clearBtn.addEventListener('click', (e) => {
        const boxes = document.getElementsByClassName('grid-box');
        Array.from(boxes).forEach((box) => {
            boxes.style.backgroundColor = 'white';
        })
    });
};
// set window default
window.onload = () => {
    createGrid(16, 'small'); // when the page loads, it will default to 16x16
};
