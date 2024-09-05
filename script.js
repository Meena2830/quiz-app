const quizData = [
    {
        question: "1. JavaScript File Has An Extension of:",
        a:".Java",
        b: ".js",
        c: ".javascript",
        d: ".xml",
        correct: "b"
    },
    {
        question: "2. The ____________ Tag is used To Give Heading To The Table.",
        a: "Head",
        b: "Td",
        c: "Th",
        d: "Caption",
        correct: "d"
    },
    {
        question: "3. Function is Used To Parse a String To Int",
        a: "Integer.Parse",
        b: "Int.Parse",
        c: "Parse.Int",
        d: "None",
        correct: "b"
    },
    {
        question: "4. Event is Used To Check An Empty Text Box",
        a: "Onclick()",
        b: "OnFocus()",
        c: "OnBlur()",
        d: "None",
        correct: "c"
    }
];


const quiz = document.getElementById('quiz');
const questionEl = document.getElementById('question');
const answerEls = document.querySelectorAll('.answer');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const nextBtn = document.getElementById('next');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
    for (let i = 0; i < answerEls.length; i++) {
        answerEls[i].checked = false;
    }
    nextBtn.disabled = true;
}

function getSelected() {
    for (let i = 0; i < answerEls.length; i++) {
        if (answerEls[i].checked) {
            nextBtn.disabled = false;
            return answerEls[i].id;
        }
    }
    return null;
}

for (let i = 0; i < answerEls.length; i++) {
    answerEls[i].addEventListener('change', getSelected);
}


nextBtn.addEventListener('click', () => {
    const answer = getSelected();
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if(currentQuiz < quizData.length) {
            loadQuiz();
            if (currentQuiz === quizData.length - 1) {
                nextBtn.style.display = 'none';
                submitBtn.style.display = 'inline-block';
            }
        }
    }
});

submitBtn.addEventListener('click', () => {
    quiz.innerHTML = `
        <h2>You answered ${score}/${quizData.length} questions correctly</h2>
        <button onclick="location.reload()">Reload</button>
    `;
});