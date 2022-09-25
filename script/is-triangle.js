let angles = document.querySelectorAll(".angle-input");
let isTriangleBtn = document.querySelector("#is-triangle-btn");
let outputSection = document.querySelector("#is-triangle-output");
isTriangleBtn.addEventListener("click", checkIsTriangle);

function checkIsTriangle() {
  let angle1 = angles[0].value;
  let angle2 = angles[1].value;
  let angle3 = angles[2].value;

  if (Number(angle1) + Number(angle2) + Number(angle3) === 180) {
    outputSection.innerText = "Yay, the angles form a triangle!";
  } else outputSection.innerText = "Oh Oh! The angle doesn't form a triangle";
}
