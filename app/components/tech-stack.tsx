import { Card } from "@/components/ui/card"

const technologies = [
  {
    category: "Frontend",
    skills: ["React JS", "Next.js", "Angular", "TypeScript", "Tailwind CSS", "Redux"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express JS", "Java", "Spring Boot", "Go"],
  },
  {
    category: "Bases de Datos",
    skills: ["PostgreSQL", "MySQL", "Supabase", "Firebase", "Sequelize ORM"],
  },
  {
    category: "Herramientas & Cloud",
    skills: ["Git", "Github", "Gitlab", "AWS", "Azure", "Google Cloud", "Figma", "Postman"],
  },
  {
    category: "Inteligencia Artificial",
    skills: ["IA Generativa", "Prompt Engineering"],
  },
  {
    category: "Capacidades",
    skills: ["Liderazgo", "Comunicación Efectiva", "Resolución de Problemas", "Autonomía", "Adaptabilidad"],
  },
]

export default function TechStack() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {technologies.map((tech) => (
        <Card key={tech.category} className="p-6">
          <h3 className="text-lg font-semibold mb-4">{tech.category}</h3>
          <div className="flex flex-wrap gap-2">
            {tech.skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20"
              >
                {skill}
              </span>
            ))}
          </div>
        </Card>
      ))}
    </div>
  )
}
