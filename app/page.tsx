import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, MessageCircleMore } from "lucide-react"
import Link from "next/link"
import ProjectCard from "./components/project-card"
import ExperienceSection from "./components/experience-section"
import EducationSection from "./components/education-section"
import TechStack from "./components/tech-stack"
import { ThemeToggle } from "@/components/theme-toggle"

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
              <Link href="#tech-stack" className="transition-colors hover:text-foreground/80">
                Tech Stack
              </Link>
              <Link href="#education" className="transition-colors hover:text-foreground/80">
                Educación
              </Link>
              <Link href="#contact" className="transition-colors hover:text-foreground/80">
                Contacto
              </Link>
            </nav>
          </div>
          <div className="ml-auto flex items-center gap-2">
          <Button
            variant="outline"
            className="ml-auto bg-white text-black border-black hover:bg-black hover:text-white dark:bg-white dark:text-black dark:border-white dark:hover:bg-black dark:hover:text-white transition-colors"
          >
            <a
            href="/CV_AdrianEscobar_2025_SP.pdf"
            download="Adrian_Escobar_CV.pdf"
          >
            Descargar CV
          </a>
          </Button>
          <ThemeToggle />
          </div>
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
                <Link href="https://github.com/Adrianzzziny" target="_blank">
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
                image="/indecopi.png"
                githubLink="https://github.com/Adrianzzziny/MVP-Indecopi-Angular"
                liveLink="https://mvp-indecopi-angular-oair.vercel.app/home"
                tags={["Angular", "TypeScript", "CSS", "Figma"]}
                company="Cloud Computing Peru"
              />
              <ProjectCard
                title="Sistema de Autenticación - SUNASS"
                description="Módulo completo de gestión de usuarios con login, bandeja de usuarios, creación, reportes y edición con validaciones dinámicas para entidad pública."
                image="/Sunass.png"
                githubLink="https://github.com/Adrianzzziny/Dashboard-Sunass-IEVAP-Angular"
                inProcess={true}
                tags={["Angular", "TypeScript", "CSS", "Figma", "Postman", "MySQL"]}
                company="Cloud Computing Peru"
              />
              <ProjectCard
                title="Sistema de Pedidos para Restaurantes"
                description="Plataforma web de autoservicio y punto de venta con menús dinámicos, carrito de compras y flujo optimizado. Integración de IA para prototipos rápidos."
                image="/screenEstacionRoll.png"
                githubLink="https://github.com/Adrianzzziny/Estacion-Roll-FoodOrderApp"
                liveLink="https://estacion-roll-food-order-app.vercel.app/"
                tags={["React", "Next.js", "Tailwind CSS", "V0", "Stitch AI"]}
                company="Cloud Computing Peru"
              />

              <ProjectCard
                title="Sistema de Gestión Académica"
                description="Aplicación web para automatizar procesos académicos, reduciendo tiempos en un 70%. Interfaz moderna y responsive con enfoque en accesibilidad."
                image="/screenAcademica.png"
                inProcess={true}
                tags={["Vue JS", "TypeScript", "CSS" ,"Firebase"]}
                company="Cibertec Peru SAC"
              />
              <ProjectCard
                title="Sistema de Reservas de Laboratorios"
                description="Plataforma web que permite a estudiantes reservar espacios en laboratorios de cómputo con validaciones en tiempo real, control de cupos y panel administrativo."
                image="/screenReservaAulas.png"
                githubLink="https://github.com/Adrianzzziny/Sistema-de-Reservas-de-Laboratorios"
                liveLink="https://sistema-de-reservas-de-laboratorios.vercel.app/"
                tags={["React", "Firebase", "Tailwind CSS"]}
                company="Cibertec Peru SAC"
              />
              <ProjectCard
                title="Sistema de Horarios"
                description="Sistema que genera automáticamente horarios semanales de salones a partir de archivos Excel, simplificando la creación de horarios impresos para aulas."
                image="/screenSistemaHorarios.png"
                githubLink="https://github.com/Adrianzzziny/Sistema-de-Horarios-"
                tags={["HTML", "CSS", "Javascript", "Excel Integration"]}
                company="Cibertec Peru SAC"
              />

              <ProjectCard
                title="Refactorización de Componentes Web"
                description="Optimización y refactorización de componentes React con TypeScript. Mejora en mantenibilidad, performance e integración con APIs REST para la firma de abogados Rubio Leguia."
                image="/screenKruma2.png"
                githubLink="https://github.com/Adrianzzziny/Kruma-Rubio-Frontend"
                tags={["React", "TypeScript", "API REST", "Figma"]}
                company="Kruma"
              />

              <ProjectCard
                title="Proyecto Académico - Uva Morada"
                description="Aplicacion móvil desarrollada con React Native y TypeScript. Diseño moderno con animaciones, formularios para Inicio Sesion, Registro, Elección de objetivo nutricional"
                image="/screenUvamorada.png"
                githubLink="https://github.com/Adrianzzziny/Uva-Morada-React-Native"
                inProcess={true}
                tags={["React Native", "TypeScript", "CSS"]}
                company="Personal"
              />
            </div>
          </div>
        </section>

        <section id="tech-stack" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              Tech Stack
            </h2>
            <TechStack />
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
                <Link href="mailto:adri-escobar@hotmail.com" target="_blank" rel="noopener noreferrer" className="mr-2 w-auto ">
                  <Button
                    size="lg"
                    className="mt-8 bg-white text-black border-2 border-black hover:bg-black hover:text-white dark:bg-white dark:text-black dark:border-white dark:hover:bg-black dark:hover:text-white transition-colors"
                  >
                    <Mail className="mr-2 h-7 w-7" />
                    adri-escobar@hotmail.com
                  </Button>
                </Link>
                <Link href="https://wa.me/51907084383" target="_blank" rel="noopener noreferrer" className="ml-2 w-auto">
                  <Button
                    size="lg"
                    className="mt-8 bg-white text-black border-2 border-black hover:bg-black hover:text-white dark:bg-white dark:text-black dark:border-white dark:hover:bg-black dark:hover:text-white transition-colors"
                  >
                    <MessageCircleMore className="ml-2 mr-2 h-7 w-7" />
                    +51 907084383
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
        </div>
      </footer>
    </div>
  )
}
