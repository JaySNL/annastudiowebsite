"use client"

import { Button } from "@/components/ui/button"
import { Users, BookOpen, ArrowRight, Laptop } from "lucide-react"
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
                Early bird aanbieding - Pilotfase
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
                Individuele schrijfbegeleiding
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Wil je een kort verhaal schrijven dat inhoudelijk, stilistisch en structureel klopt? In deze individuele schrijfbegeleiding werk je één-op-één met mij aan jouw tekst, van eerste idee tot afgerond verhaal.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3 p-4 bg-background rounded-lg shadow-soft">
                  <Users className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground">Format</p>
                    <p className="font-semibold text-foreground">1-op-1 begeleiding</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-background rounded-lg shadow-soft">
                  <Laptop className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground">Locatie</p>
                    <p className="font-semibold text-foreground">Online / op locatie</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/cursus/kort-verhaal">
                  <Button size="lg" className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300">
                    Bekijk de begeleiding
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/#contact">
                  <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent hover:bg-primary/10">
                    Vraag informatie aan
                  </Button>
                </Link>
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
                    "Perspectief, structuur en spanningsopbouw",
                    "Stijl en de kunst van het weglaten",
                    "Werken met literaire voorbeelden",
                    "Persoonlijke feedback tussen de lessen",
                    "Verdieping in jouw eigen stem",
                    "Leren van Tsjechov, Biesheuvel, Dahl, Kafka",
                    "Begeleiding met oog voor detail",
                    "Een afgerond verhaal van ± 1.500 woorden",
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
                    <span className="text-3xl font-bold text-primary">€395,-</span>
                    <span className="text-muted-foreground ml-2">early bird</span>
                  </p>
                  <p className="text-center text-sm text-muted-foreground mt-2">
                    Regulier €495,- na pilotfase
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
