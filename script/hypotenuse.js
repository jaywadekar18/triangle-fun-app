let baseInput = document.querySelector('#base-input');
let heightInput = document.querySelector('#height-input');
let hypotenuseBtn = document.querySelector("#hypotenuse-btn");
let outputSection = document.querySelector("#hypotenuse-output");
hypotenuseBtn.addEventListener("click", calculateHypotenuse);

function sumOfSquares(a, b) {
    return (a * a + b * b)
}
function calculateHypotenuse() {
    if (baseInput.value === '' || heightInput.value === '') {
        outputSection.innerText =
            "Enter all sides!!";
        return
    }
    else if (Number(baseInput.value) <= 0 || Number(heightInput.value) <= 0) {
        outputSection.innerText =
            "Invalid Data Entered!!";
        return;
    }

    let lengthOfHypotenuse = Math.sqrt(sumOfSquares(Number(baseInput.value), Number(heightInput.value)));
    outputSection.innerText = `The length of hypotenuse is ${lengthOfHypotenuse}`;
}
