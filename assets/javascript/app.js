$(document).ready(function() {

var start = $("#start");

var quizContainer = $("#quiz");

var resultsContainer = $("#results");

var submitButton = $("#submit");

var questions = [
    {
        question: "What is the codename of each main protagonist in the Metal Gear Solid series?",
        answers: {
            a: "Master Chief",
            b: "Viper",
            c: "Tiger",
            d: "Snake"
        },
        correctAnswer: "c"
    },
    {

    }
]

function buildQuiz() {}

function showResults() {}

// start screen. When start button clicked, load quiz
start.on("click",buildQuiz);


// when counter reaches 0, show results

// when done button clicked, show results









});