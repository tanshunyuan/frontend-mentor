const questions = document.querySelectorAll(".question");
const arrows = document.querySelectorAll(".arrow");
const answers = document.querySelectorAll(".answer");

questions.forEach((qn, index) => {
  qn.addEventListener("click", () => {
    qn.classList.toggle("bold");
    answers[index].classList.toggle("block");
    arrows[index].classList.toggle("rotate-180");
  });
});
