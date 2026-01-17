"use client"

import { Button } from "@/components/ui/button"
import { Calendar, Users, Clock, Target } from "lucide-react"

export function CourseHero() {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium text-primary bg-primary/10 rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Early bird aanbieding - Beperkt aantal plekken
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
            Individuele schrijfbegeleiding – Korte verhalen
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Leer in zes persoonlijke sessies hoe je een kort verhaal schrijft dat blijft hangen. Van eerste idee tot afgerond verhaal.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Users className="h-5 w-5 text-primary" />
              <span className="font-medium">1-op-1 begeleiding</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="h-5 w-5 text-primary" />
              <span className="font-medium">6 sessies van 1 uur</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Target className="h-5 w-5 text-primary" />
              <span className="font-medium">± 1.500 woorden</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="/#contact">
              <Button size="lg" className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300">
                Vraag informatie aan
              </Button>
            </a>
          </div>

          <div className="mt-6 space-y-2">
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Early bird: €395,-</span> (pilotfase)
            </p>
            <p className="text-xs text-muted-foreground">
              Reguliere prijs na pilotfase: €495,-
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
