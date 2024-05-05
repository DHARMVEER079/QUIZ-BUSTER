const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Jupiter", "Mars", "Saturn", "Earth"],
        answer: "Mars"
    },
        {
        question: "What is the chemical symbol for water?",
        options: ["H2O", "CO2", "NaCl", "O2"],
        answer: "H2O"
        },
         {
        question: "Who painted the Mona Lisa?",
        options: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Michelangelo"],
        answer: "Leonardo da Vinci"
        },
        {
        question: "Which country is home to the kangaroo?",
        options: ["Australia", "Brazil", "Canada", "India"],
        answer: "Australia"
        },
        {
        question: "What is the tallest mammal in the world?",
        options: ["Giraffe", "Elephant", "Hippopotamus", "Rhino"],
        answer: "Giraffe"
        },
        {
        question: "What is the capital of Japan?",
        options: ["Tokyo", "Beijing", "Seoul", "Bangkok"],
        answer: "Tokyo"
        },
     
        {
        question: "What is the chemical symbol for gold?",
        options: ["Au", "Ag", "Fe", "Cu"],
        answer: "Au"
        },
     {
        question: "Which is the largest ocean on Earth?",
        options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
        answer: "Pacific Ocean"
        },
     {
        question: "Who was the first person to step on the Moon?",
        options: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "Alan Shepard"],
        answer: "Neil Armstrong"
        },
    {
        question: "What is the capital of Brazil?",
        options: ["Brasília", "Rio de Janeiro", "São Paulo", "Buenos Aires"],
        answer: "Brasília"
        },
 {
        question: "Which gas do plants use for photosynthesis?",
        options: ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
        answer: "Carbon dioxide"
        },
    {
        question: "Who is known as the father of modern physics?",
        options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
        answer: "Albert Einstein"
        },
        {
        question: "What is the chemical symbol for oxygen?",
        options: ["O2", "O3", "O", "CO2"],
        answer: "O"
        },
       
     {
        question: "Which is the largest land mammal?",
        options: ["African Elephant", "Hippopotamus", "Giraffe", "Rhinoceros"],
        answer: "African Elephant"
        },
        {
        question: "What is the capital of Italy?",
        options: ["Rome", "Milan", "Naples", "Venice"],
        answer: "Rome"
        },
    
     {
        question: "What is the chemical symbol for silver?",
        options: ["Ag", "Au", "Fe", "Cu"],
        answer: "Ag"
        },
    {
        question: "Which is the largest desert in the world?",
        options: ["Antarctic Desert", "Sahara Desert", "Arabian Desert", "Gobi Desert"],
        answer: "Antarctic Desert"
        },
    {
        question: "Who is known as the 'Father of the Computer'?",
        options: ["Charles Babbage", "Alan Turing", "Steve Jobs", "Bill Gates"],
        answer: "Charles Babbage"
        },
     {
        question: "What is the capital of China?",
        options: ["Beijing", "Shanghai", "Hong Kong", "Taipei"],
        answer: "Beijing"
        },
    {
        question: "Who discovered penicillin?",
        options: ["Alexander Fleming", "Louis Pasteur", "Marie Curie", "Robert Koch"],
        answer: "Alexander Fleming"
        }
        
];

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const submitButton = document.getElementById('submit-btn');
const feedbackElement = document.getElementById('feedback');

let currentQuestion = 0;
let score = 0;

function showQuestion() {
    const quizQuestion = quizData[currentQuestion];
    questionElement.textContent = quizQuestion.question;

    optionsElement.innerHTML = '';
    quizQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option-btn');
        button.addEventListener('click', () => {
            handleAnswer(option);
        });
        optionsElement.appendChild(button);
    });
}

function handleAnswer(selectedOption) {
    const quizQuestion = quizData[currentQuestion];
    if (selectedOption === quizQuestion.answer) {
        score++;
        feedbackElement.textContent = "Correct!";
    } else {
        feedbackElement.textContent = "Wrong!";
    }
    currentQuestion++;

    if (currentQuestion < quizData.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionElement.textContent = `Quiz Completed! Your Score: ${score} out of ${quizData.length}`;
    optionsElement.innerHTML = '';
    submitButton.style.display = 'none';
    feedbackElement.textContent = '';
}

submitButton.addEventListener('click', showQuestion);

// Display the first question on page load
showQuestion();
