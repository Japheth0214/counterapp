let count = 0;
const counterElement = document.getElementById('counter');
const incrementBtn = document.getElementById('incrementBtn');
const decrementBtn = document.getElementById('decrementBtn');
const resetBtn = document.getElementById('resetBtn');
const oddEvenElement = document.getElementById('oddEven');

incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);
resetBtn.addEventListener('click', reset);

function increment() {
    count++;
    updateCounter();
}

function decrement() {
    count--;
    updateCounter();
}

function reset() {
    count = 0;
    updateCounter();
}

function updateCounter() {
    counterElement.textContent = count;
    checkOddEven();
}

function checkOddEven() {
    if (count % 2 === 0) {
        oddEvenElement.textContent = "Even";
    } else {
        oddEvenElement.textContent = "Odd";
    }
}

updateCounter(); // Initialize counter display
