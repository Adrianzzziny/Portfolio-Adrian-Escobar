import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  githubLink?: string
  liveLink?: string
  tags: string[]
  company: string
}

export default function ProjectCard({
  title,
  description,
  image,
  githubLink,
  liveLink,
  tags,
  company,
}: ProjectCardProps) {
  const companyColors: Record<string, string> = {
    "Cloud Computing Peru": "bg-blue-500 hover:bg-blue-600",
    "Cibertec Peru SAC": "bg-green-500 hover:bg-green-600",
    Kruma: "bg-purple-500 hover:bg-purple-600",
    Personal: "bg-orange-500 hover:bg-orange-600",
  }

  return (
    <Card className="overflow-hidden flex flex-col h-full">
      <div className="relative aspect-video">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform hover:scale-105"
        />
        <div className="absolute top-2 right-2">
          <Badge className={`${companyColors[company]} text-white border-0`}>{company}</Badge>
        </div>
      </div>
      <CardContent className="p-4 flex-grow">
        <h3 className="font-semibold text-xl mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex flex-col gap-2">
        {githubLink && (
          <Link
            href={githubLink}
            target="_blank"
            className="inline-flex items-center gap-2 text-sm hover:underline w-full"
          >
            <Github className="h-4 w-4" />
            Ver en GitHub
          </Link>
        )}
        {liveLink && (
          <Link
            href={liveLink}
            target="_blank"
            className="inline-flex items-center gap-2 text-sm hover:underline w-full"
          >
            <ExternalLink className="h-4 w-4" />
            Ver Producto
          </Link>
        )}
      </CardFooter>
    </Card>
  )
}
