"use client"

import type React from "react"

import { ThemeToggle } from "./theme-toggle"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showAboutMenu, setShowAboutMenu] = useState(false)
  const pathname = usePathname()

  const handleAboutClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname !== "/") return
    e.preventDefault()
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/manuscriptbeoordeling", label: "Manuscriptbeoordeling" },
    { href: "/cursus", label: "Cursus" },
    {
      href: "/#about",
      label: "Over Anna",
      onClick: handleAboutClick,
      submenu: [{ href: "/boeken", label: "Boeken" }],
    },
    { href: "/#reviews", label: "Recensies" },
    { href: "/#contact", label: "Contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? "glass shadow-soft border-b border-border/50" : "bg-background/80 backdrop-blur-sm"
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link
            className="text-xl font-serif font-bold text-primary hover:text-primary-hover transition-colors"
            href="/"
            aria-label="Anna's Schrijfstudio"
          >
            Anna's Schrijfstudio
          </Link>

          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.href} className="relative group">
                <a
                  href={item.href}
                  onClick={item.onClick}
                  className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200"
                >
                  {item.label}
                </a>
                {item.submenu && (
                  <div className="absolute left-0 mt-0 w-48 glass rounded-lg shadow-soft border border-primary/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                    {item.submenu.map((subitem) => (
                      <a
                        key={subitem.href}
                        href={subitem.href}
                        className="block px-4 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-primary/5 transition-all duration-200"
                      >
                        {subitem.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="ml-2">
              <ThemeToggle />
            </div>
          </nav>

          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-foreground hover:bg-primary/5 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden glass border-t border-border/50 animate-fade-in-up">
          <div className="container mx-auto px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    if (item.onClick) item.onClick(e)
                    setIsOpen(false)
                  }}
                  className="block py-3 px-4 text-sm font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200"
                >
                  {item.label}
                </a>
                {item.submenu && (
                  <div className="ml-4 space-y-1 mt-1">
                    {item.submenu.map((subitem) => (
                      <a
                        key={subitem.href}
                        href={subitem.href}
                        onClick={() => setIsOpen(false)}
                        className="block py-2 px-4 text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200"
                      >
                        {subitem.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
