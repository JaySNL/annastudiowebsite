"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export function ManuscriptFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "Hoe lang duurt een manuscriptbeoordeling?",
      answer:
        "Voor redactierondes maximaal twee weken, maar het zou ook een week kunnen zijn. Het hangt van de drukte af. Bij een volledig redactietraject maken we samen een planning op maat.",
    },
    {
      question: "Wat is het verschil tussen een manuscriptbeoordeling en redactie?",
      answer:
        "Bij een manuscriptbeoordeling krijg je feedback op je manuscript in de vorm van een leesrapport, maar wordt de tekst zelf niet gecorrigeerd. Bij redactie worden er daadwerkelijk wijzigingen in je tekst aangebracht. Een manuscriptbeoordeling is ideaal als je wilt weten waar je staat en wat je nog kunt verbeteren voordat je aan een definitieve versie begint.",
    },
    {
      question: "Welke genres beoordeel je?",
      answer:
        "Ik beoordeel manuscripten in vrijwel alle genres, waaronder literaire fictie, thrillers, fantasy, young adult, kinderboeken en non-fictie. Door mijn brede ervaring als redacteur kan ik verschillende soorten teksten beoordelen en van passende feedback voorzien.",
    },
    {
      question: "Kan ik ook een deel van mijn manuscript laten beoordelen?",
      answer:
        "Zeker! Je ontvangt geen leesrapport, maar tools, tips, kantlijnopmerkingen en een gericht advies waar je mee verder kunt. Dit is een effectieve manier om feedback te krijgen voordat je het hele manuscript afrondt.",
    },
    {
      question: "Wat gebeurt er na de manuscriptbeoordeling?",
      answer:
        "Na de beoordeling ontvang je een gedetailleerd leesrapport met feedback. Bij de uitgebreide pakketten volgt een persoonlijk gesprek om de feedback door te nemen. Daarna kun je zelf aan de slag met de verbeterpunten, of je kunt ervoor kiezen om verder te gaan met een redactietraject waarin ik je blijf begeleiden bij het herschrijven.",
    },
    {
      question: "Helpt een manuscriptbeoordeling bij het vinden van een uitgever?",
      answer:
        "Een professionele manuscriptbeoordeling kan je manuscript aanzienlijk verbeteren! Met concrete tips, tools en persoonlijke feedback vergroot je je kansen bij uitgevers. Daarnaast kan ik je adviseren over het schrijven van een goede pitch en het benaderen van uitgevers. Let wel: er is geen garantie voor publicatie, maar het verhoogt absoluut je kansen.",
    },
  ]

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Veelgestelde vragen over manuscriptbeoordeling
          </h2>
          <p className="text-lg text-muted-foreground">
            Antwoorden op de meest gestelde vragen over het laten beoordelen van je manuscript.
          </p>
        </div>

        <div className="max-w-3xl mx-auto divide-y divide-border rounded-xl border border-border bg-card overflow-hidden">
          {faqs.map((faq, index) => (
            <div key={index} className="group">
              <button
                className="flex w-full items-center justify-between p-6 text-left transition-all"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="font-medium text-foreground">{faq.question}</h3>
                <ChevronDown
                  className={`h-5 w-5 text-muted-foreground transition-transform ${openIndex === index ? "rotate-180" : ""
                    }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-96 pb-6 px-6" : "max-h-0"
                  }`}
              >
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
