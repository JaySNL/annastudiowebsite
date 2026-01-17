"use client"

import { Sparkles, Mail, MapPin, Clock } from "lucide-react"
import { ContactForm } from "./contact-form"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Neem Contact Op</span>
            </div>

            <h2 className="fluid-h2 text-foreground mb-4">
              Klaar om te <span className="gradient-text">Beginnen</span>?
            </h2>
            <p className="fluid-p text-muted-foreground max-w-2xl mx-auto">
              Laat me weten hoe ik je kan helpen met jouw schrijfproject. Ik neem binnen 24 uur contact met je op.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              <div className="glass rounded-2xl p-6 shadow-soft hover:shadow-lifted transition-all duration-300 border border-primary/10">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Email</h3>
                    <p className="text-sm text-muted-foreground mb-1">noreply@annastudio.nl</p>
                    <p className="text-xs text-muted-foreground">Gebruik het contactformulier →</p>
                  </div>
                </div>
              </div>

              <div className="glass rounded-2xl p-6 shadow-soft hover:shadow-lifted transition-all duration-300 border border-primary/10">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Reactietijd</h3>
                    <p className="text-sm text-muted-foreground">Binnen 24 uur</p>
                  </div>
                </div>
              </div>

              <div className="glass rounded-2xl p-6 shadow-soft hover:shadow-lifted transition-all duration-300 border border-primary/10">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Locatie</h3>
                    <p className="text-sm text-muted-foreground">Nederland, Online Begeleiding</p>
                  </div>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="glass rounded-2xl p-6 shadow-soft border border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
                <div className="text-center space-y-3">
                  <div className="text-4xl">✨</div>
                  <h3 className="font-bold text-foreground">100% Tevredenheid</h3>
                  <p className="text-sm text-muted-foreground">Professionele begeleiding met persoonlijke aandacht</p>
                  <div className="flex justify-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-amber-400 text-lg">
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
