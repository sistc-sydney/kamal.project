function calculateMortgage(event) 
{
    event.preventDefault();

    const amount = parseFloat(document.getElementById("amount").value);
    const rate = parseFloat(document.getElementById("rate").value) / 100 / 12;
    const years = parseInt(document.getElementById("years").value);
    const n = years * 12;

    const monthly = (amount * rate) / (1 - Math.pow(1 + rate, -n));
    const result = isFinite(monthly) ? `$${monthly.toFixed(2)}` : "Invalid input";

    document.getElementById("monthlyPayment").textContent = "Monthly Payment: " + result;
}
