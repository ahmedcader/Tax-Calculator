/**
 * For a given tax bracket, calculate the taxable amount.
 *
 * @param {number} grossIncomeAmountInBracket The gross income amount for the specific tax bracket.
 * @param {number} centsPerDollar The cents as a number.
 * @return {number} The taxable amount for the given gross income in that bracket.
 */
const calculateTaxForBracket = (grossIncomeAmountInBracket, centsPerDollar) => {
    // Rounding to the nearest 2 decimal places.
    let amount = grossIncomeAmountInBracket * (centsPerDollar / 100);
    return Math.round(amount * 100 + Number.EPSILON) / 100
}

/**
 * For a given gross income amount, calculate the super ammount
 *
 * @param {number} grossIncome The gross income amount.
 * @param {number} superPercentage Expressed as a number, the percentage of the super.
 * @return {number} The super amount for a given gross income.
 */
const calculateSuper = (grossIncome, superPercentage) => {
    return (superPercentage / 100) * grossIncome
}

/**
 * For a given gross income amount, calculate the total tax ammount
 *
 * @param {number} grossIncome The gross income amount.
 * @return {number} The total taxable amount.
 */
const calculateTax = (grossIncome) => {
    let unprocessedGrossIncome = grossIncome;
    let totalTax = 0;

    if (unprocessedGrossIncome >= 180001) {
        taxableAmount = unprocessedGrossIncome - 180000
        unprocessedGrossIncome = unprocessedGrossIncome - (taxableAmount)
        totalTax += calculateTaxForBracket(taxableAmount, 45)
    }

    if (unprocessedGrossIncome >= 90001 && unprocessedGrossIncome <= 180000) {
        taxableAmount = unprocessedGrossIncome - 90000
        unprocessedGrossIncome = unprocessedGrossIncome - (taxableAmount)
        totalTax += calculateTaxForBracket(taxableAmount, 37)
    }

    if (unprocessedGrossIncome >= 37001 && unprocessedGrossIncome <= 90000) {
        taxableAmount = unprocessedGrossIncome - 37000
        unprocessedGrossIncome = unprocessedGrossIncome - (taxableAmount)
        totalTax += calculateTaxForBracket(taxableAmount, 32.5)
    }

    if (unprocessedGrossIncome >= 18201 && unprocessedGrossIncome <= 37000) {
        taxableAmount = unprocessedGrossIncome - 18200
        unprocessedGrossIncome = unprocessedGrossIncome - (taxableAmount)
        totalTax += calculateTaxForBracket(taxableAmount, 19)

    }

    return totalTax;
}

module.exports = {
    calculateTaxForBracket,
    calculateSuper,
    calculateTax
}