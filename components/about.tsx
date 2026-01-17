"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Award, Briefcase, BookOpen, Sparkles, ExternalLink } from "lucide-react"

interface TimelineItem {
  year: string
  title: string
  description: string
  icon: React.ReactNode
}

function TimelineCard({ item, index }: { item: TimelineItem; index: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return (
    <div
      ref={ref}
      className={`relative transition-all duration-700 ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex gap-4 group">
        {/* Icon */}
        <div className="flex-shrink-0">
          <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors shadow-soft">
            {item.icon}
          </div>
        </div>

        {/* Content */}
        <div className="flex-grow pb-8">
          <div className="glass rounded-xl p-6 shadow-soft hover:shadow-lifted transition-all duration-300 border border-primary/10">
            <span className="text-sm font-semibold text-primary">{item.year}</span>
            <h3 className="text-xl font-bold text-foreground mt-1 mb-2">{item.title}</h3>
            <p className="text-muted-foreground">{item.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export function About() {
  const timeline: TimelineItem[] = [
    {
      year: "Heden",
      title: "Schrijven Online & Freelance Redactie",
      description: "Manuscriptbeoordelingen, schrijfopdrachten begeleiden en freelance (eind)redacteur en schrijver",
      icon: <Briefcase className="h-5 w-5 text-primary" />,
    },
    {
      year: "Recent",
      title: "Atlas Contact",
      description:
        "Stage bij uitgeverij Atlas Contact, met focus op manuscriptenbeoordeling, fondsvorming en auteur-uitgever interactie",
      icon: <BookOpen className="h-5 w-5 text-primary" />,
    },
    {
      year: "Publicaties",
      title: "Literaire Werken",
      description:
        "Diverse publicaties in Lezenswaardig, Blind, Phronèsis en Schrijven Magazine. Werkend aan novelle en prentenboek",
      icon: <Award className="h-5 w-5 text-primary" />,
    },
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Over Anna Strijbos</span>
            </div>

            <h2 className="fluid-h2 text-foreground mb-4">
              <span className="gradient-text">Professioneel Schrijver</span> & Redacteur
            </h2>
            <p className="fluid-p text-muted-foreground max-w-3xl mx-auto">📖 Schrijver | Redacteur | Schrijfcoach</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Story */}
            <div className="space-y-6">
              <div className="glass rounded-2xl p-8 shadow-soft border border-primary/10">
                <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Mijn Verhaal</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Ik ben Anna Strijbos, geboren in 2001 in Heemstede en woonachtig in Haarlem. Toen ik zeventien was, begon ik met het schrijven van een autobiografie. Ik was lange tijd ziek geweest en kampte met mentale klachten, en voelde de behoefte om daar woorden aan te geven.
                  </p>
                  <p>
                    Met mijn eerste versie stapte ik naar een freelance redacteur. Die maakte duidelijk dat er nog veel aan het manuscript moest gebeuren; iets wat ik toen als confronterend en pijnlijk ervoer, maar wat achteraf een keerpunt bleek. In plaats van te stoppen, besloot ik me te verdiepen in schrijven en redactie. Ik begon verschillende genres te lezen en analyseren, sloot me een jaar later aan bij Schrijven Magazine om feedback te geven op verhalen, en ontwikkelde gaandeweg een scherp oog voor tekst.
                  </p>
                  <p>
                    Die ontwikkeling leidde tot een stage bij uitgeverij Atlas Contact, samenwerkingen met uitgeverijen en particuliere auteurs, en uiteindelijk tot de oprichting van Anna's Studio.
                  </p>
                  <p>
                    Omdat ik weet hoe kwetsbaar een manuscript kan zijn, ga ik met grote zorg om met iedere tekst die ik lees. Eerlijkheid staat bij mij voorop, maar altijd in combinatie met aandacht, precisie en respect voor de stem van de schrijver. Ik denk daarbij nog regelmatig terug aan het meisje van zeventien dat ik was: onzeker, maar vastbesloten om te schrijven.
                  </p>
                  <p>
                    Ieder boek raakt aan iets wezenlijks, en aan iedere tekst valt te schaven. Vanuit die overtuiging werk ik: analytisch, betrokken en met oog voor zowel inhoud als vorm.
                  </p>
                </div>
              </div>

              {/* Expertise Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="glass rounded-xl p-6 text-center shadow-soft hover:shadow-lifted transition-all duration-300 border border-primary/10">
                  <div className="text-3xl mb-2">✍️</div>
                  <p className="font-semibold text-foreground">Schrijven</p>
                  <p className="text-sm text-muted-foreground mt-1">Literair & Creatief</p>
                </div>
                <div className="glass rounded-xl p-6 text-center shadow-soft hover:shadow-lifted transition-all duration-300 border border-primary/10">
                  <div className="text-3xl mb-2">📝</div>
                  <p className="font-semibold text-foreground">Redactie</p>
                  <p className="text-sm text-muted-foreground mt-1">Professionele Beoordeling</p>
                </div>
              </div>

              {/* Publications */}
              <div className="glass rounded-2xl p-8 shadow-soft border border-primary/10">
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  Literaire Publicaties
                </h3>
                <ul className="space-y-3">
                  {[
                    { title: "Lezenswaardig", work: "99-woordenverhalen 'Kolere Thailand'" },
                    { title: "Lezenswaardig", work: "55-woordenverhalen 'Tropen Trauma'" },
                    { title: "Lezenswaardig", work: "Verhalen waar je blij van wordt! 'Stilte na haar'" },
                    { title: "Blind", work: "Kort verhaal 'Absint'" },
                    { title: "Phronèsis", work: "Het belang van filosofie in het onderwijs" },
                    { title: "Katholiek Nieuwsblad", work: "Interview Katie Vlaardingerbroek: Therapie als nieuwe religie?" },
                    { title: "Schrijven Magazine", work: "Regelmatige artikelen // Auteur artikelen" },
                    {
                      title: "schrijvenonline.org",
                      work: "Meerdere 99-woordenverhalen",
                    },
                  ].map((pub, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span className="text-sm text-muted-foreground">
                        <strong className="text-foreground">{pub.title}</strong> - {pub.work}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    En vele andere publicaties op{" "}
                    <a
                      href="https://schrijvenonline.org/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary hover:text-primary-hover inline-flex items-center gap-1"
                    >
                      schrijvenonline.org
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Timeline */}
            <div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-8">Professionele Ervaring</h3>
              <div className="space-y-4">
                {timeline.map((item, index) => (
                  <TimelineCard key={index} item={item} index={index} />
                ))}
              </div>

              {/* CTA Card */}
              <div className="mt-8 glass rounded-2xl p-8 shadow-soft border border-primary/10 text-center">
                <p className="font-semibold text-primary text-lg mb-4">📩 Interesse in samenwerking?</p>
                <p className="text-muted-foreground mb-6">
                  Laten we kennismaken en kijken hoe ik jouw schrijfproces kan versterken
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary-hover transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Neem Contact Op
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
