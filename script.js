/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
const quizData = [
  {
    question: "What’s my favorite color?",
    options: ["Black", "Pink", "Blue"],
    answer: "Black"
  },
  {
    question: "Which game could I play for hours?",
    options: ["missions games", "fashion games", "puzzle games"],
    answer: "fashion games"
  },
  {
    question: "What’s my favorite playlist?",
    options: ["pop", "rock", "R&B"],
    answer: "pop"
  },
  {
    question: "What’s my favorite drink?",
    options: ["tea", "coffee", "matcha"],
    answer: "coffee"
  },
  {
    question: "Which idol do i love the most?",
    options: ["Kyujin", "Chaewon", "Sakura "],
    answer: "Sakura"
  },
  {
    question: "What’s my favorite show?",
    options: ["running man", "keep running", "hello saturday"],
    answer: "running man"
  }, 
  {
    question: "What’s my favorite drama?",
    options: ["perect marriage revenge", "tomorrow", "WIFTY"],
    answer: "tomorrow"
  },
  {
    question: "What’s my MPTI?",
    options: ["ISFJ", "INFJ", "ISTJ"],
    answer: "ISFJ"
  }
  
];

let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;

const quizEl = document.getElementById("quiz");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");

function showQuestion() {
  const q = quizData[currentQuestion];
  selectedAnswer = null;

  quizEl.innerHTML = `
    <h2>${q.question}</h2>
    ${q.options
      .map(
        (option) => `<div class="option" onclick="selectOption(this)">${option}</div>`
      )
      .join("")}
  `;

  nextBtn.innerText = currentQuestion === quizData.length - 1 ? "Finish" : "Next";
  nextBtn.disabled = true;
}

function selectOption(optionEl) {
  const allOptions = document.querySelectorAll(".option");
  allOptions.forEach(opt => {
    opt.classList.remove("selected");
    opt.style.pointerEvents = "none";
  });

  optionEl.classList.add("selected");
  selectedAnswer = optionEl.innerText;
  nextBtn.disabled = false;
}

nextBtn.addEventListener("click", () => {
  if (!selectedAnswer) return;

  if (selectedAnswer === quizData[currentQuestion].answer) {
    score++;
  }

  currentQuestion++;
  if (currentQuestion < quizData.length) {
    showQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  quizEl.classList.add("hidden");
  nextBtn.classList.add("hidden");
  resultEl.classList.remove("hidden");

  let message = "";
  if (score === quizData.length) {
    message = "You know me TOO well BESTIE";
  } else if (score >= 2) {
    message = "Not bad you kinda get me";
  } else {
    message = "You don’t know me AT ALL:(";
  }

  resultEl.innerHTML = `<h2>Your Score: ${score}/${quizData.length}</h2><p>${message}</p>`;
}

// Start the first question
showQuestion();


