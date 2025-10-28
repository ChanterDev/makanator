
const questions = [
    "children_text",
    "is_stepan",
    "sister_tails",
    "manipulative"
];
let currentQuestions = [];

const strings = {
    "children_text": "Ваш персонаж приставал к маленьким детям?",
    "is_stepan": "Ваш персонаж известен как Степан?",
    "sister_tails": "Ваш персонаж говорил подрочить двухлетней сестре?",
    "manipulative": "Ваш персонаж манипулирует другими людьми?"
};

let total = 0;

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function resetGame() {
    currentQuestions = questions.slice();
    shuffleArray(currentQuestions);
}

function getQuestion() {
    if (currentQuestions.length <= 0) {
        if (total >= Math.floor(questions.length / 2)) {
            window.location.replace("makar.html");
        } else {
            window.location.replace("else.html");
        }
    }
    return currentQuestions.pop();
}

function answer(id) {
    total += id;
    const question = document.getElementById("question");
    const newQuestion = getQuestion();
    question.innerText = strings[newQuestion];
}

window.onload = () => {
    const question = document.getElementById("question");
    resetGame();
    const newQuestion = getQuestion();
    question.innerText = strings[newQuestion];
}
