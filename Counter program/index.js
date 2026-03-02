const decBt = document.getElementById("decBt");
const incBt = document.getElementById("incBt");
const resBt = document.getElementById("resBt");
const countLabel = document.getElementById("countLable");

let count = 0;

// Decrease
decBt.onclick = function () {
    count--;
    countLabel.textContent = count;
};

// Increase
incBt.onclick = function () {
    count++;
    countLabel.textContent = count;
};

// Reset
resBt.onclick = function () {
    count = 0;
    countLabel.textContent = count;
};