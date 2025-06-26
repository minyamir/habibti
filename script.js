
    const quiz = [
      {
        question: "How was your week?",
        answers: [
          { text: "Amazing, I crushed my goals!", feedback: "Awesome! Keep that energy alive 💥" },
          { text: "Pretty good, made progress.", feedback: "Great job! Consistency wins 🏆" },
          { text: "I'm really glad, especially I am get in my work", feedback: "That’s true strength. habibti, Keep pushing! 💪" },
          { text: "Could be better, but I’m trying.", feedback: "Every step counts. Believe in yourself 🌟" },
          { text: "I'm still stressed, I'm stuck!", feedback: "DON'T worry, we will fix it. 💥" }
        ]
      },
      {
        question: "What motivates you the most?",
        answers: [
          { text: "Becoming the best student I can be.", feedback: "Ambition is the key to success! 🚀" },
          { text: "Making my loved ones proud.", feedback: "Love is the strongest motivator ❤️" },
          { text: "Challenging myself every day.", feedback: "Growth is in the challenge! 🔥" },
          { text: "Future opportunities and dreams.", feedback: "Your dreams are worth fighting for 🌈" },
        ]
      },
      {
        question: "How do you prepare for your competition?",
        answers: [
          { text: "Studying hard every day.", feedback: "Hard work always pays off! 📚" },
          { text: "Practicing with friends.", feedback: "Teamwork makes dreams work! 🤝" },
          { text: "Taking breaks to stay fresh.", feedback: "Balance is essential for success ⚖️" },
          { text: "Visualizing my victory.", feedback: "Believe it, and it’s already yours! 🏅" },
        ]
      },
      {
        question: "Habibti, Did you miss me?",
        answers: [
          { text: "Yes, so much!", feedback: "Aww 🥹 You're the best! 💛" },
          { text: "Every single second.", feedback: "That’s loyalty! 🫶" },
          { text: "I couldn’t stop thinking of you.", feedback: "That’s deep and sweet 💖" },
          { text: "Yes, now let’s shine together!", feedback: "so did  i,Let’s do it together" },
          { text: "NO, I only see my goal.", feedback: "ESHI 😢😔😔😔😔😔😔" },
        ]
      },
    ];

    const questionEl = document.getElementById('question');
    const answersEl = document.getElementById('answers');
    const feedbackEl = document.getElementById('feedback');
    const nextBtn = document.getElementById('nextBtn');
    const finalMsg = document.getElementById('finalMessage');

    let currentQuestion = 0;
    let answered = false;

    function showQuestion(index) {
      answered = false;
      feedbackEl.textContent = '';
      nextBtn.style.display = 'none';
      finalMsg.style.display = 'none';
      questionEl.style.display = 'block';
      answersEl.style.display = 'block';
      feedbackEl.style.display = 'block';

      questionEl.textContent = quiz[index].question;
      answersEl.innerHTML = '';

      quiz[index].answers.forEach((ans) => {
        const btn = document.createElement('button');
        btn.classList.add('answerBtn');
        btn.textContent = ans.text;
        btn.onclick = () => {
          if (answered) return;
          answered = true;
          feedbackEl.textContent = ans.feedback;
          nextBtn.style.display = 'inline-block';
        };
        answersEl.appendChild(btn);
      });
    }

    nextBtn.addEventListener('click', () => {
      currentQuestion++;
      if (currentQuestion >= quiz.length) {
        questionEl.style.display = 'none';
        answersEl.style.display = 'none';
        feedbackEl.style.display = 'none';
        nextBtn.style.display = 'none';
        finalMsg.style.display = 'block';
      } else {
        showQuestion(currentQuestion);
      }
    });

    showQuestion(currentQuestion);
  