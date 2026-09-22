import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Predictive Maintenance System using IoT",
    description: "Smart monitoring & predictive analysis system for industrial equipment",
    tags: ["IoT", "Predictive Analysis", "Smart Systems"],
  },
  {
    title: "Crowdsourced Civic Issue Reporting & Resolution System",
    description: "Community-driven public issue platform for citizen engagement",
    tags: ["Web Development", "Community Platform", "Civic Tech"],
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">{">"} cd projects/</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="border-2 border-primary/30 bg-card hover:border-primary transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,0,0.3)] p-6 group"
            >
              <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-primary/80 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-xs px-3 py-1 bg-primary/10 text-primary border border-primary/30 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Button variant="ghost" size="sm" className="text-primary hover:text-primary hover:bg-primary/10">
                View Details <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
