import { convertToGBP } from "./converter.js";

document.getElementById("convertBtn").addEventListener("click", async () => {
  const amount = document.getElementById("amount").value;
  const currency = document.getElementById("currency").value;
  const result = document.getElementById("result");

  try {
    const response = await fetch("https://api.exchangerate.host/latest?base=GBP");
    const data = await response.json();
    const rate = data.rates[currency];

    const converted = convertToGBP(amount, rate);
    result.textContent = converted.toFixed(2) + " GBP";
  } catch {
    result.textContent = "Conversion failed";
  }
});
