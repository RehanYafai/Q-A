console.log("js file is link properly")
const quiz =
    [
        {
            question: "In Which Country You Live?",
            a: "India",
            b: "Pakistan",
            c: "iran",
            d: "iraq",
            ans: "ans1",
        },
        {
            question: "Which Food I Like The Most?",
            a: "roti",
            b: "rice",
            c: "chiken",
            d: "veg",
            ans: "ans3",
        },
        {
            question: "What Is My Favourite Activity?",
            a: "Studing",
            b: "Gym",
            c: "Sleeping",
            d: "Talking",
            ans: "ans2",
        },
        {
            question: "What Iam Studing?",
            a: "school",
            b: "intermediate",
            c: "degree",
            d: "B.tech",
            ans: "ans4",
        }
    ];
const question = document.querySelector(".question");
const Option1 = document.querySelector("#option1");
const Option2 = document.querySelector("#option2");
const Option3 = document.querySelector("#option3");
const Option4 = document.querySelector("#option4");
const sumbit = document.querySelector("#sumbit");
const answers = document.querySelectorAll(".answer");
const finalScore = document.getElementById("score");

let score = 0;

let questionCount = 0;

function loadqn() {
    question.innerHTML = quiz[questionCount].question;
    Option1.innerHTML = quiz[questionCount].a;
    Option2.innerHTML = quiz[questionCount].b;
    Option3.innerHTML = quiz[questionCount].c;
    Option4.innerHTML = quiz[questionCount].d;
}

function getCheckAnswer() {
    let answer;
    answers.forEach(
        (element) => {
            if (element.checked) {
                answer = element.id;
            }
            element.checked = false;
        }
    )
    return answer;
}

loadqn();

sumbit.addEventListener('click', () => {
    let checkAnswer = getCheckAnswer();
    // console.log(checkAnswer);
    if (checkAnswer == quiz[questionCount].ans) {
        score++;
    }
    questionCount++;
    // console.log(score)
    if (questionCount < quiz.length) {
        loadqn();
    }
    else {
        finalScore.innerHTML = `
        <h3> your score is ${score}/${quiz.length}  </h3>
        <button class="btn1" onclick="location.reload()">Play Again</button>
        `
        finalScore.classList.remove("score")
    }
}
)