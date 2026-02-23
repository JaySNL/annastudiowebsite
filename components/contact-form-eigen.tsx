"use client"

import type React from "react"
import { useState } from "react"
import { SimpleCaptcha } from "./simple-captcha"
import { logContactMessage, formatEigenTrajectFormToHtml } from "@/actions/send-email"

declare global {
  interface Window {
    Email: any
  }
}

export function ContactFormEigen() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    helpWith: "",
    aboutYou: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isCaptchaValid, setIsCaptchaValid] = useState(false)
  const [showCaptchaError, setShowCaptchaError] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [showFallback, setShowFallback] = useState(false)

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
    setShowFallback(false)

    if (!isCaptchaValid) {
      setShowCaptchaError(true)
      return
    }

    setIsSubmitting(true)

    try {
      console.log("[v0] Form submission started")

      const privacyNote = `
Form Submission Details:
- Submitted: ${new Date().toISOString()}
- User Email: ${formData.email}
- User IP: [Tracked by backend]
- Privacy: This message is logged for record-keeping and forwarded to Anna's private email.`

      console.log("[v0] Logging contact message to database...")
      await logContactMessage({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: `Hulp bij: ${formData.helpWith}\n\nOver jezelf: ${formData.aboutYou}\n\n${formData.message ? `Aanvullende info: ${formData.message}` : ""}\n\n${privacyNote}`,
      })
      console.log("[v0] Contact message logged successfully")

      console.log("[v0] Formatting email HTML...")
      const formHtml = await formatEigenTrajectFormToHtml(formData)
      const timestamp = new Date().toLocaleString("nl-NL", { timeZone: "Europe/Amsterdam" })
      const htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333; line-height: 1.6;">
          <p>Beste ${formData.name},</p>
          <p>Bedankt voor je bericht! Dit is de bevestiging van je contactformulier. Ik neem zo snel mogelijk contact met je op om je schrijftraject te bespreken.</p>
          <br>
          <p>Met vriendelijke groet,<br><br>Anna<br>AnnaStudio.nl</p>
          <br>
          <hr style="border: none; border-top: 1px solid #ccc; margin: 20px 0;">
          <p><strong>Verzonden op ${timestamp} (CET/CEST):</strong></p>
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px;">
            ${formHtml}
          </div>
        </div>
      `
      console.log("[v0] HTML formatted successfully")

      console.log("[v0] Sending email via API route...")
      const emailResponse = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "noreply@annastudio.nl",
          to: formData.email,
          bcc: "info@annastudio.nl, annastrijbos11@gmail.com",
          subject: `Bevestiging Eigen Traject aanvraag: ${formData.subject}`,
          html: htmlContent,
          replyTo: "info@annastudio.nl",
        }),
      })

      console.log("[v0] API response status:", emailResponse.status)

      const emailData = await emailResponse.json()
      console.log("[v0] API response:", emailData)

      if (!emailResponse.ok) {
        throw new Error(emailData.error || "Email sending failed")
      }

      console.log("[v0] Email sent successfully!")
      setFormData({
        name: "",
        email: "",
        subject: "",
        helpWith: "",
        aboutYou: "",
        message: "",
      })
      setIsSubmitted(true)
      setIsCaptchaValid(false)

      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    } catch (error: any) {
      console.error("[v0] Form submission error:", error)
      setSubmitError("Er is een fout opgetreden bij het verzenden. Probeer het later opnieuw.")
      setShowFallback(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-card">
      <form onSubmit={handleSubmit}>
        {isSubmitted && (
          <div
            className="bg-green-100 border border-green-200 text-sm text-green-800 rounded-lg p-4 mb-6 dark:bg-green-900/30 dark:border-green-800 dark:text-green-300"
            role="alert"
          >
            <div className="flex">
              <div className="flex-shrink-0">
                <svg
                  className="flex-shrink-0 size-4 mt-0.5"
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
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <div className="ms-3">
                <p className="font-medium">
                  Bedankt voor je bericht! Ik neem zo snel mogelijk contact met je op om je schrijftraject te bespreken. Je ontvangt zometeen een bevestiging in je mailbox.
                </p>
              </div>
            </div>
          </div>
        )}

        {submitError && (
          <div
            className="bg-red-100 border border-red-200 text-sm text-red-800 rounded-lg p-4 mb-6 dark:bg-red-900/30 dark:border-red-800 dark:text-red-300"
            role="alert"
          >
            <div className="flex">
              <div className="flex-shrink-0">
                <svg
                  className="flex-shrink-0 size-4 mt-0.5"
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
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
              </div>
              <div className="ms-3">
                <p className="font-medium">{submitError}</p>
              </div>
            </div>
          </div>
        )}

        {showFallback && (
          <div className="bg-blue-50 border border-blue-200 text-sm text-blue-800 rounded-lg p-4 mb-6 dark:bg-blue-900/30 dark:border-blue-800 dark:text-blue-300">
            <h4 className="font-semibold mb-2">Alternatieve contactmethodes:</h4>
            <ul className="list-disc list-inside space-y-1">
              <li>
                Vul het{" "}
                <a href="/contact" className="underline font-medium hover:text-blue-600 dark:hover:text-blue-200">
                  algemene contactformulier
                </a>{" "}
                in
              </li>
              <li>Probeer het over een paar minuten opnieuw</li>
            </ul>
          </div>
        )}

        <div className="grid gap-y-4">
          {/* Name */}
          <div>
            <label htmlFor="name-eigen" className="block text-sm mb-2 font-medium text-card-foreground">
              Naam <span className="text-primary">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                id="name-eigen"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="py-3 px-4 block w-full border-border rounded-lg text-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none bg-card text-card-foreground"
                placeholder="Jouw naam"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email-eigen" className="block text-sm mb-2 font-medium text-card-foreground">
              Email <span className="text-primary">*</span>
            </label>
            <div className="relative">
              <input
                type="email"
                id="email-eigen"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="py-3 px-4 block w-full border-border rounded-lg text-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none bg-card text-card-foreground"
                placeholder="jouw@email.nl"
                required
              />
            </div>
          </div>

          {/* Help With */}
          <div>
            <label htmlFor="helpWith" className="block text-sm mb-2 font-medium text-card-foreground">
              Waar kan ik je bij helpen? <span className="text-primary">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                id="helpWith"
                name="helpWith"
                value={formData.helpWith}
                onChange={handleChange}
                className="py-3 px-4 block w-full border-border rounded-lg text-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none bg-card text-card-foreground"
                placeholder="Bijv. manuscript beoordelen, schrijfcoaching, etc."
                required
              />
            </div>
          </div>

          {/* About You */}
          <div>
            <label htmlFor="aboutYou" className="block text-sm mb-2 font-medium text-card-foreground">
              Vertel iets over jezelf en waar je aan werkt: <span className="text-primary">*</span>
            </label>
            <div className="relative">
              <textarea
                id="aboutYou"
                name="aboutYou"
                value={formData.aboutYou}
                onChange={handleChange}
                className="py-3 px-4 block w-full border-border rounded-lg text-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none bg-card text-card-foreground"
                rows={4}
                placeholder="Bijv. je schrijfervaring, het soort verhaal waar je aan werkt, je doelen, etc."
                required
              ></textarea>
            </div>
          </div>

          {/* Subject */}
          <div>
            <label htmlFor="subject-eigen" className="block text-sm mb-2 font-medium text-card-foreground">
              Onderwerp <span className="text-primary">*</span>
            </label>
            <div className="relative">
              <select
                id="subject-eigen"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="py-3 px-4 pe-9 block w-full border-border rounded-lg text-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none bg-card text-card-foreground"
                required
              >
                <option value="" disabled>
                  Selecteer een onderwerp
                </option>
                <option value="eigen-traject">Eigen Traject</option>
                <option value="schrijfcoaching">Schrijfcoaching</option>
                <option value="manuscriptbeoordeling">Manuscriptbeoordeling</option>
                <option value="anders">Anders</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message-eigen" className="block text-sm mb-2 font-medium text-card-foreground">
              Aanvullende informatie
            </label>
            <div className="relative">
              <textarea
                id="message-eigen"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="py-3 px-4 block w-full border-border rounded-lg text-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none bg-card text-card-foreground"
                rows={3}
                placeholder="Eventuele aanvullende informatie of vragen..."
              ></textarea>
            </div>
          </div>

          {/* Captcha */}
          <SimpleCaptcha onValidationChange={handleCaptchaValidation} />

          {showCaptchaError && !isCaptchaValid && (
            <div className="text-sm text-red-500 dark:text-red-400">
              Vul alstublieft de juiste som in om door te gaan.
            </div>
          )}

          <button
            type="submit"
            className={`w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:pointer-events-none ${isSubmitting ? "opacity-70" : ""}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span
                  className="animate-spin inline-block size-4 border-[3px] border-current border-t-transparent text-white rounded-full"
                  role="status"
                  aria-label="loading"
                ></span>
                Verzenden...
              </>
            ) : (
              "Verstuur Bericht"
            )}
          </button>
        </div>
      </form>
    </div>
  )
}
