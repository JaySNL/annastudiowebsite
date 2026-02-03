"use client"

import { useEffect } from "react"

export function JsonLdManuscript() {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Manuscriptbeoordeling door Anna Strijbos",
      serviceType: "Manuscriptbeoordeling",
      description:
        "Laat je manuscript beoordelen door Anna Strijbos, professionele redacteur. Inclusief opties voor proeflezen, spellingcontrole en structuuradvies.",
      provider: {
        "@type": "Person",
        name: "Anna Strijbos",
        jobTitle: "Redacteur, Schrijfcoach",
        url: "https://annasschrijfstudio.nl",
      },
      offers: [
        {
          "@type": "Offer",
          name: "Inhoudelijke Redactieronde",
          description: "Algemene indruk van je manuscript met concrete verbeterpunten en suggesties.",
          price: "8.95",
          priceCurrency: "EUR",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "8.95",
            priceCurrency: "EUR",
            unitText: "per 1000 woorden",
            unitCode: "WRD",
            referenceQuantity: {
              "@type": "QuantitativeValue",
              value: "1000",
              unitCode: "WRD",
            },
          },
        },
        {
          "@type": "Offer",
          name: "Inhoudelijke Redactieronde met Beoordelingsgesprek",
          description:
            "Algemene indruk van je manuscript met concrete verbeterpunten en suggesties, plus een 1,5 uur durend beoordelingsgesprek.",
          priceSpecification: {
            "@type": "CompoundPriceSpecification",
            description: "Inhoudelijke redactieronde plus optioneel beoordelingsgesprek",
            price: "8.95",
            priceCurrency: "EUR",
            priceComponent: [
              {
                "@type": "UnitPriceSpecification",
                price: "8.95",
                priceCurrency: "EUR",
                unitText: "per 1000 woorden",
                unitCode: "WRD",
                referenceQuantity: {
                  "@type": "QuantitativeValue",
                  value: "1000",
                  unitCode: "WRD",
                },
              },
              {
                "@type": "UnitPriceSpecification",
                price: "150.00",
                priceCurrency: "EUR",
                unitText: "flat fee",
                description: "Beoordelingsgesprek van 1,5 uur",
              },
            ],
          },
        },
        {
          "@type": "Offer",
          name: "Inhoudelijk + Spelling",
          description:
            "Diepgaande analyse van structuur en opbouw, feedback per hoofdstuk en globale spellingcontrole.",
          price: "10.95",
          priceCurrency: "EUR",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "10.95",
            priceCurrency: "EUR",
            unitText: "per 1000 woorden",
            unitCode: "WRD",
            referenceQuantity: {
              "@type": "QuantitativeValue",
              value: "1000",
              unitCode: "WRD",
            },
          },
        },
        {
          "@type": "Offer",
          name: "Inhoudelijk + Spelling met Beoordelingsgesprek",
          description:
            "Diepgaande analyse van structuur en opbouw, feedback per hoofdstuk en globale spellingcontrole, plus een 1,5 uur durend beoordelingsgesprek.",
          priceSpecification: {
            "@type": "CompoundPriceSpecification",
            description: "Inhoudelijk + spelling plus optioneel beoordelingsgesprek",
            price: "10.95",
            priceCurrency: "EUR",
            priceComponent: [
              {
                "@type": "UnitPriceSpecification",
                price: "10.95",
                priceCurrency: "EUR",
                unitText: "per 1000 woorden",
                unitCode: "WRD",
                referenceQuantity: {
                  "@type": "QuantitativeValue",
                  value: "1000",
                  unitCode: "WRD",
                },
              },
              {
                "@type": "UnitPriceSpecification",
                price: "150.00",
                priceCurrency: "EUR",
                unitText: "flat fee",
                description: "Beoordelingsgesprek van 1,5 uur",
              },
            ],
          },
        },
        {
          "@type": "Offer",
          name: "Volledig Redactietraject",
          description:
            "Complete begeleiding met volledige spellingcontrole, meerdere revisierondes en persoonlijke begeleiding.",
          price: "Op aanvraag",
        },
      ],
      areaServed: {
        "@type": "Country",
        name: "Nederland",
      },
      audience: {
        "@type": "Audience",
        audienceType: "Schrijvers, Auteurs",
      },
      serviceOutput: {
        "@type": "Thing",
        name: "Leesrapport",
        description: "Een gedetailleerd rapport met feedback en verbeterpunten voor je manuscript.",
      },
      termsOfService: "Prijzen zijn afhankelijk van woordenaantal en gewenste diensten.",
      review: [
        {
          "@type": "Review",
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
          author: {
            "@type": "Person",
            name: "Gerard Commijs",
          },
          reviewBody:
            "Anna legde feilloos haar vinger op de zwakke plekken in mijn manuscript, en gaf zeer bruikbare adviezen over de inhoud, de stijl en de opbouw van mijn verhaal.",
        },
        {
          "@type": "Review",
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
          author: {
            "@type": "Person",
            name: "Sander Cox",
          },
          reviewBody:
            "Ik zie hele waardevolle feedback waar ik erg blij mee ben en die mij ook behoorlijk wat tijd gaat besparen bij het schrijven van het tweede deel van het boek.",
        },
      ],
      keywords: [
        "manuscriptbeoordeling",
        "manuscript beoordelen",
        "leesrapport",
        "redacteur",
        "proeflezen",
        "spellingcontrole",
        "structuuradvies",
        "schrijfcoach",
        "boek uitgeven",
        "roman beoordelen",
        "feedback manuscript",
        "beoordelingsgesprek",
      ],
    }

    // Add the JSON-LD script to the document head
    const script = document.createElement("script")
    script.type = "application/ld+json"
    script.text = JSON.stringify(structuredData)
    document.head.appendChild(script)

    // Clean up when component unmounts
    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return null
}
