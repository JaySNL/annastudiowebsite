"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { BookOpen, Users, Award, TrendingUp } from "lucide-react"

interface StatProps {
  icon: React.ReactNode
  value: number
  suffix: string
  label: string
  delay: number
}

function StatCard({ icon, value, suffix, label, delay }: StatProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isVisible, value])

  return (
    <div
      ref={ref}
      className={`group relative transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="glass rounded-2xl p-8 shadow-soft hover:shadow-lifted transition-all duration-300 border border-primary/10 hover:border-primary/20">
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">{icon}</div>
        </div>
        <div className="space-y-1">
          <p className="text-4xl font-bold text-foreground">
            {count}
            {suffix}
          </p>
          <p className="text-sm text-muted-foreground">{label}</p>
        </div>
      </div>
    </div>
  )
}

export function StatisticsSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="fluid-h2 text-foreground mb-4">
            Vertrouwd Door <span className="gradient-text">Honderden Auteurs</span>
          </h2>
          <p className="fluid-p text-muted-foreground">
            Met meer dan 5 jaar ervaring help ik schrijvers hun verhalen tot leven te brengen
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <StatCard
            icon={<Users className="w-6 h-6 text-primary" />}
            value={50}
            suffix="+"
            label="Tevreden Auteurs"
            delay={0}
          />
          <StatCard
            icon={<BookOpen className="w-6 h-6 text-primary" />}
            value={100}
            suffix="+"
            label="Manuscripten Beoordeeld"
            delay={100}
          />
          <StatCard
            icon={<Award className="w-6 h-6 text-primary" />}
            value={5}
            suffix="+"
            label="Jaar Ervaring"
            delay={200}
          />
          <StatCard
            icon={<TrendingUp className="w-6 h-6 text-primary" />}
            value={4.9}
            suffix="★"
            label="Gemiddelde Beoordeling"
            delay={300}
          />
        </div>
      </div>
    </section>
  )
}
