export function ManuscriptProcess() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Hoe werkt het?</h2>
          <p className="text-lg text-muted-foreground">
            Het proces van manuscriptbeoordeling is eenvoudig en transparant. Zo weet je precies wat je kunt verwachten.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              step: "1",
              title: "Contact & Offerte",
              description:
                "Neem contact op via het formulier. Vermeld het aantal woorden en je wensen. Je ontvangt binnen 24 uur een offerte.",
            },
            {
              step: "2",
              title: "Bevestiging & Planning",
              description:
                "Na akkoord op de offerte maken we concrete afspraken over de planning en lever je je manuscript aan.",
            },
            {
              step: "3",
              title: "Beoordeling",
              description:
                "Anna leest en beoordeelt je manuscript zorgvuldig en stelt een gedetailleerd leesrapport op met feedback.",
            },
            {
              step: "4",
              title: "Oplevering & Nabespreking",
              description:
                "Je ontvangt het leesrapport en bij de uitgebreide pakketten volgt een persoonlijk gesprek om de feedback door te nemen.",
            },
          ].map((item, index) => (
            <div key={index} className="relative">
              <div className="bg-card rounded-xl shadow-sm border border-border p-6 h-full">
                <div className="absolute -top-4 left-6 bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mt-4 mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
              {index < 3 && (
                <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-primary"
                  >
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto bg-primary/10 rounded-xl p-6 border border-primary/20">
          <h3 className="text-xl font-bold mb-4 text-center">Wat krijg je in een leesrapport?</h3>
          <ul className="space-y-3">
            {[
              "Analyse van plot, structuur en opbouw",
              "Beoordeling van personages en karakterontwikkeling",
              "Feedback op schrijfstijl, dialogen en beschrijvingen",
              "Evaluatie van tempo, spanningsboog en lezersbetrokkenheid",
              "Concrete verbeterpunten en suggesties",
              "Sterke punten van je manuscript",
              "Advies over vervolgstappen",
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
