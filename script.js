// Regular expression to match scientific notation
const scientificNotationRegex = /^[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?$/;

if (scientificNotationRegex.test(input)) {
    resultElement.textContent = "${input}" is a scientific number.;
    resultElement.style.color = "green";
} else {
    resultElement.textContent = "${input}" is NOT a scientific number.;
    resultElement.style.color = "red";
}
 

}
