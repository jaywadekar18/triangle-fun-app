let answerBank = {
  question1: "90°",
  question2: "right angled",
  question3: "one right angle",
  question4: "12, 16, 20",
  question5: "Equilateral triangle",
  question6: "100°",
  question7: "30°",
  question8: "a + b + c",
  question9: "no",
  question10: "45°",
};

let quizForm = document.querySelector("#quiz-form");
let submitBtn = document.querySelector("#submit-quiz");
let outputSection = document.querySelector("#output-section");

submitBtn.addEventListener("click", submit);
function submit(e) {
  let correctAnsCount = 0;
  e.preventDefault();
  let formData = new FormData(quizForm);
  let formResult = {};
  for (let [key, value] of formData) {
    formResult[key] = value;
  }
  for (const key in formResult) {
    if (answerBank[key]==formResult[key]) {
      ++correctAnsCount;
    }
  }
  outputSection.innerText = `Your Score is ${correctAnsCount}`
}


