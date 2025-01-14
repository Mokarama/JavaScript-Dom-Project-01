// console.log('index.js ile added')

const counterElement = document.getElementById('container');
const plusBtn = document.getElementById('plusBtn');
const minusBtn = document.getElementById('minusBtn');

let counter = 0;


plusBtn.addEventListener('click', () => {
    // console.log(counter= counter + 1);
   counter = counter + 1;
   counterElement.innerText = counter;

});

minusBtn.addEventListener('click', () => {
    // console.log(counter = counter -1);
    counter = counter - 1;
    counterElement.innerText = counter;
});