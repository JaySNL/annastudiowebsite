"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ArrowRight, Sparkles, BookOpen, Award } from "lucide-react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background pt-20 pb-12 md:pt-24 md:pb-16">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Content - 7 columns */}
          <div className={`lg:col-span-7 space-y-6 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 animate-fade-in-up">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Professionele Schrijfbegeleiding</span>
            </div>

            {/* Main Headline */}
            <h1 className="fluid-h1 text-foreground animate-fade-in-up animate-delay-100">
              Jouw Verhaal Verdient <span className="gradient-text">Professionele Begeleiding</span>
            </h1>

            {/* Subheadline */}
            <p className="fluid-p text-muted-foreground max-w-2xl animate-fade-in-up animate-delay-200">
              Van eerste idee tot publicatie. <span className="font-semibold text-foreground">Anna Strijbos</span>,
              ervaren redacteur en schrijfcoach, begeleidt je op elk moment in jouw schrijfproces met persoonlijke
              aandacht en professionele expertise.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animate-delay-300">
              <a
                href="#services"
                className="group inline-flex items-center justify-center rounded-xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lifted hover:shadow-floating hover:bg-primary-hover transition-all duration-300"
              >
                Ontdek de Diensten
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl border-2 border-primary/20 bg-background/50 backdrop-blur px-8 py-4 text-base font-semibold text-foreground hover:bg-primary/5 hover:border-primary/40 transition-all duration-300"
              >
                Gratis Kennismaking
              </a>
            </div>

            {/* Trust Indicators */}
            <div className={`grid grid-cols-3 gap-6 pt-6 animate-fade-in-up animate-delay-400`}>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                  <p className="text-2xl font-bold text-foreground">50+</p>
                </div>
                <p className="text-sm text-muted-foreground">Tevreden Auteurs</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary" />
                  <p className="text-2xl font-bold text-foreground">5+</p>
                </div>
                <p className="text-sm text-muted-foreground">Jaar Ervaring</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <p className="text-2xl font-bold text-foreground">4.9★</p>
                </div>
                <p className="text-sm text-muted-foreground">Gemiddelde Score</p>
              </div>
            </div>
          </div>

          {/* Right Content - 5 columns */}
          <div
            className={`lg:col-span-5 relative ${isVisible ? "animate-fade-in-right animate-delay-200" : "opacity-0"}`}
          >
            {/* Main Image Card */}
            <div className="relative">
              {/* Floating card behind */}
              <div className="absolute -right-4 -top-4 w-64 h-48 glass rounded-2xl shadow-floating rotate-6 hidden lg:block"></div>

              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden shadow-floating border-4 border-background">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent z-10"></div>
                <Image
                  src="/images/design-mode/image(1).png"
                  alt="Anna Strijbos - Professionele Schrijfcoach"
                  width={600}
                  height={600}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>

              {/* Floating testimonial card */}
              <div className="absolute -bottom-6 -left-6 glass rounded-xl shadow-lifted p-4 max-w-xs animate-float hidden lg:block">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-2xl">✨</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex gap-0.5 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-amber-400 text-sm">
                          ★
                        </span>
                      ))}
                    </div>
                    <p className="text-sm font-medium text-card-foreground">
                      "Anna's feedback transformeerde mijn manuscript"
                    </p>
                    <p className="text-xs text-card-foreground/70 mt-1">— Gerard C.</p>
                  </div>
                </div>
              </div>

              {/* Floating stats badge */}
              <div
                className="absolute -top-6 -right-6 glass rounded-xl shadow-lifted p-4 animate-float hidden lg:block"
                style={{ animationDelay: "0.5s" }}
              >
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">100+</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Manuscripten
                    <br />
                    Beoordeeld
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
