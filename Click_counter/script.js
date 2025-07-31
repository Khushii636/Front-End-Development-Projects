let count = 0;

const countDisplay = document.getElementById("count");
const countBtn = document.getElementById("count-btn");
const resetBtn = document.getElementById("reset-btn");

countBtn.addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
});

resetBtn.addEventListener("click", () => {
  count = 0;
  countDisplay.textContent = count;
});
