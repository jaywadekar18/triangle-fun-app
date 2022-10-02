let sides = document.querySelectorAll(".sides-input");
let calulateAreaBtn = document.querySelector("#area-btn");
let outputSection = document.querySelector("#area-output");
calulateAreaBtn.addEventListener("click", calulateAreaOfTriangle);

function calulateAreaOfTriangle() {
  let side1 = Number(sides[0].value);
  let side2 = Number(sides[1].value);
  let side3 = Number(sides[2].value);
  if (sides[0].value === '' || sides[1].value === '' || sides[2].value === '') {
    outputSection.innerText =
      "Enter all sides!!";
  }
  else if (side1 <= 0 || side2 <= 0 || side3 <= 0) {
    outputSection.innerText =
      "Invalid Data Entered!!";
  }
  else if (side1 + side2 > side3 && side2 + side3 > side1 && side1 + side3 > side2) {
    let semiPerimeter = (side1 + side2 + side3) / 2;

    let area = Math.sqrt(
      semiPerimeter *
      (semiPerimeter - side1) *
      (semiPerimeter - side2) *
      (semiPerimeter - side3)
    ).toFixed(4);

    outputSection.innerText = `Area of a triangle using heron's formula is ${area} units`;
  } else
    outputSection.innerText =
      "Enter valid side lengths such that each side lengths";
}
