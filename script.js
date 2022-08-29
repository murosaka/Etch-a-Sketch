const container = document.querySelector('#container');
//const cell = document.createElement('div');
//const cell = document.createElement('div');
//row.classList.add('row');
//cell.classList.add('cell');
//row.textContent = 'row';
//cell.textContent = 'cell';
for (let i = 0; i < 16; i++) {
    let row = document.createElement('div');
    //row.innerText = 'row'+(i+1);
    container.appendChild(row).className = 'row';
    for (let j = 0; j < 16; j++) {
        let cell = document.createElement('div');
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
