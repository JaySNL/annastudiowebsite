'use client'

import { BookOpen } from 'lucide-react'

export function BooksHero() {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <BookOpen className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Literaire Werken</span>
          </div>

          <h1 className="fluid-h1 text-foreground mb-4">
            <span className="gradient-text">Boeken waaraan ik heb meegewerkt</span>
          </h1>
          <p className="fluid-p text-muted-foreground max-w-3xl mx-auto">
            Een curatieve selectie van uitgegeven werken waar ik inhoudelijke redactie of eindredactie bij heb verzorgd. Van literaire romans tot onderzoekers—ontdek de boeken die ik aan hun voltooiing heb geholpen.
          </p>
        </div>
      </div>
    </section>
  )
}
