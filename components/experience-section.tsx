import { Trophy, Users, Rocket, Globe, Lightbulb } from "lucide-react"

const experiences = [
  {
    title: "Winner 🏆",
    organization: "Illuminate Workshop – IIT Bombay",
    icon: Trophy,
    description:
      "Successfully completed the IIT Bombay Illuminate Entrepreneurship Workshop. Secured Winner position for exceptional problem-solving, pitching, and team collaboration.",
  },
  {
    title: "Group Discussion Participant",
    organization: "Gyan Ganga College of Technology",
    icon: Users,
    description:
      "Actively engaged in the inaugural Group Discussion of college life, demonstrating strong communication skills, confidence, and teamwork.",
  },
  {
    title: "TechQuest Organizer",
    organization: "Gyanotsav (College Annual Fest)",
    icon: Rocket,
    description:
      "Organized and co-managed TechQuest, a key technical event at Gyanotsav. Handled event planning, coordination, crowd management, and ensured seamless execution.",
  },
  {
    title: "NASA Space Apps Challenge",
    organization: "Volunteer",
    icon: Globe,
    description:
      "Volunteered at the NASA Space Apps Challenge event. Assisted participants, managed coordination tasks, and supported the technical workflow throughout the event.",
  },
  {
    title: "Active Member",
    organization: "Inspirex E-Cell (GGCT) - Entrepreneurship Cell",
    icon: Lightbulb,
    description:
      "Actively participated in the Entrepreneurship Cell, engaging in startup-oriented activities, innovation events, and initiatives aimed at developing entrepreneurial skills.",
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 bg-black">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">{">"} git log --experience</h2>
        <div className="relative border-l-2 border-primary/30 ml-4">
          {experiences.map((exp, index) => {
            const Icon = exp.icon
            return (
              <div key={index} className="mb-10 ml-8 relative">
                <div className="absolute -left-12 mt-1.5 w-8 h-8 bg-black border-2 border-primary rounded-full flex items-center justify-center neon-glow">
                  <Icon className="w-4 h-4 text-primary" />
                </div>
                <div className="border-2 border-primary/30 rounded-lg p-4 bg-card hover:border-primary transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,0,0.2)]">
                  <h3 className="text-lg font-bold text-primary mb-1">{exp.title}</h3>
                  <p className="text-gray-400 text-sm mb-2">{exp.organization}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{exp.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
