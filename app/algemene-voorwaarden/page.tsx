import type { Metadata } from "next"
import Link from "next/link"
import { Download, FileText, ArrowLeft, Shield, AlertCircle } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Algemene Voorwaarden & Annuleringsbeleid | Anna's Schrijfstudio",
  description:
    "Lees hier de algemene voorwaarden en het annuleringsbeleid van Anna's Schrijfstudio. Transparante afspraken over onze dienstverlening.",
}

export default function AlgemeneVoorwaardenPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Terug naar home
          </Link>

          <div className="bg-card border rounded-lg p-8 shadow-sm">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h1 className="text-3xl font-bold mb-2">Algemene Voorwaarden & Annuleringsbeleid</h1>
                <p className="text-muted-foreground">Anna's Schrijfstudio - Versie 26 december 2025</p>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-8">
              <div className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-blue-900 dark:text-blue-100">
                    Verplichte consumenteninformatie
                  </p>
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    Voor een volledig overzicht van je rechten en onze verplichtingen volgens artikel 6:230m BW, bekijk
                    onze{" "}
                    <Link href="/informatieplicht" className="underline font-semibold hover:text-blue-600">
                      informatieplicht-pagina
                    </Link>
                    . Daar vind je onder andere informatie over je herroepingsrecht en het modelformulier.
                  </p>
                </div>
              </div>
            </div>

            <div className="prose prose-sm max-w-none mb-8">
              <p className="text-base">
                Bij Anna's Schrijfstudio werken we volgens duidelijke en transparante afspraken. In onze algemene
                voorwaarden vind je informatie over:
              </p>

              <ul className="space-y-2 my-6">
                <li>Hoe opdrachten tot stand komen en worden uitgevoerd</li>
                <li>Je wettelijke herroepingsrecht (14 dagen bedenktijd)</li>
                <li>Annuleringsbeleid en eventuele kosten</li>
                <li>Intellectueel eigendom en privacy</li>
                <li>Betaling en aansprakelijkheid</li>
              </ul>

              <p className="text-base">
                We adviseren je om deze voorwaarden door te lezen voordat je een opdracht plaatst. Heb je vragen? Neem
                gerust contact op.
              </p>
            </div>

            <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4 mb-8">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-amber-900 dark:text-amber-100">
                    Herroepingsrecht modelformulier
                  </p>
                  <p className="text-sm text-amber-800 dark:text-amber-200">
                    Wil je van je herroepingsrecht gebruikmaken? Download dan het{" "}
                    <a href="/modelformulier.pdf" download className="underline font-semibold hover:text-amber-600">
                      modelformulier voor herroeping
                    </a>{" "}
                    of lees meer op de{" "}
                    <Link
                      href="/informatieplicht#herroepingsrecht"
                      className="underline font-semibold hover:text-amber-600"
                    >
                      informatieplicht-pagina
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href="/algemene-voorwaarden-annastudio.pdf"
                download="Algemene-Voorwaarden-Annastudio.pdf"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                <Download className="h-5 w-5" />
                Download PDF
              </a>
              <a
                href="/algemene-voorwaarden-annastudio.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-lg hover:bg-secondary/80 transition-colors font-medium"
              >
                <FileText className="h-5 w-5" />
                Open in nieuwe tab
              </a>
            </div>

            <div className="mt-8 pt-8 border-t">
              <h2 className="font-semibold mb-4">Belangrijke punten</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Bedenktijd</h3>
                  <p className="text-sm text-muted-foreground">
                    Je hebt 14 dagen bedenktijd na het sluiten van de overeenkomst
                  </p>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Inspanningsverplichting</h3>
                  <p className="text-sm text-muted-foreground">
                    We leveren professioneel werk, maar kunnen geen publicatiegarantie geven
                  </p>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Intellectueel eigendom</h3>
                  <p className="text-sm text-muted-foreground">Je krijgt gebruiksrecht voor persoonlijke doeleinden</p>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Betaling</h3>
                  <p className="text-sm text-muted-foreground">Betaling binnen 14 dagen na factuurdatum</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t">
              <h2 className="font-semibold mb-4">Gerelateerde pagina's</h2>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/informatieplicht"
                  className="inline-flex items-center gap-2 text-sm bg-secondary text-secondary-foreground px-4 py-2 rounded-lg hover:bg-secondary/80 transition-colors"
                >
                  <Shield className="h-4 w-4" />
                  Informatieplicht (art. 6:230m BW)
                </Link>
                <a
                  href="/modelformulier.pdf"
                  download
                  className="inline-flex items-center gap-2 text-sm bg-secondary text-secondary-foreground px-4 py-2 rounded-lg hover:bg-secondary/80 transition-colors"
                >
                  <Download className="h-4 w-4" />
                  Modelformulier herroeping
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
