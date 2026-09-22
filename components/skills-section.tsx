import { Card } from "@/components/ui/card"
import { Code2, Cpu, Users } from "lucide-react"

const skillCategories = [
  {
    title: "Programming & Tech",
    icon: Code2,
    skills: ["Computer Science Fundamentals", "IoT Systems", "Web-based Solutions"],
  },
  {
    title: "Tools & Platforms",
    icon: Cpu,
    skills: ["Microsoft Azure (AZ-900 Sandbox)", "Event Coordination Tools"],
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: ["Leadership", "Communication", "Team Collaboration", "Problem Solving"],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 bg-black">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">{">"} ls skills/</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <Card
                key={index}
                className="border-2 border-primary/30 bg-card hover:border-primary transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,0,0.3)] p-6 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="w-6 h-6 text-primary group-hover:animate-pulse" />
                  <h3 className="text-xl font-bold text-primary">{category.title}</h3>
                </div>
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-gray-300 flex items-start gap-2">
                      <span className="text-primary mt-1">{">"}</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
