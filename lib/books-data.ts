export interface Book {
  title: string
  author: string
  publisher: string
  role: string
  url: string
  image: string
}

export interface BookSection {
  label: string
  books: Book[]
}

export const sections: BookSection[] = [
  {
    label: 'Uitgevers',
    books: [
      {
        title: 'De droom van Den Haag',
        author: 'Benjamin Duerr',
        publisher: 'Atlas Contact',
        role: 'Inhoudelijke redactie',
        url: 'https://www.atlascontact.nl/boek/de-droom-van-den-haag/',
        image: '/images/books/droom-den-haag.jpg',
      },
      {
        title: 'Ik wil gewoon mijn moeder terug',
        author: 'Marthe Walter',
        publisher: 'Atlas Contact',
        role: 'Inhoudelijke redactie',
        url: 'https://www.atlascontact.nl/boek/ik-wil-gewoon-mijn-moeder-terug-ebook/',
        image: '/images/books/moeder-terug.jpg',
      },
      {
        title: 'Over the Limit, On the Edge',
        author: 'K. Bromberg',
        publisher: 'Blossom Books',
        role: 'Eindredactie',
        url: 'https://www.blossombooks.nl/product/on-the-edge/',
        image: '/images/books/on-the-edge.png',
      },
      {
        title: 'Samenleven met AI',
        author: 'Lija & Rodolfo Groenewoud van Vliet',
        publisher: 'Bot Uitgevers',
        role: 'Eindredactie',
        url: 'https://www.botuitgevers.nl/product/lija-rodolfo-groenewoud-van-vliet-samenleven-met-ai/',
        image: '/images/books/samenleven-ai.jpg',
      },
      {
        title: 'Eindelijk rust',
        author: 'Koos Neuvel',
        publisher: 'Bot Uitgevers',
        role: 'Eindredactie',
        url: 'https://www.botuitgevers.nl/product/koos-neuvel-eindelijk-rust/',
        image: '/images/books/eindelijk-rust.png',
      },
      {
        title: 'Tegen de oligarchie',
        author: 'Bernie Sanders',
        publisher: 'Bot Uitgevers',
        role: 'Eindredactie',
        url: 'https://www.botuitgevers.nl/product/bernie-sanders-tegen-de-oligarchie/',
        image: '/images/books/tegen-oligarchie.jpg',
      },
      {
        title: 'Ik hou van mij',
        author: 'Sander van Leeuwen',
        publisher: 'Bot Uitgevers',
        role: 'Eindredactie',
        url: 'https://www.botuitgevers.nl/product/sander-van-leeuwen-ik-hou-van-mij/',
        image: '/images/books/ik-hou-van-mij.jpg',
      },
      {
        title: 'Aai een badeend in de trein',
        author: 'Milou Gevers',
        publisher: 'Bot Uitgevers',
        role: 'Eindredactie',
        url: 'https://www.botuitgevers.nl/product/milou-gevers-aai-een-badeend-in-de-trein/',
        image: '/images/books/badeend-trein.jpg',
      },
    ],
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
        image: '/images/books/kromme-rug.png',
      },
      {
        title: 'De stilte in Caatjes hoofd',
        author: 'Caroline Hopman',
        publisher: 'Self-published',
        role: 'Begeleiding',
        url: 'https://www.destilteincaatjeshoofd.nl',
        image: '/images/books/stilte-caatje.jpg',
      },
      {
        title: 'De Zilver Saga',
        author: 'Sander Cox',
        publisher: 'Self-published',
        role: 'Begeleiding',
        url: 'https://www.sanx.nl/dezilverjagersaga-roman/',
        image: '/images/books/zilver-saga.jpg',
      },
    ],
  },
]

export const allBooks = sections.flatMap((s) => s.books)
