//Allows rules to be shown before quiz start
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("rules").style.display = "block";
    const beginQuizButton = document.getElementById("start-btn");
    if (beginQuizButton) {
        beginQuizButton.addEventListener("click", function () {
            document.getElementById("rules").style.display = "none";
            const timeout = setInterval(countdown, 60000); //Starts timer once challenge is accepted
            startQuiz();
        });
    }
});

// Quiz questions
const questions = [
    {
        question: "You're obsolete, my baby, my poor unfaithful baby",
        answers: [
            { text: "The Rolling Stones", correct: true},
            { text: "The Beatles", correct: false},
            { text: "The Monkeys", correct: false},
        ]
    },
    {
        question: "You know feeling good was good enough for me",
        answers: [
            { text: "Beyonce", correct: false},
            { text: "Miley Cirus", correct: false},
            { text: "Janis Joplin", correct: true},
        ]
    },
    {
        question: "You only need a drink when the whiskey is the only thing that you have left to hold",
        answers: [
            { text: "Kenny Rogers", correct: false},
            { text: "Chris Stapleton", correct: true},
            { text: "Tim McGraw", correct: false},
        ]
    },
    {
        question: "You can check out any time you like, but you can never leave",
        answers: [
            { text: "Stray Cats", correct: false},
            { text: "Steppenwolf", correct: false},
            { text: "Eagles", correct: true},
        ]
    },
    {
        question: "But having all this money is gonna bring me down",
        answers: [
            { text: "Dr. Hook", correct: true},
            { text: "Dr. Dre", correct: false},
            { text: "Dr. Feelgood", correct: false},
        ]
    },
    {
        question: "... you drink champagne and it tastes like Coca-Cola",
        answers: [
            { text: "The Who", correct: false},
            { text: "The Kinks", correct: true},
            { text: "The Clash", correct: false},
        ]
    },
    {
        question: "Gotta go insane to stay sane",
        answers: [
            { text: "TLC", correct: false},
            { text: "R.E.M.", correct: false},
            { text: "BTS", correct: true},
        ]
    },
    {
        question: "My life, my love, my drive it came from pain",
        answers: [
            { text: "Imagine Dragons", correct: true},
            { text: "Gorillaz", correct: false},
            { text: "Bloodhound Gang", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

// Start quiz with first question from array
function startQuiz(){
    try{

    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();}
    catch(err){
        console.log(err)
    }
}

// Get next questions from array
function showQuestion(){
    try{

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
   catch(err){
    console.log(err)
   }
}

// Remove initial answers
function resetState(){
    try{

    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }}
    catch(err){
        console.log(err)
    }
}

// Check selected Answer for correctnes and give next button
function selectAnswer(e){
    try{

    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";}
    catch(err){
        console.log(err)
    }
}

// Output total score
function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    // Option to play again
    nextButton.innerHTML = "Play again";
    nextButton.style.display = "block";
}   
function handleNextButton(){
    try{

    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }}
    catch(err){
    console.log(err)
    }
}
   
nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
    }
);

// Will show user result when time is up
function countdown(){
    resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    // Option to play again
    nextButton.innerHTML = "Play again";
    nextButton.style.display = "block";
}

