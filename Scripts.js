const translations = {
    en: {
        welcome: "Welcome! Please choose language",
        questions: [
            {
                type: "checkbox",
                question: "Which words describe me? (Select up to 3)",
                options: ["Kind", "Hardworking", "Funny", "Intelligent", "Reserved", "Outgoing", "Honest", "Independent"],
                max: 3
            },
            // Add other questions
            { // Q2
                type: "dropdown",
                question: "What is the most noticeable trait about me?",
                options: [
                    "Confidence and leadership skills",
                    "Sense of humor",
                    "Listening and support",
                    "Creativity and problem-solving",
                    "Strong opinions and assertiveness",
                    "Patience and understanding",
                    "Other"
                ],
                other: true
            },
            { // Q3
                type: "dropdown",
                question: "What is something I do that people easily remember?",
                options: [
                    "The way I express myself",
                    "My acts of kindness or support",
                    "My determination",
                    "My ability to bring people together",
                    "My honesty",
                    "Other"
                ],
                other: true
            },
            { // Q4
                type: "dual-checkbox",
                question: "Which traits best describe both my strengths and weaknesses?",
                sections: [
                    {
                        title: "Strengths (Choose up to 2)",
                        options: [
                            "Loyal and supportive",
                            "Hardworking and focused",
                            "Confident and assertive",
                            "Honest and straightforward",
                            "Friendly and social"
                        ],
                        max: 2
                    },
                    {
                        title: "Weaknesses (Choose up to 2)",
                        options: [
                            "Too blunt or direct",
                            "Too hard on myself",
                            "Impatient or frustrated",
                            "Overthinks too much",
                            "Struggles with boundaries"
                        ],
                        max: 2
                    }
                ],
                other: true
            },
            { // Q5
                type: "checkbox",
                question: "How have I potentially inspired you?",
                options: [
                    "Demonstrating perseverance",
                    "Showing new way of thinking",
                    "Encouraging goals",
                    "Providing support",
                    "Setting positive example",
                    "Not inspired"
                ],
                other: true
            },
            { // Q6
                type: "textarea",
                question: "In what areas do you think I excel?"
            },
            { // Q7
                type: "textarea",
                question: "In what areas do you think I should improve?"
            },
            { // Q8
                type: "textarea",
                question: "Anything else you would like to share?"
            }
        ],
        prev: "Previous",
        next: "Next",
        submit: "Submit",
        thankYou: "Thank you for your feedback!",
        completion: "Response submitted successfully"
    },
    sw: {
        welcome: "Karibu! Tafadhali chagua lugha",
        questions: [
            {
                type: "checkbox",
                question: "Ni maneno gani yanakufafanua? (Chagua hadi 3)",
                options: ["Mwenye huruma", "Mwenye bidii", "Mcheshi", "Mwenye akili", "Mnyenyekevu", "Mwenye mshikamano", "Mwaminifu", "Mwenye kujitegemea"],
                max: 3
            },
            { // Q2
                type: "dropdown",
                question: "Ni sifa gani inanigawia zaidi?",
                options: [
                    "Ujasiri na uongozi",
                    "Ucheshi na kuburudisha",
                    "Kusikiliza na kusaidia",
                    "Ubunifu na utatuzi matatizo",
                    "Msimamo imara na uthubutu",
                    "Uvumilivu na uelewa",
                    "Nyingine"
                ],
                other: true
            },
            { // Q3
                type: "dropdown",
                question: "Kitu gani ninachofanya ambacho hutukumbuka kwa urahisi?",
                options: [
                    "Njia ninavyojieleza",
                    "Matendo ya huruma",
                    "Uamuzi na kutokata tamaa",
                    "Kuleta watu pamoja",
                    "Uwazi na uaminifu",
                    "Nyingine"
                ],
                other: true
            },
            { // Q4
                type: "dual-checkbox",
                question: "Ni sifa zipi zinainifafanua kwa nguvu na udhaifu?",
                sections: [
                    {
                        title: "Nguvu (Chagua hadi 2)",
                        options: [
                            "Mwaminifu na msaada",
                            "Bidii na lengo",
                            "Ujasiri na uthubutu",
                            "Uwazi na moja kwa moja",
                            "Urafiki na mshikamano"
                        ],
                        max: 2
                    },
                    {
                        title: "Udhaifu (Chagua hadi 2)",
                        options: [
                            "Kuwahi kuwa mbaya",
                            "Kujinyima sana",
                            "Kukosa uvumilivu",
                            "Kufikiria kupita kiasi",
                            "Matatizo ya mipaka"
                        ],
                        max: 2
                    }
                ],
                other: true
            },
            { // Q5
                type: "checkbox",
                question: "Umehamasishwaje na mimi?",
                options: [
                    "Kuonyesha uvumilivu",
                    "Kuonyesha njia mpya",
                    "Kutia moyo kwenye malengo",
                    "Kutoa msaada",
                    "Kuwa mfano mzuri",
                    "Sijihamisishwa"
                ],
                other: true
            },
            { // Q6
                type: "textarea",
                question: "Je, ninatofautiana kwa vipi?"
            },
            { // Q7
                type: "textarea",
                question: "Je, ninapaswa kuboresha katika nyanja zipi?"
            },
            { // Q8
                type: "textarea",
                question: "Je, kuna kitu kingine ungependa kushiriki?"
            }

            
            // Add other questions
        ],
        prev: "Nyuma",
        next: "Mbele",
        submit: "Tuma",
        thankYou: "Asante kwa maoni yako!",
        completion: "Maoni yamepokelewa kikamilifu"
    }
};

