"use client"

import { useState, useEffect } from "react"
import { FileText, CheckCircle, Sparkles, ArrowRight } from "lucide-react"

export function ManuscriptHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative bg-gradient-to-br from-background via-muted/30 to-background pt-20 pb-12 md:pt-24 md:pb-16 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left content - 7 columns */}
          <div className={`lg:col-span-7 space-y-6 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Professionele Manuscriptbeoordeling</span>
            </div>

            {/* Main Headline */}
            <h1 className="fluid-h1 text-foreground">
              Manuscript-
              <br />
              <span className="gradient-text">beoordeling</span>
            </h1>

            {/* Subheadline */}
            <p className="fluid-p text-muted-foreground max-w-2xl">
              Laat je manuscript beoordelen door een professionele redacteur. Van basis leesrapport tot complete
              eindredactie - persoonlijke feedback die jouw verhaal naar een hoger niveau tilt.
            </p>

            {/* Features */}
            <ul className="space-y-3">
              {[
                "Persoonlijke feedback van een ervaren redacteur",
                "Gedetailleerd leesrapport met concrete verbeterpunten",
                "Structuur- en stijladvies op maat",
                "Spellingcontrole en taalkundige correcties",
              ].map((item, index) => (
                <li
                  key={index}
                  className={`flex items-start ${isVisible ? "animate-fade-in-left" : "opacity-0"}`}
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-3" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className={`pt-4 ${isVisible ? "animate-fade-in-up animate-delay-500" : "opacity-0"}`}>
              <a
                href="#pakketten"
                className="group inline-flex items-center justify-center rounded-xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lifted hover:shadow-floating hover:bg-primary-hover transition-all duration-300"
              >
                Bekijk de Pakketten
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right content - 5 columns */}
          <div
            className={`lg:col-span-5 relative ${isVisible ? "animate-fade-in-right animate-delay-200" : "opacity-0"}`}
          >
            {/* Pricing Card */}
            <div className="relative">
              {/* Floating decoration */}
              <div className="absolute -right-4 -top-4 w-48 h-48 glass rounded-2xl shadow-floating rotate-6 hidden lg:block"></div>

              {/* Main Card */}
              <div className="relative glass rounded-2xl shadow-floating p-8 border border-primary/20">
                <div className="flex justify-center mb-6">
                  <div className="h-20 w-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center shadow-soft">
                    <FileText className="h-10 w-10 text-primary" />
                  </div>
                </div>

                <h3 className="text-2xl font-serif font-bold text-center mb-4">Variabele Pakketten</h3>
                <p className="text-center text-muted-foreground mb-6">
                  Van kortverhaal tot roman - er is altijd een pakket dat bij jouw manuscript past
                </p>

                <div className="space-y-4">
                  {[
                    { name: "Inhoudelijke Redactieronde", price: "€8,95 per 1000 woorden" },
                    { name: "Inhoudelijk + Spelling", price: "€10,95 per 1000 woorden" },
                    { name: "Persklaarmaken", price: "€15,00 per 1000 woorden" },
                    { name: "Eindcorrectie", price: "€6,95 per 1000 woorden" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center pb-3 border-b border-border last:border-0"
                    >
                      <span className="font-medium text-sm">{item.name}</span>
                      <span className="text-primary font-bold text-sm">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating badge */}
              <div
                className="absolute -bottom-6 -left-6 glass rounded-xl shadow-lifted p-4 animate-float hidden lg:block"
                style={{ animationDelay: "0.5s" }}
              >
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">100+</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Manuscripten
                    <br />
                    Beoordeeld
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
