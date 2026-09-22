import { Card } from "@/components/ui/card"
import { GraduationCap, BookOpen, Award } from "lucide-react"

const education = [
  {
    degree: "Bachelor of Technology in CSE",
    institution: "Gyan Ganga College of Technology (GGCT), Jabalpur (MP)",
    years: "SEP 2024 - JULY 2028",
    details: "Under RGPV University | Specialization in Computer Science",
    icon: GraduationCap,
  },
  {
    degree: "Class 12 - MP Board",
    institution: "Bal Vikas School, Rewa",
    years: "Completed",
    details: "Madhya Pradesh Board of Secondary Education (MPBSE) | 67%",
    icon: BookOpen,
  },
  {
    degree: "Class 10 - CBSE",
    institution: "Shravan Kumari School, Rewa",
    years: "Completed",
    details: "Central Board of Secondary Education | 57.8%",
    icon: Award,
  },
]

export function EducationSection() {
  return (
    <section id="education" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">{">"} cat education.log</h2>
        <div className="space-y-6">
          {education.map((edu, index) => {
            const Icon = edu.icon
            return (
              <Card
                key={index}
                className="border-2 border-primary/30 bg-card hover:border-primary transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,0,0.2)] p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 border-2 border-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-primary mb-1">{edu.degree}</h3>
                    <p className="text-gray-300 mb-1">{edu.institution}</p>
                    <div className="flex flex-col gap-1 text-sm">
                      <span className="text-primary">{edu.years}</span>
                      <span className="text-gray-400">{edu.details}</span>
                    </div>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
