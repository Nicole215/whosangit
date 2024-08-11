// Quiz questions
const questions = [
    {
        question: "Baby baby",
        answers: [
            { text: "The Rolling Stones", correct: true},
            { text: "The Beatles", correct: false},
            { text: "The Monkeys", correct: false},
        ]
    },
    {
        question: "Feeling good was good enough for me",
        answers: [
            { text: "Beyonce", correct: false},
            { text: "Miley Cirus", correct: false},
            { text: "Janis Joplin", correct: true},
        ],
    },
    {
        question: "You only need a drink if you have nothing else to hold on to",
        answers: [
            { text: "Kenny Rogers", correct: false},
            { text: "Chris Stapleton", correct: true},
            { text: "Tim McGraw", correct: false},
        ],
    },
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;
// Quiz code
function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

   currentQuestion.answers.forEach(answer =>{
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if(answer.correct){
        button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
   });
}
// Remove previous answers
function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
// Check selected Answer for correctnes
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
    } else {
        selectedBtn.classList.add("incorrect");
    }
    }
startQuiz();