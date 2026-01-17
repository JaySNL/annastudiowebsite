"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

type Review = {
  id: number
  name: string
  service: "schrijfcursus" | "manuscriptbeoordeling"
  rating: number
  text: string
  avatar: string
}

export function ReviewSlider() {
  const [reviews, setReviews] = useState<Review[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [loading, setLoading] = useState(true)
  const [isPaused, setIsPaused] = useState(false)
  const [expandedReview, setExpandedReview] = useState<Review | null>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const modalRef = useRef<HTMLDivElement>(null)

  // Fetch reviews
  useEffect(() => {
    async function fetchReviews() {
      try {
        const response = await fetch("/data/reviews.json")
        if (!response.ok) throw new Error("Failed to fetch reviews")
        const data = await response.json()
        setReviews(data)
        setLoading(false)
      } catch (error) {
        console.error("Error loading reviews:", error)
        setReviews([])
        setLoading(false)
      }
    }
    fetchReviews()
  }, [])

  // Auto-scroll
  useEffect(() => {
    if (reviews.length === 0) return

    const startInterval = () => {
      intervalRef.current = setInterval(() => {
        if (!isPaused && !expandedReview) {
          setCurrentIndex((prev) => (prev + 1) % reviews.length)
        }
      }, 5000)
    }

    startInterval()
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [reviews.length, isPaused, expandedReview])

  // Modal handlers
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setExpandedReview(null)
      }
    }

    function handleEscapeKey(event: KeyboardEvent) {
      if (event.key === "Escape") setExpandedReview(null)
    }

    if (expandedReview) {
      document.addEventListener("mousedown", handleClickOutside)
      document.addEventListener("keydown", handleEscapeKey)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleEscapeKey)
    }
  }, [expandedReview])

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (reviews.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">Geen recensies beschikbaar.</p>
      </div>
    )
  }

  const currentReview = reviews[currentIndex]
  const nextReviewIndex = (currentIndex + 1) % reviews.length
  const prevReviewIndex = (currentIndex - 1 + reviews.length) % reviews.length

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Mobile view */}
      <div className="block md:hidden">
        <ReviewCard review={currentReview} onReadMore={() => setExpandedReview(currentReview)} />
        <div className="flex justify-center mt-6 gap-2">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "w-8 bg-primary" : "w-2 bg-primary/30"
              }`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Desktop view */}
      <div className="hidden md:block">
        <div className="grid grid-cols-3 gap-6">
          <div className="opacity-60 transform scale-95 transition-all duration-500">
            <ReviewCard
              review={reviews[prevReviewIndex]}
              onReadMore={() => setExpandedReview(reviews[prevReviewIndex])}
            />
          </div>
          <div className="transform scale-105 z-10 transition-all duration-500">
            <ReviewCard review={currentReview} onReadMore={() => setExpandedReview(currentReview)} featured />
          </div>
          <div className="opacity-60 transform scale-95 transition-all duration-500">
            <ReviewCard
              review={reviews[nextReviewIndex]}
              onReadMore={() => setExpandedReview(reviews[nextReviewIndex])}
            />
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center mt-10 gap-4">
          <button
            onClick={() => setCurrentIndex(prevReviewIndex)}
            className="p-3 rounded-full glass border border-primary/20 hover:bg-primary/10 transition-all duration-300 shadow-soft hover:shadow-lifted"
            aria-label="Previous review"
          >
            <ChevronLeft className="h-5 w-5 text-primary" />
          </button>
          <button
            onClick={() => setCurrentIndex(nextReviewIndex)}
            className="p-3 rounded-full glass border border-primary/20 hover:bg-primary/10 transition-all duration-300 shadow-soft hover:shadow-lifted"
            aria-label="Next review"
          >
            <ChevronRight className="h-5 w-5 text-primary" />
          </button>
        </div>
      </div>

      {/* Expanded Modal */}
      {expandedReview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-fade-in-up">
          <div
            ref={modalRef}
            className="glass rounded-2xl shadow-floating w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-primary/20"
          >
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <Image
                    src={expandedReview.avatar || "/placeholder.svg"}
                    alt={expandedReview.name}
                    width={56}
                    height={56}
                    className="rounded-full ring-2 ring-primary/20"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{expandedReview.name}</h3>
                    <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mt-1">
                      {expandedReview.service === "schrijfcursus" ? "Schrijfcursus" : "Manuscriptbeoordeling"}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setExpandedReview(null)}
                  className="p-2 hover:bg-muted rounded-lg transition-colors"
                  aria-label="Close"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={`text-xl ${i < expandedReview.rating ? "text-amber-400" : "text-gray-300"}`}>
                    ★
                  </span>
                ))}
              </div>

              <Quote className="h-8 w-8 text-primary/20 mb-4" />
              <p className="text-lg leading-relaxed text-foreground">{expandedReview.text}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

interface ReviewCardProps {
  review: Review
  onReadMore: () => void
  featured?: boolean
}

function ReviewCard({ review, onReadMore, featured }: ReviewCardProps) {
  return (
    <div className="h-full group">
      <div
        className={`h-full flex flex-col glass rounded-2xl p-6 transition-all duration-300 ${
          featured ? "shadow-lifted border-2 border-primary/20" : "shadow-soft border border-border hover:shadow-lifted"
        }`}
      >
        <div className="flex items-center gap-4 mb-4">
          <Image
            src={review.avatar || "/placeholder.svg"}
            alt={review.name}
            width={48}
            height={48}
            className="rounded-full ring-2 ring-primary/10"
          />
          <div>
            <h3 className="font-bold text-foreground">{review.name}</h3>
            <span className="inline-flex items-center px-2 py-0.5 text-xs font-medium bg-primary/10 text-primary rounded-full">
              {review.service === "schrijfcursus" ? "Schrijfcursus" : "Manuscriptbeoordeling"}
            </span>
          </div>
        </div>

        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <span key={i} className={`${i < review.rating ? "text-amber-400" : "text-gray-300"}`}>
              ★
            </span>
          ))}
        </div>

        <Quote className="h-6 w-6 text-primary/20 mb-3" />
        <p className="text-muted-foreground flex-grow line-clamp-4">{review.text}</p>

        {review.text.length > 150 && (
          <button
            onClick={onReadMore}
            className="mt-4 text-primary hover:text-primary-hover font-medium text-sm transition-colors"
          >
            Lees meer →
          </button>
        )}
      </div>
    </div>
  )
}
