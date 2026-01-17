import { BookOpen, Edit3, Award } from "lucide-react"

export function UspSection() {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
              <BookOpen className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-medium text-foreground mb-2">Gepersonaliseerde cursussen</h3>
            <p className="text-muted-foreground">
              Cursussen op maat gemaakt voor jouw specifieke schrijfbehoeften en doelen.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
              <Edit3 className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-medium text-foreground mb-2">Professionele feedback</h3>
            <p className="text-muted-foreground">
              Gedetailleerde en constructieve feedback om je schrijfvaardigheid te verbeteren.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
              <Award className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-medium text-foreground mb-2">Erkende schrijfcoach</h3>
            <p className="text-muted-foreground">
              Begeleiding door een ervaren en erkende professional in het literaire veld.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
