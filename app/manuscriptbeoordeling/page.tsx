"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ManuscriptHero } from "@/components/manuscript-hero"
import { ManuscriptServices } from "@/components/manuscript-services"
import { ManuscriptProcess } from "@/components/manuscript-process"
import { ManuscriptFaq } from "@/components/manuscript-faq"
import { ManuscriptTestimonials } from "@/components/manuscript-testimonials"
import { ManuscriptCta } from "@/components/manuscript-cta"
import { JsonLdManuscript } from "@/components/json-ld-manuscript"
import { useEffect } from "react"

export default function ManuscriptPage() {
  // Add metadata to the document head
  useEffect(() => {
    // Update document title
    document.title = "Manuscriptbeoordeling door Anna Strijbos | Professionele Redacteur"

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Laat je manuscript beoordelen door Anna Strijbos, professionele redacteur. Inclusief opties voor proeflezen, spellingcontrole en structuuradvies. Variabele pakketten beschikbaar.",
      )
    }
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <ManuscriptHero />
        <ManuscriptServices />
        <ManuscriptProcess />
        <ManuscriptTestimonials />
        <ManuscriptFaq />
        <ManuscriptCta />
      </main>
      <Footer />
      <JsonLdManuscript />
    </div>
  )
}
