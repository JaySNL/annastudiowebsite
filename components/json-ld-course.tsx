export function JsonLdCourse() {
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Schrijf jouw Korte Verhaal",
    description:
      "Leer in 8 weken hoe je een meeslepend kort verhaal schrijft. Van idee naar afgerond verhaal van 1500 woorden. Schrijfcursus onder begeleiding van Anna Strijbos bij Hart Haarlem.",
    provider: {
      "@type": "Organization",
      name: "Hart Haarlem",
      sameAs: "https://www.hart-haarlem.nl",
    },
    instructor: {
      "@type": "Person",
      name: "Anna Strijbos",
      description: "Schrijver, redacteur en schrijfdocent",
    },
    courseCode: "585",
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "onsite",
      location: {
        "@type": "Place",
        name: "Hart Haarlem",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Gedempte Oude Gracht 32",
          addressLocality: "Haarlem",
          addressCountry: "NL",
        },
      },
      startDate: "2026-01-06",
      endDate: "2026-02-24",
      courseSchedule: {
        "@type": "Schedule",
        repeatFrequency: "P1W",
        repeatCount: 8,
        byDay: "Tuesday",
        startTime: "19:30",
        endTime: "21:30",
      },
      instructor: {
        "@type": "Person",
        name: "Anna Strijbos",
      },
    },
    offers: {
      "@type": "Offer",
      price: "349",
      priceCurrency: "EUR",
      availability: "https://schema.org/LimitedAvailability",
      url: "https://www.hart-haarlem.nl/cursussen/d/q/c/585/schrijf-jouw-korte-verhaal",
      validFrom: "2024-01-01",
    },
    numberOfCredits: 8,
    timeRequired: "P8W",
    educationalLevel: "Beginner",
    teaches: [
      "Kort verhaal schrijven",
      "Verhaaltechniek",
      "Karakterontwikkeling",
      "Dialogen",
      "Spanningsopbouw",
      "Literaire technieken",
    ],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
}
