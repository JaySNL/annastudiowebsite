"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-5 gap-12 items-center">
            {/* Photo */}
            <div className="md:col-span-2">
              <div className="glass rounded-2xl overflow-hidden shadow-soft border border-primary/10">
                <Image
                  src="/images/anna/anna-7.jpg"
                  alt="Anna Strijbos"
                  width={600}
                  height={900}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Short bio */}
            <div className="md:col-span-3 space-y-6">
              <h2 className="fluid-h2 text-foreground">
                Over Anna Strijbos
              </h2>
              <p className="text-sm text-muted-foreground">Schrijver | Journalist | Redacteur | Schrijfcoach</p>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Ik ben Anna Strijbos, professioneel redacteur en oprichter van Anna&apos;s Studio. Vanuit Haarlem begeleid ik auteurs bij het schrijven, redigeren en publiceren van hun manuscript.
                </p>
                <p>
                  Met een achtergrond in de uitgeefwereld en een studie Psychologie kijk ik verder dan grammatica alleen — ik begrijp de diepere lagen van personages, de menselijke motivaties en de psychologische spanningsboog in een verhaal.
                </p>
              </div>
              <a
                href="/over-anna"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary-hover transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Lees hier direct meer
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
