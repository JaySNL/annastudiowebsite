export const pricing = {
  inhoudelijk: {
    label: "Inhoudelijke redactieronde",
    base: 100,
    perThousand: 12,
    display: "Vanaf €100",
    displaySub: "daarna €12,- per 1000 woorden",
    displayFull: "€100 vast tarief, daarna vanaf €12,- per 1000 woorden",
  },
  inhoudelijkSpelling: {
    label: "Inhoudelijk + spelling",
    perThousand: 16,
    display: "€16,-",
    displaySub: "per 1000 woorden",
  },
  persklaar: {
    label: "Persklaarmaken",
    perThousand: 15,
    display: "€15,-",
    displaySub: "per 1000 woorden",
  },
  eindcorrectie: {
    label: "Eindcorrectie",
    perThousand: 7,
    display: "€7,-",
    displaySub: "per 1000 woorden",
  },
  eigenTraject: {
    label: "Eigen traject",
    display: "Op aanvraag",
    displaySub: "",
  },
  advies60: {
    label: "60 min advies",
    price: 135,
    display: "€135",
    displaySub: "Exclusief btw",
  },
  advies90: {
    label: "90 min advies",
    price: 195,
    display: "€195",
    displaySub: "Exclusief btw",
  },
} as const
