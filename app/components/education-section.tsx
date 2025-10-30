import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { GraduationCap, School, BookOpen, Code, Laptop } from "lucide-react"

const education = [
  {
    institution: "ISIL Escuela de Negocios",
    location: "Lima, Perú",
    program: "Tecnologías de la Información",
    period: "2025 - Actualidad",
    icon: School,
  },
  {
    institution: "Universidad Nacional de Ingeniería (UNI)",
    location: "Virtual, Lima, Perú",
    program: "PIT Cloud Computing",
    period: "2025",
    icon: GraduationCap,
  },
  {
    institution: "EdTech Digital House",
    location: "Virtual, Buenos Aires, Argentina",
    program: "Certified Tech Developer",
    period: "2024 - Actualidad",
    icon: Code,
  },
  {
    institution: "EdTech Soy Henry",
    location: "Virtual, Buenos Aires, Argentina",
    program: "Bootcamp FullStack Web Developer",
    period: "2022",
    icon: Laptop,
  },
  {
    institution: "Cibertec",
    location: "Lima, Perú",
    program: "Bachiller en Computación e Informática",
    period: "2020 - 2022",
    icon: BookOpen,
  },
]

export default function EducationSection() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {education.map((edu, index) => {
        const IconComponent = edu.icon
        return (
          <Card key={index} className="relative">
            <div className="absolute top-4 right-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <IconComponent className="w-5 h-5 text-primary" />
              </div>
            </div>
            <CardHeader className="pb-3 pr-16">
              <h3 className="text-lg font-semibold">{edu.program}</h3>
              <p className="text-sm text-muted-foreground">{edu.institution}</p>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm text-muted-foreground">{edu.location}</p>
              <p className="text-sm font-medium text-primary">{edu.period}</p>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
