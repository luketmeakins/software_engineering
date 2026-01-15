import { convertToGBP } from "./converter.js";

document.getElementById("convertBtn").addEventListener("click", () => {
  const amount = Number(document.getElementById("amount").value);
  const result = document.getElementById("result");

  try {
    const rate = 0.116; // Example DKK → GBP
    const converted = convertToGBP(amount, rate);
    result.textContent = converted.toFixed(2) + " GBP";
  } catch (error) {
    result.textContent = error.message;
  }
});

