"use client"

import { FileText, BookOpen, Sparkles, Scissors, Phone, CheckCircle } from "lucide-react"

export function ManuscriptServices() {
  return (
    <section id="pakketten" className="py-20 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Kies je Pakket</span>
          </div>

          <h2 className="fluid-h2 text-foreground mb-4">
            Manuscriptbeoordeling <span className="gradient-text">Pakketten</span>
          </h2>
          <p className="fluid-p text-muted-foreground">
            Kies het pakket dat het beste bij jouw manuscript past. Alle beoordelingen worden persoonlijk uitgevoerd.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {/* Basis Leesrapport */}
          <div className="group relative h-full transition-all duration-500 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <div className="relative h-full flex flex-col glass rounded-2xl overflow-hidden shadow-soft hover:shadow-floating transition-all duration-300 border border-border">
              <div className="p-6 bg-gradient-to-br from-muted/50 to-muted/30 flex items-center justify-center">
                <div className="p-4 bg-background/80 backdrop-blur rounded-2xl shadow-md group-hover:scale-110 transition-transform duration-300">
                  <FileText className="h-10 w-10 text-primary" />
                </div>
              </div>

              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-serif font-bold mb-2">Basis Leesrapport</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-2xl font-bold text-primary">€89</span>
                  <span className="text-muted-foreground ml-1 text-sm">+ €0,01/woord</span>
                </div>

                <ul className="space-y-3 mb-6 flex-grow">
                  {[
                    "Algemene indruk manuscript",
                    "Plot, personages & stijl",
                    "Concrete verbeterpunten",
                    "Leesrapport 3-4 pagina's",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start text-sm">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5 mr-2" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mb-4 p-3 bg-primary/5 rounded-lg border border-primary/10">
                  <div className="flex items-start">
                    <Phone className="h-4 w-4 text-primary shrink-0 mt-0.5 mr-2" />
                    <div>
                      <p className="text-xs font-medium">Optie: Beoordelingsgesprek</p>
                      <p className="text-xs text-muted-foreground">1,5 uur voor €150</p>
                    </div>
                  </div>
                </div>

                <a
                  href="#contact"
                  className="w-full py-3 px-4 inline-flex justify-center items-center text-sm font-semibold rounded-xl bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Aanvragen
                </a>
              </div>
            </div>
          </div>

          {/* Uitgebreid Leesrapport - FEATURED */}
          <div className="group relative h-full lg:scale-105 transition-all duration-500 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <div className="relative h-full flex flex-col glass rounded-2xl overflow-hidden shadow-lifted hover:shadow-floating transition-all duration-300 border-2 border-primary/30">
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg">
                POPULAIR
              </div>

              <div className="p-6 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="p-4 bg-background/80 backdrop-blur rounded-2xl shadow-md group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="h-10 w-10 text-primary" />
                </div>
              </div>

              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-serif font-bold mb-2">Uitgebreid Leesrapport</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-2xl font-bold text-primary">€10,95</span>
                  <span className="text-muted-foreground ml-1 text-sm">/1000 woorden</span>
                </div>

                <ul className="space-y-3 mb-6 flex-grow">
                  {[
                    "Alles uit Basis pakket",
                    "Diepgaande analyse",
                    "Feedback per hoofdstuk",
                    "Rapport 6-8 pagina's",
                    "Spellingcontrole",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start text-sm">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5 mr-2" />
                      <span className="text-foreground font-medium">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mb-4 p-3 bg-primary/5 rounded-lg border border-primary/10">
                  <div className="flex items-start">
                    <Phone className="h-4 w-4 text-primary shrink-0 mt-0.5 mr-2" />
                    <div>
                      <p className="text-xs font-medium">Optie: Beoordelingsgesprek</p>
                      <p className="text-xs text-muted-foreground">1,5 uur voor €150</p>
                    </div>
                  </div>
                </div>

                <a
                  href="#contact"
                  className="w-full py-3 px-4 inline-flex justify-center items-center text-sm font-semibold rounded-xl bg-primary text-primary-foreground hover:bg-primary-hover shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Aanvragen
                </a>
              </div>
            </div>
          </div>

          {/* Volledige Eindredactie */}
          <div className="group relative h-full transition-all duration-500 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <div className="relative h-full flex flex-col glass rounded-2xl overflow-hidden shadow-soft hover:shadow-floating transition-all duration-300 border border-accent/20">
              <div className="absolute top-0 right-0 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-bl-lg">
                ADD-ON
              </div>

              <div className="p-6 bg-gradient-to-br from-accent/10 to-muted/30 flex items-center justify-center">
                <div className="p-4 bg-background/80 backdrop-blur rounded-2xl shadow-md group-hover:scale-110 transition-transform duration-300">
                  <Scissors className="h-10 w-10 text-accent-foreground" />
                </div>
              </div>

              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-serif font-bold mb-2">Volledige Eindredactie</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-2xl font-bold text-accent-foreground">€30</span>
                  <span className="text-muted-foreground ml-1 text-sm">/1000 woorden</span>
                </div>

                <div className="bg-accent/10 border border-accent/20 rounded-lg p-3 mb-4">
                  <p className="text-xs font-semibold text-accent-foreground">Extra bij bestaande pakketten</p>
                </div>

                <ul className="space-y-3 mb-6 flex-grow">
                  {[
                    "Persklaarmaken manuscript",
                    "Volledige correctieronde",
                    "Foutloos taal & structuur",
                    "Klaar voor uitgever",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start text-sm">
                      <CheckCircle className="w-4 h-4 text-accent-foreground shrink-0 mt-0.5 mr-2" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="w-full py-3 px-4 inline-flex justify-center items-center text-sm font-semibold rounded-xl bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Aanvragen
                </a>
              </div>
            </div>
          </div>

          {/* Volledig Redactietraject */}
          <div className="group relative h-full transition-all duration-500 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-primary/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <div className="relative h-full flex flex-col glass rounded-2xl overflow-hidden shadow-soft hover:shadow-floating transition-all duration-300 border border-border">
              <div className="p-6 bg-gradient-to-br from-secondary/10 to-muted/30 flex items-center justify-center">
                <div className="p-4 bg-background/80 backdrop-blur rounded-2xl shadow-md group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="h-10 w-10 text-secondary-foreground" />
                </div>
              </div>

              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-serif font-bold mb-2">Volledig Traject</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-2xl font-bold text-primary">Op aanvraag</span>
                </div>

                <ul className="space-y-3 mb-6 flex-grow">
                  {[
                    "Alles uit Uitgebreid",
                    "Volledige correctie",
                    "Meerdere revisies",
                    "Persoonlijke begeleiding",
                    "Publicatieadvies",
                    "Meerdere gesprekken",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start text-sm">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5 mr-2" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="w-full py-3 px-4 inline-flex justify-center items-center text-sm font-semibold rounded-xl bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Offerte Aanvragen
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Custom packages info */}
        <div className="mt-16 max-w-3xl mx-auto glass rounded-2xl p-8 shadow-soft border border-primary/10">
          <h3 className="text-lg font-serif font-bold mb-3 text-center">Aangepaste Pakketten</h3>
          <p className="text-muted-foreground mb-6 text-center">
            Manuscript past niet in bovenstaande pakketten? Neem contact op voor een aangepast voorstel.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-center p-4 bg-primary/5 rounded-xl">
              <p className="text-sm font-semibold text-foreground mb-1">Prijs per woord</p>
              <p className="text-xs text-muted-foreground">Vanaf €0,01/woord</p>
            </div>
            <div className="text-center p-4 bg-primary/5 rounded-xl">
              <p className="text-sm font-semibold text-foreground mb-1">Levertijd</p>
              <p className="text-xs text-muted-foreground">Gemiddeld 2-3 weken</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
