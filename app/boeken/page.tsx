'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { BooksHero } from '@/components/books-hero'
import { BooksGrid } from '@/components/books-grid'
import { BooksCta } from '@/components/books-cta'
import { Breadcrumbs } from '@/components/breadcrumbs'

export default function BooksPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Over Anna', href: '/#about' },
            { label: 'Boeken', href: '/boeken' }
          ]}
        />
        <BooksHero />
        <BooksGrid />
        <BooksCta />
      </main>
      <Footer />
    </div>
  )
}
