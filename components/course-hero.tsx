"use client"

import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, Clock } from "lucide-react"

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
            Beperkt aantal plekken beschikbaar
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
            Schrijf jouw Korte Verhaal
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Leer in 8 weken hoe je een meeslepend kort verhaal schrijft. Van idee naar afgerond verhaal van 1500
            woorden.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="h-5 w-5 text-primary" />
              <span className="font-medium">Vanaf 6 januari 2026</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="h-5 w-5 text-primary" />
              <span className="font-medium">8x Dinsdagavond • 19:30-21:30</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-5 w-5 text-primary" />
              <span className="font-medium">Hart Haarlem</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Users className="h-5 w-5 text-primary" />
              <span className="font-medium">Max. 12 deelnemers</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://www.hart-haarlem.nl/cursussen/d/q/c/585/schrijf-jouw-korte-verhaal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300">
                Schrijf je nu in bij Hart Haarlem
              </Button>
            </a>
            <a href="/#contact">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent">
                Stel een vraag
              </Button>
            </a>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">€349,-</span> voor de complete cursus
          </p>
        </div>
      </div>
    </section>
  )
}
