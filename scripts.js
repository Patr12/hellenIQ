let currentQuestion = 1;
let totalQuestions = 15;

// Show main questionnaire after selecting language
function selectLanguage(language) {
    document.getElementById('splashPage').style.display = 'none';
    document.getElementById('mainQuestionnaire').style.display = 'block';
    
    // Translate questions based on selected language (For simplicity, using static translation here)
    if (language === 'en') {
        setEnglish();
    } else if (language === 'sw') {
        setSwahili();
    }
}

// Set English language for questions
function setEnglish() {
    document.getElementById('questionnaireTitle').textContent = "Interview Questionnaire";
    document.getElementById('q1Label').textContent = "1. How would you describe me to someone else?";
    document.getElementById('q2Label').textContent = "2. What stands out about me?";
    document.getElementById('q3Label').textContent = "3. How do I inspire you?";
    document.getElementById('q4Label').textContent = "4. What are my strengths?";
    document.getElementById('q5Label').textContent = "5. What areas do you think I can improve on?";

    document.getElementById('q1Option1Label').textContent = "Friendly";
    document.getElementById('q1Option2Label').textContent = "Hardworking";
    document.getElementById('q1Option3Label').textContent = "Creative";

    document.getElementById('q2Option1Label').textContent = "My communication skills";
    document.getElementById('q2Option2Label').textContent = "My dedication";
    document.getElementById('q2Option3Label').textContent = "My problem-solving ability";

    document.getElementById('q3Option1Label').textContent = "By being a good leader";
    document.getElementById('q3Option2Label').textContent = "By always staying positive";
    document.getElementById('q3Option3Label').textContent = "By helping others";

    document.getElementById('q4Option1Label').textContent = "Teamwork";
    document.getElementById('q4Option2Label').textContent = "Time management";
    document.getElementById('q4Option3Label').textContent = "Adaptability";

    document.getElementById('q5Option1Label').textContent = "Public speaking";
    document.getElementById('q5Option2Label').textContent = "Technical skills";
    document.getElementById('q5Option3Label').textContent = "Delegation";

    document.getElementById('questionnaireTitle').textContent = "Interview Questionnaire";
    document.getElementById('q8Label').textContent = "8. How do I handle challenges?";

    document.getElementById('q8Option1Label').textContent = "I tackle them head-on";
    document.getElementById('q8Option2Label').textContent = "I analyze and plan a solution";
    document.getElementById('q8Option3Label').textContent = "I seek advice from others";
     // Set translations for question 7
     document.getElementById('q7Label').textContent = "7. What motivates me to do my best work?";

     document.getElementById('q7Option1Label').textContent = "Passion for the work";
     document.getElementById('q7Option2Label').textContent = "Desire to succeed";
     document.getElementById('q7Option3Label').textContent = "Team support";
        // Question 10: What programming languages are you proficient in?
    document.getElementById('q10Label').textContent = "10. Which language should I learn to improve my communication? (Select all that apply)";
    document.getElementById('q10Option1').nextElementSibling.textContent = "English";
    document.getElementById('q10Option2').nextElementSibling.textContent = "Spanish";
    document.getElementById('q10Option3').nextElementSibling.textContent = "French";
    document.getElementById('q10Option4').nextElementSibling.textContent = "Mandarin";

    // Question 11: Challenges faced in career development
    document.getElementById('q11Label').textContent = "11. What challenges have you faced in your career development?";

    // Question 12: Job satisfaction rating
    document.getElementById('q12Label').textContent = "12. How satisfied are you with your current job?";

    // Question 13: Date input for career start
    document.getElementById('q13Label').textContent = "13. When did you start your career in busness online?";

    // Question 14: Preferred learning method
    document.getElementById('q14Label').textContent = "14. What is your preferred method of learning?";
    document.getElementById('q14Select').options[0].textContent = "Online Courses";
    document.getElementById('q14Select').options[1].textContent = "Books";
    document.getElementById('q14Select').options[2].textContent = "Workshops";
    document.getElementById('q14Select').options[3].textContent = "Mentorship";

    // Final page: Thank you message
    document.getElementById('thankYouPage').querySelector('h2').textContent = "Thank you for completing the questionnaire!";
    document.getElementById('thankYouPage').querySelector('p').textContent = "Your responses have been successfully submitted. We appreciate your time and feedback.";
 
     // Existing translation code for other questions...
}

