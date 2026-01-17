export function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Anna's Schrijfstudio",
    alternateName: ["Annastudio", "Anna Studio", "Anna Strijbos Schrijfstudio"],
    description:
      "Professionele begeleiding bij het schrijven van jouw verhaal, van eerste idee tot publicatie. Schrijfcursussen en manuscriptbeoordeling door Anna Strijbos.",
    url: "https://annasschrijfstudio.nl",
    founder: {
      "@type": "Person",
      name: "Anna Strijbos",
      jobTitle: "Schrijver, Redacteur, Schrijfcoach",
      sameAs: [
        "https://www.linkedin.com/in/anna-strijbos-45b795133",
        "https://www.instagram.com/anna_strijbos/",
        "https://www.instagram.com/anna_attic_art/",
      ],
    },
    offers: [
      {
        "@type": "Offer",
        name: "Schrijfcursus",
        description:
          "Verbeter je schrijfvaardigheden met professionele schrijfcursus. Leer over stijl, structuur en storytelling.",
        price: "109.00",
        priceCurrency: "EUR",
      },
      {
        "@type": "Offer",
        name: "Manuscriptbeoordeling",
        description:
          "Laat je manuscript beoordelen door een professionele redacteur. Inclusief opties voor proeflezen en spellingcontrole.",
      },
      {
        "@type": "Offer",
        name: "Eigen Traject",
        description:
          "Persoonlijke schrijfbegeleiding op maat, inclusief diepgaande manuscriptbeoordeling en professionele taalcorrectie.",
      },
    ],
    knowsAbout: ["Schrijven", "Redactie", "Manuscriptbeoordeling", "Schrijfcoaching", "Literaire analyse"],
    keywords: [
      "Anna Strijbos",
      "Annastudio",
      "Anna's Studio",
      "Anna Studio Schrijver",
      "schrijfcursus",
      "manuscriptbeoordeling",
      "schrijfcoach",
      "redacteur",
    ],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}
