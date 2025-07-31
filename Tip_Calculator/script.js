function calculateTip() {
  const bill = parseFloat(document.getElementById("billAmount").value);
  const tipPercent = parseFloat(document.getElementById("tipPercent").value);

  if (isNaN(bill) || isNaN(tipPercent)) {
    document.getElementById("result").innerText = "Please enter valid numbers.";
    return;
  }

  const tipAmount = (bill * tipPercent) / 100;
  const totalAmount = bill + tipAmount;

  document.getElementById("result").innerHTML =
    `Tip: ₹${tipAmount.toFixed(2)} <br>Total: ₹${totalAmount.toFixed(2)}`;
}