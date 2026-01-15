import { convertToGBP } from "./converter.js";

document.getElementById("convertBtn").addEventListener("click", async () => {
  const amount = Number(document.getElementById("amount").value);
  const currency = document.getElementById("currency").value;
  const result = document.getElementById("result");

  try {
    const response = await fetch(
      "https://api.exchangerate.host/latest?base=" + currency
    );
    const data = await response.json();

    const rate = data.rates.GBP;
    const converted = convertToGBP(amount, rate);

    result.textContent = converted.toFixed(2) + " GBP";
  } catch (error) {
    result.textContent = "Conversion failed";
    console.error(error);
  }
});
