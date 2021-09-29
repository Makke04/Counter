let count = 0;
const sum = document.getElementById('Sum');

document.getElementById('Plus').addEventListener('click', function(){
    count++;
    updateDisplay()
});

document.getElementById('Minus').addEventListener('click', function(){
   count--; 
   updateDisplay()
});

function updateDisplay(){
    sum.innerHTML = count;
};
