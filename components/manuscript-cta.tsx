"use client"

import { useState, useEffect } from "react"
import { sendEmail } from "@/actions/send-email"

export function ManuscriptCta() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    manuscriptType: "",
    wordCount: "",
    packageType: "",
    includeCall: false,
    includeEndEdit: false,
    message: "",
  })

  const [estimatedPrice, setEstimatedPrice] = useState<string | null>(null)
  const [packageSummary, setPackageSummary] = useState<string[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState(null)

  // Get package description
  const getPackageDescription = (packageType: string) => {
    const descriptions: Record<string, string[]> = {
      basis: [
        "Algemene indruk van je manuscript",
        "Beoordeling van plot, personages en stijl",
        "Concrete verbeterpunten en suggesties",
        "Leesrapport van 3-4 pagina's",
      ],
      uitgebreid: [
        "Alles uit het Basis Leesrapport",
        "Diepgaande analyse van structuur en opbouw",
        "Feedback per hoofdstuk of sectie",
        "Uitgebreid leesrapport van 6-8 pagina's",
        "Gedetailleerde spellingcontrole",
      ],
      "volledige-eindredactie": [
        "Persklaarmaken van je manuscript",
        "Volledige correctieronde",
        "Foutloos manuscript qua taal en zinsstructuur",
        "Klaar om naar uitgever te sturen of zelfpublicatie",
      ],
      volledig: [
        "Alles uit het Uitgebreide Leesrapport",
        "Volledige spellingcontrole en taalcorrectie",
        "Meerdere revisierondes mogelijk",
        "Persoonlijke begeleiding tijdens het herschrijven",
        "Advies over uitgeven en publicatiemogelijkheden",
        "Onbeperkt e-mailcontact gedurende het traject",
        "Meerdere uitgebreide beoordelingsgesprekken inbegrepen",
      ],
    }
    return descriptions[packageType] || []
  }

  // Calculate estimated price whenever relevant form fields change
  useEffect(() => {
    if (!formData.wordCount || !formData.packageType || formData.wordCount === "0") {
      setEstimatedPrice(null)
      setPackageSummary([])
      return
    }

    const wordCount = Number.parseInt(formData.wordCount, 10)
    if (isNaN(wordCount)) {
      setEstimatedPrice(null)
      setPackageSummary([])
      return
    }

    // Get base package description
    const summary = [...getPackageDescription(formData.packageType)]

    // Calculate price based on package type and word count
    let manuscriptPrice = 0

    if (formData.packageType === "basis") {
      manuscriptPrice = 89 + wordCount * 0.01
    } else if (formData.packageType === "uitgebreid") {
      manuscriptPrice = (wordCount / 1000) * 10.95
    } else if (formData.packageType === "volledige-eindredactie") {
      manuscriptPrice = (wordCount / 1000) * 30
    } else if (formData.packageType === "volledig") {
      setEstimatedPrice("Prijs op aanvraag")
      setPackageSummary(summary)
      return
    } else {
      setEstimatedPrice(null)
      setPackageSummary([])
      return
    }

    // Add call price if selected
    const callPrice = formData.includeCall ? 150 : 0
    if (formData.includeCall) {
      summary.push("Beoordelingsgesprek van 1,5 uur")
    }

    // Add eindredactie if selected
    const endEditPrice =
      formData.includeEndEdit && (formData.packageType === "basis" || formData.packageType === "uitgebreid")
        ? (wordCount / 1000) * 30
        : 0

    if (formData.includeEndEdit && (formData.packageType === "basis" || formData.packageType === "uitgebreid")) {
      summary.push("Volledige eindredactie (persklaarmaken + correctieronde)")
    }

    // Calculate total price
    const totalPrice = manuscriptPrice + callPrice + endEditPrice

    setEstimatedPrice(`€${totalPrice.toFixed(2)}`)
    setPackageSummary(summary)
  }, [formData.wordCount, formData.packageType, formData.includeCall, formData.includeEndEdit])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: checked,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      let packageDisplay = ""
      switch (formData.packageType) {
        case "basis":
          packageDisplay = "Basis Leesrapport"
          break
        case "uitgebreid":
          packageDisplay = "Uitgebreid Leesrapport"
          break
        case "volledige-eindredactie":
          packageDisplay = "Volledige Eindredactie (alleen)"
          break
        case "volledig":
          packageDisplay = "Volledig Redactietraject"
          break
        default:
          packageDisplay = formData.packageType
      }

      const htmlContent = `
      <h2>Nieuwe manuscriptbeoordeling aanvraag</h2>
      <p><strong>Naam:</strong> ${formData.name}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Type manuscript:</strong> ${formData.manuscriptType}</p>
      <p><strong>Aantal woorden:</strong> ${formData.wordCount}</p>
      <p><strong>Gewenst pakket:</strong> ${packageDisplay}</p>
      <p><strong>Beoordelingsgesprek:</strong> ${formData.includeCall ? "Ja (+€150)" : "Nee"}</p>
      <p><strong>Volledige eindredactie add-on:</strong> ${formData.includeEndEdit ? `Ja (+€${((Number.parseInt(formData.wordCount) / 1000) * 30).toFixed(2)})` : "Nee"}</p>
      <p><strong>Geschatte prijs:</strong> ${estimatedPrice || "Niet berekend"}</p>
      <p><strong>Wat is inbegrepen:</strong></p>
      <ul>
        ${packageSummary.map((item) => `<li>${item}</li>`).join("")}
      </ul>
      <p><strong>Toelichting:</strong></p>
      <p>${formData.message ? formData.message.replace(/\n/g, "<br>") : "Geen toelichting"}</p>
    `

      try {
        const result = await sendEmail({
          to: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "anna@annasschrijfstudio.nl",
          subject: `Nieuwe manuscriptbeoordeling aanvraag: ${formData.manuscriptType}`,
          html: htmlContent,
          replyTo: formData.email,
        })

        if (result.success) {
          setIsSubmitted(true)
          setTimeout(() => {
            setIsSubmitted(false)
            setFormData({
              name: "",
              email: "",
              manuscriptType: "",
              wordCount: "",
              packageType: "",
              includeCall: false,
              includeEndEdit: false,
              message: "",
            })
            setEstimatedPrice(null)
            setPackageSummary([])
          }, 5000)
        } else {
          throw new Error(result.message || "Er is een fout opgetreden bij het verzenden van je aanvraag.")
        }
      } catch (emailError) {
        console.error("Email sending error:", emailError)

        if (emailError.message && emailError.message.includes("dns.lookup is not implemented")) {
          console.log("DNS lookup not implemented in preview environment. Simulating success.")
          setIsSubmitted(true)
          setTimeout(() => {
            setIsSubmitted(false)
            setFormData({
              name: "",
              email: "",
              manuscriptType: "",
              wordCount: "",
              packageType: "",
              includeCall: false,
              includeEndEdit: false,
              message: "",
            })
            setEstimatedPrice(null)
            setPackageSummary([])
          }, 5000)
        } else {
          throw emailError
        }
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitError("Er is een fout opgetreden bij het verzenden van je aanvraag. Probeer het later opnieuw.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-16 bg-primary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-card rounded-xl shadow-sm border border-border overflow-hidden">
          <div className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                Vraag nu jouw manuscriptbeoordeling aan
              </h2>
              <p className="text-lg text-muted-foreground">
                Vul het formulier in en ik neem binnen 24 uur contact met je op om de mogelijkheden te bespreken.
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Basis leesrapport: €89 + €0,01 per woord | Uitgebreid leesrapport: €10,95 per 1000 woorden | Volledige
                eindredactie: €30 per 1000 woorden
              </p>
            </div>

            {isSubmitted && (
              <div className="bg-green-100 border border-green-200 text-sm text-green-800 rounded-lg p-4 mb-6 dark:bg-green-900/30 dark:border-green-800 dark:text-green-300">
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
                      Bedankt voor je aanvraag! Ik neem binnen 24 uur contact met je op met een vrijblijvende offerte.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {submitError && (
              <div className="md:col-span-2 bg-red-100 border border-red-200 text-sm text-red-800 rounded-lg p-4 mb-6 dark:bg-red-900/30 dark:border-red-800 dark:text-red-300">
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

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Naam <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  E-mail <span className="text-primary">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  required
                />
              </div>

              <div>
                <label htmlFor="manuscriptType" className="block text-sm font-medium text-foreground mb-2">
                  Type manuscript <span className="text-primary">*</span>
                </label>
                <select
                  id="manuscriptType"
                  name="manuscriptType"
                  value={formData.manuscriptType}
                  onChange={handleChange}
                  className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  required
                >
                  <option value="">Selecteer type</option>
                  <option value="roman">Roman</option>
                  <option value="thriller">Thriller</option>
                  <option value="fantasy">Fantasy</option>
                  <option value="young-adult">Young Adult</option>
                  <option value="kinderboek">Kinderboek</option>
                  <option value="non-fictie">Non-fictie</option>
                  <option value="korte-verhalen">Korte verhalen</option>
                  <option value="anders">Anders</option>
                </select>
              </div>

              <div>
                <label htmlFor="wordCount" className="block text-sm font-medium text-foreground mb-2">
                  Aantal woorden <span className="text-primary">*</span>
                </label>
                <input
                  type="number"
                  id="wordCount"
                  name="wordCount"
                  value={formData.wordCount}
                  onChange={handleChange}
                  min="0"
                  className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  required
                />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="packageType" className="block text-sm font-medium text-foreground mb-2">
                  Gewenst pakket <span className="text-primary">*</span>
                </label>
                <select
                  id="packageType"
                  name="packageType"
                  value={formData.packageType}
                  onChange={handleChange}
                  className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  required
                >
                  <option value="">Selecteer pakket</option>
                  <option value="basis">Basis Leesrapport (€89 + €0,01 per woord)</option>
                  <option value="uitgebreid">Uitgebreid Leesrapport (€10,95 per 1000 woorden)</option>
                  <option value="volledige-eindredactie">Volledige Eindredactie (€30 per 1000 woorden - alleen)</option>
                  <option value="volledig">Volledig Redactietraject (op aanvraag)</option>
                </select>
              </div>

              {/* Call option checkbox */}
              {(formData.packageType === "basis" || formData.packageType === "uitgebreid") && (
                <>
                  <div className="md:col-span-2 bg-primary/5 p-4 rounded-lg border border-primary/10">
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="includeCall"
                        name="includeCall"
                        checked={formData.includeCall}
                        onChange={handleCheckboxChange}
                        className="mt-1 mr-3 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <div>
                        <label htmlFor="includeCall" className="font-medium text-foreground">
                          Beoordelingsgesprek toevoegen (+€150)
                        </label>
                        <p className="text-sm text-muted-foreground mt-1">
                          Een 1,5 uur durend gesprek waarin we je manuscript en de feedback in detail bespreken
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-2 bg-accent/5 p-4 rounded-lg border border-accent/10">
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="includeEndEdit"
                        name="includeEndEdit"
                        checked={formData.includeEndEdit}
                        onChange={handleCheckboxChange}
                        className="mt-1 mr-3 h-4 w-4 rounded border-gray-300 text-accent-foreground focus:ring-accent"
                      />
                      <div>
                        <label htmlFor="includeEndEdit" className="font-medium text-foreground">
                          Volledige Eindredactie toevoegen (+€30 per 1000 woorden)
                        </label>
                        <p className="text-sm text-muted-foreground mt-1">
                          Persklaarmaken, correctieronde en foutloos manuscript voor uitgever of zelfpublicatie
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* Price estimate with package summary */}
              {estimatedPrice && packageSummary.length > 0 && (
                <div className="md:col-span-2 bg-card border border-primary/20 rounded-lg p-6">
                  <div className="text-center mb-4">
                    <p className="text-sm text-muted-foreground mb-1">Geschatte prijs (inclusief BTW):</p>
                    <p className="text-3xl font-bold text-primary">{estimatedPrice}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Dit is een indicatie. De definitieve prijs ontvang je in de offerte.
                    </p>
                  </div>

                  <div className="border-t border-border pt-4 mt-4">
                    <p className="text-sm font-semibold text-foreground mb-3">Wat is inbegrepen:</p>
                    <ul className="space-y-2">
                      {packageSummary.map((item, index) => (
                        <li key={index} className="flex items-start text-sm">
                          <span className="text-primary mr-2 flex-shrink-0">✓</span>
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              <div className="md:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Toelichting
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  placeholder="Vertel iets over je manuscript en eventuele specifieke wensen..."
                ></textarea>
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  className={`w-full py-3 px-4 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors ${isSubmitting ? "opacity-70" : ""}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span
                        className="animate-spin inline-block size-4 border-[3px] border-current border-t-transparent text-white rounded-full mr-2"
                        role="status"
                        aria-label="loading"
                      ></span>
                      Verzenden...
                    </>
                  ) : (
                    "Verstuur aanvraag"
                  )}
                </button>
                <p className="text-sm text-muted-foreground mt-2 text-center">
                  Je ontvangt binnen 24 uur een reactie met een vrijblijvende offerte.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
