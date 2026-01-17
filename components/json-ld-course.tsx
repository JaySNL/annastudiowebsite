"use client"

export function JsonLdCourse() {
  const courseData = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Individuele Schrijfbegeleiding - Korte Verhalen",
    description:
      "Leer in zes persoonlijke sessies hoe je een meeslepend kort verhaal schrijft. Van idee naar afgerond verhaal van circa 1.500 woorden. Individuele schrijfbegeleiding onder begeleiding van Anna Strijbos.",
    provider: {
      "@type": "Person",
      name: "Anna Strijbos",
    },
    offers: {
      "@type": "Offer",
      price: "395",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      description: "Early bird prijs tijdens pilotfase. Regulier €495,-",
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "blended",
      instructor: {
        "@type": "Person",
        name: "Anna Strijbos",
      },
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(courseData) }}
    />
  )
}
