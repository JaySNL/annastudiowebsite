"use client"

import { FileText, BookOpen, Sparkles, Scissors, Phone, CheckCircle, HelpCircle } from "lucide-react"

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
          {/* 1. Inhoudelijke redactieronde */}
          <div className="group relative h-full transition-all duration-500 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <div className="relative h-full flex flex-col glass rounded-2xl overflow-hidden shadow-soft hover:shadow-floating transition-all duration-300 border border-border">
              <div className="p-6 bg-gradient-to-br from-muted/50 to-muted/30 flex items-center justify-center">
                <div className="p-4 bg-background/80 backdrop-blur rounded-2xl shadow-md group-hover:scale-110 transition-transform duration-300">
                  <FileText className="h-10 w-10 text-primary" />
                </div>
              </div>

              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-serif font-bold mb-2">Inhoudelijke Redactieronde</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-2xl font-bold text-primary">€8,95</span>
                  <span className="text-muted-foreground ml-1 text-sm">/1000 woorden</span>
                </div>

                <ul className="space-y-3 mb-6 flex-grow">
                  {[
                    "Diepgaande leeservaring",
                    "Helderheid verhaallijn",
                    "Analyse hoofdstukopbouw",
                    "Feedback per hoofdstuk",
                    "Advies thema's & logica",
                    "Geen taalcorrecties",
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
                  Aanvragen
                </a>
              </div>
            </div>
          </div>

          {/* 2. Inhoudelijk + Spelling - POPULAIR */}
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
                <h3 className="text-xl font-serif font-bold mb-2">Inhoudelijk + Spelling</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-2xl font-bold text-primary">€10,95</span>
                  <span className="text-muted-foreground ml-1 text-sm">/1000 woorden</span>
                </div>

                <ul className="space-y-3 mb-6 flex-grow">
                  {[
                    "Alles van Inhoudelijk",
                    "Spellingcontrole",
                    "Grammaticale correcties",
                    "Duidelijkheidsfouten",
                    "Consistente stijl",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start text-sm">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5 mr-2" />
                      <span className="text-foreground font-medium">{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="w-full py-3 px-4 inline-flex justify-center items-center text-sm font-semibold rounded-xl bg-primary text-primary-foreground hover:bg-primary-hover shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Aanvragen
                </a>
              </div>
            </div>
          </div>

          {/* 3. Persklaarmaken */}
          <div className="group relative h-full transition-all duration-500 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <div className="relative h-full flex flex-col glass rounded-2xl overflow-hidden shadow-soft hover:shadow-floating transition-all duration-300 border border-accent/20">
              <div className="p-6 bg-gradient-to-br from-accent/10 to-muted/30 flex items-center justify-center">
                <div className="p-4 bg-background/80 backdrop-blur rounded-2xl shadow-md group-hover:scale-110 transition-transform duration-300">
                  <Scissors className="h-10 w-10 text-accent-foreground" />
                </div>
              </div>

              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-serif font-bold mb-2">Persklaarmaken</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-2xl font-bold text-accent-foreground">€15,00</span>
                  <span className="text-muted-foreground ml-1 text-sm">/1000 woorden</span>
                </div>

                <ul className="space-y-3 mb-6 flex-grow">
                  {[
                    "Publicatiekwaliteit",
                    "Consistent taalgebruik",
                    "Indeling & bladspiegel",
                    "Layout check",
                    "Advies leeslogica",
                    "Kleine ingrepen",
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

          {/* 4. Eindcorrectie */}
          <div className="group relative h-full transition-all duration-500 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-primary/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <div className="relative h-full flex flex-col glass rounded-2xl overflow-hidden shadow-soft hover:shadow-floating transition-all duration-300 border border-border">
              <div className="absolute top-0 right-0 bg-muted text-muted-foreground text-xs font-bold px-3 py-1 rounded-bl-lg border-l border-b border-border">
                LAATSTE CHECK
              </div>

              <div className="p-6 bg-gradient-to-br from-secondary/10 to-muted/30 flex items-center justify-center">
                <div className="p-4 bg-background/80 backdrop-blur rounded-2xl shadow-md group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="h-10 w-10 text-secondary-foreground" />
                </div>
              </div>

              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-serif font-bold mb-2">Eindcorrectie</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-2xl font-bold text-primary">€6,95</span>
                  <span className="text-muted-foreground ml-1 text-sm">/1000 woorden</span>
                </div>

                <ul className="space-y-3 mb-6 flex-grow">
                  {[
                    "Volledige spellingcheck",
                    "Typfouten verwijderen",
                    "Punt- en kommacorrecties",
                    "Interpunctie & quotes",
                    "Check afkortingen/getallen",
                    "Technische nacontrole",
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
                  Aanvragen
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Adviesgesprek Add-on */}
        <div className="mt-16 max-w-4xl mx-auto glass rounded-2xl p-8 shadow-soft border border-primary/10">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-serif font-bold">Add-on: Adviesgesprek</h3>
              </div>

              <p className="text-muted-foreground mb-4">
                Wil je niet alleen een manuscript laten lezen, maar er actief over sparren, richting bepalen of samen keuzes maken?
              </p>
              <p className="text-muted-foreground mb-4">
                We stemmen eerst via mail af wat je nodig hebt, daarna sparren we, en ik lever na afloop een korte samenvatting met concrete vervolgstappen.
              </p>
            </div>

            <div className="flex-shrink-0 w-full md:w-auto flex flex-col gap-4">
              <div className="p-4 bg-background/50 rounded-xl border border-primary/10 min-w-[250px]">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-semibold">60 min advies</span>
                  <span className="text-lg font-bold text-primary">€135</span>
                </div>
                <p className="text-xs text-muted-foreground">Exclusief btw</p>
              </div>

              <div className="p-4 bg-background/50 rounded-xl border border-primary/10 min-w-[250px] relative overflow-hidden">
                <div className="absolute right-0 top-0 bg-accent/20 text-accent-foreground text-[10px] font-bold px-2 py-0.5 rounded-bl">POPULAIR</div>
                <div className="flex justify-between items-center mb-1">
                  <span className="font-semibold">90 min advies</span>
                  <span className="text-lg font-bold text-primary">€195</span>
                </div>
                <p className="text-xs text-muted-foreground">Exclusief btw</p>
              </div>

              <a href="#contact" className="text-center text-sm font-semibold text-primary hover:underline mt-2">
                Direct een gesprek inplannen &rarr;
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