// Set Swahili language for questions
function setSwahili() {
    document.getElementById('questionnaireTitle').textContent = "Maswali ya Mahinterview";
    document.getElementById('q8Label').textContent = "8. Ni vipi hushughulikia changamoto?";

    document.getElementById('q8Option1Label').textContent = "Naziangalia kwa uso kwa uso";
    document.getElementById('q8Option2Label').textContent = "Nanaleta mpango wa kutatua changamoto";
    document.getElementById('q8Option3Label').textContent = "Natafuta ushauri kutoka kwa wengine";

    // Existing translations for other questions
     // Set translations for question 7 in Swahili
     document.getElementById('q7Label').textContent = "7. Ni nini kinachonivutia kufanya kazi yangu bora?";

     document.getElementById('q7Option1Label').textContent = "Mapenzi kwa kazi";
     document.getElementById('q7Option2Label').textContent = "Hamu ya kufanikiwa";
     document.getElementById('q7Option3Label').textContent = "Msaada wa timu";
 

    document.getElementById('questionnaireTitle').textContent = "Maswali ya Mahinterview";
    document.getElementById('q1Label').textContent = "1. Ungejielezaje kwa mtu mwingine?";
    document.getElementById('q2Label').textContent = "2. Nini kinachojitokeza kwangu?";
    document.getElementById('q3Label').textContent = "3. Nini kinachonihamasisha?";
    document.getElementById('q4Label').textContent = "4. Ni nini nguvu zangu?";
    document.getElementById('q5Label').textContent = "5. Ni maeneo gani unadhani naweza kuboresha?";

    document.getElementById('q1Option1Label').textContent = "Rafiki";
    document.getElementById('q1Option2Label').textContent = "Mtu mwenye bidii";
    document.getElementById('q1Option3Label').textContent = "Mwanazuoni";

    document.getElementById('q2Option1Label').textContent = "Uwezo wangu wa mawasiliano";
    document.getElementById('q2Option2Label').textContent = "Uaminifu wangu";
    document.getElementById('q2Option3Label').textContent = "Uwezo wangu wa kutatua matatizo";

    document.getElementById('q3Option1Label').textContent = "Kwa kuwa kiongozi mzuri";
    document.getElementById('q3Option2Label').textContent = "Kwa kukaa chanya kila wakati";
    document.getElementById('q3Option3Label').textContent = "Kwa kusaidia wengine";

    document.getElementById('q4Option1Label').textContent = "Kazi ya timu";
    document.getElementById('q4Option2Label').textContent = "Usimamizi wa wakati";
    document.getElementById('q4Option3Label').textContent = "Uwezo wa kubadilika";

    document.getElementById('q5Option1Label').textContent = "Uzungumzaji wa hadhara";
    document.getElementById('q5Option2Label').textContent = "Ujuzi wa kiufundi";
    document.getElementById('q5Option3Label').textContent = "Ugawaji wa kazi";
    // Question 10: What programming languages are you proficient in?
    document.getElementById('q10Label').textContent = "**10. Ni lugha gani ninapaswa kujifunza ili kuboresha mawasiliano yangu? (Chagua zote zinazofaa)**";
    document.getElementById('q10Option1').nextElementSibling.textContent = "English";
    document.getElementById('q10Option2').nextElementSibling.textContent = "Spanish";
    document.getElementById('q10Option3').nextElementSibling.textContent = "French";
    document.getElementById('q10Option4').nextElementSibling.textContent = "Mandarin";

    // Question 11: Challenges faced in career development
    document.getElementById('q11Label').textContent = "11. Ni changamoto zipi ulizozikumbana nazo katika maendeleo yako ya kazi?";

    // Question 12: Job satisfaction rating
    document.getElementById('q12Label').textContent = "12. Unaridhika vipi na kazi yako ya sasa?";

    // Question 13: Date input for career start
    document.getElementById('q13Label').textContent = "13. Uliaza lini kazi yako ya biashara ulianza mtandaoni ?";

    // Question 14: Preferred learning method
    document.getElementById('q14Label').textContent = "14. Ni njia gani unayopendelea kujifunzia?";
    document.getElementById('q14Select').options[0].textContent = "Mafunzo Mtandaoni";
    document.getElementById('q14Select').options[1].textContent = "Vitabu";
    document.getElementById('q14Select').options[2].textContent = "Warsha";
    document.getElementById('q14Select').options[3].textContent = "Mentorship";

    // Final page: Thank you message
    document.getElementById('thankYouPage').querySelector('h2').textContent = "Asante kwa kumaliza kujibu maswali!";
    document.getElementById('thankYouPage').querySelector('p').textContent = "Majibu yako yamewasilishwa kwa mafanikio. Tunashukuru kwa muda na mrejesho wako.";
}

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
        // Question 1 - 5: Radio buttons (assuming they exist and use the correct names)
        question1: document.querySelector('input[name="question1"]:checked')?.value || null,
        question2: document.querySelector('input[name="question2"]:checked')?.value || null,
        question3: document.querySelector('input[name="question3"]:checked')?.value || null,
        question4: document.querySelector('input[name="question4"]:checked')?.value || null,
        question5: document.querySelector('input[name="question5"]:checked')?.value || null,
        
        // Question 7 & 8 & 10: Also assumed to be radio buttons
        question7: document.querySelector('input[name="question7"]:checked')?.value || null,
        question8: document.querySelector('input[name="question8"]:checked')?.value || null,
        question10: document.querySelector('input[name="question10"]:checked')?.value || null,
        
        // Question 11: Textarea input (for career challenges)
        question11: document.getElementById('q11Input')?.value || null,
        
        // Question 12: Rating radio buttons (using name "rating")
        question12: document.querySelector('input[name="rating"]:checked')?.value || null,
        
        // Question 13: Date input
        question13: document.getElementById('q13Date')?.value || null,
        
        // Question 14: Select (dropdown)
        question14: document.getElementById('q14Select')?.value || null,
        
        // Question 15: Additional comments (textarea with id "feedback")
        question15: document.getElementById('feedback')?.value || null,
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
    // Optional: Add the code to automatically close the modal after a certain time
