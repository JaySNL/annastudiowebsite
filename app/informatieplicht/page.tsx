import type { Metadata } from "next"
import Link from "next/link"
import { Download, FileText, ArrowLeft, Building2, Mail, AlertCircle, Shield } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Informatieplicht voor Consumenten (art. 6:230m BW) | Anna's Schrijfstudio",
  description:
    "Verplichte informatie voor consumenten volgens artikel 6:230m BW. Bedrijfsgegevens, diensten, prijzen, herroepingsrecht en algemene voorwaarden.",
}

export default function InformatieplichtPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Terug naar home
          </Link>

          <div className="bg-card border rounded-lg p-8 shadow-sm">
            {/* Header */}
            <div className="flex items-start gap-4 mb-8">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h1 className="text-3xl font-bold mb-2">Verplichte informatie voor consumenten</h1>
                <p className="text-muted-foreground">Artikel 6:230m Burgerlijk Wetboek</p>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-8">
              <div className="flex items-start gap-3">
                <FileText className="h-5 w-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-blue-900 dark:text-blue-100">Algemene voorwaarden</p>
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    Voor uitgebreide informatie over intellectueel eigendom, aansprakelijkheid en geschillenregeling,
                    bekijk onze{" "}
                    <Link href="/algemene-voorwaarden" className="underline font-semibold hover:text-blue-600">
                      algemene voorwaarden pagina
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              {/* 1. Bedrijfsgegevens */}
              <section className="border-l-4 border-primary pl-6">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-primary" />
                  Bedrijfsgegevens
                </h2>
                <div className="space-y-3 text-sm">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-semibold text-foreground">Handelsnaam</p>
                      <p className="text-muted-foreground">Anna's Schrijfstudio</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">KvK-nummer</p>
                      <p className="text-muted-foreground">98353993</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Adres</p>
                      <p className="text-muted-foreground">
                        Spaarnwouderstraat 82B
                        <br />
                        2011 AG Haarlem
                        <br />
                        Nederland
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Contact</p>
                      <p className="text-muted-foreground">
                        E-mail:{" "}
                        <a href="mailto:legal@annastudio.nl" className="text-primary hover:underline">
                          legal@annastudio.nl
                        </a>
                        <br />
                        Via contactformulier:{" "}
                        <a href="/#contact" className="text-primary hover:underline">
                          annastudio.nl/#contact
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* 2. Dienstenomschrijving */}
              <section className="border-l-4 border-primary pl-6">
                <h2 className="text-xl font-bold mb-4">Dienstenomschrijving</h2>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Anna's Schrijfstudio biedt professionele diensten op het gebied van:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        <strong>Manuscriptbeoordeling:</strong> Een grondig leesrapport van jouw manuscript met aandacht
                        voor plot, personages, stijl en structuur
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        <strong>Redactionele diensten:</strong> Tekstredactie, eindredactie en/of copyediting van
                        manuscripten
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        <strong>Leesrapporten:</strong> Basis of uitgebreid leesrapport met gedetailleerde feedback
                      </span>
                    </li>
                  </ul>
                  <div className="bg-muted/50 p-4 rounded-lg mt-4">
                    <h3 className="font-semibold mb-2">Fasen van de dienstverlening</h3>
                    <ol className="space-y-2 text-sm text-muted-foreground">
                      <li>1. Intake en offerte op basis van manuscript en wensen</li>
                      <li>2. Betaling en bevestiging van opdracht</li>
                      <li>3. Uitvoering van dienst (levertijd: 2-4 weken afhankelijk van omvang)</li>
                      <li>4. Levering van rapport of geredigeerde tekst via e-mail</li>
                    </ol>
                  </div>
                </div>
              </section>

              {/* 3. Totaalprijs */}
              <section className="border-l-4 border-primary pl-6">
                <h2 className="text-xl font-bold mb-4">Prijzen en betaling</h2>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h3 className="font-semibold mb-2">Basis leesrapport</h3>
                      <p className="text-2xl font-bold text-primary mb-1">Vanaf €195</p>
                      <p className="text-xs text-muted-foreground">Inclusief BTW, geen verborgen kosten</p>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h3 className="font-semibold mb-2">Uitgebreid leesrapport</h3>
                      <p className="text-2xl font-bold text-primary mb-1">Vanaf €295</p>
                      <p className="text-xs text-muted-foreground">Inclusief BTW, geen verborgen kosten</p>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h3 className="font-semibold mb-2">Volledige eindredactie</h3>
                      <p className="text-2xl font-bold text-primary mb-1">Op aanvraag</p>
                      <p className="text-xs text-muted-foreground">Prijsindicatie op basis van wordcount</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Alle prijzen zijn inclusief BTW en bevatten geen verborgen kosten. De exacte prijs wordt bepaald op
                    basis van de omvang van het manuscript en je specifieke wensen, en wordt vooraf in een offerte
                    vastgelegd.
                  </p>
                </div>
              </section>

              {/* 4. Betaling en uitvoering */}
              <section className="border-l-4 border-primary pl-6">
                <h2 className="text-xl font-bold mb-4">Betaling en uitvoering</h2>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>
                    <strong>Betaalmethoden:</strong> iDEAL, bankoverschrijving
                  </p>
                  <p>
                    <strong>Betalingstermijn:</strong> Betaling binnen 14 dagen na factuurdatum
                  </p>
                  <p>
                    <strong>Start dienstverlening:</strong> De werkzaamheden starten na ontvangst van de betaling
                  </p>
                  <p>
                    <strong>Levertijd:</strong> 2-4 weken na ontvangst van het manuscript en betaling, afhankelijk van
                    omvang en complexiteit
                  </p>
                  <p>
                    <strong>Levering:</strong> Digitaal via e-mail (PDF rapport of geredigeerd Word-document)
                  </p>
                </div>
              </section>

              {/* 5. Herroepingsrecht */}
              <section className="border-l-4 border-primary pl-6" id="herroepingsrecht">
                <h2 className="text-xl font-bold mb-4">Herroepingsrecht (14 dagen bedenktijd)</h2>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Als consument heb je het recht om binnen <strong>14 dagen</strong> na het sluiten van de
                    overeenkomst deze te herroepen, zonder opgave van reden.
                  </p>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Hoe herroep je?</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Je kunt gebruikmaken van het modelformulier voor herroeping of een eigen verklaring sturen naar{" "}
                      <a href="mailto:legal@annastudio.nl" className="text-primary hover:underline">
                        legal@annastudio.nl
                      </a>
                    </p>
                    <a
                      href="/modelformulier.pdf"
                      download="Modelformulier-Herroeping.pdf"
                      className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
                    >
                      <Download className="h-4 w-4" />
                      Download modelformulier herroeping
                    </a>
                  </div>
                </div>
              </section>

              {/* 6. Waarschuwing bij directe start */}
              <section className="border-l-4 border-amber-500 pl-6 bg-amber-50 dark:bg-amber-950/20 -mx-8 px-14 py-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-6 w-6 text-amber-600 shrink-0 mt-1" />
                  <div>
                    <h2 className="text-xl font-bold mb-3 text-amber-900 dark:text-amber-100">
                      Belangrijke waarschuwing: Start tijdens bedenktijd
                    </h2>
                    <div className="space-y-3 text-sm text-amber-900/80 dark:text-amber-100/80">
                      <p>
                        <strong>Let op:</strong> Vraag je om directe start van de werkzaamheden tijdens de 14-daagse
                        bedenktijd? Dan kun je bij herroeping een <strong>evenredige vergoeding</strong> verschuldigd
                        zijn voor het werk dat al is verricht.
                      </p>
                      <p>
                        Dit betekent dat als wij al begonnen zijn met de manuscriptbeoordeling of redactie, en je
                        vervolgens binnen de bedenktijd herroept, je een deel van het honorarium moet betalen. Dit
                        bedrag is evenredig aan het reeds verrichte werk.
                      </p>
                      <p className="font-semibold">
                        Wil je geen risico lopen op kosten bij herroeping? Vraag dan niet om directe start en wacht met
                        de opdracht tot na de bedenktermijn van 14 dagen.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* 7. Algemene voorwaarden */}
              <section className="border-l-4 border-primary pl-6">
                <h2 className="text-xl font-bold mb-4">Algemene voorwaarden</h2>
                <p className="text-muted-foreground mb-4">
                  Op alle overeenkomsten zijn de algemene voorwaarden van Anna's Schrijfstudio van toepassing. Hierin
                  vind je uitgebreide informatie over intellectueel eigendom, aansprakelijkheid, privacy en
                  geschillenregeling.
                </p>
                <a
                  href="/algemene-voorwaarden-annastudio.pdf"
                  download="Algemene-Voorwaarden-Annastudio.pdf"
                  className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-2 rounded-lg hover:bg-secondary/80 transition-colors text-sm font-medium"
                >
                  <FileText className="h-4 w-4" />
                  Download algemene voorwaarden
                </a>
              </section>

              {/* 8. Klachten en geschillen */}
              <section className="border-l-4 border-primary pl-6">
                <h2 className="text-xl font-bold mb-4">Klachten en geschillen</h2>
                <div className="space-y-4 text-sm text-muted-foreground">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Klachtenprocedure</h3>
                    <p>
                      Heb je een klacht over onze dienstverlening? Neem dan zo snel mogelijk contact met ons op via{" "}
                      <a href="mailto:legal@annastudio.nl" className="text-primary hover:underline">
                        legal@annastudio.nl
                      </a>
                      . We streven ernaar klachten binnen 14 dagen te behandelen en op te lossen.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Geschillenbeslechting</h3>
                    <p>
                      Komen we er onderling niet uit? Dan kun je het geschil voorleggen aan de{" "}
                      <strong>Geschillencommissie Vrije Beroepen</strong> of via het Europees ODR-platform voor
                      consumenten:{" "}
                      <a
                        href="https://ec.europa.eu/consumers/odr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        ec.europa.eu/consumers/odr
                      </a>
                    </p>
                  </div>
                </div>
              </section>

              {/* Footer section */}
              <section className="pt-8 border-t">
                <div className="flex flex-wrap gap-4 items-center justify-between">
                  <div className="text-sm text-muted-foreground">
                    <p className="font-semibold">Datum laatste update:</p>
                    <p>26 december 2025</p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="/modelformulier.pdf"
                      className="text-sm text-primary hover:underline flex items-center gap-1"
                    >
                      <FileText className="h-4 w-4" />
                      Modelformulier
                    </a>
                    <span className="text-muted-foreground">•</span>
                    <Link
                      href="/algemene-voorwaarden"
                      className="text-sm text-primary hover:underline flex items-center gap-1"
                    >
                      <FileText className="h-4 w-4" />
                      Algemene Voorwaarden
                    </Link>
                    <span className="text-muted-foreground">•</span>
                    <a href="/#contact" className="text-sm text-primary hover:underline flex items-center gap-1">
                      <Mail className="h-4 w-4" />
                      Contact
                    </a>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
