"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"

type ManuscriptTestimonial = {
  name: string
  text: string
  avatar: string
}

export function ManuscriptTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [expandedTestimonial, setExpandedTestimonial] = useState<ManuscriptTestimonial | null>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const modalRef = useRef<HTMLDivElement>(null)

  const testimonials: ManuscriptTestimonial[] = [
    {
      name: "Edmond Tarée",
      text: "Dank voor de grondige review. Ik heb hier zeker wat aan en ga ermee aan de slag om het manuscript te verbeteren. Mocht ik in de toekomst weer aan een project beginnen (ik moet zeggen dat ik het best leuk vond om te doen) dan weet ik je te vinden.",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Gerard Commijs",
      text: "Anna legde feilloos haar vinger op de zwakke plekken in mijn manuscript, en gaf zeer bruikbare adviezen over de inhoud, de stijl en de opbouw van mijn verhaal. Ze geeft steekhoudend en inspirerend commentaar, gebracht op een prettige toon. Ik heb er veel profijt van gehad.",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Sander Cox",
      text: "Bedankt voor de beoordeling, Ik zie hele waardevolle feedback waar ik erg blij mee ben en die mij ook behoorlijk wat tijd gaat besparen bij het schrijven van het tweede deel van het boek. Ik zal ook zeker het tweede deel door jou laten beoordelen.",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Hann van Schendel",
      text: "Anna heeft mijn manuscript gelezen en er opmerkingen bij geplaatst in een Google Drive-document. De opmerkingen spraken voor zich en hoefden niet te worden toegelicht: ik kon haar suggesties eenvoudig toepassen. Naast deze feedback hebben wij ook een gesprek gevoerd over hoe mijn roman nog beter zou kunnen worden. De suggesties die Anna heeft gegeven, sloten aan bij waar ik zelf als schrijver stond. Ik heb al haar feedback en suggesties intussen verwerkt en dit heeft geleid tot een manuscript waar ik zeer tevreden over ben en dat ook kan voorleggen aan uitgeverijen. Ik ben blij met Anna haar bijdrage en zou haar aanbevelen.",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Judith Groeneveld",
      text: "Dank dat je het manuscript onder handen genomen hebt. Je aanwijzingen zijn duidelijk en ik kan er zeker wat mee. Ik zal zeker positief over je spreken en je aanbevelen.",
      avatar: "/placeholder.svg?height=80&width=80",
    },
  ]

  // Auto-scroll through testimonials with pause on hover
  useEffect(() => {
    if (testimonials.length === 0) return

    const startInterval = () => {
      intervalRef.current = setInterval(() => {
        if (!isPaused && !expandedTestimonial) {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
        }
      }, 5000)
    }

    startInterval()

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [testimonials.length, isPaused, expandedTestimonial])

  // Handle click outside modal to close it
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setExpandedTestimonial(null)
      }
    }

    // Handle escape key to close modal
    function handleEscapeKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setExpandedTestimonial(null)
      }
    }

    if (expandedTestimonial) {
      document.addEventListener("mousedown", handleClickOutside)
      document.addEventListener("keydown", handleEscapeKey)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleEscapeKey)
    }
  }, [expandedTestimonial])

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
  }

  const nextTestimonial = () => {
    if (testimonials.length === 0) return
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    if (testimonials.length === 0) return
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  // Show message if no testimonials
  if (testimonials.length === 0) {
    return (
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-8">
            <p className="text-muted-foreground">Geen testimonials beschikbaar.</p>
          </div>
        </div>
      </section>
    )
  }

  // Get current testimonial and two adjacent testimonials for desktop view
  const currentTestimonial = testimonials[currentIndex]
  const nextTestimonialIndex = (currentIndex + 1) % testimonials.length
  const prevTestimonialIndex = (currentIndex - 1 + testimonials.length) % testimonials.length

  return (
    <section className="py-16 bg-muted" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Wat anderen zeggen over mijn manuscriptbeoordelingen
          </h2>
          <p className="text-lg text-muted-foreground">
            Lees de ervaringen van schrijvers die hun manuscript door mij hebben laten beoordelen.
          </p>
        </div>

        <div className="relative overflow-hidden">
          {/* Mobile view - single testimonial */}
          <div className="block md:hidden">
            <div className="relative">
              <div className="transition-transform duration-500">
                <TestimonialCard
                  testimonial={currentTestimonial}
                  onReadMore={() => setExpandedTestimonial(currentTestimonial)}
                />
              </div>
            </div>
            <div className="flex justify-center mt-5 gap-x-1">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => goToTestimonial(index)}
                  className={`size-2.5 rounded-full ${index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>

          {/* Desktop view - three testimonials */}
          <div className="hidden md:block">
            <div className="grid grid-cols-3 gap-6">
              <div className="opacity-70 transform scale-95 transition-all duration-500">
                <TestimonialCard
                  testimonial={testimonials[prevTestimonialIndex]}
                  onReadMore={() => setExpandedTestimonial(testimonials[prevTestimonialIndex])}
                />
              </div>
              <div className="transform scale-105 shadow-lg z-10 transition-all duration-500">
                <TestimonialCard
                  testimonial={currentTestimonial}
                  onReadMore={() => setExpandedTestimonial(currentTestimonial)}
                />
              </div>
              <div className="opacity-70 transform scale-95 transition-all duration-500">
                <TestimonialCard
                  testimonial={testimonials[nextTestimonialIndex]}
                  onReadMore={() => setExpandedTestimonial(testimonials[nextTestimonialIndex])}
                />
              </div>
            </div>
            <div className="flex justify-center mt-8 gap-4">
              <button
                onClick={prevTestimonial}
                className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-border text-foreground hover:bg-muted disabled:opacity-50 disabled:pointer-events-none"
              >
                <svg
                  className="flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>
              <button
                onClick={nextTestimonial}
                className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-border text-foreground hover:bg-muted disabled:opacity-50 disabled:pointer-events-none"
              >
                <svg
                  className="flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-3 text-base font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
          >
            Vraag nu jouw manuscriptbeoordeling aan
          </a>
        </div>
      </div>

      {/* Modal for expanded testimonial */}
      {expandedTestimonial && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div ref={modalRef} className="bg-card rounded-xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-x-4">
                  <Image
                    src={expandedTestimonial.avatar || "/placeholder.svg"}
                    alt={expandedTestimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-medium text-primary text-lg">{expandedTestimonial.name}</h3>
                    <span className="inline-flex items-center gap-x-1 py-1 px-2 text-xs font-medium bg-primary/10 text-primary-foreground dark:bg-primary/20 dark:text-primary rounded-full">
                      Manuscriptbeoordeling
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setExpandedTestimonial(null)}
                  className="text-muted-foreground hover:text-foreground"
                  aria-label="Close"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="size-5 text-amber-400"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                ))}
              </div>

              <p className="text-card-foreground text-base leading-relaxed">{expandedTestimonial.text}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

interface TestimonialCardProps {
  testimonial: ManuscriptTestimonial
  onReadMore: () => void
}

function TestimonialCard({ testimonial, onReadMore }: TestimonialCardProps) {
  return (
    <div className="h-full">
      <div className="flex flex-col h-full bg-card border border-border shadow-sm rounded-xl">
        <div className="flex-auto p-4 md:p-6">
          <div className="flex items-center gap-x-4 mb-4">
            <Image
              src={testimonial.avatar || "/placeholder.svg"}
              alt={testimonial.name}
              width={48}
              height={48}
              className="rounded-full"
            />
            <div>
              <h3 className="font-medium text-primary text-base">{testimonial.name}</h3>
              <span className="inline-flex items-center gap-x-1 py-1 px-2 text-xs font-medium bg-primary/10 text-primary-foreground dark:bg-primary/20 dark:text-primary rounded-full">
                Manuscriptbeoordeling
              </span>
            </div>
          </div>

          <div className="flex gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="size-5 text-amber-400"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
            ))}
          </div>

          <div>
            <p className="text-card-foreground text-sm leading-relaxed line-clamp-4">{testimonial.text}</p>
            {testimonial.text.length > 150 && (
              <button
                onClick={onReadMore}
                className="text-primary hover:text-primary/80 text-sm font-medium mt-2 focus:outline-none"
              >
                Lees meer
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
