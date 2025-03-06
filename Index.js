document.addEventListener("DOMContentLoaded", () => {
    // Tafadhali hakikisha msimbo huu unasomeka baada ya DOM kupakia
    const translations = {
      en: {
        // Sections
        section1: "Section 1: Personality & Demeanor",
        section2: "Section 2: Strengths & Qualities",
        section3: "Section 3: Inspiration & Impact",
        section4: "Optional: Open-Ended Questions",
  
        // Questions
        q1: "How would you describe your general energy level?",
        q1a: "a) Very high and enthusiastic",
        q1b: "b) Moderately energetic",
        q1c: "c) Calm and composed",
        q1d: "d) Low energy/Reserved",
  
        q2: "How do you typically approach new people or situations?",
        q2a: "a) Open and outgoing",
        q2b: "b) Friendly but cautious",
        q2c: "c) Observant and thoughtful",
        q2d: "d) Hesitant or withdrawn",
  
        q3: "How would you describe your communication style?",
        q3a: "a) Direct and assertive",
        q3b: "b) Open and collaborative",
        q3c: "c) Gentle and diplomatic",
        q3d: "d) Quiet and reserved",
  
        q4: "How would you rate your level of empathy?",
        q4a: "a) Very empathetic and understanding",
        q4b: "b) Moderately empathetic",
        q4c: "c) Somewhat detached",
        q4d: "d) Not very empathetic",
  
        q5: "How do you typically handle stress or pressure?",
        q5a: "a) Calm and collected",
        q5b: "b) Generally manage well",
        q5c: "c) Sometimes struggle",
        q5d: "d) Often overwhelmed",
  
        // Section 2
        q6: "What do you think is your most noticeable positive trait?",
        q6a: "a) Enthusiasm/Optimism",
        q6b: "b) Intelligence/Wit",
        q6c: "c) Kindness/Generosity",
        q6d: "d) Determination/Resilience",
  
        q7: "What skill or talent do you think you're best known for?",
        q7a: "a) Communication/Public Speaking",
        q7b: "b) Problem-solving/Analytical Skills",
        q7c: "c) Creativity/Artistic Abilities",
        q7d: "d) Leadership/Organizational Skills",
        q7e: "e) Other:",
  
        q8: "What quality do you think makes you unique?",
        q8a: "a) Your sense of humor",
        q8b: "b) Your perspective/insights",
        q8c: "c) Your compassion/caring nature",
        q8d: "d) Your drive/ambition",
  
        // Section 3
        q9: "How do you think you inspire others?",
        q9a: "a) By motivating and encouraging them",
        q9b: "b) By setting a good example",
        q9c: "c) By offering support and guidance",
        q9d: "d) By sharing your knowledge and expertise",
  
        q10: "What kind of impact do you hope to have on the world?",
        q10a: "a) To make a significant difference",
        q10b: "b) To positively influence those around me",
        q10c: "c) To leave a lasting legacy",
        q10d: "d) To simply live a good and meaningful life",
  
        q11: "What values do you try to embody in your daily life?",
        q11a: "a) Honesty and integrity",
        q11b: "b) Kindness and compassion",
        q11c: "c) Hard work and dedication",
        q11d: "d) Creativity and innovation",
  
        // Open-Ended
        q12: "What is one thing you think people might misunderstand about you?",
        q13: "What is one thing you are most proud of?",
  
        // Submission Screen
        submitTitle: "Review & Submit Your Answers",
        emailBtn: "Submit via Email",
        whatsappBtn: "Submit via WhatsApp",
      },
      sw: {
        // Sections
        section1: "Sehemu ya 1: Tabia na Uhusika",
        section2: "Sehemu ya 2: Nguvu na Sifa",
        section3: "Sehemu ya 3: Ushawishi na Athari",
        section4: "Hiari: Maswali ya Ziada",
  
        // Questions
        q1: "Unaweza kuelezea kiwango chako cha nishati?",
        q1a: "a) Nyenyo na shauku",
        q1b: "b) Nishati ya wastani",
        q1c: "c) Tulivu na mwenye utulivu",
        q1d: "d) Nishati ndogo/enyye kujitenga",
  
        q2: "Unavyokabiliana na watu wapya au hali mpya?",
        q2a: "a) Kwa ufungufu na ujasiri",
        q2b: "b) Kwa ukaribu lakini mwangalifu",
        q2c: "c) Kwa kutazama na kufikiria",
        q2d: "d) Kwa kusita au kujiepusha",
  
        q3: "Unaelezea mfumo wako wa mawasiliano?",
        q3a: "a) Moja kwa moja na thabiti",
        q3b: "b) Wazi na shirikishi",
        q3c: "c) Polepole na kwa hekima",
        q3d: "d) Kimya na mnyenyekevu",
  
        q4: "Unafikiri kiwango chako cha huruma ni kiasi gani?",
        q4a: "a) Nina huruma nyingi na kuelewa",
        q4b: "b) Nina huruma kiasi",
        q4c: "c) Nina msimamo wa kutojali",
        q4d: "d) Sina huruma nyingi",
  
        q5: "Unavyoshughulikia mfadhaiko au shinikizo?",
        q5a: "a) Ninaendelea kwa utulivu",
        q5b: "b) Naweshi kusimamia vyema",
        q5c: "c) Wakati mwingine ninapata shida",
        q5d: "d) Mara nyingi ninazidiwa",
  
        // Section 2
        q6: "Unadhani sifa yako chanya angavu zaidi ni ipi?",
        q6a: "a) Shauku na matumaini",
        q6b: "b) Akili na utani",
        q6c: "c) Ukarimu na ukaribu",
        q6d: "d) Uamuzi na uthubutu",
  
        q7: "Unadhani ujuzi au talanta yako maarufu zaidi ni ipi?",
        q7a: "a) Mawasiliano na hotuba",
        q7b: "b) Kutatua matatizo na uchambuzi",
        q7c: "c) Ubunifu na sanaa",
        q7d: "d) Uongozi na upangaji",
        q7e: "e) Nyingine:",
  
        q8: "Unadhani sifa gani inakufanya uwe wa kipekee?",
        q8a: "a) Ucheshi wako",
        q8b: "b) Mtazamo wako na ufahamu",
        q8c: "c) Huruma na ukaribu wako",
        q8d: "d) Bidii na nia yako",
  
        // Section 3
        q9: "Unadhani unawavutia wengine vipi?",
        q9a: "a) Kwa kuwaamsha na kuwatia moyo",
        q9b: "b) Kwa kuwa mfano mzuri",
        q9c: "c) Kwa kutoa msaada na mwongozo",
        q9d: "d) Kwa kushiriki maarifa yako",
  
        q10: "Unataka kuacha athari gani ulimwenguni?",
        q10a: "a) Kutofautisha kwa kiasi kikubwa",
        q10b: "b) Kuwaathiri vyema wale walionao",
        q10c: "c) Kuacha urithi wa kudumu",
        q10d: "d) Kuishi maisha yenye maana",
  
        q11: "Thamani zipi unajaribu kuonyesha katika maisha yako?",
        q11a: "a) Uwazi na uadilifu",
        q11b: "b) Huruma na ukarimu",
        q11c: "c) Bidii na juhudi",
        q11d: "d) Ubunifu na uvumbuzi",
  
        // Open-Ended
        q12: "Kitu kimoja ambacho watu wanaweza kukuelewa vibaya?",
        q13: "Kitu gani unachofahari zaidi?",
  
        // Submission Screen
        submitTitle: "Angalia na Wasilisha Majibu Yako",
        emailBtn: "Tuma kwa Email",
        whatsappBtn: "Tuma kwa WhatsApp",
      },
    };
  
    let currentLang = "en";
    let currentQuestion = 0;
    let answers = {};
  
    // Kusanya maswali yote (question cards) katika array
    const questionCards = Array.from(document.querySelectorAll(".question-card"));
    const totalQuestions = questionCards.length;
  
    // ---------------------------
    // FUNKSHINI ZA USANIDI
    // ---------------------------
  
    // Set language na onyesha questionnaire
    window.setLanguage = function (lang) {
      currentLang = lang;
      const splash = document.getElementById("splash");
  
      // Fanya fade-out ya splash
      splash.style.transition = "opacity 0.5s ease-out";
      splash.style.opacity = "0";
  
      setTimeout(() => {
        splash.style.display = "none";
        document.getElementById("questionnaire").style.display = "block";
        window.scrollTo({ top: 0, behavior: "smooth" });
        updateTranslations();
        updateProgress();
      }, 500);
    };
  
    // Kusasisha maandishi kulingana na lugha iliyochaguliwa
    function updateTranslations() {
      document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        el.textContent = translations[currentLang][key] || "";
      });
    }
  
    // Onyesha swali kulingana na index
    function showQuestion(index) {
      questionCards.forEach((card, i) => {
        card.classList.toggle("active-question", i === index);
      });
    }
  
    // Endelea kwenda kwenye swali linalofuata
    window.nextQuestion = function () {
        console.log("Next question called. Current question:", currentQuestion);
        if (currentQuestion < totalQuestions - 1) {
          currentQuestion++;
          showQuestion(currentQuestion);
          updateProgress();
        } else {
          console.log("Reached last question, showing submission screen.");
          document.getElementById("questionnaire").style.display = "none";
          document.getElementById("submitScreen").style.display = "flex";
        }
    };
    
      
  
    // Rudi kwenye swali la nyuma
    window.previousQuestion = function () {
      if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion(currentQuestion);
        updateProgress();
      }
    };
  
    // Sasisha progress bar
    function updateProgress() {
      const progress = ((currentQuestion + 1) / totalQuestions) * 100;
      const progressBar = document.querySelector(".progress-bar");
      if (progressBar) {
        progressBar.style.width = `${progress}%`;
      }
    }
  
    // Kusanya majibu ya swali na kuunda ujumbe wa submission
    function compileAnswers() {
      return Object.entries(answers)
        .map(([q, a]) => `${translations[currentLang][q] || q}: ${a}`)
        .join("\n\n");
    }
  
    // Kutuma majibu kupitia Email
    window.submitViaEmail = function () {
      const body = compileAnswers();
      const email = "mchomvhellen@gmail.com"; // Badilisha barua pepe unayotaka
      window.location.href = `mailto:${email}?subject=${encodeURIComponent(
        translations[currentLang].submitTitle
      )}&body=${encodeURIComponent(body)}`;
    };
  
    // Kutuma majibu kupitia WhatsApp
    window.submitViaWhatsApp = function () {
      const text = compileAnswers();
      window.open(
        `https://wa.me/255744724812?text=${encodeURIComponent(text)}`,
        "_blank"
      );
    };
  
    // ---------------------------
    // USIMAMIZI WA MAJUMLA YA INPUT
    // ---------------------------
  
    // Kusimamia majibu ya radio buttons
    document.querySelectorAll('input[type="radio"]').forEach((input) => {
      input.addEventListener("change", (e) => {
        const question = e.target.name;
        const value = e.target.value;
        answers[question] = value;
  
        // Ikiwa ni swali q7 lenye chaguo la "Other", onyesha input ya ziada
        if (question === "q7") {
          if (value === "e") {
            document.getElementById("q7other").style.display = "block";
          } else {
            document.getElementById("q7other").style.display = "none";
          }
        }
      });
    });
  
    // Kusimamia input ya "Other" kwa swali q7
    const q7Other = document.getElementById("q7other");
    if (q7Other) {
      q7Other.addEventListener("input", (e) => {
        answers.q7 = `e: ${e.target.value}`;
      });
    }
  
    // Kusimamia maswali ya open-ended (textarea)
    document.querySelectorAll("textarea").forEach((textarea) => {
      textarea.addEventListener("input", (e) => {
        answers[e.target.id] = e.target.value;
      });
    });
    
  });
  