$('#thankYouModal').on('shown.bs.modal', function () {
    setTimeout(function() {
        $('#thankYouModal').modal('hide');
    }, 3000); // Modal will close after 3 seconds

}
);
}

function sendViaEmail() {
    // For question 10: get all selected checkbox values
    const q10Nodes = document.querySelectorAll('input[name="question10"]:checked');
    let question10Answers = [];
    q10Nodes.forEach(node => {
        question10Answers.push(node.value);
    });
    const answers = {
        question1: document.querySelector('input[name="question1"]:checked').value,
        question2: document.querySelector('input[name="question2"]:checked').value,
        question3: document.querySelector('input[name="question3"]:checked').value,
        question4: document.querySelector('input[name="question4"]:checked').value,
        question5: document.querySelector('input[name="question5"]:checked').value,
        question6: document.querySelector('input[name="question6"]:checked')?.value || null,
        question7: document.querySelector('input[name="question7"]:checked').value,
        question8: document.querySelector('input[name="question8"]:checked').value,
        question10: question10Answers.join(', '),
        // Question 11: Textarea input for career challenges
        question11: document.getElementById('q11Input')?.value || '',
        // Question 12: Rating radio buttons (using name "rating")
        question12: document.querySelector('input[name="rating"]:checked')?.value || '',
        // Question 13: Date input
        question13: document.getElementById('q13Date')?.value || '',
        // Question 14: Dropdown (select)
        question14: document.getElementById('q14Select')?.value || '',
        // Question 15: Additional comments (textarea with id "feedback")
        question15: document.getElementById('feedback')?.value || '',
    };

    const subject = "Interview Questionnaire Results";
    const body = Object.entries(answers)
        .map(([q, a]) => `${q}: ${a}`)
        .join("%0A"); // %0A is a newline in URL encoding

    const email = "mchomvhellen@gmail.com"; // Replace with the email address you want to use
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
}

function sendViaWhatsApp() {
    // For question 10: get all selected checkbox values
    const q10Nodes = document.querySelectorAll('input[name="question10"]:checked');
    let question10Answers = [];
    q10Nodes.forEach(node => {
        question10Answers.push(node.value);
    });
    const answers = {
        question1: document.querySelector('input[name="question1"]:checked').value,
        question2: document.querySelector('input[name="question2"]:checked').value,
        question3: document.querySelector('input[name="question3"]:checked').value,
        question4: document.querySelector('input[name="question4"]:checked').value,
        question5: document.querySelector('input[name="question5"]:checked').value,
        question6: document.querySelector('input[name="question6"]:checked')?.value || null,
        question7: document.querySelector('input[name="question7"]:checked').value,
        question8: document.querySelector('input[name="question8"]:checked').value,
        question10: question10Answers.join(', '),
        // Question 11: Textarea input for career challenges
        question11: document.getElementById('q11Input')?.value || '',
        // Question 12: Rating radio buttons (using name "rating")
        question12: document.querySelector('input[name="rating"]:checked')?.value || '',
        // Question 13: Date input
        question13: document.getElementById('q13Date')?.value || '',
        // Question 14: Dropdown (select)
        question14: document.getElementById('q14Select')?.value || '',
        // Question 15: Additional comments (textarea with id "feedback")
        question15: document.getElementById('feedback')?.value || '',
    };

    const text = Object.entries(answers).map(([q, a]) => `${q}: ${a}`).join("%0A");

    const phoneNumber = "0718486409"; // Replace with the phone number you'd like to send the message to
    window.open(`https://wa.me/${phoneNumber}?text=${text}`);
}
