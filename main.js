// user selects grid size 

function selectGrid() {
const gridButtons = document.querySelectorAll('#grid-button');

gridButtons.forEach((button) => {
    button.addEventListener('click', () => {
        removeActiveStatus(gridButtons);
        if (button.classList.contains('small')) {
            gridButtons[0].classList.add('active');
            createGrid(16, 'small');
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

// remove active status of 

function removeActiveStatus(buttons) {
    buttons.forEach((button) => {
        button.classList.remove('active');
    });
};
// create grid 

function createGrid(size, input) {
    const canvas = document.getElementById('canvas');
    canvas.innerHTML = '';
    for (let i = 0; i < size * size; i++) {
        const box = document.createElement('div');
        box.classList = 'grid-box';
        canvas.classList.remove('small', 'medium', 'large');
        canvas.classList.add(input);
        canvas.appendChild(box);
        canvas.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    };
};

// user selects single color or rainbow color mode

// create sketch 

// user selects erase

// erase sketch 

// user selects clear 

// clear sketch 
function clearCanvas() {

}
// set window default

