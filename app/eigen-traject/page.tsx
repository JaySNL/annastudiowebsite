"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { CalButton } from "@/components/cal-button"
import { CheckCircle, ArrowRight } from "lucide-react"
import Image from "next/image"

const phases = [
  {
    title: "Fase 1 — Fundament",
    items: [
      "Analyse van de eerste hoofdstukken",
      "Uitgebreid gesprek over thema's, stijl en richting",
      "Bepalen waar het manuscript inhoudelijk sterker kan worden",
    ],
  },
  {
    title: "Fase 2 — Schrijfproces",
    items: [
      "Tussentijdse feedback",
      "Kantlijnnotities",
      "Begeleiding bij herschrijven",
      "Verdieping van personages, thematiek of spanningsopbouw",
      "Extra sessies wanneer het manuscript daarom vraagt",
    ],
  },
  {
    title: "Fase 3 — Redactie",
    items: [
      "Volledige inhoudelijke redactieronde",
      "Stijlverfijning",
      "Ritme, structuur en emotionele werking aanscherpen",
      "Persoonlijke toelichting bij alle feedback",
    ],
  },
  {
    title: "Fase 4 — Richting publicatie",
    items: [
      "Persklaarmaken",
      "Eindcorrectie",
      "Hulp bij positionering",
      "Advies over selfpublishing of traditionele uitgeefmogelijkheden",
    ],
  },
]

const trajectItems = [
  "Persoonlijke schrijfsessies",
  "Videobellen",
  "Manuscriptbesprekingen",
  "Inhoudelijke redactie",
  "Stijlontwikkeling",
  "Structuur- en spanningsbegeleiding",
  "Herschrijfrondes",
  "Synopsisontwikkeling",
  "Persklaarmaken",
  "Eindcorrectie",
  "Publicatieadvies",
  "Begeleiding richting selfpublishing of uitgeverij",
]

export default function EigenTraject() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Eigen traject", href: "/eigen-traject" },
          ]}
        />

        {/* Hero */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto">
              <h1 className="fluid-h2 text-foreground mb-6 text-center">
                <span className="gradient-text">Eigen traject</span> — persoonlijke schrijfbegeleiding op maat
              </h1>

              <div className="glass rounded-2xl p-8 shadow-soft border border-primary/10 space-y-4 text-muted-foreground">
                <p>
                  Sommige manuscripten hebben niet genoeg aan één redactieronde. Soms vraagt een boek om iemand die met je meedenkt vanaf het eerste idee tot het moment waarop het manuscript écht klaar is om gepubliceerd te worden.
                </p>
                <p>
                  Daarom kiezen steeds meer schrijvers voor een eigen traject bij Anna&apos;s Studio: een intensieve, persoonlijke samenwerking waarin we samen bouwen aan jouw boek, jouw stijl en jouw schrijverschap.
                </p>
                <p className="font-medium text-foreground">
                  Geen standaardpakket. Geen vast format. Maar begeleiding die volledig wordt afgestemd op wat jouw manuscript nodig heeft.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What we look at */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div className="space-y-4 text-muted-foreground">
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Wat maakt dit traject bijzonder?</h2>
                  <p>
                    Sommige auteurs lopen vast op structuur. Anderen weten precies wat ze willen vertellen, maar vinden de juiste vorm niet. Soms ontbreekt er spanning, soms juist focus, soms moet een tekst literair sterker worden of persoonlijker durven zijn.
                  </p>
                  <p>
                    Bij Anna&apos;s Studio kijken we niet alleen naar spelling of stijl, maar ook naar de psychologische en filosofische lagen onder een tekst. Waarom werkt een scène niet? Waarom blijft een hoofdstuk &quot;veilig&quot;? Hoe bouw je spanning op zonder het uit te leggen? Hoe geef je een manuscript meer diepte, ritme en emotionele resonantie?
                  </p>
                  <p>
                    Door mijn achtergrond in psychologie én mijn ervaring binnen de uitgeefwereld begeleid ik auteurs niet alleen als redacteur, maar ook als creatieve sparringpartner. Juist die combinatie maakt een eigen traject zo waardevol.
                  </p>
                </div>
                <div className="glass rounded-2xl overflow-hidden shadow-soft border border-primary/10">
                  <Image
                    src="/images/anna/anna-3.jpg"
                    alt="Anna Strijbos"
                    width={600}
                    height={900}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What a traject can include */}
        <section className="py-16 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-8 text-center">Een traject kan bestaan uit</h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {trajectItems.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 glass rounded-xl p-4 shadow-soft border border-primary/10">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-center text-muted-foreground mt-6 text-sm">
                En soms blijkt onderweg dat er een extra sessie nodig is, of juist een extra redactieronde. Dan doen we dat gewoon.
              </p>
            </div>
          </div>
        </section>

        {/* Phases */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-2 text-center">
                Een voorbeeld van hoe een traject eruit kan zien
              </h2>
              <p className="text-center text-muted-foreground mb-12 text-sm">(ieder manuscript vraagt om een andere aanpak)</p>

              <div className="grid sm:grid-cols-2 gap-6">
                {phases.map((phase, i) => (
                  <div key={i} className="glass rounded-2xl p-6 shadow-soft border border-primary/10">
                    <h3 className="text-lg font-bold text-foreground mb-4">{phase.title}</h3>
                    <ul className="space-y-2">
                      {phase.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Bottom note + CTA */}
        <section className="py-16 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="glass rounded-2xl p-8 shadow-soft border border-primary/10 space-y-4 text-muted-foreground mb-8">
                <p>
                  Geen enkel boek is hetzelfde. Een roman vraagt iets anders dan een memoir. Een poëziebundel vraagt iets anders dan een filosofisch non-fictieboek. Daarom wordt ieder traject volledig op maat samengesteld.
                </p>
                <p>
                  Wat altijd hetzelfde blijft, is de persoonlijke aandacht. Ik werk bewust met een beperkt aantal trajecten tegelijk, zodat er ruimte blijft voor verdieping, betrokkenheid en kwaliteit.
                </p>
                <p className="font-medium text-foreground">
                  Je hoeft het schrijfproces niet alleen te dragen.
                </p>
              </div>

              <div className="text-center">
                <CalButton
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary-hover transition-all duration-300 shadow-md hover:shadow-lg text-lg cursor-pointer"
                >
                  Plan een kennismakingsgesprek
                  <ArrowRight className="h-5 w-5" />
                </CalButton>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
