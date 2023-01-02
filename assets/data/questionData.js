// this data is used for the quiz, containing the questions and answers

export const questionAnswer = [
  {
    question: "Frage 1/3: Wie lange darf dein Film heute dauern?",
    questionStyling: "short",
    answerOptions: [
      {
        answer: "Nur kurz",
        value: {
          min: 0,
          max: 99,
        },
        isSelected: false,
      },
      {
        answer: "Normale Lauflänge",
        value: {
          min: 100,
          max: 139,
        },
        isSelected: false,
      },
      {
        answer: "Ich habe Zeit",
        value: {
          min: 140,
          max: 9999,
        },
        isSelected: false,
      },
      {
        answer: "Ist mir egal",
        value: {
          min: 0,
          max: 9999,
        },
        isSelected: false,
      },
    ],
  },
  {
    question: "Frage 2/3: Wie alt darf dein Film sein?",
    questionStyling: "short",
    answerOptions: [
      {
        answer: "Oldies",
        value: {
          min: 0,
          max: 1987,
        },
        isSelected: false,
      },
      {
        answer: "Moderne Klassiker",
        value: {
          min: 1988,
          max: 2010,
        },
        isSelected: false,
      },
      {
        answer: "Aus der heutigen Zeit",
        value: {
          min: 2011,
          max: 9999,
        },
        isSelected: false,
      },
      {
        answer: "Ist mir egal",
        value: {
          min: 0,
          max: 9999,
        },
        isSelected: false,
      },
    ],
  },
  {
    question:
      "Frage 3/3: Welche Stimmung oder Gefühl soll der Film übermitteln?",
    questionStyling: "mood",
    answerOptions: [
      {
        answer: "😀 Unterhaltsame Filme",
        value: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      },
      {
        answer: "🥰 Feelgood Filme",
        value: [10, 11, 12, 13, 14, 15, 16, 17, 9, 18, 19],
      },
      {
        answer: "😥 Bewegende Filme",
        value: [20, 21, 22, 23, 24, 25, 26, 27, 28],
      },
      {
        answer: "😌 Entspannte Filme",
        value: [29, 30, 11, 16],
      },
    ],
  },
];
