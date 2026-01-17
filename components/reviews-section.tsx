"use client"

import { Sparkles } from "lucide-react"
import { ReviewSlider } from "./review-slider"

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Ervaringen</span>
          </div>

          <h2 className="fluid-h2 text-foreground mb-4">
            Wat <span className="gradient-text">Auteurs Zeggen</span>
          </h2>
          <p className="fluid-p text-muted-foreground">
            Ontdek hoe Anna's professionele begeleiding het verschil maakt
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <ReviewSlider />
        </div>

        {/* Trust indicators */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="glass rounded-2xl p-8 shadow-soft border border-primary/10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">4.9★</div>
                <p className="text-sm text-muted-foreground">Gemiddelde Beoordeling</p>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">50+</div>
                <p className="text-sm text-muted-foreground">Tevreden Auteurs</p>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">98%</div>
                <p className="text-sm text-muted-foreground">Zou Aanbevelen</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
