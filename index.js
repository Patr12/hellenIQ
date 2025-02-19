document.addEventListener("DOMContentLoaded", () => {
  const translations = {
    // translations here...
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

      // Hapa tunasajili matukio ya radio na vitufe vya next/previous
      setupEventListeners();
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
    if (currentQuestion < totalQuestions - 1) {
      currentQuestion++;
      showQuestion(currentQuestion);
      updateProgress();
    } else {
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

  // Kusimamia matukio ya radio buttons
  function setupEventListeners() {
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
  }
});
