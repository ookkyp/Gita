const questions = [
    {
        question: "Apa warna favoritmu?",
        choices: ["Merah", "Biru", "Hijau", "Kuning"],
        answer: "Biru"
    },
    {
        question: "Apa makanan favoritmu?",
        choices: ["Pizza", "Sushi", "Burger", "Salad"],
        answer: "Sushi"
    },
    {
        question: "Di mana tempat impianmu untuk berlibur?",
        choices: ["Pantai", "Pegunungan", "Kota Besar", "Desa"],
        answer: "Pantai"
    },
    {
        question: "Bagaimana pendapatmu tentang saya?",
        choices: ["Teman baik", "Sahabat", "Lebih dari teman", "Pacar"],
        answer: "Lebih dari teman"
    },
    {
        question: "Apakah kamu mau jadi pacarku?",
        choices: ["Ya", "Tidak"],
        answer: "Ya"
    }
];

let currentQuestion = 0;

function loadQuestion() {
    const questionElement = document.getElementById('question');
    const choicesElement = document.getElementById('choices');

    if (currentQuestion < questions.length) {
        const q = questions[currentQuestion];
        questionElement.textContent = q.question;
        choicesElement.innerHTML = '';
        q.choices.forEach(choice => {
            const button = document.createElement('button');
            button.textContent = choice;
            button.onclick = () => checkAnswer(choice);
            choicesElement.appendChild(button);
        });
    } else {
        showResult();
    }
}

function checkAnswer(choice) {
    if (choice === questions[currentQuestion].answer) {
        currentQuestion++;
        loadQuestion();
    } else {
        alert('Jawaban salah. Coba lagi!');
    }
}

function showResult() {
    const quizContainer = document.getElementById('quiz-container');
    const resultElement = document.getElementById('result');
    const messageElement = document.getElementById('message');

    quizContainer.classList.add('hidden');
    resultElement.classList.remove('hidden');
    messageElement.textContent = "Aku mencintaimu! Apakah kamu mau jadi pacarku?";
}

loadQuestion();