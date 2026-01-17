import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
// Add the import for CustomHead
import { CustomHead } from "@/components/custom-head"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Anna's Schrijfstudio | Anna Strijbos | Schrijver & Redacteur",
  description:
    "Anna Strijbos biedt professionele schrijfcursussen en manuscriptbeoordeling. Ontdek en ontwikkel je schrijftalent met Anna's Schrijfstudio.",
  keywords:
    "Anna Strijbos, Annastudio, Anna's Studio, Anna Studio Schrijver, schrijfcursus, manuscriptbeoordeling, schrijfcoach, redacteur",
  authors: [{ name: "Anna Strijbos" }],
  creator: "Anna Strijbos",
  publisher: "Anna's Schrijfstudio",
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://annasschrijfstudio.nl",
    title: "Anna's Schrijfstudio | Anna Strijbos | Schrijver & Redacteur",
    description:
      "Anna Strijbos biedt professionele schrijfcursussen en manuscriptbeoordeling. Ontdek en ontwikkel je schrijftalent met Anna's Schrijfstudio.",
    siteName: "Anna's Schrijfstudio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anna's Schrijfstudio | Anna Strijbos",
    description: "Anna Strijbos biedt professionele schrijfcursussen en manuscriptbeoordeling.",
  },
  alternates: {
    canonical: "https://annasschrijfstudio.nl",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap"
          rel="stylesheet"
        />
        <CustomHead />
      </head>
      <body className={inter.className}>
        <ThemeProvider defaultTheme="light">{children}</ThemeProvider>
      </body>
    </html>
  )
}
