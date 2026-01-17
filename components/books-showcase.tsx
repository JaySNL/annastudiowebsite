"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, ExternalLink, BookOpen } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface Book {
  title: string
  author: string
  publisher: string
  role: string
  url: string
  image: string
}

const books: Book[] = [
  {
    title: "De droom van Den Haag",
    author: "Benjamin Duerr",
    publisher: "Atlas Contact",
    role: "Inhoudelijke redactie",
    url: "https://www.atlascontact.nl/boek/de-droom-van-den-haag/",
    image: "https://www.atlascontact.nl/wp-content/uploads/2024/09/9789045048376_frontcover_original-320x491.jpg",
  },
  {
    title: "Ik wil gewoon mijn moeder terug",
    author: "Marthe Walter",
    publisher: "Atlas Contact",
    role: "Inhoudelijke redactie",
    url: "https://www.atlascontact.nl/boek/ik-wil-gewoon-mijn-moeder-terug-ebook/",
    image: "https://www.atlascontact.nl/wp-content/uploads/2024/06/9789045050584_frontcover_original-320x498.jpg",
  },
  {
    title: "Over the Limit, On the Edge",
    author: "K. Bromberg",
    publisher: "Blossom Books",
    role: "Eindredactie",
    url: "https://www.blossombooks.nl/product/on-the-edge/",
    image: "https://www.blossombooks.nl/wp-content/uploads/2025/07/3-700x1091.png",
  },
  {
    title: "Samenleven met AI",
    author: "Lija & Rodolfo Groenewoud van Vliet",
    publisher: "Bot Uitgevers",
    role: "Eindredactie",
    url: "https://www.botuitgevers.nl/product/lija-rodolfo-groenewoud-van-vliet-samenleven-met-ai/",
    image: "https://www.botuitgevers.nl/wp-content/uploads/2025/07/Samenleven-met-AI_Bot_0407.jpg",
  },
  {
    title: "Eindelijk rust",
    author: "Koos Neuvel",
    publisher: "Bot Uitgevers",
    role: "Eindredactie",
    url: "https://www.botuitgevers.nl/product/koos-neuvel-eindelijk-rust/",
    image: "https://www.botuitgevers.nl/wp-content/uploads/2025/10/eindelijk-rust-voorplat.png",
  },
]

export function BooksShowcase() {
  const [scrollPosition, setScrollPosition] = useState(0)

  const scroll = (direction: "left" | "right") => {
    const container = document.getElementById("homepage-books-slider")
    if (container) {
      const scrollAmount = 320
      const newPosition = direction === "left" ? scrollPosition - scrollAmount : scrollPosition + scrollAmount

      container.scrollTo({ left: newPosition, behavior: "smooth" })
      setScrollPosition(newPosition)
    }
  }

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium text-primary bg-primary/10 rounded-full">
              <BookOpen className="w-4 h-4" />
              <span>Portfolio</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              Van Manuscript naar Bestseller
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
              Ontdek de boeken waar ik aan heb meegewerkt als eindredacteur en contentredacteur. Van literaire verhalen
              tot commerciële romans - elk project krijgt de aandacht die het verdient om te schitteren.
            </p>

            <Link href="/boeken">
              <Button size="lg" className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300">
                Bekijk alle projecten
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          {/* Books Slider */}
          <div className="relative mt-12">
            <div
              id="homepage-books-slider"
              className="flex gap-6 overflow-x-auto scroll-smooth pb-4 snap-x snap-mandatory hide-scrollbar"
            >
              {books.map((book, index) => (
                <a
                  key={index}
                  href={book.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 w-64 group snap-start"
                >
                  <div className="relative rounded-xl overflow-hidden shadow-soft hover:shadow-lifted transition-all duration-300 bg-muted h-96">
                    <Image
                      src={book.image || "/placeholder.svg"}
                      alt={book.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/20 border border-primary/40 mb-2 w-fit">
                        <span className="text-xs font-medium text-white">{book.role}</span>
                      </div>
                      <h3 className="text-white font-bold text-lg mb-1">{book.title}</h3>
                      <p className="text-white/80 text-sm mb-3">{book.author}</p>
                      <div className="flex items-center gap-2 text-primary text-sm font-medium">
                        <span>Bekijk meer</span>
                        <ExternalLink className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 font-semibold text-foreground group-hover:text-primary transition-colors text-center text-sm">
                    {book.title}
                  </p>
                  <p className="text-xs text-muted-foreground text-center mt-1">{book.author}</p>
                </a>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-6 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-primary/20 text-primary transition-all duration-200 z-10 shadow-soft"
              aria-label="Scroll books left"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-6 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-primary/20 text-primary transition-all duration-200 z-10 shadow-soft"
              aria-label="Scroll books right"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
