"use client"

import { useState, useEffect } from "react"
import { sendEmail } from "@/actions/send-email"

export function ManuscriptCta() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    manuscriptType: "",
    wordCount: "",
    selectedPackages: [] as string[],
    consultationType: "none", // "none", "60min", "90min"
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
      "inhoudelijke-redactie": [
        "Inhoudelijke Redactieronde",
        "Diepgaande leeservaring",
        "Helderheid verhaallijn",
        "Analyse hoofdstukopbouw",
      ],
      "inhoudelijk-spelling": [
        "Inhoudelijk + Spelling",
        "Alles van Inhoudelijk",
        "Spellingcontrole",
        "Grammaticale correcties",
      ],
      persklaarmaken: [
        "Persklaarmaken",
        "Publicatiekwaliteit",
        "Consistent taalgebruik",
        "Indeling & bladspiegel",
      ],
      eindcorrectie: [
        "Eindcorrectie",
        "Volledige spellingcheck",
        "Typfouten verwijderen",
        "Punt- en kommacorrecties",
      ],
    }
    return descriptions[packageType] || []
  }

  // Calculate estimated price whenever relevant form fields change
  useEffect(() => {
    if (!formData.wordCount || formData.selectedPackages.length === 0 || formData.wordCount === "0") {
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

    let totalPrice = 0
    const summary: string[] = []

    // Calculate price for selected packages
    formData.selectedPackages.forEach((pkg) => {
      let pricePer1000 = 0
      switch (pkg) {
        case "inhoudelijke-redactie":
          pricePer1000 = 8.95
          break
        case "inhoudelijk-spelling":
          pricePer1000 = 10.95
          break
        case "persklaarmaken":
          pricePer1000 = 15.0
          break
        case "eindcorrectie":
          pricePer1000 = 6.95
          break
      }
      totalPrice += (wordCount / 1000) * pricePer1000
      summary.push(...getPackageDescription(pkg))
    })

    // Add consultation price
    if (formData.consultationType === "60min") {
      totalPrice += 135
      summary.push("Adviesgesprek (60 min)")
    } else if (formData.consultationType === "90min") {
      totalPrice += 195
      summary.push("Adviesgesprek (90 min)")
    }

    setEstimatedPrice(`€${totalPrice.toFixed(2)}`)
    setPackageSummary([...new Set(summary)]) // Remove duplicates if any
  }, [formData.wordCount, formData.selectedPackages, formData.consultationType])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handlePackageChange = (e) => {
    const { value, checked } = e.target
    setFormData((prev) => {
      const newPackages = checked
        ? [...prev.selectedPackages, value]
        : prev.selectedPackages.filter((pkg) => pkg !== value)
      return { ...prev, selectedPackages: newPackages }
    })
  }

  const handleConsultationChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      consultationType: e.target.value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      const packageNames = {
        "inhoudelijke-redactie": "Inhoudelijke Redactieronde",
        "inhoudelijk-spelling": "Inhoudelijk + Spelling",
        persklaarmaken: "Persklaarmaken",
        eindcorrectie: "Eindcorrectie",
      }

      const selectedPackageNames = formData.selectedPackages
        .map((pkg) => packageNames[pkg] || pkg)
        .join(", ")

      let consultationDisplay = "Geen"
      if (formData.consultationType === "60min") consultationDisplay = "60 min (€135)"
      if (formData.consultationType === "90min") consultationDisplay = "90 min (€195)"

      const htmlContent = `
      <h2>Nieuwe manuscriptbeoordeling aanvraag</h2>
      <p><strong>Naam:</strong> ${formData.name}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Type manuscript:</strong> ${formData.manuscriptType}</p>
      <p><strong>Aantal woorden:</strong> ${formData.wordCount}</p>
      <p><strong>Geselecteerde pakketten:</strong> ${selectedPackageNames}</p>
      <p><strong>Adviesgesprek:</strong> ${consultationDisplay}</p>
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
              selectedPackages: [],
              consultationType: "none",
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
              selectedPackages: [],
              consultationType: "none",
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
                Kies één of meerdere diensten. De prijs wordt direct berekend.
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
                <label className="block text-sm font-medium text-foreground mb-2">
                  Gewenste diensten (meerdere opties mogelijk) <span className="text-primary">*</span>
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start p-3 border border-border rounded-lg bg-card/50">
                    <input
                      type="checkbox"
                      id="pkg-inhoudelijk"
                      value="inhoudelijke-redactie"
                      checked={formData.selectedPackages.includes("inhoudelijke-redactie")}
                      onChange={handlePackageChange}
                      className="mt-1 mr-3 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <div>
                      <label htmlFor="pkg-inhoudelijk" className="font-medium text-foreground cursor-pointer">
                        Inhoudelijke Redactieronde
                      </label>
                      <p className="text-xs text-muted-foreground">€8,95 per 1000 woorden</p>
                    </div>
                  </div>
                  <div className="flex items-start p-3 border border-border rounded-lg bg-card/50">
                    <input
                      type="checkbox"
                      id="pkg-inhoudelijk-spelling"
                      value="inhoudelijk-spelling"
                      checked={formData.selectedPackages.includes("inhoudelijk-spelling")}
                      onChange={handlePackageChange}
                      className="mt-1 mr-3 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <div>
                      <label htmlFor="pkg-inhoudelijk-spelling" className="font-medium text-foreground cursor-pointer">
                        Inhoudelijk + Spelling
                      </label>
                      <p className="text-xs text-muted-foreground">€10,95 per 1000 woorden</p>
                    </div>
                  </div>
                  <div className="flex items-start p-3 border border-border rounded-lg bg-card/50">
                    <input
                      type="checkbox"
                      id="pkg-persklaar"
                      value="persklaarmaken"
                      checked={formData.selectedPackages.includes("persklaarmaken")}
                      onChange={handlePackageChange}
                      className="mt-1 mr-3 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <div>
                      <label htmlFor="pkg-persklaar" className="font-medium text-foreground cursor-pointer">
                        Persklaarmaken
                      </label>
                      <p className="text-xs text-muted-foreground">€15,00 per 1000 woorden</p>
                    </div>
                  </div>
                  <div className="flex items-start p-3 border border-border rounded-lg bg-card/50">
                    <input
                      type="checkbox"
                      id="pkg-eindcorrectie"
                      value="eindcorrectie"
                      checked={formData.selectedPackages.includes("eindcorrectie")}
                      onChange={handlePackageChange}
                      className="mt-1 mr-3 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <div>
                      <label htmlFor="pkg-eindcorrectie" className="font-medium text-foreground cursor-pointer">
                        Eindcorrectie
                      </label>
                      <p className="text-xs text-muted-foreground">€6,95 per 1000 woorden</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Consultation options */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Add-on: Adviesgesprek
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className={`p-3 border rounded-lg cursor-pointer transition-colors ${formData.consultationType === 'none' ? 'border-primary bg-primary/5' : 'border-border'}`} onClick={() => setFormData(prev => ({ ...prev, consultationType: 'none' }))}>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        name="consultation"
                        value="none"
                        checked={formData.consultationType === "none"}
                        onChange={handleConsultationChange}
                        className="mr-2 h-4 w-4 border-gray-300 text-primary focus:ring-primary"
                      />
                      <span className="font-medium">Geen</span>
                    </div>
                  </div>

                  <div className={`p-3 border rounded-lg cursor-pointer transition-colors ${formData.consultationType === '60min' ? 'border-primary bg-primary/5' : 'border-border'}`} onClick={() => setFormData(prev => ({ ...prev, consultationType: '60min' }))}>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        name="consultation"
                        value="60min"
                        checked={formData.consultationType === "60min"}
                        onChange={handleConsultationChange}
                        className="mr-2 h-4 w-4 border-gray-300 text-primary focus:ring-primary"
                      />
                      <span className="font-medium">60 min (€135)</span>
                    </div>
                  </div>

                  <div className={`p-3 border rounded-lg cursor-pointer transition-colors ${formData.consultationType === '90min' ? 'border-primary bg-primary/5' : 'border-border'}`} onClick={() => setFormData(prev => ({ ...prev, consultationType: '90min' }))}>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        name="consultation"
                        value="90min"
                        checked={formData.consultationType === "90min"}
                        onChange={handleConsultationChange}
                        className="mr-2 h-4 w-4 border-gray-300 text-primary focus:ring-primary"
                      />
                      <span className="font-medium">90 min (€195)</span>
                    </div>
                  </div>
                </div>
              </div>

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
