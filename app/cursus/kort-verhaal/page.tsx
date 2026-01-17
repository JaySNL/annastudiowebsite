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
  title: "Individuele Schrijfbegeleiding - Korte Verhalen | Anna Strijbos",
  description:
    "Leer in zes persoonlijke sessies hoe je een meeslepend kort verhaal schrijft. Individuele begeleiding van Anna Strijbos. Online of op locatie. Early bird €395,-.",
  keywords:
    "schrijfbegeleiding, kort verhaal schrijven, creatief schrijven, schrijfcoaching, Anna Strijbos, schrijven leren, verhaaltechniek, korte verhalen, schrijfdocent, individuele begeleiding",
  openGraph: {
    title: "Individuele Schrijfbegeleiding - Korte Verhalen | Anna Strijbos",
    description:
      "Leer in zes persoonlijke sessies hoe je een meeslepend kort verhaal schrijft. Individuele begeleiding van Anna Strijbos.",
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
