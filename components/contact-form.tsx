"use client"

import type React from "react"
import { useState } from "react"
import { SimpleCaptcha } from "./simple-captcha"
import { Send, CheckCircle, AlertCircle } from "lucide-react"

interface ContactFormProps {
  isFloating?: boolean
}

export function ContactForm({ isFloating = false }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isCaptchaValid, setIsCaptchaValid] = useState(false)
  const [showCaptchaError, setShowCaptchaError] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleCaptchaValidation = (isValid: boolean) => {
    setIsCaptchaValid(isValid)
    if (isValid) {
      setShowCaptchaError(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitError(null)

    if (!isCaptchaValid) {
      setShowCaptchaError(true)
      return
    }

    setIsSubmitting(true)
    console.log("[v0] Form submitted, calling API route...")

    try {
      const timestamp = new Date().toLocaleString("nl-NL", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZone: "Europe/Amsterdam",
      })
      const userAgent = navigator.userAgent
      const referrer = document.referrer || "Direct"

      // Build HTML content for email
      const htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #8b7355; border-bottom: 2px solid #8b7355; padding-bottom: 10px;">
            Nieuw bericht via contactformulier
          </h2>
          <div style="background: #f9f7f4; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Naam:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Onderwerp:</strong> ${formData.subject}</p>
          </div>
          <div style="padding: 20px; background: white; border: 1px solid #e5e5e5; border-radius: 8px;">
            <h3 style="color: #333; margin-top: 0;">Bericht:</h3>
            <p style="white-space: pre-wrap; color: #555;">${formData.message}</p>
          </div>
          <div style="margin-top: 20px; padding: 15px; background: #f0f0f0; border-radius: 8px; font-size: 12px; color: #666; border-top: 1px solid #ddd;">
            <h4 style="margin-top: 0; color: #333;">Privacy & Beveiligingsinformatie:</h4>
            <p><strong>Verzonden via:</strong> Anna's Schrijfstudio Contactformulier</p>
            <p><strong>Datum & Tijd:</strong> ${timestamp} (CET/CEST)</p>
            <p><strong>Beveiligingstype:</strong> Dit bericht is verzonden via een beveiligd formulier met:</p>
            <ul style="margin: 5px 0; padding-left: 20px;">
              <li>CAPTCHA-verificatie</li>
              <li>SSL/TLS-versleuteling</li>
              <li>IP-bescherming via beveiligd formulier</li>
            </ul>
            <p><strong>Browser/Device:</strong> ${userAgent}</p>
            <p><strong>Verwijzingsbron:</strong> ${referrer}</p>
            <p style="margin-top: 10px; font-style: italic; color: #888;">Dit bericht werd automatisch gegenereerd en bevat beveiligingsmetadata voor fraudepreventie.</p>
          </div>
        </div>
      `

      console.log("[v0] Calling /api/send-email...")

      // Call API route directly - this runs in Node.js runtime with DNS support
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "noreply@annastudio.nl",
          to: "annastrijbos11@gmail.com",
          subject: `Nieuw contactformulier bericht: ${formData.subject}`,
          html: htmlContent,
          replyTo: formData.email,
        }),
      })

      console.log("[v0] API response status:", response.status)

      const result = await response.json()
      console.log("[v0] API response body:", result)

      if (result.success) {
        console.log("[v0] Email sent successfully!")
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
        setIsSubmitted(true)
        setIsCaptchaValid(false)
        setTimeout(() => setIsSubmitted(false), 5000)
      } else {
        console.error("[v0] API returned error:", result.error)
        setSubmitError(
          result.error || "Er is een fout opgetreden bij het verzenden van je bericht. Probeer het later opnieuw.",
        )
      }
    } catch (error: any) {
      console.error("[v0] Form submission error:", error)
      setSubmitError("Er is een fout opgetreden bij het verzenden van je bericht. Probeer het later opnieuw.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className={`glass rounded-2xl shadow-soft border border-primary/10 ${!isFloating ? "p-8" : ""}`}>
      <form onSubmit={handleSubmit} className="space-y-6">
        {isSubmitted && (
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-green-800 dark:text-green-300">Bericht verzonden!</p>
                <p className="text-sm text-green-600 dark:text-green-400 mt-1">
                  Bedankt voor je bericht. Ik neem zo snel mogelijk contact met je op.
                </p>
              </div>
            </div>
          </div>
        )}

        {submitError && (
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400 shrink-0 mt-0.5" />
              <p className="text-sm text-red-800 dark:text-red-300">{submitError}</p>
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor={`name${isFloating ? "-floating" : ""}`}
              className="block text-sm font-semibold text-foreground mb-2"
            >
              Naam <span className="text-primary">*</span>
            </label>
            <input
              type="text"
              id={`name${isFloating ? "-floating" : ""}`}
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
              placeholder="Jouw naam"
              required
            />
          </div>

          <div>
            <label
              htmlFor={`email${isFloating ? "-floating" : ""}`}
              className="block text-sm font-semibold text-foreground mb-2"
            >
              Email <span className="text-primary">*</span>
            </label>
            <input
              type="email"
              id={`email${isFloating ? "-floating" : ""}`}
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
              placeholder="jouw@email.nl"
              required
            />
          </div>
        </div>

        <div>
          <label
            htmlFor={`subject${isFloating ? "-floating" : ""}`}
            className="block text-sm font-semibold text-foreground mb-2"
          >
            Onderwerp <span className="text-primary">*</span>
          </label>
          <select
            id={`subject${isFloating ? "-floating" : ""}`}
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
            required
          >
            <option value="">Selecteer een onderwerp</option>
            <option value="schrijfcursus">Schrijfcursus</option>
            <option value="manuscriptbeoordeling">Manuscriptbeoordeling</option>
            <option value="samenwerking">Samenwerking</option>
            <option value="anders">Anders</option>
          </select>
        </div>

        <div>
          <label
            htmlFor={`message${isFloating ? "-floating" : ""}`}
            className="block text-sm font-semibold text-foreground mb-2"
          >
            Bericht <span className="text-primary">*</span>
          </label>
          <textarea
            id={`message${isFloating ? "-floating" : ""}`}
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={isFloating ? 3 : 5}
            className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
            placeholder="Vertel me over jouw schrijfproject..."
            required
          ></textarea>
        </div>

        <SimpleCaptcha onValidationChange={handleCaptchaValidation} />

        {showCaptchaError && !isCaptchaValid && (
          <div className="text-sm text-red-600 dark:text-red-400">
            Vul alstublieft de juiste som in om door te gaan.
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="group w-full py-4 px-6 bg-primary text-primary-foreground rounded-xl font-semibold shadow-soft hover:shadow-lifted hover:bg-primary-hover disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <span className="animate-spin h-5 w-5 border-2 border-current border-t-transparent rounded-full" />
              Verzenden...
            </>
          ) : (
            <>
              Verstuur Bericht
              <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </button>
      </form>
    </div>
  )
}
