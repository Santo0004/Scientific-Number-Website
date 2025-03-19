function isScientificNumber(input) {
    const scientificNotationRegex = /^[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?$/;
    if (!scientificNotationRegex.test(input)) {
        return false;
    }
    const [coefficientPart, exponentPart] = input.toLowerCase().split('e');
    const coefficient = parseFloat(coefficientPart);
    if (coefficient === 0 || Math.abs(coefficient) >= 10) {
        return false;
    }
    if (exponentPart !== undefined) {
        const exponent = parseFloat(exponentPart);
        if (!Number.isInteger(exponent)) {
            return false;
        }
    }
    return true;
}

// Interactive version
const userInput = prompt("Enter a number to check if it's in scientific notation:");
if (isScientificNumber(userInput)) {
    alert("${userInput}" is a scientific number.);
} else {
    alert("${userInput}" is NOT a scientific number.);
}
