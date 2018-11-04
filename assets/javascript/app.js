$(document).ready(function() {

// variable to track question & "slide" numbers
var questionCounter = 0;

// timer
var time1 = 3500;

// Variables to track scores
var correct = 0;
var incorrect = 0;
var missed = 0;

// Array of user's answers
var userAnswers = [];

// Array of questions, answer options, correct answer
var questions = [
    {
        question: "What is the codename of each main protagonist in the Metal Gear Solid series?",
        answers: ["Master Chief", "Viper", "Tiger", "Snake"],
        choicesAnswer: 3
    },
    {
        question: "What is the greatest device in stealth technology?",
        answers: ["F-22 Rapter", "A Cardboard Box", "Invisibility Blanket", "Active Camoflague Technology"],
        choicesAnswer: 1

    },
    {
        question: "Who is the kanine companion of Venom Snake in MGSV",
        answers: ["D-Dog", "Foxhound", "D-Fang", "Quiet"],
        choicesAnswer: 0
    },
    {
        question: "Why is Old Snake old in MGS4?",
        answers: ["Accelerated aging due to the cloning process", "He's just old...cuz age", "His bandana was injected with nanomachines", "He isn't old, he recieved an advanced form of plastic surgery augmentation in order to alter his appearance to resemble the legendary Big Boss"],
        choicesAnswer: 0
    },
    {
        question: "Why are we still here?",
        answers: ["Because of the Boss's will", "I must wipe this meme from the face of the earth", "They played us like a damn fiddle", "Just to suffer?"],
        choicesAnswer: 3
    },
    {
        question: "The latest game in the series was Metal Gear Survive",
        answers: ["ohhhhhhhhh. What is that? Never heard of it", "True"],
        choicesAnswer: 0
    }
];


function submission() {
    $("#submit").on("click", function(yup) {
        yup.preventDefault();
        userAnswers.length = 0;

        // record user answer to question
        var userSelection = $("#responses input:radio[name=optionsRadios]:checked").val();
        userAnswers.push(userSelection);
        console.log(userAnswers);
        nextQ();
    });
};

// creating question timer variables and functions
var timeLeft = 20;
var increment;

function runTimer() {
    increment = setInterval(decrement, 1000);
};

function decrement() {
    timer--;
    $("#timer").html("Time remaining: " + timer + " seconds");
    if (timer === 0) {
        stopTimer();
        userAnswers.length = 0;

        // record user answer to question
        var userSelection = $("#responses input:radio[name=options]:checked").val();
        userAnswers.push(userSelection);
        console.log(userAnswers);
        nextQ();
    };
};

function resetTimer() {
    timer = 20;
    $("#timer").html("Time remaining: " + timer + " seconds");
};

function displayTimer() {
    $("#timer").html("Answer Review");
};

function stopTimer() {
    clearInterval(increment);
};

// function to display the given response options
function createRadioBtns() {
    var responseOptions = $("#responses");
    responseOptions.empty();

    for (var i = 0; i < questions[questionCounter].answers.length; i++) {
        responseOptions.append('<label><input type="radio" name="optionsRadios" id="optionsRadios2" value="' + [i] +'"><div class="answerBullets">' + questions[questionCounter].answers[i] + '</div></input><br></label>');
    };
};

function displayQ() {
    clearQ();
    resetTimer();
    $(".questionPLEASE").html(questions[questionCounter].question);
    createRadioBtns();
    $("#submit-div").append('<button type="submit" class="btn btn-default" id="submit">' + "Submit" + '</button>');
    runTimer()
    submission();
};

function startPage() {
    $("#content").append('<p>' + "Welcome to the Metal Gear Solid Trivia game! Test your knowledge by answering questions across the entire Metal Gear Solid game series!" + '</p><a' + 'href="#" class="btn btn-primary btn-lg" id="start">' + "Start" + '</a>');
    $("#start").on("click", function(yay){
        yay.preventDefault();
        firstQ();
        resetTimer();
    });
};

function reset() {
    questionCounter = 0;
    correct = 0;
    incorrect = 0;
    missed = 0;
    userAnswers = [];
    resetTimer();
};

function displayEnd() {
    clearQ();
    $("#content").append('<h3>' + "Correct answers: " + correct + '</h3><br><h3>' + "Incorrect answers: " + incorrect + '</h3><br><h3>' + "Skipped questions: " + missed + '</h3><br><br><a href="#" class="btn btn-primary btn-lg" id="restart">' + "Restart Game" + '</a>');
    $("#restart").on("click", function(yay) {
        yay.preventDefault();
        reset();
        clearQ();
        startPage();
    });
};

function clearQ() {
    var questionDiv = $(".questionPLEASE");
    questionDiv.empty();

    var responsesDiv = $("#responses");
    responsesDiv.empty();

    var submitDiv = $("#submit-div");
    submitDiv.empty();

    var contentDiv = $("#content");
    contentDiv.empty();

    stopTimer();
};

function checkQ() {
    clearQ();
    var correctAnswer = questions[questionCounter].choicesAnswer;
    if (userAnswers[0] == questions[questionCounter].choicesAnswer) {
        $("#content").append('<h4>'+"CORRECT!"+'</h4>');
        correct++;
        displayTimer();
    }
    else if (userAnswers[0] === undefined) {
        $("#content").append('<h4>'+"Out of Time!"+'</h4><br><br><h4>' + "The correct answer was: " + questions[questionCounter].answers[correctAnswer] + '</h4>');
        missed++;
        displayTimer();
    }
    else {
        $("#content").append('<h4>' + "Nope!" + '</h4><br><br><h4>' + "The correct answer was: " + questions[questionCounter].answers[correctAnswer] + '</h4>');
        incorrect++;
        displayTimer();
    };
};

function nextQ() {
    checkQ();
    questionCounter++;
    if (questionCounter === questions.length) {
        setTimeout(displayEnd, time1);
    }
    else {
        setTimeout(displayQ, time1);
    };
};

function firstQ() {
    var startContent = $("#content");
    startContent.empty();
    displayQ();
};

startPage();


});