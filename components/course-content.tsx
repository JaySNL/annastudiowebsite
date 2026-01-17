"use client"

import { BookOpen, Lightbulb, Target, Award, CheckCircle2 } from "lucide-react"

export function CourseContent() {
  const learningPoints = [
    "Perspectief, structuur en spanningsopbouw",
    "Stijl en de kunst van het weglaten",
    "Werken met literaire voorbeelden (o.a. Tsjechov, Biesheuvel, Dahl, Kafka)",
    "Toewerken naar één afgerond kort verhaal (± 1.500 woorden)",
  ]

  const authors = [
    "Anton Tsjechov",
    "J.J. Biesheuvel",
    "Roald Dahl",
    "Franz Kafka",
  ]

  const sessionStructure = [
    {
      icon: BookOpen,
      title: "Literaire voorbeelden",
      description: "Analyseer verhalen van de groten en leer van hun technieken",
    },
    {
      icon: Lightbulb,
      title: "Persoonlijke feedback",
      description: "Uitgebreide, schriftelijke feedback tussen de lessen",
    },
    {
      icon: Target,
      title: "Verdieping",
      description: "Focus op perspectief, structuur, stijl en spanningsopbouw",
    },
    {
      icon: Award,
      title: "Eigen stem",
      description: "Begeleiding met oog voor jouw eigen stem en verhaal",
    },
  ]

  const courseIncludes = [
    "6 individuele sessies van 1 uur",
    "Persoonlijke begeleiding en schriftelijke feedback tussen de lessen",
    "Verdieping in perspectief, structuur, stijl en spanningsopbouw",
    "Werken met literaire voorbeelden (o.a. Tsjechov, Biesheuvel, Dahl, Kafka)",
    "Toewerken naar één afgerond kort verhaal (± 1.500 woorden)",
  ]

  return (
    <>
      {/* Wat leer je */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">Wat kun je verwachten?</h2>

            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Korte verhalen zijn misschien belangrijker dan je denkt. Wellicht werk je nu aan een roman, een poëziebundel, of weet je even helemaal niet meer waar je aan toe bent in je schrijversbestaan.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Korte verhalen zijn er voor de mensen die grip willen krijgen op hun verhaal. Veel romanciers begonnen met het schrijven van korte verhalen; een begin, midden en einde strak componeren is misschien nog wel lastiger in een kort verhaal.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Wil je een kort verhaal schrijven dat inhoudelijk, stilistisch en structureel klopt? In deze individuele schrijfbegeleiding werk je één-op-één met mij aan jouw tekst, van eerste idee tot afgerond verhaal.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {learningPoints.map((point, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors"
                >
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{point}</span>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 mb-12">
              <h3 className="text-2xl font-serif font-bold mb-6">Leren van de groten</h3>
              <p className="text-muted-foreground mb-6">
                In zes persoonlijke sessies verdiepen we ons in de kern van het korte verhaal: perspectief, structuur, spanningsopbouw, stijl en de kunst van het weglaten. We kijken scherp naar wat je vertelt, maar vooral ook naar wat je níét vertelt. Zo leer je hoe je met een gerichte uitsnede en precieze taal een verhaal schrijft dat blijft hangen.
              </p>
              <div className="flex flex-wrap gap-3">
                {authors.map((author, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-background rounded-full text-sm font-medium text-foreground shadow-sm"
                  >
                    {author}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Session Structure */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">Hoe werkt de begeleiding?</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {sessionStructure.map((item, index) => {
                const Icon = item.icon
                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-6 bg-background rounded-xl shadow-soft hover:shadow-md transition-shadow"
                  >
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Tussen de lessen door werk je zelfstandig aan je tekst. Je ontvangt uitgebreide, persoonlijke feedback en begeleiding op maat. Ik lees mee als redacteur: aandachtig, eerlijk en met oog voor jouw eigen stem. Mijn ervaring bij uitgeverijen als Atlas Contact en Blossom Books vormt daarbij een stevige literaire basis.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Deze begeleiding is geschikt voor schrijvers die serieus willen werken aan één kort verhaal en bereid zijn te investeren in verdieping, herziening en groei.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">
              Dit krijg je tijdens de begeleiding
            </h2>

            <div className="grid md:grid-cols-1 gap-x-8 gap-y-4">
              {courseIncludes.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl">
              <h3 className="text-xl font-semibold mb-4">Praktisch</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><strong>Vorm:</strong> individueel (1-op-1)</li>
                <li><strong>Duur:</strong> 6 lessen van 1 uur</li>
                <li><strong>Locatie:</strong> in overleg / online of op locatie</li>
                <li><strong>Investering:</strong></li>
                <li className="ml-6">• Reguliere prijs: €495</li>
                <li className="ml-6">• Early bird / pilotaanbod: €395 (beperkt aantal plekken)</li>
              </ul>
              <p className="text-sm text-muted-foreground mt-4">
                Deze begeleiding bevindt zich momenteel in de pilotfase. Daarom geldt tijdelijk een early bird-tarief van €395 voor een beperkt aantal plekken. Na afronding van de pilotfase wordt het reguliere tarief gehanteerd.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
