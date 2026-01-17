"use client"

import type React from "react"

import { useState } from "react"
import { BookOpen, FileText, Users, ArrowRight, CheckCircle, Sparkles } from "lucide-react"
import { Modal } from "./modal"
import { FloatingContact } from "./floating-contact"
import Link from "next/link"
import { useRouter } from "next/navigation"

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  price: string
  features: string[]
  cta: string
  ctaLink: string
  badge?: string
  featured?: boolean
  onClick?: () => void
}

function ServiceCard({
  icon,
  title,
  description,
  price,
  features,
  cta,
  ctaLink,
  badge,
  featured,
  onClick,
}: ServiceCardProps) {
  return (
    <div
      className={`group relative h-full transition-all duration-500 hover:-translate-y-2 ${featured ? "lg:scale-105" : ""
        }`}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

      <div
        className={`relative h-full flex flex-col glass rounded-2xl overflow-hidden shadow-soft hover:shadow-floating transition-all duration-300 ${featured ? "border-2 border-primary/30" : "border border-border"
          }`}
      >
        {/* Badge */}
        {badge && (
          <div className="absolute top-4 right-4 z-10">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold shadow-md">
              <Sparkles className="w-3 h-3" />
              {badge}
            </span>
          </div>
        )}

        {/* Icon Section */}
        <div
          className={`p-8 flex justify-center items-center ${featured ? "bg-gradient-to-br from-primary/20 to-accent/20" : "bg-gradient-to-br from-muted/50 to-muted/30"
            }`}
        >
          <div className="p-4 bg-background/80 backdrop-blur rounded-2xl shadow-md group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
        </div>

        {/* Content */}
        <div className="p-8 flex-grow flex flex-col">
          <h3 className="text-2xl font-serif font-bold text-foreground mb-3">{title}</h3>
          <p className="text-muted-foreground mb-4 flex-grow">{description}</p>

          <div className="mb-6">
            <p className="text-3xl font-bold text-primary mb-1">{price}</p>
          </div>

          {/* Features */}
          <ul className="space-y-3 mb-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="mt-auto">
            {onClick ? (
              <button
                onClick={onClick}
                className={`group/btn w-full py-4 px-6 inline-flex justify-center items-center gap-2 text-sm font-semibold rounded-xl transition-all duration-300 ${featured
                    ? "bg-primary text-primary-foreground hover:bg-primary-hover shadow-md hover:shadow-lg"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-md hover:shadow-lg"
                  }`}
              >
                {cta}
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            ) : (
              <Link
                href={ctaLink}
                className={`group/btn w-full py-4 px-6 inline-flex justify-center items-center gap-2 text-sm font-semibold rounded-xl transition-all duration-300 ${featured
                    ? "bg-primary text-primary-foreground hover:bg-primary-hover shadow-md hover:shadow-lg"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-md hover:shadow-lg"
                  }`}
              >
                {cta}
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export function Services() {
  const [showContactForm, setShowContactForm] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const router = useRouter()

  const handleManuscriptClick = () => {
    router.push("/manuscriptbeoordeling")
  }

  const handleEigenTrajectClick = () => {
    setShowContactForm(true)
  }

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Professionele Diensten</span>
          </div>

          <h2 className="fluid-h2 text-foreground mb-4">
            Kies de <span className="gradient-text">Perfecte Begeleiding</span>
          </h2>
          <p className="fluid-p text-muted-foreground">
            Van schrijfcursussen tot volledige manuscriptbegeleiding - professionele ondersteuning op elk niveau
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <ServiceCard
            icon={<BookOpen className="h-12 w-12 text-primary" />}
            title="Schrijfcursus"
            description="Ontwikkel je schrijfvaardigheid met een gestructureerde cursus vol professionele technieken en persoonlijke feedback."
            price="€109"
            features={[
              "Professionele schrijftechnieken",
              "Persoonlijke feedback per opdracht",
              "Stijl, structuur & storytelling",
              "Uitgebreid eindrapport",
              "Direct toepasbaar",
            ]}
            cta="Cursus Bekijken"
            ctaLink="https://schrijfcursussen.nu/product/ontdek-je-schrijftalent/"
          />

          <ServiceCard
            icon={<FileText className="h-12 w-12 text-primary" />}
            title="Manuscript-beoordeling"
            description="Laat je manuscript beoordelen door een professional. Van basis leesrapport tot complete eindredactie."
            price="Vanaf €8,95/1000 woorden"
            features={[
              "Professioneel leesrapport",
              "Structuur & stijlanalyse",
              "Spellingcontrole beschikbaar",
              "Persoonlijk beoordelingsgesprek",
              "Meerdere pakketten",
            ]}
            cta="Meer Informatie"
            ctaLink="/manuscriptbeoordeling"
            badge="POPULAIR"
            featured={true}
          />

          <ServiceCard
            icon={<Users className="h-12 w-12 text-primary" />}
            title="Eigen Traject"
            description="Persoonlijke schrijfbegeleiding volledig op maat. Van concept tot publicatieklaar manuscript."
            price="Op aanvraag"
            features={[
              "Volledig op maat gemaakt",
              "Continue persoonlijke begeleiding",
              "Meerdere revisierondes",
              "Publicatieadvies",
              "Exclusieve aandacht",
            ]}
            cta="Start Gesprek"
            ctaLink="#contact"
            onClick={handleEigenTrajectClick}
          />
        </div>

        {/* Trust bar */}
        <div className="mt-16 max-w-4xl mx-auto glass rounded-2xl p-8 shadow-soft">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold text-primary mb-1">100%</p>
              <p className="text-sm text-muted-foreground">Tevredenheidsgarantie</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary mb-1">24u</p>
              <p className="text-sm text-muted-foreground">Reactietijd</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary mb-1">5+</p>
              <p className="text-sm text-muted-foreground">Jaar Ervaring</p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for manuscriptbeoordeling */}
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={handleManuscriptClick}
        title="Belangrijk"
      >
        <p className="mb-4">
          Vergeet niet om <strong>"Anna Strijbos"</strong> te selecteren bij de vraag:
        </p>
        <p className="font-medium">"Welke redacteur (van het lijstje hierboven) heeft je voorkeur?"</p>
      </Modal>

      {/* Floating contact form */}
      {showContactForm && <FloatingContact />}
    </section>
  )
}
