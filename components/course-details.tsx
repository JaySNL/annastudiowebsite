"use client"

import { Calendar, Laptop, Clock, Users, Euro } from "lucide-react"

export function CourseDetails() {
  const details = [
    {
      icon: Users,
      label: "Format",
      value: "1-op-1 begeleiding",
      subtitle: "Persoonlijke aandacht voor jouw verhaal",
    },
    {
      icon: Clock,
      label: "Duur",
      value: "6 sessies van 1 uur",
      subtitle: "Flexibel in te plannen",
    },
    {
      icon: Laptop,
      label: "Locatie",
      value: "Online / op locatie",
      subtitle: "In overleg met de docent",
    },
    {
      icon: Calendar,
      label: "Planning",
      value: "Op afspraak",
      subtitle: "Start wanneer het jou uitkomt",
    },
    {
      icon: Euro,
      label: "Prijs",
      value: "€395,- (early bird)",
      subtitle: "Regulier €495,- na pilotfase",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">Praktische informatie</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {details.map((detail, index) => {
              const Icon = detail.icon
              return (
                <div
                  key={index}
                  className="p-6 bg-background rounded-xl shadow-soft hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground font-medium mb-1">{detail.label}</p>
                      <p className="text-lg font-semibold text-foreground mb-1">{detail.value}</p>
                      <p className="text-sm text-muted-foreground">{detail.subtitle}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-12 p-8 bg-background rounded-2xl shadow-soft border border-primary/20">
            <h3 className="text-2xl font-serif font-bold mb-4">Voor wie is deze begeleiding?</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Je wilt serieus werken aan één kort verhaal</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Je zoekt persoonlijke begeleiding en feedback op maat</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Je wilt verdieping in perspectief, structuur en stijl</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Je bent bereid te investeren in herziening en groei</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Je wilt leren van literaire voorbeelden (Tsjechov, Biesheuvel, Dahl, Kafka)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
