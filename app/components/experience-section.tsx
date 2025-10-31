import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Building2, Building, University } from "lucide-react"

const experiences = [
  {

    company: "Cloud Computing Peru",
    position: "Frontend Developer",
    period: "Agosto 2025 - Actualidad",
    icon: Building2,
    description: [
      "Encargado del frontend completo de productos MVP para entidades públicas como INDECOPI y SUNASS, implementando interfaces modernas y funcionales con Angular.",
      "Desarrollo del sistema Mesa de Partes Virtual para INDECOPI, con formularios multipaso, persistencia de datos y diseño adaptable según cambios diarios del equipo UX/UI en Figma.",
      "Implementación del módulo de autenticación y gestión de usuarios para SUNASS, incluyendo login, bandeja de usuarios, pantallas de creación, reportes y edición con validaciones dinámicas.",
      "Diseño y desarrollo del frontend para web pedidos de restaurantes enfocadas en autoservicio y puntos de venta, implementando menús dinámicos y flujo de carrito de compras.",
    ],
    stack: ["React JS", "Next JS", "Angular", "TypeScript", "Tailwind CSS", "Figma", "Gitlab", "V0", "Supabase"],
  },
  {
    Key: "Frontend Developer",
    company: "Cibertec Peru SAC",
    position: "Frontend Developer Junior",
    period: "Julio 2024 – Julio 2025",
    icon: University,
    description: [
      "Implementación de aplicaciones web para automatizar procesos académicos y administrativos.",
      "Desarrollo de interfaces modernas y responsive mejorando la experiencia y accesibilidad para los usuarios.",
      "Reducción del 70% en tiempos académicos y administrativos mediante la digitalización y automatización del flujo.",
    ],
    stack: ["React JS", "TypeScript", "Tailwind CSS", "Firebase", "Design Thinking", "Miro", "Trello", "Notion"],
  },
  {
    Key: "Frontend Developer",
    company: "Kruma SAC",
    position: "Frontend Developer Junior",
    period: "Febrero 2024 - Julio 2024",
    icon: Building,
    description: [
      "Refactorización de componentes con React y TypeScript para mejorar mantenibilidad y optimización del performance.",
      "Integración con APIs REST y mejora en consistencia visual bajo lineamientos de diseño.",
      "Colaboración estrecha con diseñadores para ajustar prototipos en Figma.",
    ],
    stack: ["React JS", "TypeScript", "CSS", "API REST", "Figma"],
  },
]

export default function ExperienceSection() {
  return (
    <div className="space-y-6">
      {experiences.map((exp, index) => {
        const IconComponent = exp.icon
        return (
          <Card key={index} className="overflow-hidden">
            <CardHeader className="bg-muted/50 pb-3">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div className="flex-1 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-semibold">{exp.position}</h3>
                    <p className="text-sm text-muted-foreground">{exp.company}</p>
                  </div>
                  <p className="text-sm font-medium text-primary">{exp.period}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <ul className="space-y-2 mb-4">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-sm">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {exp.stack.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
