function isScientificNumber(input) {
    // Regular expression to match scientific notation
    const scientificNotationRegex = /^[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?$/;

    // Check if the input matches the scientific notation pattern
    if (!scientificNotationRegex.test(input)) {
        return false;
    }

    // Split the input into coefficient and exponent parts
    const [coefficientPart, exponentPart] = input.toLowerCase().split('e');

    // Convert coefficient to a number
    const coefficient = parseFloat(coefficientPart);

    // Check if the coefficient is between 1 and 10 (not including 10)
    if (coefficient === 0 || Math.abs(coefficient) >= 10) {
        return false;
    }

    // If there's an exponent, check if it's an integer
    if (exponentPart !== undefined) {
        const exponent = parseFloat(exponentPart);
        if (!Number.isInteger(exponent)) {
            return false;
        }
    }

    // If all checks pass, it's a scientific number
    return true;
}

function checkScientificNumber() {
    const input = document.getElementById("numberInput").value.trim();
    const resultElement = document.getElementById("result");

    // Use the isScientificNumber function to validate the input
    if (isScientificNumber(input)) {
        resultElement.textContent = "${input}" is a scientific number.;
        resultElement.style.color = "green";
    } else {
        resultElement.textContent = "${input}" is NOT a scientific number.;
        resultElement.style.color = "red";
    }
}
