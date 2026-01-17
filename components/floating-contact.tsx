"use client"

import { useState, useEffect, useRef } from "react"
import { X } from "lucide-react"
import { ContactFormEigen } from "./contact-form-eigen"

export function FloatingContact() {
  const [isOpen, setIsOpen] = useState(true)
  const [isAnimating, setIsAnimating] = useState(true)
  const modalRef = useRef<HTMLDivElement>(null)

  // Animation effect when opening
  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true)
      const timer = setTimeout(() => {
        setIsAnimating(false)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  // Close the contact form when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as HTMLElement
      if (isOpen && !isAnimating && modalRef.current && !modalRef.current.contains(target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen, isAnimating])

  // Close on escape key
  useEffect(() => {
    function handleEscapeKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscapeKey)
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey)
    }
  }, [isOpen])

  const closeContact = () => {
    setIsOpen(false)
  }

  if (!isOpen) {
    return null
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <div
        ref={modalRef}
        className={`floating-contact-container bg-card rounded-lg shadow-xl overflow-hidden transition-all duration-500 w-full max-w-2xl mx-4 ${
          isAnimating ? "opacity-0 transform scale-95" : "opacity-100 transform scale-100"
        }`}
      >
        <div className="bg-primary p-4 text-primary-foreground flex justify-between items-center">
          <h3 className="text-xl font-medium">Ontdek Jouw Pad</h3>
          <button onClick={closeContact} className="text-primary-foreground/80 hover:text-primary-foreground">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          <p className="text-card-foreground mb-6">
            Laat me weten hoe ik je kan helpen met jouw schrijfproject. Ik neem zo snel mogelijk contact met je op om
            een persoonlijk traject op maat te bespreken.
          </p>
          <ContactFormEigen />
        </div>
      </div>
    </div>
  )
}
