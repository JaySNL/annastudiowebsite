"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import Link from "next/link"

export function CourseCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-background rounded-3xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium text-primary bg-primary/10 rounded-full">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Beperkt aantal plekken
              </div>

              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Schrijf je in voor de cursus</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Start jouw schrijfreis in oktober 2025. Ontwikkel je talent en schrijf je eerste korte verhaal onder
                professionele begeleiding.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground">8 weken intensief</p>
                  <p className="text-sm text-muted-foreground">Van idee naar afgerond verhaal</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground">Persoonlijke feedback</p>
                  <p className="text-sm text-muted-foreground">Op al je huiswerkopdrachten</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground">Kleinschalig</p>
                  <p className="text-sm text-muted-foreground">Max. 12 enthousiaste cursisten</p>
                </div>
              </div>
            </div>

            <div className="text-center space-y-4">
              <Link
                href="https://www.hart-haarlem.nl/cursussen/d/q/c/585/schrijf-jouw-korte-verhaal"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-lg px-8 py-6 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                Schrijf je nu in bij Hart Haarlem
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <p className="text-sm text-muted-foreground">
                Inschrijven doe je via{" "}
                <a
                  href="https://www.hart-haarlem.nl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium"
                >
                  Hart Haarlem
                </a>
              </p>

              <div className="pt-6 border-t border-border mt-6">
                <p className="text-muted-foreground mb-2">Vragen over de cursus?</p>
                <Button variant="outline" size="lg">
                  <Link href="/#contact">
                    Neem contact op
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
