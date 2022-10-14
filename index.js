const { calculateTax, calculateSuper } = require("./calculator");

/*
Income tax calculator.
*/
let grossIncome = 150_000;

totalTax = calculateTax(grossIncome)
superAmount = calculateSuper(grossIncome, 10.5)
netIncome = grossIncome - totalTax;

console.log(`Gross Income: $${grossIncome}\nTotal Tax: $${totalTax}\nSuper Amount: $${superAmount}\nTake Home Anual Pay: $${netIncome}`)