"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Award, ExternalLink } from "lucide-react"
import Image from "next/image"

export default function OverAnna() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-20 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto">
              <h1 className="fluid-h2 text-foreground mb-8 text-center">
                <span className="gradient-text">Over Anna</span>
              </h1>

              <div className="grid md:grid-cols-5 gap-12 items-start">
                {/* Photo */}
                <div className="md:col-span-2">
                  <div className="glass rounded-2xl overflow-hidden shadow-soft border border-primary/10">
                    <Image
                      src="/images/anna/anna-1.jpg"
                      alt="Anna Strijbos"
                      width={600}
                      height={900}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="mt-4 glass rounded-xl p-4 shadow-soft border border-primary/10 text-center">
                    <p className="text-sm text-muted-foreground italic">
                      Momenteel in opdracht voor Kobo Originals en Nuanxed, en begeleid veel auteurs individueel.
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-3 space-y-6">
                  <div className="glass rounded-2xl p-8 shadow-soft border border-primary/10">
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        Ik ben Anna Strijbos, professioneel redacteur en oprichter van Anna&apos;s Studio. Mijn kantoor is gevestigd in Haarlem, de stad waar ik momenteel woon en werk. Toen ik zeventien was, begon ik met het schrijven van een autobiografisch manuscript. Ik was lange tijd ziek geweest en kampte met mentale klachten, en voelde de sterke behoefte om daar woorden aan te geven.
                      </p>
                      <p>
                        Met mijn eerste versie stapte ik naar een freelance redacteur. Die maakte duidelijk dat er nog veel aan het manuscript moest gebeuren; iets wat ik toen als confronterend en pijnlijk ervoer, maar wat achteraf een keerpunt bleek. In plaats van te stoppen, besloot ik me te verdiepen in het schrijven en het redigeren van boeken. Ik begon verschillende genres te lezen en analyseren, sloot me een jaar later aan bij Schrijven Magazine om feedback te geven op verhalen, en ontwikkelde gaandeweg een scherp en analytisch oog voor tekst.
                      </p>
                      <p>
                        Die ontwikkeling leidde tot een stage bij Uitgeverij Atlas Contact, waardevolle samenwerkingen met diverse uitgeverijen en particuliere auteurs, en uiteindelijk tot de oprichting van mijn eigen redacteursbureau. Daarnaast combineer ik mijn redactionele werk met mijn studie Psychologie aan de Open Universiteit. Deze combinatie is een grote meerwaarde bij het beoordelen van een manuscript: schrijven heeft alles te maken met psychologie. Dankzij deze blik kijk ik verder dan de grammatica alleen; ik begrijp de diepere lagen van personages, de menselijke motivaties en de psychologische spanningsboog in een verhaal.
                      </p>
                      <p>
                        Omdat ik uit eigen ervaring weet hoe kwetsbaar een manuscript kan zijn, ga ik met grote zorg om met iedere tekst die ik lees. Eerlijkheid staat bij mij voorop, maar altijd in combinatie met aandacht, precisie en respect voor de unieke stem van de schrijver. Ik denk daarbij nog regelmatig terug aan het meisje van zeventien dat ik was: onzeker, maar vastbesloten om haar boek te schrijven.
                      </p>
                      <p>
                        Ieder boek raakt aan iets wezenlijks, en aan iedere tekst valt te schaven. Vanuit die overtuiging werk ik wanneer ik een boek persklaar maak of auteurs begeleid: analytisch, betrokken, psychologisch onderlegd en met oog voor zowel inhoud als vorm.
                      </p>
                    </div>
                  </div>

                  {/* Expertise Cards */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="glass rounded-xl p-6 text-center shadow-soft hover:shadow-lifted transition-all duration-300 border border-primary/10">
                      <p className="font-semibold text-foreground">Redactie</p>
                      <p className="text-sm text-muted-foreground mt-1">Professionele beoordeling</p>
                    </div>
                    <div className="glass rounded-xl p-6 text-center shadow-soft hover:shadow-lifted transition-all duration-300 border border-primary/10">
                      <p className="font-semibold text-foreground">Schrijfcoach</p>
                      <p className="text-sm text-muted-foreground mt-1">Persoonlijke begeleiding</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Publications Section */}
              <div className="mt-16 glass rounded-2xl p-8 shadow-soft border border-primary/10">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-6 flex items-center gap-2">
                  <Award className="h-6 w-6 text-primary" />
                  Literaire &amp; journalistieke publicaties
                </h2>
                <ul className="space-y-3">
                  {[
                    { title: "ParaVisie", work: "5 x je trilling hoog houden" },
                    { title: "Katholiek Nieuwsblad", work: "Bijbel vol bloed, waarom is de Schrift zo gewelddadig?" },
                    { title: "Katholiek Nieuwsblad", work: "Interview Katie Vlaardingerbroek: Therapie als nieuwe religie?" },
                    { title: "Schrijven Magazine", work: "Regelmatig verdiepende artikelen rondom schrijven" },
                    { title: "Lezenswaardig", work: "99-woordenverhalen 'Kolere Thailand'" },
                    { title: "Lezenswaardig", work: "55-woordenverhalen 'Tropen Trauma'" },
                    { title: "Lezenswaardig", work: "Verhalen waar je blij van wordt! 'Stilte na haar'" },
                    { title: "Blind", work: "Kort verhaal 'Absint'" },
                    { title: "Phronèsis", work: "Het belang van filosofie in het onderwijs" },
                    { title: "schrijvenonline.org", work: "Meerdere 99-woordenverhalen" },
                  ].map((pub, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span className="text-sm text-muted-foreground">
                        <strong className="text-foreground">{pub.title}</strong> — {pub.work}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    Te gast geweest bij de podcast{" "}
                    <strong className="text-foreground">&quot;Schrijfpraat&quot;</strong>
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    En vele andere publicaties op{" "}
                    <a
                      href="https://schrijvenonline.org/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary hover:text-primary-hover inline-flex items-center gap-1"
                    >
                      schrijvenonline.org
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-12 glass rounded-2xl p-8 shadow-soft border border-primary/10 text-center">
                <p className="font-semibold text-primary text-lg mb-4">Interesse in samenwerking?</p>
                <p className="text-muted-foreground mb-6">
                  Laten we kennismaken en kijken hoe ik jouw schrijfproces kan versterken.
                </p>
                <a
                  href="/#contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary-hover transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Neem contact op
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
