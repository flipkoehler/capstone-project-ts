// this data is used for the quiz, containing the questions and answers

export const questionAnswer = [
  {
    question: "Frage 1/2: Wie lange darf dein Film heute dauern?",
    answerOptions: [
      {
        answer: "Nur kurz",
        value: [
          {
            min: 0,
            max: 99,
          },
        ],
      },
      {
        answer: "Normale Lauflänge",
        value: [
          {
            min: 100,
            max: 139,
          },
        ],
      },
      {
        answer: "Ich habe Zeit",
        value: [
          {
            min: 140,
            max: 9999,
          },
        ],
      },
      {
        answer: "Ist mir egal",
        value: [
          {
            min: 0,
            max: 9999,
          },
        ],
      },
    ],
  },
  {
    question: "Frage 2/2: Wie alt darf dein Film sein?",
    answerOptions: [
      {
        answer: "Oldies",
        value: [
          {
            min: 0,
            max: 1987,
          },
        ],
      },
      {
        answer: "Moderne Klassiker",
        value: [
          {
            min: 1988,
            max: 2010,
          },
        ],
      },
      {
        answer: "Aus der heutigen Zeit",
        value: [
          {
            min: 2011,
            max: 9999,
          },
        ],
      },
      {
        answer: "Ist mir egal",
        value: [
          {
            min: 0,
            max: 9999,
          },
        ],
      },
    ],
  },
  {
    question: "Frage3",
    answerOptions: [
      { answer: "x", value: "x" },
      { answer: "x", value: "x" },
      { answer: "x", value: "x" },
      { answer: "x", value: "x" },
    ],
  },
  {
    question: "Frage4",
    answerOptions: [
      { answer: "x", value: "x" },
      { answer: "x", value: "x" },
      { answer: "x", value: "x" },
      { answer: "x", value: "x" },
    ],
  },
];
