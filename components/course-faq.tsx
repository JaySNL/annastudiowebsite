"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export function CourseFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "Heb ik schrijfervaring nodig?",
      answer:
        "Nee, je hebt geen eerdere schrijfervaring nodig. De begeleiding is geschikt voor zowel beginners als schrijvers met enige ervaring. We starten vanaf de basis en bouwen stap voor stap op naar een compleet verhaal.",
    },
    {
      question: "Hoe werkt de planning van de sessies?",
      answer:
        "De 6 sessies van 1 uur plannen we in overleg. Je bepaalt zelf het tempo en de frequentie. Tussen de sessies werk je zelfstandig aan je tekst en ontvang je schriftelijke feedback.",
    },
    {
      question: "Is de begeleiding online of op locatie?",
      answer:
        "Beide is mogelijk! We bespreken samen wat het beste bij jou past. Online sessies bieden flexibiliteit, terwijl persoonlijke ontmoetingen soms net dat extra kunnen geven.",
    },
    {
      question: "Wat krijg ik na afloop?",
      answer:
        "Je hebt een afgerond kort verhaal van circa 1.500 woorden waar je trots op kunt zijn. Daarnaast heb je waardevolle inzichten gekregen in perspectief, structuur, stijl en de kunst van het weglaten.",
    },
    {
      question: "Is de begeleiding ook geschikt voor bepaalde genres?",
      answer:
        "Absoluut! De technieken die we behandelen zijn toepasbaar op alle genres: literair, spannend, fantasy, realistisch, experimenteel. Je bent vrij om in het genre te schrijven dat jou aanspreekt.",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">Veelgestelde vragen</h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-border rounded-lg overflow-hidden bg-background shadow-sm">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-primary/5 transition-colors"
                >
                  <span className="font-semibold text-foreground">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-primary flex-shrink-0 transition-transform duration-200 ${openIndex === index ? "transform rotate-180" : ""
                      }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 py-4 bg-primary/5 border-t border-border">
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl text-center">
            <p className="text-lg text-foreground mb-4">Heb je nog andere vragen?</p>
            <a href="/#contact" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
              Neem contact op via het contactformulier
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
