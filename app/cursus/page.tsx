import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { BookOpen, Users, CheckCircle, Sparkles, ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Cursussen - Schrijfbegeleiding | Anna Strijbos",
    description:
        "Ontdek je schrijftalent of krijg persoonlijke begeleiding voor je korte verhaal. Professionele schrijfcursussen en individuele coaching.",
    keywords:
        "schrijfcursus, schrijfbegeleiding, korte verhalen, creatief schrijven, Anna Strijbos, schrijfcoaching",
    openGraph: {
        title: "Cursussen - Schrijfbegeleiding | Anna Strijbos",
        description:
            "Ontdek je schrijftalent of krijg persoonlijke begeleiding voor je korte verhaal.",
        type: "website",
        locale: "nl_NL",
        url: "https://www.annasschrijfstudio.nl/cursus",
    },
    alternates: {
        canonical: "https://www.annasschrijfstudio.nl/cursus",
    },
}

export default function CursusPage() {
    const breadcrumbItems = [
        { label: "Home", href: "/" },
        { label: "Cursussen" },
    ]

    return (
        <>
            <Header />
            <main>
                <div className="pt-4">
                    <Breadcrumbs items={breadcrumbItems} />
                </div>

                {/* Hero Section */}
                <section className="relative py-20 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/5">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium text-primary bg-primary/10 rounded-full">
                                <Sparkles className="w-4 h-4 text-primary" />
                                Professionele Schrijfbegeleiding
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
                                Ontwikkel je <span className="gradient-text">Schrijftalent</span>
                            </h1>

                            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                                Kies de begeleiding die bij jou past: ontdek verschillende schrijfstijlen of werk intensief aan één kort verhaal.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Courses Section */}
                <section className="py-20 bg-background">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

                            {/* OJS Course */}
                            <div className="group relative h-full transition-all duration-500 hover:-translate-y-2">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

                                <div className="relative h-full flex flex-col glass rounded-2xl overflow-hidden shadow-soft hover:shadow-floating transition-all duration-300 border border-border">
                                    {/* Icon Section */}
                                    <div className="p-8 flex justify-center items-center bg-gradient-to-br from-muted/50 to-muted/30">
                                        <div className="p-4 bg-background/80 backdrop-blur rounded-2xl shadow-md group-hover:scale-110 transition-transform duration-300">
                                            <BookOpen className="h-12 w-12 text-primary" />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-8 flex-grow flex flex-col">
                                        <h3 className="text-2xl font-serif font-bold text-foreground mb-3">Ontdek je schrijftalent</h3>
                                        <p className="text-muted-foreground mb-4 flex-grow">
                                            Wil je de verschillende facetten van schrijven ontdekken? In deze schrijfcursus prikkelen we je schrijftalent, moedigen je muze aan en verrijken je schrijfproces.
                                        </p>

                                        <div className="mb-6">
                                            <p className="text-3xl font-bold text-primary mb-1">€109</p>
                                            <p className="text-sm text-muted-foreground">4 lessen in je eigen tempo</p>
                                        </div>

                                        {/* Features */}
                                        <ul className="space-y-3 mb-6">
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                                <span className="text-sm text-muted-foreground">Verschillende genres: kort verhaal, poëzie, toneel en non-fictie</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                                <span className="text-sm text-muted-foreground">Persoonlijke feedback van Anna Strijbos</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                                <span className="text-sm text-muted-foreground">Schrijftechnieken en creatieve oefeningen</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                                <span className="text-sm text-muted-foreground">Uitgebreid eindrapport</span>
                                            </li>
                                        </ul>

                                        {/* CTA */}
                                        <div className="mt-auto">
                                            <Link
                                                href="https://schrijfcursussen.nu/product/ontdek-je-schrijftalent/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group/btn w-full py-4 px-6 inline-flex justify-center items-center gap-2 text-sm font-semibold rounded-xl transition-all duration-300 bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-md hover:shadow-lg"
                                            >
                                                Meer informatie
                                                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Individual Guidance */}
                            <div className="group relative h-full transition-all duration-500 hover:-translate-y-2 lg:scale-105">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

                                <div className="relative h-full flex flex-col glass rounded-2xl overflow-hidden shadow-soft hover:shadow-floating transition-all duration-300 border-2 border-primary/30">
                                    {/* Badge */}
                                    <div className="absolute top-4 right-4 z-10">
                                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold shadow-md">
                                            <Sparkles className="w-3 h-3" />
                                            EARLY BIRD
                                        </span>
                                    </div>

                                    {/* Icon Section */}
                                    <div className="p-8 flex justify-center items-center bg-gradient-to-br from-primary/20 to-accent/20">
                                        <div className="p-4 bg-background/80 backdrop-blur rounded-2xl shadow-md group-hover:scale-110 transition-transform duration-300">
                                            <Users className="h-12 w-12 text-primary" />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-8 flex-grow flex flex-col">
                                        <h3 className="text-2xl font-serif font-bold text-foreground mb-3">Individuele schrijfbegeleiding</h3>
                                        <p className="text-muted-foreground mb-4 flex-grow">
                                            Leer in zes persoonlijke sessies hoe je een kort verhaal schrijft dat blijft hangen. Van eerste idee tot afgerond verhaal, één-op-één begeleiding.
                                        </p>

                                        <div className="mb-6">
                                            <p className="text-3xl font-bold text-primary mb-1">€395</p>
                                            <p className="text-sm text-muted-foreground">Early bird (pilotfase) • Normaal €495</p>
                                        </div>

                                        {/* Features */}
                                        <ul className="space-y-3 mb-6">
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                                <span className="text-sm text-muted-foreground">6 individuele sessies van 1 uur</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                                <span className="text-sm text-muted-foreground">Persoonlijke feedback tussen de lessen</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                                <span className="text-sm text-muted-foreground">Verdieping in perspectief, structuur en stijl</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                                <span className="text-sm text-muted-foreground">Afgerond kort verhaal (± 1.500 woorden)</span>
                                            </li>
                                        </ul>

                                        {/* CTA */}
                                        <div className="mt-auto">
                                            <Link
                                                href="/cursus/kort-verhaal"
                                                className="group/btn w-full py-4 px-6 inline-flex justify-center items-center gap-2 text-sm font-semibold rounded-xl transition-all duration-300 bg-primary text-primary-foreground hover:bg-primary-hover shadow-md hover:shadow-lg"
                                            >
                                                Meer informatie
                                                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* About Section */}
                <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-primary/5">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-8">Over de docent</h2>
                            <div className="glass rounded-2xl p-8 shadow-soft">
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    Anna Strijbos heeft ervaring opgedaan bij uitgeverij Atlas Contact en werkt als freelance (eind)redacteur bij Blossom Books. Ze heeft diverse publicaties op haar naam staan in Lezenswaardig, Blind, Phronèsis en Schrijven Magazine.
                                </p>
                                <p className="text-muted-foreground leading-relaxed">
                                    Met haar achtergrond in filosofie en psychologie brengt Anna een unieke blik op tekst en verhaal. Ze begeleidt schrijvers met aandacht, precisie en respect voor hun eigen stem.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    )
}
