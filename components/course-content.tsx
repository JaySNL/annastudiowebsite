"use client"

import { BookOpen, Lightbulb, Users, Award, CheckCircle2 } from "lucide-react"

export function CourseContent() {
  const learningPoints = [
    "Van eerste idee naar een compleet verhaal van 1500 woorden",
    "Perspectief, verteller en karakterontwikkeling",
    "Dialogen schrijven die klinken en betekenis hebben",
    "Spanningsopbouw en structuur",
    "De kunst van het weglaten en doseren",
    "Sfeer oproepen met zintuiglijke details",
    "Werken met contrast en tegenstellingen",
    "Experimenteren met vorm en stijl",
  ]

  const authors = [
    "Roald Dahl",
    "Franz Kafka",
    "Anton Tsjechov",
    "Adriaan van Dis",
    "Jan Brokken",
    "En meer literaire meesters",
  ]

  const lessonStructure = [
    {
      icon: BookOpen,
      title: "Literaire voorbeelden",
      description: "Analyseer verhalen van de groten en leer van hun technieken",
    },
    {
      icon: Lightbulb,
      title: "Praktische schrijfoefeningen",
      description: "Pas het geleerde direct toe in concrete schrijfopdrachten",
    },
    {
      icon: Users,
      title: "Presentaties & feedback",
      description: "Deel je werk en krijg waardevolle feedback van medecursisten",
    },
    {
      icon: Award,
      title: "Persoonlijke begeleiding",
      description: "Wekelijkse huiswerkopdrachten met individuele feedback van Anna",
    },
  ]

  const courseIncludes = [
    "8 inspirerende lessen van 2 uur",
    "Literaire voorbeelden uit de wereldliteratuur",
    "Praktische schrijfoefeningen elke les",
    "Wekelijkse huiswerkopdrachten (500-1000 woorden)",
    "Persoonlijke feedback op al je werk",
    "Een groep enthousiaste medecursisten",
    "Een afgerond kort verhaal van 1500 woorden",
    "Feestelijke voordrachtavond aan het einde",
  ]

  return (
    <>
      {/* Wat leer je */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">Wat leer je in deze cursus?</h2>

            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Heb jij altijd al korte verhalen willen schrijven, maar weet je niet goed waar te beginnen? In deze
                cursus ontdek je stap voor stap hoe je een kort verhaal opbouwt, van het eerste idee tot een afgeronde
                tekst die lezers raakt.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We gaan in op thema's als perspectief, verteller en personages, maar ook op dialogen, spanningsopbouw,
                structuur en de kunst van het weglaten. Je leert hoe je sfeer oproept met zintuiglijke details, hoe
                contrast en tegenstellingen je verhaal diepte geven, en hoe je met vorm en stijl kunt experimenteren.
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
                Daarnaast kijken we naar de groten van het korte verhaal. Wat maakt hun verhalen zo sterk, en wat kunnen
                wij daarvan leren? Door voorbeelden uit de literatuur te lezen en te bespreken, ontdek je hoe schrijvers
                met spanning, stijl en subtiliteit werken – en hoe jij dat zelf kunt toepassen.
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

      {/* Lesson Structure */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">Hoe ziet een les eruit?</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {lessonStructure.map((item, index) => {
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
                Elke les bestaat uit een korte theoretische introductie, literaire voorbeelden en praktische
                schrijfoefeningen. Daarnaast werk je wekelijks aan een huiswerkopdracht (500–1000 woorden) die je van
                persoonlijke feedback voorziet. Zo ontwikkel je je eigen schrijfstem en groeit je verhaal van ruwe
                schets naar een afgeronde tekst.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ook leer je van andere cursisten die iets voordragen of hebben geëxperimenteerd met het thema van de
                week. Elke les besteden we tijd aan de mensen die iets voor willen dragen en ook dat nemen we mee als
                voorbeeld en inspiratie. Zo zie je dat je ontzettend veel kanten op kunt met één opdracht, en dat dit
                soms juist een uitdaging is binnen het korte verhaal.
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
              Dit krijg je tijdens de cursus
            </h2>

            <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
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
              <p className="text-lg text-foreground leading-relaxed">
                Aan het einde van de cursus heb je een kort verhaal van circa 1500 woorden, waarin je alle
                basiselementen van het schrijven hebt toegepast en geïntegreerd. We sluiten feestelijk af met een
                voordrachtavond, waar iedere deelnemer zijn of haar verhaal mag presenteren: een inspirerende
                bijeenkomst vol verhalen, applaus en schrijversenergie.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
