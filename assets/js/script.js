var mainEl = document.querySelector(".main-content");

function question1() {
    let question = `
        <h1>Commonly used data types DO Not Include: </h1>
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
        <h1>The condition in an if / else statement is enclosed with ______.</h1>
        <section class="answers-btn">
            <button onclick="question3("false")">1. quotes</button>
            <button onclick="question3("true")">2. curly brackets</button>
            <button onclick="question3("false")">3. parenthesis</button>
            <button onclick="question3("false")">4. square brackets</button>
        </section>
    `;
    let showAns = document.createElement('div');
    showAns.setAttribute("class", "show-answer");
    bool ? showAns.innerHTML = "Correct!" : showAns.innerHTML = "Wrong!";
    mainEl.innerHTML = question;
    mainEl.appendChild(showAns);
} 