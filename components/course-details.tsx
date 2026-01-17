"use client"

import { Calendar, MapPin, Clock, Users, Euro } from "lucide-react"

export function CourseDetails() {
  const details = [
    {
      icon: Calendar,
      label: "Data",
      value: "8x Dinsdagavond",
      subtitle: "Vanaf 6 januari 2026",
    },
    {
      icon: Clock,
      label: "Tijd",
      value: "19:30 - 21:30 uur",
      subtitle: "16 uur les in totaal",
    },
    {
      icon: MapPin,
      label: "Locatie",
      value: "Hart Haarlem",
      subtitle: "Gedempte Oude Gracht 32, Haarlem",
    },
    {
      icon: Users,
      label: "Groepsgrootte",
      value: "Max. 12 deelnemers",
      subtitle: "Kleinschalig voor persoonlijke aandacht",
    },
    {
      icon: Euro,
      label: "Prijs",
      value: "€349,- voor de complete cursus",
      subtitle: "Inclusief alle materialen en feedback",
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
            <h3 className="text-2xl font-serif font-bold mb-4">Voor wie is deze cursus?</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Je wilt leren hoe je een kort verhaal schrijft van begin tot eind</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Je hebt ideeën maar weet niet goed hoe je ze moet uitwerken</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Je wilt leren van literaire voorbeelden en klassieke verhalen</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Je zoekt een inspirerende groep om mee te schrijven en te delen</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Je wilt persoonlijke feedback op je werk van een ervaren docent</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
