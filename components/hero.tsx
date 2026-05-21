"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ArrowRight, PenLine, Award, Star } from "lucide-react"
import { CalButton } from "./cal-button"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative overflow-hidden bg-background pt-16 pb-12 md:pt-20 md:pb-16">
      {/* Decorative beeldmerk */}
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-[0.04] pointer-events-none">
        <Image src="/images/beeldmerk.png" alt="" fill className="object-contain" aria-hidden="true" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className={`space-y-6 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground tracking-tight leading-none mb-4">
                Anna Strijbos
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-light">
                Redacteur &amp; schrijfcoach
              </p>
            </div>

            <p className="text-base text-muted-foreground max-w-lg leading-relaxed">
              Van eerste idee tot publicatie — ervaren redacteur en schrijfcoach die je begeleidt op elk moment in jouw schrijfproces met persoonlijke aandacht.
            </p>

            {/* Service links */}
            <div className="flex flex-wrap gap-3 text-sm">
              <a href="/manuscriptbeoordeling" className="px-4 py-2 rounded-full border border-border text-foreground hover:border-primary hover:text-primary transition-colors">
                Redactie
              </a>
              <a href="/eigen-traject" className="px-4 py-2 rounded-full border border-border text-foreground hover:border-primary hover:text-primary transition-colors">
                Eigen traject
              </a>
              <a href="/#contact" className="px-4 py-2 rounded-full border border-border text-foreground hover:border-primary hover:text-primary transition-colors">
                Coach
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="/manuscriptbeoordeling"
                className="group inline-flex items-center justify-center rounded-xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-soft hover:shadow-lifted hover:bg-primary-hover transition-all duration-300"
              >
                Ontdek de diensten
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <CalButton
                className="inline-flex items-center justify-center rounded-xl border-2 border-primary/20 bg-background px-8 py-4 text-base font-semibold text-foreground hover:bg-primary/5 hover:border-primary/40 transition-all duration-300 cursor-pointer"
              >
                Gratis kennismaking
              </CalButton>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 pt-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <PenLine className="w-4 h-4 text-primary" />
                  <p className="text-2xl font-bold text-foreground">100+</p>
                </div>
                <p className="text-sm text-muted-foreground">Tevreden auteurs &amp; bedrijven</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-primary" />
                  <p className="text-2xl font-bold text-foreground">5+</p>
                </div>
                <p className="text-sm text-muted-foreground">Jaar ervaring</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-primary" />
                  <p className="text-2xl font-bold text-foreground">100%</p>
                </div>
                <p className="text-sm text-muted-foreground">Hoge tevredenheid</p>
              </div>
            </div>
          </div>

          {/* Right Content - Photo */}
          <div className={`relative ${isVisible ? "animate-fade-in-right animate-delay-200" : "opacity-0"}`}>
            <div className="relative rounded-2xl overflow-hidden shadow-lifted">
              <Image
                src="/images/anna/anna-3.jpg"
                alt="Anna Strijbos — redacteur en schrijfcoach"
                width={600}
                height={900}
                className="object-cover w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
