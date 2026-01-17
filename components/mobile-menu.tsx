"use client"

import { useState } from "react"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="sm:hidden">
      <button
        type="button"
        className="p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-black shadow-sm align-middle hover:bg-muted focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-primary transition-all text-sm"
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-controls="navbar-collapse"
        aria-label="Toggle navigation"
      >
        {!isOpen ? (
          <svg className="w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        ) : (
          <svg className="w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        )}
      </button>

      <div
        id="navbar-collapse"
        className={`${isOpen ? "block" : "hidden"} overflow-hidden transition-all duration-300 mt-2`}
      >
        <div className="flex flex-col gap-5 p-4 bg-white border border-gray-lighter rounded-lg shadow-sm">
          <a
            className="font-medium text-primary hover:text-primary-hover"
            href="#services"
            aria-current="page"
            onClick={() => setIsOpen(false)}
          >
            Diensten
          </a>
          <a
            className="font-medium text-gray-darkest hover:text-primary"
            href="#about"
            onClick={() => setIsOpen(false)}
          >
            Over Anna
          </a>
          <a
            className="font-medium text-gray-darkest hover:text-primary"
            href="#reviews"
            onClick={() => setIsOpen(false)}
          >
            Recensies
          </a>
          <a
            className="font-medium text-gray-darkest hover:text-primary"
            href="#contact"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  )
}
