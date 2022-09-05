var mainEl = document.querySelector(".main-content");

function showAns(bool) {
    let showAns = document.createElement('div');
    showAns.setAttribute("class", "show-answer");
    bool ? showAns.innerHTML = "Correct!" : showAns.innerHTML = "Wrong!";
    return showAns;
}

function question1() {
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

function question5(bool) {
    let question = `
        <h1>5. A very useful tool used during development and debugging for printing content to the debugger is: </h1>
        <section class="answers-btn">
            <button onclick="location.href='assets/html/highscore.html'">1. JavaScript</button>
            <button onclick="location.href='assets/html/highscore.html'">2. terminal/bash</button>
            <button onclick="location.href='assets/html/highscore.html'">3. for loops</button>
            <button onclick="location.href='assets/html/highscore.html'">4. console.log</button>
        </section>
    `;
    mainEl.innerHTML = question;
    mainEl.appendChild(showAns(bool));
} 