let currentStep = 0;
let selectedLanguage = 'en';
let formData = {};

function selectLanguage(lang) {
    selectedLanguage = lang;
    document.getElementById('splash').style.display = 'none';
    document.querySelector('.container').style.display = 'block';
    initializeForm();
    updateUI();
}


// Update initializeForm function
function initializeForm() {
    const form = document.getElementById('feedbackForm');
    form.innerHTML = '';
    
    translations[selectedLanguage].questions.forEach((q, index) => {
        const step = document.createElement('div');
        step.className = `form-step ${index === 0 ? 'active' : ''}`;
        
        let html = `<div class="question"><h3>${q.question}</h3>`;
        
        if (q.type === 'dual-checkbox') {
            q.sections.forEach((section, sectionIndex) => {
                html += `<div class="subsection">
                            <h4>${section.title}</h4>
                            ${section.options.map(opt => `
                                <label>
                                    <input type="checkbox" name="q${index}_s${sectionIndex}" value="${opt}">
                                    ${opt}
                                </label><br>
                            `).join('')}
                         </div>`;
            });
        }
        else if (q.type === 'checkbox') {
            html += q.options.map(opt => `
                <label>
                    <input type="checkbox" name="q${index}" value="${opt}">
                    ${opt}
                </label><br>
            `).join('');
        }
        else if (q.type === 'dropdown') {
            html += `<select name="q${index}">`;
            q.options.forEach(opt => {
                html += `<option value="${opt}">${opt}</option>`;
            });
            html += `</select>`;
        }
        else if (q.type === 'textarea') {
            html += `<textarea name="q${index}" rows="3"></textarea>`;
        }
        
        if (q.other) {
            html += `<input type="text" name="q${index}_other" placeholder="Other...">`;
        }
        
        html += `</div>`;
        step.innerHTML = html;
        form.appendChild(step);
    });
    
    updateUI();
    updateProgress();
}

function updateUI() {
    document.getElementById('welcome-text').textContent = translations[selectedLanguage].welcome;
    document.getElementById('prevBtn').textContent = translations[selectedLanguage].prev;
    document.getElementById('nextBtn').textContent = 
        currentStep === translations[selectedLanguage].questions.length - 1 
        ? translations[selectedLanguage].submit 
        : translations[selectedLanguage].next;
}

function updateProgress() {
    const progress = (currentStep + 1) / translations[selectedLanguage].questions.length * 100;
    document.getElementById('progress').style.width = `${progress}%`;
    document.getElementById('progressValue').textContent = `${Math.round(progress)}%`;
}

// Update validation function
function validateStep() {
    const currentQuestion = translations[selectedLanguage].questions[currentStep];
    let isValid = true;

    if (currentQuestion.type === 'dual-checkbox') {
        currentQuestion.sections.forEach((section, sectionIndex) => {
            const inputs = document.querySelectorAll(`input[name="q${currentStep}_s${sectionIndex}"]:checked`);
            if (inputs.length > section.max) {
                showError(translations[selectedLanguage].errors.maxSelect.replace('{max}', section.max));
                isValid = false;
            }
        });
    }
    else if (currentQuestion.required) {
        // Add required validation logic
    }

    return isValid;
}

function showError(message) {
    const errorEl = document.createElement('div');
    errorEl.className = 'error';
    errorEl.textContent = message;
    document.querySelector('.active .question').appendChild(errorEl);
    setTimeout(() => errorEl.remove(), 3000);
}

function nextStep() {
    if (!validateStep()) return;
    
    if (currentStep < translations[selectedLanguage].questions.length - 1) {
        currentStep++;
        showStep(currentStep);
    } else {
        submitForm();
    }
}

function previousStep() {
    if (currentStep > 0) {
        currentStep--;
        showStep(currentStep);
    }
}

function showStep(step) {
    document.querySelectorAll('.form-step').forEach((el, index) => {
        el.classList.toggle('active', index === step);
    });
    
    updateUI();
    updateProgress();
}

function submitForm() {
    // Collect form data
    const formElements = document.getElementById('feedbackForm').elements;
    formData = {};
    
    Array.from(formElements).forEach(element => {
        if (element.name) {
            if (element.type === 'checkbox') {
                formData[element.name] = formData[element.name] || [];
                if (element.checked) formData[element.name].push(element.value);
            } else {
                formData[element.name] = element.value;
            }
        }
    });

    // Send via Email
    const emailBody = Object.entries(formData)
        .map(([key, value]) => `${key}: ${Array.isArray(value) ? value.join(', ') : value}`)
        .join('\n');
    
    window.location.href = `mailto:mchomvhellen@gmail.com?subject=Feedback&body=${encodeURIComponent(emailBody)}`;

    // Send via WhatsApp
    const whatsappMessage = encodeURIComponent(emailBody);
    window.open(`https://wa.me/+255744724812?text=${whatsappMessage}`);

    // Show completion screen
    document.querySelector('.container').style.display = 'none';
    document.getElementById('completion').style.display = 'flex';
    document.getElementById('thankYou').textContent = translations[selectedLanguage].thankYou;
    document.getElementById('completionMsg').textContent = translations[selectedLanguage].completion;
}

// Initialize first step
initializeForm();