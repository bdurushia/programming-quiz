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

// create variables for timers
var timerEl = document.querySelector("#timer");
var timeLeft = 30;
// create timer function
var countdown = function() {
    var timeInterval = setInterval(function () {
        if (timeLeft > 0) {
            timerEl.innerHTML = timeLeft + " secs";
            timeLeft--;
        } else if (timeLeft === 0 || currentQuestionIndex >= 6) {
            timerEl.textContent = "0";
            clearQuestions();
            showScore();
            clearInterval(timeInterval);
            // Display Times Up! in result container
            var timesUp = document.querySelector(".result-container");
            timesUp.textContent = "Times Up!";
        }
    }, 1000);
};


// Create functions to target classes/id's to show or hide them in the DOM
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
    // conditional if current question index > questions.length
    // call score function
    if (currentQuestionIndex >= 6) {
        showScore();
    } else {
        // Set question
        var setQuestionEl = document.createElement("h1");
        setQuestionEl.textContent = questions[currentQuestionIndex].question;
        questionEl.appendChild(setQuestionEl);
    
        // Set Answers using a for loop to create each answer button
        for (var i = 0; i < questions[currentQuestionIndex].answers.length; i++) {
            var setAnswerButtonsEl = document.createElement("button");
            setAnswerButtonsEl.className = "btn";
            setAnswerButtonsEl.textContent = questions[currentQuestionIndex].answers[i].text;
            if (questions[currentQuestionIndex].answers[i].correct === true) {
                setAnswerButtonsEl.id = "true";
            } else {
                setAnswerButtonsEl.id = "false";
            }
            answerButtonsEl.appendChild(setAnswerButtonsEl);
        }
     
        // Show Question/Answers
        show(document.querySelector(".question-show"));
        // hide(document.querySelector(".result-container"));
        currentQuestionIndex++;
    }
};

// Create function to clear dom elements and change to next question
var clearQuestions = function() {
    var quizSection = document.querySelector("#question");
    var answerSection = document.querySelector("#answer-buttons");
    while (quizSection.firstChild) {
        quizSection.removeChild(quizSection.firstChild);
    }
    while (answerSection.firstChild) {
        answerSection.removeChild(answerSection.firstChild);
    }
};

// Listen for which answer is clicked on and determine whether it's correct or incorrect,
var selectAnswer = function(event) {
    var answerSelected = event.target.id;
    if (answerSelected === "true") {
        var correctAnswer = document.querySelector(".result-container");
        correctAnswer.textContent = "Correct!";
        show(correctAnswer);
    } else {
        // subtract time from timer for wrong answer
        timeLeft = timeLeft - 7;
        var wrongAnswer = document.querySelector(".result-container");
        wrongAnswer.textContent = "Incorrect!";
        show(wrongAnswer);
    }
    clearQuestions();
    nextQuestion();
};

 // Start Game function
var startGame = function() {
    countdown();
    currentQuestionIndex = 0;
    hide(document.querySelector(".start-hide"));
    // call setNextQuestion Function
    nextQuestion();
};

// Generate score form for user to submit initials
var scoreForm = function(){
    var formEl = document.createElement("form");
    var labelEl = document.createElement("label");
    var inputEl = document.createElement("input");
    var submitButtonEl = document.createElement("button")

    labelEl.className = "form";
    labelEl.textContent = "Your initials: ";
    inputEl.type = "text";
    submitButtonEl.className = "btn";
    submitButtonEl.textContent = "Submit";
    //re-use question container for score form
    questionEl.appendChild(formEl);
    formEl.appendChild(labelEl);
    labelEl.appendChild(inputEl);
    formEl.appendChild(submitButtonEl);
};
// create showScore function
var showScore = function() {
    const userScore = timeLeft;
    var setScoreEl = document.createElement("h3");
    setScoreEl.id = "user-score";
    setScoreEl.textContent = "Your final score is: " + userScore;
    //re-use question container for score info
    questionEl.appendChild(setScoreEl);
    //call score form
    scoreForm();
};

// Save User initials and score to localStorage


// Hide Questions upon page refresh
hide(document.querySelector(".question-hide"));

startButtonEl.addEventListener("click", startGame);
answerButtonsEl.addEventListener("click", selectAnswer);

