let currentQuestion = 1;

function nextQuestion(next) {
    document.getElementById(`question${currentQuestion}`).style.display = 'none';
    document.getElementById(`question${next}`).style.display = 'block';
    currentQuestion = next;
}

function previousQuestion(prev) {
    document.getElementById(`question${currentQuestion}`).style.display = 'none';
    document.getElementById(`question${prev}`).style.display = 'block';
    currentQuestion = prev;
}

function submitForm() {
    const answers = {
        question1: document.querySelector('input[name="question1"]:checked').value,
        question2: document.querySelector('input[name="question2"]:checked').value,
        question3: document.querySelector('input[name="question3"]:checked').value,
        question4: document.querySelector('input[name="question4"]:checked').value,
        question5: document.querySelector('input[name="question5"]:checked').value
    };

    // Display the answers
    const resultsDiv = document.getElementById('results');
    const answersList = document.getElementById('answersList');
    answersList.innerHTML = '';
    for (const [question, answer] of Object.entries(answers)) {
        const li = document.createElement('li');
        li.textContent = `${question}: ${answer}`;
        answersList.appendChild(li);
    }
    resultsDiv.style.display = 'block';

    // Show the thank you modal
    $('#thankYouModal').modal('show');
}

function sendViaEmail() {
    const answers = {
        question1: document.querySelector('input[name="question1"]:checked').value,
        question2: document.querySelector('input[name="question2"]:checked').value,
        question3: document.querySelector('input[name="question3"]:checked').value,
        question4: document.querySelector('input[name="question4"]:checked').value,
        question5: document.querySelector('input[name="question5"]:checked').value
    };

    const subject = "Interview Questionnaire Results";
    const body = Object.entries(answers)
        .map(([q, a]) => `${q}: ${a}`)
        .join("%0A"); // %0A is a newline in URL encoding

    const email = "patricemgala094@gmail.com"; // Replace with the email address you want to use
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
}

function sendViaWhatsApp() {
    const answers = {
        question1: document.querySelector('input[name="question1"]:checked').value,
        question2: document.querySelector('input[name="question2"]:checked').value,
        question3: document.querySelector('input[name="question3"]:checked').value,
        question4: document.querySelector('input[name="question4"]:checked').value,
        question5: document.querySelector('input[name="question5"]:checked').value
    };

    const text = Object.entries(answers).map(([q, a]) => `${q}: ${a}`).join("%0A");

    const phoneNumber = "0718486409"; // Replace with the phone number you'd like to send the message to
    window.open(`https://wa.me/${phoneNumber}?text=${text}`);
}
