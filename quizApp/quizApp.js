const question = document.getElementById('question-div');
const btn1 = document.getElementById('button-1');
const btn2 = document.getElementById('button-2');
const btn3 = document.getElementById('button-3');
const btn4 = document.getElementById('button-4');
let btns = document.querySelectorAll('button');

const good = document.getElementById('good1')
const bad = document.getElementById('bad1')
const remaining = document.getElementById('remaining1');

let right = 0;
let wrong = 0;
let count = 0;
let remainingNumb = 10



const questionArr = [
    "What do you call a portable computer?",
    "What are REAL anti-virus software programs?",
    "What do you use for reading CD's & DVD's?",
    "What memory below is the largest?",
    "What do you do when your pc fails/malfunction?",
    "What does a control panel do?",
    "What is de most used search-engine?",
    "What do you use to click stuff?",
    "What do you use to type?",
    "Which line do you use to connect to the internet?",
]

const answerArr = [
    ["Laptop", "Bookshop", "Ram", "Computer"],
    ["Norton", "Crosh shell", "Ethernet", "Edge"],
    ["Monitor", "Keyboard", "DVD/CD player", "Mouse"],
    ["1TB", "1GB", "5500GB", "712MB"],
    ["Reboot/Restart", "Shutdown", "Recovery USB", "Call someone"],
    ["Control your pc", "Games", "Change settings", "None of the above"],
    ["Yahoo", "Bing", "Google", "SOSO"],
    ["RAM", "CPU", "Keyboard", "Mouse"],
    ["Mouse", "Keyboard", "ROM", "CPU"],
    ["Phone line", "Motherboard", "Mouse", "SSD"],
]

const rightAnswerArr = ["Laptop", "Norton", "DVD/CD player", "1TB", "Recovery USB", "Change settings", "Google", "Mouse", "Keyboard", "Phone line"];

//Updates the text-content of the quiz questions + answers.
const updateQuiz = () => {
    if (remainingNumb > 0) {
        question.textContent = questionArr[count];
        btn1.textContent = answerArr[count][0];
        btn2.textContent = answerArr[count][1];
        btn3.textContent = answerArr[count][2];
        btn4.textContent = answerArr[count][3];
    }
    remainingNumb--;
}

const updateScore = () => {
    remaining.textContent = remainingNumb;
    if (remainingNumb === 0) {
        endGame();
    }
    good.textContent = right;
    bad.textContent = wrong;
}

const endGame = () => {
        alert(`The quiz is over! You scored a ${right} out of 10!`);
        right = 0;
        wrong = 0;
        remainingNumb = 10;
        count = 0;
}

for (let i of btns) {
    i.addEventListener('click', function (e) {
        const clickedBtn = e.target;
        if (clickedBtn.textContent === rightAnswerArr[count]) {
            right++;
        } else {
            wrong++;
        }
        count++; // Increment count after displaying the current question
        updateScore();
        updateQuiz();
        console.log(remainingNumb)
    });
}

document.addEventListener('DOMContentLoaded', () => {
    updateQuiz();
});
