$(document).ready(function() {

var start = $("#start");

var quizContainer = $("#quiz");

var resultsContainer = $("#results");

var submitButton = $("#submit");

var questions = [
    {
        question: "What is the codename of each main protagonist in the Metal Gear Solid series?",
        answers: ["Master Chief", "Viper", "Tiger", "Snake"],
        correctAnswer: 3
    },
    {
        question: "What is the greatest device in stealth technology?",
        answers: ["F-22 Rapter", "A Cardboard Box", "Invisibility Blanket", "Active Camoflague Technology"],
        correctAnswer: 1

    },
    {
        question: "Who is the kanine companion of Venom Snake in MGSV",
        answers: ["D-Dog", "Foxhound", "D-Fang", "Quiet"],
        correctAnswer: 0
    },
    {
        question: "Why is Old Snake old in MGS4?",
        answers: ["Accelerated aging due to the cloning process", "He's just old...cuz age", "His bandana was injected with nanomachines", "He isn't old, he recieved an advanced form of plastic surgery augmentation in order to alter his appearance to resemble the legendary Big Boss"],
        correctAnswer: 0
    },
    {
        question: "Why are we still here?",
        answers: ["Because of the Boss's will", "I must wipe this meme from the face of the earth", "They played us like a damn fiddle", "Just to suffer?"],
        correctAnswer: 3
    },
    {
        question: "The latest game in the series was Metal Gear Survive",
        answers: ["ohhhhhhhhh. What is that? Never heard of it", "True"],
        correctAnswer: 0
    }
];

function buildQuiz() {
    var arrEmpty = [];

    $.each(questions,)

// Javascript Example:
    myQuestions.forEach(
        (currentQuestion, questionNumber) => {

        // we'll want to store the list of answer choices
        const answers = [];

        // and for each available answer...
        for(letter in currentQuestion.answers){

            // ...add an HTML radio button
            answers.push(
            `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
            </label>`
            );
        }

        // add this question and its answers to the output
        output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
        );
        }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
    }
    
}

function showResults() {}

// start screen. When start button clicked, load quiz
start.on("click",buildQuiz);


// when counter reaches 0, show results

// when done button clicked, show results









});