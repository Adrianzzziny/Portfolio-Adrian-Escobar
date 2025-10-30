import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import ProjectCard from "./components/project-card"
import ExperienceSection from "./components/experience-section"
import EducationSection from "./components/education-section"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center px-4">
          <div className="mr-4 hidden md:flex">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <span className="hidden font-bold sm:inline-block">Adrian.dev</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#about" className="transition-colors hover:text-foreground/80">
                Acerca de
              </Link>
              <Link href="#experience" className="transition-colors hover:text-foreground/80">
                Experiencia
              </Link>
              <Link href="#projects" className="transition-colors hover:text-foreground/80">
                Proyectos
              </Link>
              <Link href="#education" className="transition-colors hover:text-foreground/80">
                Educación
              </Link>
              <Link href="#contact" className="transition-colors hover:text-foreground/80">
                Contacto
              </Link>
            </nav>
          </div>
          <Button
            variant="outline"
            className="ml-auto bg-white text-black border-black hover:bg-black hover:text-white dark:bg-white dark:text-black dark:border-white dark:hover:bg-black dark:hover:text-white transition-colors"
          >
            Descargar CV
          </Button>
        </div>
      </header>

      <main className="container px-4 md:px-6">
        <section id="about" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
                  Adrian Escobar Rodriguez
                </h1>
                <h2 className="text-xl font-semibold tracking-tighter sm:text-2xl md:text-3xl text-muted-foreground">
                  Frontend Developer
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Especializado en React JS, Next JS y TypeScript. Creando interfaces modernas, interactivas y
                  escalables con enfoque en la experiencia del usuario y soluciones visuales de alto impacto.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="https://www.linkedin.com/in/adrianescobarrodriguez" target="_blank">
                  <Button variant="outline" size="icon">
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link href="https://github.com" target="_blank">
                  <Button variant="outline" size="icon">
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link href="mailto:adri-escobar@hotmail.com">
                  <Button variant="outline" size="icon">
                    <Mail className="h-4 w-4" />
                    <span className="sr-only">Email</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              Experiencia Laboral
            </h2>
            <ExperienceSection />
          </div>
        </section>

        <section id="projects" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Proyectos</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="Mesa de Partes Virtual - INDECOPI"
                description="Sistema de gestión de trámites con formularios multipaso, persistencia de datos y diseño adaptable. Interfaz moderna implementada con Angular siguiendo diseños de Figma."
                image="/government-digital-platform-indecopi.jpg"
                githubLink="https://github.com"
                liveLink="https://example.com"
                tags={["Angular", "TypeScript", "Figma"]}
                company="Cloud Computing Peru"
              />
              <ProjectCard
                title="Sistema de Autenticación - SUNASS"
                description="Módulo completo de gestión de usuarios con login, bandeja de usuarios, creación, reportes y edición con validaciones dinámicas para entidad pública."
                image="/authentication-system-dashboard.jpg"
                githubLink="https://github.com"
                liveLink="https://example.com"
                tags={["Angular", "TypeScript", "Supabase"]}
                company="Cloud Computing Peru"
              />
              <ProjectCard
                title="Sistema de Pedidos para Restaurantes"
                description="Plataforma web de autoservicio y punto de venta con menús dinámicos, carrito de compras y flujo optimizado. Integración de IA para prototipos rápidos."
                image="/restaurant-ordering-system-pos.jpg"
                githubLink="https://github.com"
                liveLink="https://example.com"
                tags={["React", "Next.js", "Tailwind CSS", "V0"]}
                company="Cloud Computing Peru"
              />

              <ProjectCard
                title="Sistema de Gestión Académica"
                description="Aplicación web para automatizar procesos académicos, reduciendo tiempos en un 70%. Interfaz moderna y responsive con enfoque en accesibilidad."
                image="/academic-management-system-university.jpg"
                githubLink="https://github.com"
                liveLink="https://example.com"
                tags={["React", "TypeScript", "Firebase"]}
                company="Cibertec Peru SAC"
              />
              <ProjectCard
                title="Portal Administrativo Digital"
                description="Sistema de digitalización de flujos administrativos con reducción significativa de tiempos. Diseño centrado en el usuario con Design Thinking."
                image="/administrative-portal-dashboard.jpg"
                githubLink="https://github.com"
                liveLink="https://example.com"
                tags={["React", "TypeScript", "Tailwind CSS"]}
                company="Cibertec Peru SAC"
              />
              <ProjectCard
                title="Plataforma de Gestión Estudiantil"
                description="Herramienta integral para gestión de estudiantes con interfaces intuitivas y procesos automatizados. Mejora en experiencia de usuario y eficiencia operativa."
                image="/student-management-platform.jpg"
                githubLink="https://github.com"
                liveLink="https://example.com"
                tags={["React", "Firebase", "Tailwind CSS"]}
                company="Cibertec Peru SAC"
              />

              <ProjectCard
                title="Refactorización de Plataforma Web"
                description="Optimización y refactorización de componentes React con TypeScript. Mejora en mantenibilidad, performance e integración con APIs REST."
                image="/modern-web-platform-refactoring.jpg"
                githubLink="https://github.com"
                liveLink="https://example.com"
                tags={["React", "TypeScript", "API REST", "Figma"]}
                company="Kruma"
              />

              <ProjectCard
                title="Portfolio Personal Interactivo"
                description="Sitio web personal desarrollado con Next.js y TypeScript. Diseño moderno con animaciones, modo oscuro y formulario de contacto funcional."
                image="/modern-developer-portfolio-website.jpg"
                githubLink="https://github.com"
                liveLink="https://example.com"
                tags={["Next.js", "TypeScript", "Tailwind CSS"]}
                company="Personal"
              />
            </div>
          </div>
        </section>

        <section id="education" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Educación</h2>
            <EducationSection />
          </div>
        </section>

        <section id="contact" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-2xl text-center space-y-8">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ponte en Contacto</h2>
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                  Siempre estoy interesado en nuevas oportunidades, colaboraciones y proyectos desafiantes. No dudes en
                  contactarme si quieres trabajar juntos.
                </p>
                <Link href="mailto:adri-escobar@hotmail.com">
                  <Button
                    size="lg"
                    className="bg-white text-black border-2 border-black hover:bg-black hover:text-white dark:bg-white dark:text-black dark:border-white dark:hover:bg-black dark:hover:text-white transition-colors"
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    adri-escobar@hotmail.com
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © 2025 Adrian Escobar. Todos los derechos reservados.
          </p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Términos de Servicio
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Privacidad
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
