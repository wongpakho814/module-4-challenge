function question1() {
    const question1 = `
        <h1>Commonly used data types DO Not Include: </h1>
        <section class="answers-btn">
            <button onclick="question2()">1. strings</button>
            <button onclick="question2()">2. booleans</button>
            <button onclick="question2()">3. alerts</button>
            <button onclick="question2()">4. numbers</button>
        </section>
    `;
    let mainEl = document.querySelector(".main-content");
    mainEl.innerHTML = question1;
}

function question2() {
    
}