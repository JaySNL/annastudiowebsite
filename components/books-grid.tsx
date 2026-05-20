'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'
import Image from 'next/image'

interface Book {
  title: string
  author: string
  publisher: string
  role: string
  url: string
  image: string
}

interface BookSection {
  label: string
  books: Book[]
}

const sections: BookSection[] = [
  {
    label: 'Uitgevers',
    books: [
      {
        title: 'De droom van Den Haag',
        author: 'Benjamin Duerr',
        publisher: 'Atlas Contact',
        role: 'Inhoudelijke redactie',
        url: 'https://www.atlascontact.nl/boek/de-droom-van-den-haag/',
        image: '/images/books/droom-den-haag.jpg'
      },
      {
        title: 'Ik wil gewoon mijn moeder terug',
        author: 'Marthe Walter',
        publisher: 'Atlas Contact',
        role: 'Inhoudelijke redactie',
        url: 'https://www.atlascontact.nl/boek/ik-wil-gewoon-mijn-moeder-terug-ebook/',
        image: '/images/books/moeder-terug.jpg'
      },
      {
        title: 'Over the Limit, On the Edge',
        author: 'K. Bromberg',
        publisher: 'Blossom Books',
        role: 'Eindredactie',
        url: 'https://www.blossombooks.nl/product/on-the-edge/',
        image: '/images/books/on-the-edge.png'
      },
      {
        title: 'Samenleven met AI',
        author: 'Lija & Rodolfo Groenewoud van Vliet',
        publisher: 'Bot Uitgevers',
        role: 'Eindredactie',
        url: 'https://www.botuitgevers.nl/product/lija-rodolfo-groenewoud-van-vliet-samenleven-met-ai/',
        image: '/images/books/samenleven-ai.jpg'
      },
      {
        title: 'Eindelijk rust',
        author: 'Koos Neuvel',
        publisher: 'Bot Uitgevers',
        role: 'Eindredactie',
        url: 'https://www.botuitgevers.nl/product/koos-neuvel-eindelijk-rust/',
        image: '/images/books/eindelijk-rust.png'
      },
      {
        title: 'Tegen de oligarchie',
        author: 'Bernie Sanders',
        publisher: 'Bot Uitgevers',
        role: 'Eindredactie',
        url: 'https://www.botuitgevers.nl/product/bernie-sanders-tegen-de-oligarchie/',
        image: '/images/books/tegen-oligarchie.jpg'
      },
      {
        title: 'Ik hou van mij',
        author: 'Sander van Leeuwen',
        publisher: 'Bot Uitgevers',
        role: 'Eindredactie',
        url: 'https://www.botuitgevers.nl/product/sander-van-leeuwen-ik-hou-van-mij/',
        image: '/images/books/ik-hou-van-mij.jpg'
      },
      {
        title: 'Aai een badeend in de trein',
        author: 'Milou Gevers',
        publisher: 'Bot Uitgevers',
        role: 'Eindredactie',
        url: 'https://www.botuitgevers.nl/product/milou-gevers-aai-een-badeend-in-de-trein/',
        image: '/images/books/badeend-trein.jpg'
      },
    ]
  },
  {
    label: 'Self publishers',
    books: [
      {
        title: 'Meer dan een kromme rug',
        author: 'Sarah Pielman',
        publisher: 'Self-published',
        role: 'Begeleiding',
        url: 'https://meerdaneenkrommerug.nl/product/pre-order-meer-dan-een-kromme-rug/',
        image: '/images/books/kromme-rug.png'
      },
      {
        title: 'De stilte in Caatjes hoofd',
        author: 'Caroline Hopman',
        publisher: 'Self-published',
        role: 'Begeleiding',
        url: 'https://www.destilteincaatjeshoofd.nl',
        image: '/images/books/stilte-caatje.jpg'
      },
      {
        title: 'De Zilver Saga',
        author: 'Sander Cox',
        publisher: 'Self-published',
        role: 'Begeleiding',
        url: 'https://www.sanx.nl/dezilverjagersaga-roman/',
        image: '/images/books/zilver-saga.jpg'
      },
    ]
  }
]

const books = sections.flatMap(s => s.books)

export function BooksGrid() {
  const [scrollPosition, setScrollPosition] = useState(0)

  const scroll = (direction: 'left' | 'right') => {
    const container = document.getElementById('books-slider')
    if (container) {
      const scrollAmount = 320
      const newPosition = direction === 'left' 
        ? scrollPosition - scrollAmount 
        : scrollPosition + scrollAmount
      
      container.scrollTo({ left: newPosition, behavior: 'smooth' })
      setScrollPosition(newPosition)
    }
  }

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* List View by Section */}
        {sections.map((section) => (
          <div key={section.label} className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-8">{section.label}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {section.books.map((book, index) => (
                <a
                  key={index}
                  href={book.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass rounded-xl p-6 shadow-soft hover:shadow-lifted border border-primary/10 transition-all duration-300 hover:border-primary/30 group"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-grow">
                      <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                        {book.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        <span className="font-semibold text-foreground">Auteur:</span> {book.author}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold text-foreground">Uitgever:</span> {book.publisher}
                      </p>
                      <div className="mt-3 inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                        <span className="text-xs font-medium text-primary">{book.role}</span>
                      </div>
                    </div>
                    <ExternalLink className="w-5 h-5 text-primary shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}

        {/* Slider View */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-8">Visueel Overzicht</h2>
          <div className="relative">
            {/* Scroll Container */}
            <div
              id="books-slider"
              className="flex gap-6 overflow-x-auto scroll-smooth pb-4 snap-x snap-mandatory"
              style={{ scrollBehavior: 'smooth' }}
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                      <h3 className="text-white font-bold text-lg mb-2">{book.title}</h3>
                      <p className="text-white/80 text-sm mb-2">{book.author}</p>
                      <div className="flex items-center gap-2 text-primary text-sm font-medium">
                        <span>Lees meer</span>
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
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 p-2 rounded-full bg-primary/20 hover:bg-primary/40 text-primary transition-all duration-200 z-10"
              aria-label="Scroll books left"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 p-2 rounded-full bg-primary/20 hover:bg-primary/40 text-primary transition-all duration-200 z-10"
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
