"use client"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { UspSection } from "@/components/usp-section"
import { About } from "@/components/about"
import { ReviewsSection } from "@/components/reviews-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { JsonLd } from "@/components/json-ld"
import { BooksShowcase } from "@/components/books-showcase"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <UspSection />
        <Services />
        <BooksShowcase />
        <About />
        <ReviewsSection />
        <ContactSection />
      </main>
      <Footer />
      <JsonLd />
    </div>
  )
}
