// create 16x16 squares 
const canvas = document.getElementById('canvas');


function createSquares() {
    for (let i = 0; i < 256; i++) {
        const box = document.createElement('div');
        box.classList = 'box'
        canvas.appendChild(box);
    };
}
createSquares();

