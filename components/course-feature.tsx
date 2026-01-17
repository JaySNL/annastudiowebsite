"use client"

import { Button } from "@/components/ui/button"
import { Calendar, Users, BookOpen, ArrowRight } from "lucide-react"
import Link from "next/link"

export function CourseFeature() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium text-primary bg-primary/10 rounded-full">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Nieuw cursusaanbod 2026
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
                Schrijf jouw Korte Verhaal
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Heb je altijd al een kort verhaal willen schrijven? In deze cursus bij Hart Haarlem leer je in 8 weken
                hoe je van idee naar een afgerond verhaal van 1500 woorden komt. Van perspectief en karakterontwikkeling
                tot spanningsopbouw en stijl.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3 p-4 bg-background rounded-lg shadow-soft">
                  <Calendar className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground">Start</p>
                    <p className="font-semibold text-foreground">6 januari 2026</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-background rounded-lg shadow-soft">
                  <Users className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground">Groepsgrootte</p>
                    <p className="font-semibold text-foreground">Max. 12 personen</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/cursus/kort-verhaal">
                  <Button size="lg" className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300">
                    Bekijk de cursus
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <a
                  href="https://www.hart-haarlem.nl/cursussen/d/q/c/585/schrijf-jouw-korte-verhaal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent hover:bg-primary/10">
                    Schrijf je in bij Hart Haarlem
                  </Button>
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="bg-background rounded-2xl shadow-xl p-8 border-2 border-primary/20">
                <div className="flex items-center gap-3 mb-6">
                  <BookOpen className="h-8 w-8 text-primary" />
                  <h3 className="text-2xl font-serif font-bold">Dit leer je</h3>
                </div>

                <ul className="space-y-4">
                  {[
                    "Perspectief en karakterontwikkeling",
                    "Dialogen die klinken en betekenis hebben",
                    "Spanningsopbouw en structuur",
                    "Sfeer oproepen met zintuiglijke details",
                    "De kunst van het weglaten",
                    "Leren van literaire meesters",
                    "Persoonlijke feedback op je werk",
                    "Een afgerond verhaal van 1500 woorden",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary text-sm font-bold">✓</span>
                      </div>
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-primary/20">
                  <p className="text-center">
                    <span className="text-3xl font-bold text-primary">€349,-</span>
                    <span className="text-muted-foreground ml-2">voor 8 lessen</span>
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
