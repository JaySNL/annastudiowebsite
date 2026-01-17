'use client'

import { Mail } from 'lucide-react'

export function BooksCta() {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto glass rounded-2xl p-8 md:p-12 shadow-soft border border-primary/10 text-center">
          <div className="mb-4 text-4xl">📚</div>
          <h2 className="text-3xl font-bold text-foreground mb-4">Wil jij samen met mij werken?</h2>
          <p className="text-muted-foreground mb-8">
            Met jarenlange ervaring in redactie en manuscript beoordeling help ik auteurs hun werk tot volledige potentieel te brengen. Of het nu gaat om inhoudelijke editing, eindredactie, of volledige begeleiding—ik ben hier voor jou.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <a
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary-hover transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <Mail className="w-5 h-5" />
              Contact opnemen
            </a>
            <a
              href="/manuscriptbeoordeling"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-muted text-foreground rounded-xl font-semibold hover:bg-muted/80 transition-all duration-300 border border-border"
            >
              Manuscriptbeoordeling
            </a>
          </div>

          <p className="text-sm text-muted-foreground">
            Alle boeken op deze pagina zijn beschikbaar via de respectieve uitgevers of boekenhandelaren.
          </p>
        </div>
      </div>
    </section>
  )
}
