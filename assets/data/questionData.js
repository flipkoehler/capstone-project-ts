// this data is used for the quiz, containing the questions and answers

export const questionAnswer = [
  {
    question: "Wie lange darf dein Film heute dauern?",
    imagePath: "/images/quiz_time_movieflip.svg",
    answerOptions: [
      {
        id: 1,
        answer: "Nur kurz",
        information: "Filme mit besonders kurzer Laufzeit",
        value: {
          min: 0,
          max: 99,
        },
        checked: false,
      },
      {
        id: 2,
        answer: "Normale Lauflänge",
        information:
          "Der klassiche Durchschnitt. Nicht zu lang - nicht zu kurz",
        value: {
          min: 100,
          max: 139,
        },
        checked: false,
      },
      {
        id: 3,
        answer: "Ich habe Zeit",
        information: "Filme mit Überlänge",
        value: {
          min: 140,
          max: 9999,
        },
        checked: false,
      },
      {
        id: 4,
        answer: "Ist mir egal",
        information: "keine Beschränkung bei der Suche",
        value: {
          min: 0,
          max: 9999,
        },
        checked: false,
      },
    ],
  },
  {
    question: "Wie alt darf dein Film sein?",
    imagePath: "/images/quiz_generation_movieflip.svg",
    answerOptions: [
      {
        id: 5,
        answer: "Oldies",
        information:
          "Perlen der Filmgeschichte. Manchmal auch in Schwarz weiß, aber gut geeignet für die heutige Zeit",
        value: {
          min: 0,
          max: 1987,
        },
        checked: false,
      },
      {
        id: 6,
        answer: "Moderne Klassiker",
        information: "Wunderbare Filme, die nie verstauben",
        value: {
          min: 1988,
          max: 2010,
        },
        checked: false,
      },
      {
        id: 7,
        answer: "Aus der heutigen Zeit",
        information: "Meisterwerke aus den letzten Jahren",
        value: {
          min: 2011,
          max: 9999,
        },
        checked: false,
      },
      {
        id: 8,
        answer: "Ist mir egal",
        information: "keine Beschränkung bei der Suche",
        value: {
          min: 0,
          max: 9999,
        },
        checked: false,
      },
    ],
  },
  {
    question: "Welche Stimmung oder Gefühl soll der Film übermitteln?",
    imagePath: "/images/quiz_mood_movieflip.svg",
    answerOptions: [
      {
        id: 9,
        answer: "Unterhaltsame Filme 😀",
        value: [2, 3, 5, 6, 8, 9],
        checked: false,
      },
      {
        id: 10,
        answer: "Feelgood Filme 🥰",
        value: [10, 11, 12, 13, 16, 34],
        checked: false,
      },
      {
        id: 11,
        answer: "Bewegende Filme 😥",
        value: [4, 7, 9, 20, 21, 22, 24, 26],
        checked: false,
      },
      {
        id: 12,
        answer: "Entspannte Filme 😌",
        value: [27, 28, 11, 13, 16],
        checked: false,
      },
      {
        id: 13,
        answer: "Mind blowing 🤯",
        value: [3, 6, 9, 22, 25, 29, 30],
        checked: false,
      },
      {
        id: 14,
        answer: "Spannende Filme 🫣",
        value: [6, 9, 31, 32, 33],
        checked: false,
      },
    ],
  },
  {
    question: "Mit wem möchtest du den Film schauen?",
    imagePath: "/images/quiz_friends_movieflip.svg",
    answerOptions: [
      {
        id: 15,
        answer: "Ich schaue den Film alleine",
        information: "Es werden alle Filme angezeigt",
        value: 1,
        checked: false,
      },
      {
        id: 16,
        answer: "Zusammen mit Freunden",
        information: "Ihr könnt zwischendurch auch mal quatschen",
        value: 3,
        checked: false,
      },
      {
        id: 17,
        answer: "Mit meinem Date",
        information: "Es ist okay wenn ihr das Ende verpasst...",
        value: 2,
        checked: false,
      },
      {
        id: 18,
        answer: "Mit Kindern",
        information: "Kinderfreunliche Inhalte",
        value: 4,
        checked: false,
      },
      {
        id: 19,
        answer: "Mit meiner Familie",
        information: "weniger nackte Haut, weniger unangenehme Situationen",
        value: 5,
        checked: false,
      },
    ],
  },
];
