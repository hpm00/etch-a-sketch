
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

function getRandomRGB() {
    return Math.round(Math.random() * 255);
}
getRandomRGB();

// generating random color (rainbow mode)
function randomColor() {
    const rainbowColor = document.getElementById('rainbow-mode');
    rainbowColor.addEventListener('click', (e) => {
        const boxes = document.getElementsByClassName('grid-box');
        Array.from(boxes).forEach((box) => {
            box.addEventListener('click', (e) => {
            box.style.backgroundColor = `rgb(${getRandomRGB()}, ${getRandomRGB()}, ${getRandomRGB()})`;
            });
        });
    })
};
randomColor();

function certainColor() {
    const inputColor = document.getElementById('input-color');
    inputColor.addEventListener('input', () => {
        let color = inputColor.value;
        const boxes = document.getElementsByClassName('grid-box');
        Array.from(boxes).forEach((box) => {
            box.addEventListener('click', (e) => {
            e.target.style.backgroundColor = color;
            });
        });
    });
};

certainColor();

// erase sketch 
function eraseDiv() {
    const eraser = document.getElementById('delete-button');
    eraser.addEventListener('click', (e) => {
        eraser.classList.remove('active');
        if (e.target.classList.contains('delete-button')) {
            eraser.style.backgroundColor = 'pink';
            eraser.classList.add('active');

            const gridBoxes = document.getElementsByClassName('grid-box');
            Array.from(gridBoxes).forEach((gridBox) => {
            gridBox.addEventListener('click', (e) => {
                e.target.style.backgroundColor = 'white';
                });
            });
        }
        else if (!e.target.classList.contains('delete-button')) {
            eraser.classList.remove('active');
            eraser.style.backgroundColor = 'white';
        };
    });
};

eraseDiv();

// clear sketch 
function clearCanvas() {
    const clearBtn = document.getElementById('clear-mode');
    clearBtn.addEventListener('click', (e) => {
        const boxes = document.getElementsByClassName('grid-box');
        for (let i=0; i < boxes.length; i++) {
            boxes[i].style.backgroundColor = 'white';
        }
    });
};

clearCanvas();

//set window default
window.onload = () => {
    createGrid(16, 'small'); // when the page loads, it will default to 16x16
    // create default color
};
