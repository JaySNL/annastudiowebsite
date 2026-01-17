"use client"

import { useEffect, useRef, useState } from "react"

export function PencilAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          } else {
            // Only reset animation when completely out of view
            if (entry.intersectionRatio <= 0) {
              setIsVisible(false)
            }
          }
        })
      },
      { threshold: [0, 0.1, 0.5, 1] },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative h-32 w-full overflow-hidden my-8 bg-gray-lightest flex items-center justify-center rounded-xl border border-gray-lighter"
    >
      <div className="text-center text-sm text-gray-dark absolute">
        {!isVisible && "Scroll down to see the animation"}
      </div>
      <div className={`absolute pencil-container ${isVisible ? "animate-pencil" : ""}`}>
        <div className="pencil">
          <svg
            width="120"
            height="24"
            viewBox="0 0 120 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transform rotate-0"
          >
            <path
              d="M5 12H115"
              stroke="#cc533e"
              strokeWidth="2"
              strokeLinecap="round"
              className={`pencil-line ${isVisible ? "animate-draw-line" : ""}`}
            />
            <path d="M115 12L105 7V17L115 12Z" fill="#cc533e" className="pencil-tip" />
            <rect x="85" y="7" width="20" height="10" fill="#f9d4cb" className="pencil-body" />
            <rect x="65" y="7" width="20" height="10" fill="#632d22" className="pencil-eraser" />
          </svg>
        </div>
      </div>
    </div>
  )
}
