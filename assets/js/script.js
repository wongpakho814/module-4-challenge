var mainEl = document.querySelector(".main-content");
var timerEl = document.querySelector(".timer");
var prevScore = document.querySelector(".prev-scores");
var timer;
var timerCount = 0;
var isFinished = false;
var initialArr = [];

// Initiate the timer, and handle situation where timer reaches 0
function startTimer() {
    timerCount = 75;
    timerEl.textContent = "Time: " + timerCount;
    timer = setInterval(function() {
        timerCount--;
        timerEl.textContent = "Time: " + timerCount;
        // When the timer reaches 0, jump to the result page
        if (timerCount === 0) {
            clearInterval(timer);
            result("lost");
        }
        else if (isFinished === true) {
            clearInterval(timer);
        }
    }, 1000);
}

// Renders the "Correct!" or "Wrong!" element after answering each question
function showAns(bool) {
    let showAns = document.createElement('div');
    showAns.setAttribute("class", "show-answer");

    if (bool === true) {
        showAns.innerHTML = "Correct!"
    }
    else if (bool === false)  {
        showAns.innerHTML = "Wrong!"
        timerCount -= 10;
    }
    // If the timer runs out and reaches 0
    else {
        showAns.style.display = "none";
    }

    // Element will be hidden after a certain amount of time
    setTimeout(() => {
        showAns.style.display = 'none';
    }, 1000)
    return showAns;
}

// Renders question 1 in index.html, also initiate the timer
function question1() {
    startTimer();
    let question = `
        <h1>1. Commonly used data types DO Not Include: </h1>
        <section class="answers-btn">
            <button onclick="question2(false)">1. strings</button>
            <button onclick="question2(false)">2. booleans</button>
            <button onclick="question2(true)">3. alerts</button>
            <button onclick="question2(false)">4. numbers</button>
        </section>
    `;
    mainEl.innerHTML = question;
}

// Renders question 2 in index.html
function question2(bool) {
    let question = `
        <h1>2. The condition in an if / else statement is enclosed with ______.</h1>
        <section class="answers-btn">
            <button onclick="question3(false)">1. quotes</button>
            <button onclick="question3(false)">2. curly brackets</button>
            <button onclick="question3(true)">3. parenthesis</button>
            <button onclick="question3(false)">4. square brackets</button>
        </section>
    `;
    mainEl.innerHTML = question;
    mainEl.appendChild(showAns(bool));
} 

// Renders question 3 in index.html
function question3(bool) {
    let question = `
        <h1>3. Arrays in JavaScript can be used to store ______.</h1>
        <section class="answers-btn">
            <button onclick="question4(false)">1. numbers and strings</button>
            <button onclick="question4(false)">2. other arrays</button>
            <button onclick="question4(false)">3. booleans</button>
            <button onclick="question4(true)">4. all of the above</button>
        </section>
    `;
    mainEl.innerHTML = question;
    mainEl.appendChild(showAns(bool));
} 

// Renders question 4 in index.html
function question4(bool) {
    let question = `
        <h1>4. String values must be enclosed within ______ when being assigned to variables.</h1>
        <section class="answers-btn">
            <button onclick="question5(false)">1. commas</button>
            <button onclick="question5(false)">2. curly brackets</button>
            <button onclick="question5(true)">3. quotes</button>
            <button onclick="question5(false)">4. parenthesis</button>
        </section>
    `;
    mainEl.innerHTML = question;
    mainEl.appendChild(showAns(bool));
} 

// Renders question 5 in index.html
function question5(bool) {
    let question = `
        <h1>5. A very useful tool used during development and debugging for printing content to the debugger is: </h1>
        <section class="answers-btn">
            <button onclick="result(false)">1. JavaScript</button>
            <button onclick="result(false)">2. terminal/bash</button>
            <button onclick="result(false)">3. for loops</button>
            <button onclick="result(true)">4. console.log</button>
        </section>
    `;
    mainEl.innerHTML = question;
    mainEl.appendChild(showAns(bool));
} 

// Renders the result page in index.html
function result(bool) {
    isFinished = true;
    let content = `<h1>All done!</h1>`;

    let score = document.createElement("p");
    score.setAttribute("class", "score");
    (bool === false) ? score.textContent = "Your final score is " + (timerCount-10) + "." : 
    score.textContent = "Your final score is " + timerCount + ".";

    let initial = document.createElement("form");
    initial.setAttribute("action", "assets/html/highscore.html");
    initial.setAttribute("id", "result-form");
    initial.innerHTML = `
        <label for="initials">Enter initials: </label>
        <input type="text" id="initials" name="initials">
        <input type="submit" value="Submit">
    `;

    mainEl.innerHTML = content;
    mainEl.appendChild(score);
    mainEl.appendChild(initial);
    mainEl.appendChild(showAns(bool));
    
    document.querySelector("#result-form").addEventListener("submit", function(event){
        initialArr.push({
            "name": document.getElementById("initials").value,
            "score": timerCount+1
        });
        // Sort the score in descending order
        initialArr.sort(function(a, b) {
            return b.score - a.score
        });
        localStorage.setItem("initials", JSON.stringify(initialArr));
    });
}

// Retrieve the stored initials from the localStorage
function getInitials() {
    let storedInitials = JSON.parse(localStorage.getItem("initials"));
    (storedInitials === null) ? initialArr = [] : initialArr = storedInitials;
}

// Clear the local storage
function clearStorage() {
    localStorage.clear();
    prevScore.innerHTML = "";
}

// Add <li> to the prev-scores <ul> in highscore.html according to the local storage
function loadInitials() {
    for (let i = 0; i < initialArr.length; i++) {
        let initialItem = document.createElement("li");
        initialItem.setAttribute("class", "initial-item");
        initialItem.textContent = (i+1) + ". " + initialArr[i].name + " - " + initialArr[i].score;
        if (prevScore !== null) {
            prevScore.appendChild(initialItem);
        }
    }
}

// Init function that retrieve data from localStorage
function init() {
    getInitials();
    loadInitials();
}
init();