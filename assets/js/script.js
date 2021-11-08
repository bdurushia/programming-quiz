// build question array, nest array and use booleans for which answers or true or false
var questions = [
    {
        question: "What is Bootstrap?",
        answers: [
            {text: "A CSS framework built by Twitter that also includes some JS", correct: true },
            {text: "The strap of a boot", correct: false },
            {text: "A code structure format", correct: false },
            {text: "A styling programming language", correct: false }
        ]
    },
    {
        question: "What does JSON stand for?",
        answers: [
            {text: "JQuery Standard Object Notation", correct: false },
            {text: "Java String Origin Node", correct: false },
            {text: "Javascript Object Notation", correct: true },
            {text: "Jason Borne", correct: false }
        ]
    },
    {
        question: "Who wrote the JavaScript language? ",
        answers: [
            {text: "James Gosling", correct: false },
            {text: "Ryan Gosling", correct: false },
            {text: "Guido van Rossum", correct: false },
            {text: "Brendan Eich", correct: true }
        ]
    },
    {
        question: "How long did it take him to write the JavaScript language?",
        answers: [
            {text: "12 weeks", correct: false },
            {text: "10 days", correct: true },
            {text: "1.5 years", correct: false },
            {text: "8 hours", correct: false }
        ]
    },
    {
        question: "What causes an infinite loop?",
        answers: [
            {text: "When a condition for the loop is never met.", correct: true },
            {text: "Using return.loop();", correct: false },
            {text: "Nesting a for loop inside of a while loop", correct: false },
            {text: "(i = 0; i < condition.length; i++)", correct: false }
        ]
    },
    {
        question: "Javascript arrays must use ____ to hold data.",
        answers: [
            {text: "()", correct: false },
            {text: "<>", correct: false },
            {text: "{}", correct: false },
            {text: "[]", correct: true }
        ]
    }
];

// Create functions to target classes/id's to show or hide them in the browser
var hide = function(elements) {
    var elements = elements.length ? elements : [elements];
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = "none";
    }
};

var show = function(elements) {
    var elements = elements.length ? elements : [elements];
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = "flex";
    }
};

//Global variables
var startButtonEl = document.querySelector("#start-btn");
var questionEl = document.querySelector("#question");
var answerButtonsEl = document.querySelector("#answer-buttons");
// Defining like this sets variable to undefined
var currentQuestionIndex

var nextQuestion = function() {
    // Set questions
    var setQuestionEl = document.createElement("h1");
    setQuestionEl.textContent = questions[currentQuestionIndex], "question";
    questionEl.appendChild(setQuestionEl);
    // Show Questions
    show(document.querySelector(".question-show"));

};

var selectAnswer = function() {
    
};

 // Start Game function
var startGame = function() {
    console.log("started");
    currentQuestionIndex = 0;
    hide(document.querySelector(".start-hide"));
    // call setNextQuestion Function
    nextQuestion();
};


// Hide Questions upon page refresh
hide(document.querySelector(".question-hide"));

startButtonEl.addEventListener("click", startGame);
