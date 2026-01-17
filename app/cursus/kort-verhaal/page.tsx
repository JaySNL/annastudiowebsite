import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CourseHero } from "@/components/course-hero"
import { CourseContent } from "@/components/course-content"
import { CourseDetails } from "@/components/course-details"
import { CourseFAQ } from "@/components/course-faq"
import { CourseCTA } from "@/components/course-cta"
import { JsonLdCourse } from "@/components/json-ld-course"
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata: Metadata = {
  title: "Schrijf jouw Korte Verhaal - Cursus bij Hart Haarlem | Anna Strijbos",
  description:
    "Leer in 8 weken hoe je een meeslepend kort verhaal schrijft. Schrijfcursus onder begeleiding van Anna Strijbos bij Hart Haarlem. Start januari 2026. Kleinschalige groep, persoonlijke feedback.",
  keywords:
    "schrijfcursus, kort verhaal schrijven, creatief schrijven, schrijfworkshop, Hart Haarlem, Anna Strijbos, schrijven leren, verhaaltechniek, korte verhalen cursus, schrijfdocent Haarlem, creatief schrijven Haarlem",
  openGraph: {
    title: "Schrijf jouw Korte Verhaal - Cursus bij Hart Haarlem | Anna Strijbos",
    description:
      "Leer in 8 weken hoe je een meeslepend kort verhaal schrijft onder begeleiding van Anna Strijbos. Start januari 2026 bij Hart Haarlem.",
    type: "website",
    locale: "nl_NL",
    url: "https://www.annasschrijfstudio.nl/cursus/kort-verhaal",
  },
  alternates: {
    canonical: "https://www.annasschrijfstudio.nl/cursus/kort-verhaal",
  },
}

export default function KortVerhaalPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Cursussen", href: "/" },
    { label: "Schrijf jouw Korte Verhaal" },
  ]

  return (
    <>
      <JsonLdCourse />
      <Header />
      <main>
        <div className="pt-4">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
        <CourseHero />
        <CourseContent />
        <CourseDetails />
        <CourseFAQ />
        <CourseCTA />
      </main>
      <Footer />
    </>
  )
}
