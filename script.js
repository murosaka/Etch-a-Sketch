const container = document.querySelector('#container');
//const cell = document.createElement('div');
//const cell = document.createElement('div');
//row.classList.add('row');
//cell.classList.add('cell');
//row.textContent = 'row';
//cell.textContent = 'cell';
let row;
let cell;
let num; 
document.getElementById('grid').addEventListener("click", drawGrid);

function drawGrid (num) {
    num = prompt("Enter number", 16);
    let rows = document.querySelectorAll(".row");
    rows.forEach(row => {container.removeChild(row);}); 
    for (let i = 0; i < num; i++) {
        row = document.createElement('div');
        //row.innerText = 'row'+(i+1);
        container.appendChild(row).className = 'row';
        for (let j = 0; j < num; j++) {
            cell = document.createElement('div');
            //cell.innerText = '|'+(j+1)+'|';
            row.appendChild(cell).className = 'cell';
        }
    }
    let elements = document.querySelectorAll(".cell");
    elements.forEach(element => {
        element.addEventListener("mouseover", 
        () => element.setAttribute('style','background-color: black')); 
        element.addEventListener("click", 
        () => element.setAttribute('style','background-color: '));   
    });
}

